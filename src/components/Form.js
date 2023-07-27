import {useState} from "react";
import { storage } from "../config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function Form(props){

    const [inputValue, setInputValue] = useState("");
    const [option, setOption] = useState("");
    const [imageUpload ,setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    async function uploadImage() {
        try {
            const imageRef = ref(storage, `${imageUpload.name}`);
            await uploadBytes(imageRef, imageUpload);

            const url = await getDownloadURL(imageRef);
            setImageUrl(url);

            props.handleClickQ(inputValue, url);
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    }



    function handleInputChange(e){
        setInputValue(e.target.value);
    }

    function handleSelectChange(e){
        setOption(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (inputValue.trim() !== "") {
            if(!props.state){
                if(imageUpload){
                    uploadImage().then(() => {
                        if(imageUrl){props.handleClickQ(inputValue, imageUrl, option);}
                    });
                }
                else{props.handleClickQ(inputValue, imageUrl, option);}}
            if(props.state){props.handleClickA(props.index, inputValue)}
            setInputValue("");
        }
        props.hideForm();
    }

    function clickOnExit(e){
        if(e.target === e.currentTarget){
            props.hideForm()
        }
    }
    return(
        <div className={"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  bg-black bg-opacity-80 w-full h-full"} onClick={clickOnExit}>
            <div className={"flex flex-col items-center justify-center p-8 w-screen md:w-[580px] h-fit rounded-2xl relative z-10 dark:bg-gray-800 bg-white left-0 right-0 mx-auto top-10 md:top-60 space-y-4 shadow-standard"}>
                <>
                    <label
                        htmlFor="message"
                        className="block mb-2 font-medium dark:text-white text-black text-3xl"
                    >
                        {props.state ? "Submit an answer":"Ask a question"}
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm dark:text-white text-black dark:bg-gray-800 bg-gray-50 rounded-lg border dark:border-gray-500 border-gray-300 focus:ring-blue-500  focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    {(!props.state && props.user) &&
                        <div>
                            <select onChange={handleSelectChange} className="block p-2.5 w-full text-sm dark:text-white text-black dark:bg-gray-800 bg-gray-50 rounded-lg border dark:border-gray-500 border-gray-300 focus:ring-blue-500  focus:border-blue-500">
                                <option value="">--Please choose a category--</option>
                                <option>Science and Technology</option>
                                <option>History and Culture</option>
                                <option>Arts and Entertainment</option>
                                <option>Society and Politics</option>
                                <option>Sports and Recreation</option>
                                <option>Health and Wellness</option>
                                <option>Geography and Travel</option>
                                <option>Philosophy and Religion</option>
                                <option>Miscellaneous</option>
                            </select>
                            <div className={"space-y-4"}>
                                <label className={"font-medium dark:text-gray-300 text-black text-xl"} >Upload image (helps grab attention)</label>
                                <input onChange={(e) => {setImageUpload(e.target.files[0])}} className={"className=\"block p-2.5 w-full text-sm dark:text-white text-black dark:bg-gray-800 bg-gray-50 rounded-lg border dark:border-gray-500 border-gray-300 focus:ring-blue-500  focus:border-blue-500"} type={"file"}></input>
                            </div>
                        </div>}
                </>
                <button className={"rounded-md p-2 px-4 shadow-standard dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100"} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
import {useState} from "react";

export default function Form(props){

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            if(!props.state){props.handleClickQ(inputValue);}
            if(props.state){props.handleClickA(props.index, inputValue)}
            setInputValue("");
        }
        props.hideForm();
    };

    function clickOnExit(e){
        if(e.target === e.currentTarget){
            props.hideForm()
        }
    }
    return(
        <div className={"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black bg-opacity-80 w-full h-full"} onClick={clickOnExit}>
            <div className={"flex flex-col items-center justify-center p-8 w-[580px] h-fit rounded-2xl relative z-10 bg-white left-0 right-0 mx-auto top-80 space-y-4 shadow-standard"}>
                <>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-black"
                    >
                        {props.state ? "Submit an answer":"Ask a question"}
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </>
                <button className={"p-2 px-4 shadow-standard"} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
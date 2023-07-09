import "./Card.css"
import {useState} from "react";
export default function Card(props) {
    const { question, answers, questionIndex, handleClick, createdBy, createdAt, url } = props;

    const date = new Date(createdAt);

    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const answerElements = answers.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    function addAnswer() {
        handleClick(questionIndex,);
    }
    const [isChecked, setIsChecked] = useState(false);
    const [ulStyle, setUlStyle] = useState({ maxHeight: null });


    function getTotalStringLength(arr) {
        let totalLength = 0;

        for (let i = 0; i < arr.length; i++) {
            totalLength += arr[i].length;
        }

        return totalLength;
    }


    const handleCheckboxChange = () => {
        setIsChecked(prevIsChecked => !prevIsChecked);

        setUlStyle(prevUlStyle => {
            if (!prevUlStyle.display) {
                return { display: 'block' };
            }
            return { display: null };
        });
    };

    return (
        <div className={"dark:bg-gray-800 bg-white p-8 w-[100svw] md:w-[580px] h-fit rounded-2xl shadow-standard"}>
            <p className={"dark:text-gray-400 text-xs"}>{createdBy} on {formattedDate}</p>
            <h1 className={"font-black dark:text-white text-2xl mb-4"}>{question}</h1>
            <img className={"max-h-[600px] w-[100svw] md:w-[580px] object-cover rounded-2xl shadow-nav mb-4"} src={url} alt={url}/>
            <ul id={"answers"} style={ulStyle} className={" list-disc space-y-4 dark:text-white"}>{answerElements}</ul>
            <button className={"rounded-md mt-3 p-2 px-3 shadow-standard dark:hover:bg-gray-700 hover:bg-gray-100 dark:text-white"} onClick={addAnswer}>Answer</button>
            {getTotalStringLength(answers) > 500 && <input id={"expand-btn"} checked={isChecked} onChange={handleCheckboxChange}
                                                           className={"dark:text-white rounded-md cursor-pointer ml-4 appearance-none mt-3 p-2 px-3 shadow-standard  dark:hover:bg-gray-700 hover:bg-gray-100"}
                                                           type={"checkbox"}/>}
        </div>
    );
}

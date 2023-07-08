import "./Card.css"
import {useState} from "react";
export default function Card(props) {
    const { question, answers, questionIndex, handleClick } = props;

    const answerElements = answers.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    function addAnswer() {
        handleClick(questionIndex,);
    }
    const [isChecked, setIsChecked] = useState(false);
    const [ulStyle, setUlStyle] = useState({ maxHeight: null });


    /*const handleCheckboxChange = () => {
        setIsChecked(prevIsChecked => !prevIsChecked);

        setUlStyle(prevUlStyle => {
            if (!prevUlStyle.maxHeight) {
                return { maxHeight: 'none' };
            }
            return { maxHeight: null };
        });
    };*/

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
            <h1 className={"font-black dark:text-white text-2xl mb-4"}>{question}</h1>
            <ul id={"answers"} style={ulStyle} className={" list-disc space-y-4 dark:text-white"}>{answerElements}</ul>
            <button className={"rounded-md mt-3 p-2 px-3 shadow-standard dark:hover:bg-gray-700 hover:bg-gray-100 dark:text-white"} onClick={addAnswer}>Answer</button>
            <input id={"expand-btn"} checked={isChecked} onChange={handleCheckboxChange}
                    className={"dark:text-white rounded-md cursor-pointer ml-4 appearance-none mt-3 p-2 px-3 shadow-standard dark:hover:bg-gray-700 hover:bg-gray-100"}
                    type={"checkbox"}/>
        </div>
    );
}

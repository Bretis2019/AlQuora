export default function Card(props) {
    const { question, answers, questionIndex, handleClick } = props;

    const answerElements = answers.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    function addAnswer() {
        handleClick(questionIndex,);
    }

    return (
        <div className={"bg-white p-8 w-[580px] h-fit rounded-2xl shadow-standard"}>
            <h1 className={"font-black text-2xl mb-4"}>{question}</h1>
            <ul className={"list-disc space-y-4"}>{answerElements}</ul>
            <button
                className={"mt-3 p-2 px-3 shadow-standard"}
                onClick={addAnswer}
            >
                Answer
            </button>
        </div>
    );
}

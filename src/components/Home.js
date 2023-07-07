import Card from "./Card";
import TopStories from "./TopStories";
export default function Home(props) {
    const { questions, handleClick } = props;

    const cardElements = questions
        .filter(item => {
            if (props.query.trim() !== '') {
                const queryLowerCase = props.query.toLowerCase();
                return (
                    item.header.toLowerCase().includes(queryLowerCase) ||
                    item.answers.some(answer => answer.toLowerCase().includes(queryLowerCase))
                );
            }
            return true;
        })
        .map((item, index) => (
            <Card
                key={index}
                question={item.header}
                answers={item.answers}
                handleClick={() => addAnswer(index)}
            />
        ));


    function addAnswer(questionIndex) {
        props.getIndex(questionIndex);
        handleClick(questionIndex,);
    }

    return (
        <div className={"pt-28 bg-gray-100 w-screen h-fit min-h-screen flex md:pl-[15%] py-16 gap-x-16"}>
            <div className={"flex flex-col gap-y-14"}>
                {cardElements}
            </div>
            <div className={"hidden md:block fixed left-[65%]"}>
                <TopStories />
            </div>
        </div>
    );
}

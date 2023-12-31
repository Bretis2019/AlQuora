import Card from "./Card";
import TopStories from "./TopStories";
import Categories from "./Categories";
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
        .map(item => (
            <Card
                key={item.id}
                question={item.header}
                answers={item.answers}
                createdBy={item.createdBy}
                createdAt={item.createdAt}
                url={item.url}
                handleClick={() => addAnswer(item.id)}
            />
        ));


    function addAnswer(questionIndex) {
        props.getIndex(questionIndex);
        handleClick(questionIndex,);
    }

    return (
        <div className={"pt-20 md:pt-28 bg-gray-100 dark:bg-gray-900 w-screen h-fit min-h-screen flex md:pl-[4%] py-16 gap-x-16"}>
            <div className={"hidden md:block fixed"}>
                <Categories handleChange={props.handleChange}/>
            </div>
            <div className={"flex flex-col md:pl-[20%] gap-y-8 md:gap-y-14"}>
                {cardElements}
            </div>
            <div className={"hidden md:block fixed left-[63%]"}>
                <TopStories news={props.news}/>
            </div>
        </div>
    );
}

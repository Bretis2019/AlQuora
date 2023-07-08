function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


export default function TopStories(props){

    const articles = props.news

    const randomItems = getRandomItems(articles, 5);

    function handleClick(link){
        window.location.href = link;
    }

    const itemElements = randomItems.map(item => (
        <li className={"cursor-pointer"} key={item._id} onClick={() => handleClick(item.link)}>{item.title}<br></br></li>
    ));

    return(
        <div className={"dark:bg-gray-800 bg-white p-4 w-[350px] h-fit rounded-2xl shadow-nav "}>
            <h1 className={"dark:text-white font-bold font-logo"}>Today's Top Stories</h1>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded " />
                <div className="absolute px-4 -translate-x-1/2 dark:bg-gray-800 bg-white left-1/2 ">
                    <svg className="w-4 h-4 dark:text-gray-100 text-gray-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14"><path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" /></svg>
                </div>
            </div>
            <ul className={"dark:text-white space-y-4"}>
                {itemElements}
            </ul>
        </div>
    );
}
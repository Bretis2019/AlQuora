export default function NotificationCard(props){
    return(
        <div className={"dark:bg-gray-800 w-full h-fit px-4 p-2 shadow-nav"}>
            <p className={"dark:text-gray-400 text-gray-700"}>{props.cause}</p>
            <p className={"dark:text-white font-bold text-2xl md:w-[350px] truncate"}>{props.post}</p>
        </div>
    )
}
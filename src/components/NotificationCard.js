export default function NotificationCard(props){
    const styles= {
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    }
    return(
        <div className={"w-full h-fit px-4 p-2"} style={styles}>
            <p className={"text-gray-700"}>{props.cause}</p>
            <p className={"font-bold text-2xl w-[350px] truncate"}>{props.post}</p>
        </div>
    )
}
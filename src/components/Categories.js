export default function Categories(props){
    return (
        <div className={"dark:bg-gray-800 bg-white p-4 px-8 w-fit h-fit rounded-2xl shadow-nav"}>
            <h1 className={"dark:text-white font-bold font-logo"}>Search by category</h1>
            <hr className="w-[350px] md:w-[200px] h-1 my-8 bg-gray-200 border-0 rounded" />
            <div className={"dark:text-white space-y-4 cursor-pointer"}>
                <div className={"hover:font-bold"} id={"Science and Technology"} onClick={event => props.handleChange(event.target.id)}>Science and Technology</div>
                <div className={"hover:font-bold"} id={"History and Culture"} onClick={event => props.handleChange(event.target.id)}>History and Culture</div>
                <div className={"hover:font-bold"} id={"Arts and Entertainment"} onClick={event => props.handleChange(event.target.id)}>Arts and Entertainment</div>
                <div className={"hover:font-bold"} id={"Society and Politics"} onClick={event => props.handleChange(event.target.id)}>Society and Politics</div>
                <div className={"hover:font-bold"} id={"Sports and Recreation"} onClick={event => props.handleChange(event.target.id)}>Sports and Recreation</div>
                <div className={"hover:font-bold"} id={"Health and Wellness"} onClick={event => props.handleChange(event.target.id)}>Health and Wellness</div>
                <div className={"hover:font-bold"} id={"Geography and Travel"} onClick={event => props.handleChange(event.target.id)}>Geography and Travel</div>
                <div className={"hover:font-bold"} id={"Philosophy and Religion"} onClick={event => props.handleChange(event.target.id)}>Philosophy and Religion</div>
                <div className={"hover:font-bold"} id={"Miscellaneous"} onClick={event => props.handleChange(event.target.id)}>Miscellaneous</div>
            </div>
        </div>
    )
}
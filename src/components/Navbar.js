import {Arrow} from "./Arrow";
export default function Navbar(props){
    const isSmallScreen = window.innerWidth <= 768;
    return(
        <div>
            <div className={"z-90 block fixed min-h-[60px] dark:bg-gray-900 bg-gray-100"}>
                <div className={"px-2 md:px-[15%] flex align-center justify-between w-screen min-h-[50px] dark:bg-gray-800  bg-white py-1 pt-2 shadow-nav"}>
                    <h1 name={"home"} onClick={() => {
                        props.pageChange("home");
                        props.handleChange("")
                    }} className={"w-4 md:w-fit text-red-500 text-3xl font-extrabold font-logo cursor-pointer"}>{isSmallScreen ? 'Q' : 'Quora'}</h1>
                    {props.user && <svg name={"notifications"} onClick={() => props.pageChange("notifications")} className={"cursor-pointer w-[40px] h-[40px]"}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ef4444" stroke="#ef4444"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="bell"> <g> <path d="M18.9,11.2s0-8.7-6.9-8.7-6.9,8.7-6.9,8.7v3.9L2.5,17.5h19l-2.6-2.4Z" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M14.5,20.5s-.5,1-2.5,1-2.5-1-2.5-1" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g> </g> </g></svg>}
                    {!props.user && <div name={"login"} onClick={() => props.pageChange("login")} className={"cursor-pointer block w-[2.5rem]"}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">{" "}<path d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M20 12L9 12M9 12L11.5 14.5M9 12L11.5 9.5" stroke="#ef4444" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />{" "}</g></svg></div>}
                    <input value={props.inputValue} onChange={e => props.handleChange(e.target.value)} className={"dark:bg-gray-800 dark:text-white rounded-md w-24 md:w-96 px-2 max-h-9 shadow-nav"} type={"text"} placeholder={"Search..."}/>
                    <button className={"w-4 md:w-fit rounded-2xl bg-red-500 text-white px-8 py-1 flex justify-center items-center gap-x-4"} onClick={props.handleClickShow}>
                        {isSmallScreen ? '+' : 'Add a question'}
                        {!isSmallScreen && <Arrow />}
                    </button>
                    {props.user && <button className={"h-[40px] w-4 md:w-fit rounded-2xl bg-red-500 text-white text-xs md:text-base px-8 py-1 flex justify-center items-center gap-x-4"} onClick={props.userSingOut}>Sign out</button>}
                </div>
            </div>
        </div>
    )
}
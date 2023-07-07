import {Arrow} from "./Arrow";
export default function Navbar(props){
    const isSmallScreen = window.innerWidth <= 768;
    return(
        <div>
            <div className={"z-40 block fixed min-h-[60px] bg-gray-100"}>
                <div className={"md:px-[15%] flex align-center justify-between w-screen min-h-[50px] bg-white py-1 pt-2 shadow-nav"}>
                    <h1 onClick={() => props.pageChange("home")} className={"w-4 md:w-fit text-red-500 text-3xl font-extrabold font-logo cursor-pointer"}>{isSmallScreen ? 'Q' : 'Quora'}</h1>
                    <svg name={"home"} onClick={() => props.pageChange("home")} className={"cursor-pointer"} width="40px" height="40px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ef4444" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.768"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z" fill="#ef4444"></path> </g></svg>
                    <svg name={"notifications"} onClick={() => props.pageChange("notifications")} className={"cursor-pointer"} width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ef4444" stroke="#ef4444"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="bell"> <g> <path d="M18.9,11.2s0-8.7-6.9-8.7-6.9,8.7-6.9,8.7v3.9L2.5,17.5h19l-2.6-2.4Z" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <path d="M14.5,20.5s-.5,1-2.5,1-2.5-1-2.5-1" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> </g> </g> </g> </g></svg>
                    <input  onChange={e => props.handleChange(e.target.value)} className={"rounded-md w-24 md:w-96 px-2 max-h-9 shadow-nav"} type={"text"} placeholder={"Search..."}/>
                    <div className={"hidden md:block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[2.5rem]"}></div>
                    <button className={"w-14 md:w-fit rounded-2xl bg-red-500 text-white px-8 py-1 flex justify-center items-center gap-x-4"} onClick={props.handleClickShow}>
                        {isSmallScreen ? 'Add' : 'Add a question'}
                        {!isSmallScreen && <Arrow />}
                    </button>
                </div>
            </div>
        </div>
    )
}
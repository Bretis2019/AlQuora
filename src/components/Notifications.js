import NotificationCard from "./NotificationCard";

export default function Notifications(){
    return(
        <div className={"pt-28 bg-gray-100 w-screen h-fit min-h-screen flex md:pl-[15%] py-16 gap-x-16"}>
            <div className={"bg-white p-4 w-screen md:w-[580px] h-fit rounded-2xl shadow-nav"}>
                <h1 className={"text-center text-2xl font-bold font-logo"}>Your Notifications</h1>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded " />
                </div>
                <div className={" space-y-2"}>
                    <NotificationCard cause={"A post that you interacted with got a new answer"} post={"On The Sopranos, was Richie Aprile correct when he said that if he killed Tony Soprano that everyone else would just fall into line and follow Uncle Junior and him or would everyone go to war with Junior over Tony's murder?"} />
                    <NotificationCard cause={"Your question got a new answer"} post={"In The Godfather, what would happen if one of the witnesses or waiters in the restaurant where Michael Corleone shot Sollozo and McClusky identified him and testified in court using his picture?"} />
                    <NotificationCard cause={"Your answer got a new comment"} post={"The novel wrote about Vito yelling at Sonny as a teenager. Clemenza had to report that Sonny and some of his friends committed a robbery. Vito was furious that Sonny risked his neck for a few dollars-he yelled what did you get out of it $20, $50?"}/>
                </div>
            </div>
        </div>
    )
}
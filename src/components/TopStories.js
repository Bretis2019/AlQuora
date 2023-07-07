export default function TopStories(){
    return(
        <div className={"bg-white p-4 w-[350px] h-fit rounded-2xl shadow-nav "}>
            <h1 className={"font-bold font-logo"}>Today's Top Stories</h1>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded " />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                    <svg
                            className="w-4 h-4 text-gray-700 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 14"
                    >
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <ul className={"space-y-4"}>
                <li>Spain dismantles network of migrant smugglers from Algeria.</li>
                <li>History Illustrated: Ghost of the Algerian war.</li>
                <li>Algeria's Tamgout cheese: A Swiss-inspired success story.</li>
            </ul>
        </div>
    );
}
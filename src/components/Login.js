import {useState} from "react";
import {auth, provider} from "../config";
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

export default function Login(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) =>{console.log(userCredentials)})
            .catch((error) =>{console.log(error)})
        props.pageChange("home")
    }
    function loginWithGoogle(){
        signInWithPopup(auth,provider)
            .then((userCredentials) =>{console.log(userCredentials)})
            .catch((error) =>{console.log(error)})
        props.pageChange("home")
    }

    return(
        <div className={"pt-28 md:pt-0 flex md:items-center justify-center bg-gray-100 dark:bg-gray-900 w-screen h-fit min-h-screen"}>
            <div className={"flex flex-col items-center dark:bg-gray-800 bg-white p-8 w-[100svw] md:w-[580px] h-fit rounded-2xl shadow-standard"}>
                <h1 className={"dark:text-white text-center text-2xl font-bold font-logo"}>Login</h1>
                <hr className="w-[350px] md:w-[500px] h-1 my-8 bg-gray-200 border-0 rounded" />
                <form className={"flex flex-col items-center"} onSubmit={login}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={"Email"} className={"mb-4 dark:bg-gray-800 dark:text-white rounded-md w-80 md:w-96 px-2 h-12 shadow-nav"} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder={"Password"} className={" mb-4 dark:bg-gray-800 dark:text-white rounded-md w-80 md:w-96 px-2 h-12 shadow-nav"} />
                    <button className={"w-fit rounded-md p-2 px-4 shadow-standard dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100"} type={"submit"}>Login</button>
                </form>
                <hr className="w-[350px] md:w-[200px] h-1 my-8 bg-gray-200 border-0 rounded" />
                <h1 name={"signup"} onClick={() => props.pageChange("signup")} className={"mb-4 cursor-pointer dark:text-gray-400 text-center text-s font-bold"}>Don't have an account? Sign up</h1>
                <button className={"w-fit rounded-md p-2 px-4 shadow-standard dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100"} onClick={loginWithGoogle}>
                    <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={"fill-black dark:fill-gray-200 stroke-black dark:stroke-gray-200"}><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">{" "}<title>google [#e5e7eb]</title> <desc>Created with Sketch.</desc>{" "}<defs> </defs>{" "}<g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">{" "}<g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" className={"fill-black dark:fill-gray-200"}>{" "}<g id="icons" transform="translate(56.000000, 160.000000)">{" "}<path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#e5e7eb]">{" "}</path>{" "}</g>{" "}</g>{" "}</g>{" "}</g></svg>
                </button>
            </div>
        </div>
    )
}
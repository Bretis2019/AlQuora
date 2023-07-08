import {useState} from "react";
import {auth} from "../config";
import {signInWithEmailAndPassword} from "firebase/auth"

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
                <h1 name={"signup"} onClick={() => props.pageChange("signup")} className={"cursor-pointer dark:text-gray-400 text-center text-s font-bold"}>Don't have an account? Sign up</h1>
            </div>
        </div>
    )
}
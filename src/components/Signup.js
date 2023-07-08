import {useState} from "react";
import {auth} from "../config";
import {createUserWithEmailAndPassword} from "firebase/auth"

export default function Signup(props){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function signup(event){
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return user.updateProfile({
                    displayName: name
                });
            })
            .catch((error) =>{console.log(error)})
        props.pageChange("home")
    }

    return(
        <div className={"pt-28 md:pt-0 flex md:items-center justify-center bg-gray-100 dark:bg-gray-900 w-screen h-fit min-h-screen"}>
            <div className={"flex flex-col items-center dark:bg-gray-800 bg-white p-8 w-[100svw] md:w-[580px] h-fit rounded-2xl shadow-standard"}>
                <h1 className={"dark:text-white text-center text-2xl font-bold font-logo"}>Sign up</h1>
                <hr className="w-[350px] md:w-[500px] h-1 my-8 bg-gray-200 border-0 rounded" />
                <form className={"flex flex-col items-center"} onSubmit={signup}>
                    <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} placeholder={"Name"} className={"mb-4 dark:bg-gray-800 dark:text-white rounded-md w-80 md:w-96 px-2 h-12 shadow-nav"} />
                    <input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"} className={"mb-4 dark:bg-gray-800 dark:text-white rounded-md w-80 md:w-96 px-2 h-12 shadow-nav"} />
                    <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Password"} className={"mb-4 dark:bg-gray-800 dark:text-white rounded-md w-80 md:w-96 px-2 h-12 shadow-nav"} />
                    <button className={"rounded-md p-2 px-4 shadow-standard dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100"} type={"submit"}>Sign up</button>
                </form>
                <hr className="w-[350px] md:w-[200px] h-1 my-8 bg-gray-200 border-0 rounded" />
                <h1 name={"login"} onClick={() => props.pageChange("login")} className={"cursor-pointer dark:text-gray-400 text-center text-s font-bold"}>Already have an account? Login</h1>
            </div>
        </div>
    )
}
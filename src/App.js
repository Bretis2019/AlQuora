import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import {useEffect, useState} from "react";
import {addDoc, doc, getDoc, onSnapshot, setDoc} from "firebase/firestore"
import {auth, db, questionCollection} from "./config";
import Login from "./components/Login";
import {onAuthStateChanged, signOut} from "firebase/auth"
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Signup from "./components/Signup";

export default function App() {
    const [questions, setQuestions] = useState([]);
    const [showForm ,setShowForm] = useState(false)
    const [formState ,setFormState] = useState(false) //false => question
    const [index, setIndex] = useState(0)
    const [page, setPage] = useState("home")
    const [query, setQuery] = useState("")
    const [authUser, setAuthUser] = useState(null)
    const [news, setNews] = useState([])

    useEffect(() => {
        return onSnapshot(questionCollection, function (snapshot) {
            // Sync up our local notes array with the snapshot data
            const questionsArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setQuestions(questionsArr)
        })
    }, [])

    useEffect(() =>{
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    },[])

    useEffect(() =>{
        const apiKey = 'woYgQZN5mcoJRFsdEL5CuvpJYqG-NLnaKbrVAgsSqy0';
        const url = 'https://api.newscatcherapi.com/v2/search?q="Algeria"&lang=en';
        const headers = {
            'x-api-key': apiKey
        };
        fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status code ' + response.status);
                }
            })
            .then(data => {
                // Handle the response data here
                setNews(data.articles)
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    },[])

    function userSignOut(){
        signOut(auth)
            .catch((error) =>{console.log(error)})
    }

    function getIndex(prop){
        setIndex(prop)
    }
    async function addQuestion(header){
        const newQuestion = { header, answers: [], createdAt: Date.now(), createdBy: authUser ? authUser.email: 'anonymous'};
        await addDoc(questionCollection, newQuestion)
    }

    async function addAnswer(questionIndex, answerText) {
        for (let i = 0; i < questions.length; i++) {
            const item = questions[i];
            if (item.id === questionIndex) {
                item.answers.push(answerText);
                const docRef = doc(db,"questions",item.id);
                const docSnapshot = await getDoc(docRef);
                const docData = docSnapshot.data();
                const updatedAnswers = [...docData.answers, answerText];
                await setDoc(docRef, { answers: updatedAnswers }, { merge: true });
                return
            }
        }
        return null
    }

    function DisplayFormQ(){
        setFormState(false)
        setShowForm(true)
    }
    function DisplayFormA(){
        setFormState(true)
        setShowForm(true)
    }

    function hideForm(){
        setShowForm(false)
    }

    function pageChange(x){
        setPage(x)
    }
    function handleChange(x){
        setQuery(x)
    }
    return (
        <div>
            {showForm && <Form index={index} state={formState} handleClickA={addAnswer} handleClickQ={addQuestion} hideForm={hideForm} displayForm={DisplayFormA}/>}
            <Navbar handleClickShow={DisplayFormQ} pageChange={pageChange} handleChange={handleChange} user={authUser} userSingOut={userSignOut}/>
            {page === "home" ? <Home news={news} query={query} questions={questions} handleClick={DisplayFormA} getIndex={getIndex}/> : page === "notifications" ? <Notifications /> : page==="login" ? <Login pageChange={pageChange}/> : <Signup pageChange={pageChange}/>}
        </div>
    )
}
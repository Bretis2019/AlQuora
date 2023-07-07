import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import {useEffect, useState} from "react";
import {data} from "./components/Data";
import Notifications from "./components/Notifications";

export default function App() {
    const [questions, setQuestions] = useState(data);
    const [showForm ,setShowForm] = useState(false)
    const [formState ,setFormState] = useState(false) //false => question
    const [index, setIndex] = useState(0)
    const [page, setPage] = useState("home")
    const [query, setQuery] = useState("")

    function getIndex(prop){
        setIndex(prop)
        console.log(index)
    }

    function addQuestion(header){
        const newQuestion = { header, answers: [] };
        setQuestions([...questions, newQuestion]);
    }

    function addAnswer(questionIndex, answerText) {
        const updatedQuestions = [...questions];
        const question = updatedQuestions[questionIndex];
        question.answers.push(answerText);
        setQuestions(updatedQuestions);
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
            <Navbar handleClickShow={DisplayFormQ} pageChange={pageChange} handleChange={handleChange}/>
            {page === "home" ? <Home query={query} questions={questions} handleClick={DisplayFormA} getIndex={getIndex}/> : <Notifications />}
        </div>
    )
}
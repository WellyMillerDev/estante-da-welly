import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export default function VotarAgora() {
    const { questionID } = useParams();


    const [getQuestions, setQuestions] = useState([])
    const [getContent, setContent] = useState({})

    const createQuestion = (qid, title, desc, questions) => {
        setQuestions((prev) => [...prev, {'id': qid, 'title':title, 'desc':desc, 'questions':questions}])
    }

    useEffect(() => {
        console.log(getQuestions)
    }, [getQuestions])

    useEffect(() => {
        createQuestion(getQuestions.length, "Test", "FODASE", ["SIM", "NAO"])
        
        const find_question = getQuestions.find(item => item.id === questionID)

        if (find_question) {
            console.log(getContent.title)

            setContent(find_question)
        }

    }, [])

   

    return (
        <>
        

        </>
    )
}
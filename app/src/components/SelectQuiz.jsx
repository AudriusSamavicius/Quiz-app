import React, {useState, useEffect} from 'react'
import axios from "axios"
import Quiz from './Quiz';

const SelectQuiz = () => {

    const [option, setOption] = useState("1");
    const [clicked, setClicked] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [questionsData, setQuestionsData] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    const fetchData = () => {
        axios.get("http://localhost:5000/api/")
        .then((response) => {
            setQuestions(response.data)
            setQuestionsData(response.data.slice(0,1))});

        
    };
    const setData = () => {
        setQuestionsData(questions.slice(0,option));
    };
    
    useEffect(() => {
        fetchData();

    },[]);
    

    return (
        <>
            {clicked === false ? (
                <form onSubmit={handleSubmit}>
                <label>Pasirinkite norimą klausimų kiekį
                    <br/>
                    <select value={option} onChange={(e) => setOption(e.target.value)}>
                        <option onClick={setData} value="1">1</option>
                        <option onClick={setData} value="3">3</option>
                        <option onClick={setData} value="5">5</option>
                    </select>
                </label>
                <input onClick={(e) => setClicked(true)} type="submit" value="Pasirinkti"/>
           </form>
            ) : (
                <Quiz questions={questionsData}/>
            )}
        </>
      
        
    )
}

export default SelectQuiz

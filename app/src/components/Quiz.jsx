import React, {useState} from 'react'
import SelectQuiz from "./SelectQuiz"


const Quiz = ({questions}) => {
       
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(false);
    const [answered, setAnswered] = useState(0);
    const [clicked, setClicked] = useState(false);


    const handleAnswerBtnClick = (isCorrect) => {
        if (isCorrect===true) {
            setAnswered(answered + 1);
        };
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {setScore(true);
        };
        
    };

    const resetQuiz = (e) => {
        e.preventDefault();
        setAnswered(0);
        setScore(false);
        setCurrentQuestion(0);
    };
   
    return (
        <div>
            {score ? (clicked === false ? (<>
                <div> Teisingai atsakėte į {answered} iš {questions.length} klausimų</div>
                <button onClick={resetQuiz}>Iš pradžių</button>
                <button onClick={() => setClicked(true)}>Rinktis naują klausimyną</button>
                </>
                
            ) : (<><SelectQuiz/></>) ) : (
                <div className="question-section">
                    <div className="question-number">{currentQuestion + 1} klausimas</div>
                    <div className="question-title">{questions[currentQuestion].questionText}</div>
                    <div className="quiz-answers">
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button key={currentQuestion.answerOption}
                            onClick={() => handleAnswerBtnClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz

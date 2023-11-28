import React, { useState, useEffect } from "react";

function QuizContainer({ question, rightAnswer, wrongAnswer, onAnswer }) {
    const [shuffledOptions, setShuffledOptions] = useState({});

    // Mischt die Antworten, wenn sich die Frage ändert
    useEffect(() => {
        const allAnswers = [rightAnswer, wrongAnswer];
        const shuffledIndex = Math.floor(Math.random() * allAnswers.length);
        const answer = allAnswers[shuffledIndex];
        const otherAnswer = allAnswers[1 - shuffledIndex];
        setShuffledOptions({ answer, otherAnswer });
    }, [rightAnswer, wrongAnswer]);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <h1 className="fw-bold text-center text-danger">Quiz</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <p className="fs-1 text-center">{question}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    onClick={() => onAnswer(shuffledOptions.answer)}
                    type="button"
                    className="btn btn-primary mx-1"
                >
                    {shuffledOptions.answer}
                </button>
                <button
                    onClick={() => onAnswer(shuffledOptions.otherAnswer)}
                    type="button"
                    className="btn btn-primary mx-1"
                >
                    {shuffledOptions.otherAnswer}
                </button>
            </div>
        </>
    );
}

export default QuizContainer;

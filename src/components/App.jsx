import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import quiz from "../quiz/quiz";
import QuizContainer from "./QuizContainer";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    useEffect(() => {
        // Feedback basierend auf Punktestand setzen
        if (points <= 2) setFeedbackMessage("Übe weiter!");
        else if (points === 5) setFeedbackMessage("Perfekt! Volle Punktzahl!");
        else setFeedbackMessage("Gut gemacht!");

        // Nach Abschluss des Quiz den Index und die Punkte zurücksetzen
        currentIndex === quiz.length &&
            setTimeout(() => {
                setCurrentIndex(0);
                setPoints(0);
            }, 5000);
    }, [points, currentIndex]);

    const handleAnswer = (answer) => {
        // Punkte erhöhen, wenn die Antwort korrekt ist
        quiz[currentIndex].rightAnswer === answer && setPoints(prevPoint => prevPoint + 1);
        // Zum nächsten Frageindex wechseln
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
                {currentIndex < quiz.length ? (
                    // Aktuelle Frage anzeigen
                    <QuizContainer
                        key={currentIndex}
                        question={quiz[currentIndex].question}
                        rightAnswer={quiz[currentIndex].rightAnswer}
                        wrongAnswer={quiz[currentIndex].wrongAnswer}
                        onAnswer={answer => handleAnswer(answer)}
                    />
                ) : (
                    // Quiz abgeschlossen anzeigen
                    <p className="alert alert-success">
                        {`Glückwunsch! Du hast das Quiz abgeschlossen. Du hast ${points} von 5 Fragen richtig beantwortet, ${feedbackMessage}`}
                    </p>
                )}
            </div>
        </div>
    );
}

export default App;

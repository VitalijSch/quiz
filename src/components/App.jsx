import React, { useState } from "react";
import QuizContainer from "./QuizContainer";

function App() {
    const quiz = [
        { question: "Welches Element wird verwendet, um eine geordnete Liste zu erstellen?", rightAnswer: "<ol>", wrongAnswer: "<ul>" },
        { question: "Welche Einheit wird in CSS verwendet, um die Breite eines Elements basierend auf der Breite des Anzeigebereichs des Viewports anzugeben?", rightAnswer: "vw", wrongAnswer: "px" },
        { question: "Welche Funktion wird verwendet, um eine Zeitverzögerung für die Ausführung eines Codes festzulegen?", rightAnswer: "setTimeout()", wrongAnswer: "waitTimeout()" },
        { question: "Welches Tag wird verwendet, um Text fett zu machen?", rightAnswer: "<b>", wrongAnswer: "<bold>" },
        { question: "Welche Eigenschaft wird verwendet, um den Abstand zwischen den inneren Rändern eines Elements und seinem Inhalt zu steuern?", rightAnswer: "padding", wrongAnswer: "margin" }
    ];

    const [point, setPoint] = useState(0);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [totalPoints, setTotalPoints] = useState(0);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const currentQuiz = quiz[currentNumber];

    function calculateQuizPoints(answer) {
        const pointOneMore = currentQuiz.rightAnswer === answer ? 1 : 0;
        const totalPoints = point + pointOneMore;
        return totalPoints;
    }

    function generateFeedbackMessage(answer) {
        const totalPoints = calculateQuizPoints(answer);
        setTotalPoints(totalPoints);

        if (totalPoints <= 2) {
            setFeedbackMessage("nächstes Mal wird es besser👍");
        } else if (totalPoints === 5) {
            setFeedbackMessage("super du hast alle Fragen richtig🙌");
        } else {
            setFeedbackMessage("nicht schlecht👏");
        }
    }

    function result(answer) {
        if (currentQuiz.rightAnswer === answer) {
            setPoint(point + 1);
        }

        if (currentNumber === 4) {
            setShowScore(true);

            generateFeedbackMessage(answer);

            setTimeout(() => {
                setPoint(0);
                setCurrentNumber(0);
                setShowScore(false);
                setTotalPoints(0);
            }, 5000);
        } else {
            setCurrentNumber(currentNumber + 1);
        }
    }

    return (
        <div className="container row h-100 d-flex align-items-center justify-content-center">
            {showScore && <div className="alert alert-success mt-5 text-center col-6">{`Du hast ${totalPoints} Fragen von 5 richtig beantwortet, ${feedbackMessage}`}</div>}
            <QuizContainer
                question={currentQuiz.question}
                rightAnswer={currentQuiz.rightAnswer}
                wrongAnswer={currentQuiz.wrongAnswer}
                currentNumber={currentNumber}
                result={result}
            />
        </div>
    );
}

export default App;
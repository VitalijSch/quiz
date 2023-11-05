import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function QuizContainer(props) {
    const { currentNumber, question, rightAnswer, wrongAnswer, result } = props;

    const isCurrentNumberEven = currentNumber % 2 === 0;

    const handleClickButton1 = () => {
        isCurrentNumberEven ? result(rightAnswer) : result(wrongAnswer);
    };

    const handleClickButton2 = () => {
        isCurrentNumberEven ? result(wrongAnswer) : result(rightAnswer);
    };

    return (
        <div className="text-secondary px-4 py-5 text-center d-flex align-items-center justify-content-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Quiz</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-1 mb-4">{question}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bol" onClick={handleClickButton1}>
                            {isCurrentNumberEven ? props.rightAnswer : props.wrongAnswer}
                        </button>
                        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bol" onClick={handleClickButton2}>
                            {isCurrentNumberEven ? props.wrongAnswer : props.rightAnswer}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizContainer;
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ButtonAnswers = ({ answers, onClick, correct }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setButtonDisabled(false);
    }, [answers]);

    const handleButtonClick = (answer) => {
        setSelectedAnswer(answer);
        setButtonDisabled(true);
        onClick(answer);
    };

    return (
        answers.map((answer) => {
            let buttonVariant = "outline-light";
            if (answer === selectedAnswer) {
                buttonVariant = answer === correct ? "success" : "danger";
            }

            return (
                <Button
                    key={answer}
                    className="m-3"
                    variant={buttonVariant}
                    onClick={() => handleButtonClick(answer)}
                    disabled={buttonDisabled}
                >
                    {answer}
                </Button>
            );
        })
    );
};

export default ButtonAnswers;

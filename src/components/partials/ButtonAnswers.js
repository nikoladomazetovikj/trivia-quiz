import {Button} from "react-bootstrap";

const ButtonAnswers = ({answers, onClick}) => {
    return (
        answers.map((answer) => (
            <Button className='m-3' variant="outline-light" onClick={() => onClick()}>{answer}</Button>
        ))
    );
}

export default ButtonAnswers;
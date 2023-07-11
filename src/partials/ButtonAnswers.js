import {Button} from "react-bootstrap";

const ButtonAnswers = ({answers}) => {
    return (
        answers.map((answer) => (
            <Button className='m-3' variant="outline-light">{answer}</Button>
        ))
    );
}

export default ButtonAnswers;
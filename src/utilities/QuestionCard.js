import {Card, Col, Container, Row} from "react-bootstrap";
import {toUpperCase} from "../helpers/toUpperCase";
import ButtonAnswers from "../components/partials/ButtonAnswers";
import {useEffect, useReducer} from "react";
import questionCountReducer from "./questionCountReducer";
import {decodeHTML} from "../helpers/decodeHTML";

const QuestionCard = ({quiz}) => {

    const initialState = {
        currentQuestionIndex: 0
    };

    const [state, dispatch] = useReducer(questionCountReducer, initialState);
    const currentQuestion = quiz[state.currentQuestionIndex];

    let arr = [currentQuestion.correct_answer].concat(currentQuestion.incorrect_answers);
    arr.sort(function () {
        return Math.random() - 0.5;
    });

    useEffect(() => {
        if (state.currentQuestionIndex >= quiz.length) {
            // TODO: handle end
            console.log('End of quiz');
        }
    }, [state.currentQuestionIndex, quiz]);

    const handleNextQuestion = () => {
        console.log('in')
        dispatch({ type: 'NEXT_QUESTION' });
    };

    return (
        <Container>
            <Card>
                <Card.Header as="h5" className="text-center">
                    Category: {quiz[0].category}
                </Card.Header>
                <Card.Body className='text-center'>
                    <Row>
                        <Col>
                            <p dangerouslySetInnerHTML={{ __html: decodeHTML(currentQuestion.question) }}></p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <ButtonAnswers answers={arr} onClick={handleNextQuestion} />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                   <Row>
                       <Col>
                           Difficulty: {toUpperCase(quiz[0].difficulty)}
                       </Col>
                       <Col className='text-end'>
                           0/0
                       </Col>
                   </Row>
                </Card.Footer>
            </Card>
        </Container>
    );
}


export default QuestionCard;
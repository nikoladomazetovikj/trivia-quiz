import {Card, Col, Container, Row} from "react-bootstrap";
import {toUpperCase} from "../helpers/toUpperCase";
import ButtonAnswers from "../components/partials/ButtonAnswers";
import {useEffect, useReducer, useState} from "react";
import questionCountReducer from "./questionCountReducer";
import {decodeHTML} from "../helpers/decodeHTML";
import ScoreBoard from "../components/ScoreBoard";

const QuestionCard = ({quiz}) => {
    const initialState = {
        currentQuestionIndex: 0
    };

    const [state, dispatch] = useReducer(questionCountReducer, initialState);
    const currentQuestion = quiz[state.currentQuestionIndex];
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);

    let arr = [currentQuestion.correct_answer].concat(currentQuestion.incorrect_answers);
    arr.sort(function () {
        return Math.random() - 0.5;
    });

    useEffect(() => {
        if (state.currentQuestionIndex >= quiz.length) {
            setQuizEnded(true);
        }
    }, [state.currentQuestionIndex, quiz]);

    const handleNextQuestion = (answer) => {

        if (answer === currentQuestion.correct_answer) {
            setScore(score + 1 );
        }
        dispatch({ type: 'NEXT_QUESTION' });
    };

    const totalQuestions = quiz.length;

    return (
        <Container>
            {quizEnded ? (
                <ScoreBoard score={score} totalQuestions={totalQuestions} />
            ) : (
                <Card>
                    <Card.Header as="h5" className="text-center">
                        Category: {currentQuestion.category}
                    </Card.Header>
                    <Card.Body className="text-center">
                        <Row>
                            <Col>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: decodeHTML(currentQuestion.question),
                                    }}
                                ></p>
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
                                Difficulty: {toUpperCase(currentQuestion.difficulty)}
                            </Col>
                            <Col className="text-end">
                                {state.currentQuestionIndex + 1} / {totalQuestions}
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            )}
        </Container>
    );
}


export default QuestionCard;
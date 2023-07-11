import {Card, Col, Container, Row} from "react-bootstrap";
import {toUpperCase} from "../helpers/toUpperCase";
import ButtonAnswers from "../partials/ButtonAnswers";

const QuestionCard = ({quiz}) => {

    let arr = [quiz[0].correct_answer].concat(quiz[0].incorrect_answers);
    arr.sort(function() {
        return Math.random() - 0.5;
    });

    return (
        <Container>
            <Card>
                <Card.Header as="h5" className="text-center">
                    Category: {quiz[0].category}
                </Card.Header>
                <Card.Body className='text-center'>
                    <Row>
                        <Col>
                            <p>{quiz[0].question}</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <ButtonAnswers answers={arr} />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className='text-center'>
                   Difficulty: {toUpperCase(quiz[0].difficulty)}
                </Card.Footer>
            </Card>
        </Container>
    );
}


export default QuestionCard;
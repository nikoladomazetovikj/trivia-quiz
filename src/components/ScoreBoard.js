import {Alert, Button, Col, Row} from "react-bootstrap";

const ScoreBoard = ({score, totalQuestions}) => {

    let color;
    if (score < 3) {
        color = 'danger';
    } else if (score >= 3 && score < 7) {
        color = 'warning';
    } else if (score >= 7) {
        color = 'success';
    }

    return (
        <>
            <Row>
                <Col className='text-center'>
                    <Alert  variant={color}>
                        <Alert.Heading>Your Score</Alert.Heading>
                        <p>
                            {score} / {totalQuestions}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button variant={"outline-" + color}>
                                Start Again
                            </Button>
                        </div>
                    </Alert>

                </Col>
            </Row>
        </>
    );
}


export default ScoreBoard;
import {Alert, Button, Col, Row} from "react-bootstrap";

const ScoreBoard = ({score, totalQuestions}) => {
    return (
        <>
            <Row>
                <Col className='text-center'>
                    <Alert  variant="success">
                        <Alert.Heading>Your Score</Alert.Heading>
                        <p>
                            {score} / {totalQuestions}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button  variant="outline-success">
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
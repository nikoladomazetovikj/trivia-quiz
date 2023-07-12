import {Alert, Button, Col, Row} from "react-bootstrap";

const ScoreBoard = ({score, totalQuestions}) => {

    let color;

    if (totalQuestions === 10) {
        if (score < 3) {
            color = 'danger';
        } else if (score < 7) {
            color = 'warning';
        } else {
            color = 'success';
        }
    } else if (totalQuestions === 15) {
        if (score < 5) {
            color = 'danger';
        } else if (score < 10) {
            color = 'warning';
        } else {
            color = 'success';
        }
    } else if (totalQuestions === 20) {
        if (score < 7) {
            color = 'danger';
        } else if (score < 15) {
            color = 'warning';
        } else {
            color = 'success';
        }
    }

    const handleReload = () => {
        window.location.reload();
    };

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
                            <Button variant={"outline-" + color} onClick={handleReload}>
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
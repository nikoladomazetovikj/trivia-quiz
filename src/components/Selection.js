import {Button, Card, Container, Row} from "react-bootstrap";

const Selection = ({children, buttonState}) => {
    return <Container>
        <Row>
            <Card>
                <Card.Header as="h5" className='text-center'>Select Questions</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {children}
                    </Card.Text>
                    <Button variant="primary" disabled={buttonState}>Start</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
};

export default Selection;
import {Button, Card, Container, Row} from "react-bootstrap";

const Selection = ({children, buttonState}) => {
    return (
        <Container>
            <Card>
                <Card.Header as="h5" className="text-center">
                    Select Questions
                </Card.Header>
                <Card.Body>{children}</Card.Body>
                <Card.Footer>
                    <Button variant="primary" disabled={buttonState}>
                        Start
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default Selection;
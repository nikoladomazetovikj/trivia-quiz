import {Button, Card, Container, Row} from "react-bootstrap";
import FormCategory from "../partials/FormCategory";

const Selection = () => {
    return <Container>
        <Row>
            <Card>
                <Card.Header as="h5" className='text-center'>Select Questions</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <FormCategory/>
                    </Card.Text>
                    <Button variant="primary">Start</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
};

export default Selection;
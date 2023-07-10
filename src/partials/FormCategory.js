import {Col, Form, Row} from "react-bootstrap";

const FormCategory = ({props}) => {
    return  <Form>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categories</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
            </Form.Select>
        </Form.Group>
    </Form>
};


export default FormCategory;
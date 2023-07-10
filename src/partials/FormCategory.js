import {Col, Form, Row} from "react-bootstrap";
import CategoryList from "../utilities/CategoryList";

const FormCategory = ({props}) => {
    return  <Form>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categories</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option key='default'>Choose...</option>
                <CategoryList/>
            </Form.Select>
        </Form.Group>
    </Form>
};


export default FormCategory;
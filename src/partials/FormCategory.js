import {Col, Form, Row} from "react-bootstrap";
import CategoryList from "../utilities/CategoryList";
import QuestionNumberList from "../utilities/QuestionNumberList";
import DifficultyList from "../utilities/DifficultyList";

const FormCategory = ({props}) => {
    return  <Form>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categories</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option key='anyCategory'>Choose...</option>
                <CategoryList/>
            </Form.Select>
            <Form.Label  className='my-3'>Questions</Form.Label>
            <Form.Select defaultValue="Choose...">
                <QuestionNumberList/>
            </Form.Select>
            <Form.Label  className='my-3'>Difficulty</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option key='anyDifficulty'>Choose...</option>
                <DifficultyList/>
            </Form.Select>
        </Form.Group>
    </Form>
};


export default FormCategory;
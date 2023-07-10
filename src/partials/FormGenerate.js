import {Col, Form, Row} from "react-bootstrap";
import CategoryList from "../utilities/CategoryList";
import QuestionNumberList from "../utilities/QuestionNumberList";
import DifficultyList from "../utilities/DifficultyList";

const FormGenerate = ({onSelectCategory,onSelectDifficulty,onSelectQuestion}) => {
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        onSelectCategory(selectedCategory);
    };

    const handleQuestionChange = (event) => {
        const selectedQuestion = event.target.value;
        onSelectQuestion(selectedQuestion);
    };

    const handleDifficultyChange = (event) => {
        const selectedDifficulty = event.target.value;
        onSelectDifficulty(selectedDifficulty);
    };

    return  <Form>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categories</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={handleCategoryChange}>
                <option key='anyCategory'>Choose...</option>
                <CategoryList/>
            </Form.Select>
            <Form.Label  className='my-3'>Questions</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={handleQuestionChange}>
                <QuestionNumberList/>
            </Form.Select>
            <Form.Label  className='my-3'>Difficulty</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={handleDifficultyChange}>
                <option key='anyDifficulty'>Choose...</option>
                <DifficultyList/>
            </Form.Select>
        </Form.Group>
    </Form>
};


export default FormGenerate;
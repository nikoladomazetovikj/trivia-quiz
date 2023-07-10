import Title from "./components/Title";
import TitleBar from "./partials/TitleBar";
import Selection from "./components/Selection";
import {Fragment, useState} from "react";
import FormGenerate from "./partials/FormGenerate";

const App = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuestions, setSelectedQuestions] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    function onSelectCategory(category) {
        setSelectedCategory(category)
    }

    function onSelectQuestion(question) {
        setSelectedQuestions(question)
    }

    function onSelectDifficulty(difficulty) {
        setSelectedDifficulty(difficulty)
    }


    return <Fragment>
        <TitleBar>
            <Title/>
        </TitleBar>
        <Selection>
            <FormGenerate
                onSelectCategory={onSelectCategory}
                onSelectQuestion={onSelectQuestion}
                onSelectDifficulty={onSelectDifficulty}
            />
        </Selection>
    </Fragment>
}

export default App

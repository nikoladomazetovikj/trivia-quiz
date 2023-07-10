import Title from "./components/Title";
import TitleBar from "./partials/TitleBar";
import Selection from "./components/Selection";
import {Fragment, useEffect, useState} from "react";
import FormGenerate from "./partials/FormGenerate";

const App = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedQuestions, setSelectedQuestions] = useState(10);
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    function onSelectCategory(category) {
        setSelectedCategory(category)
    }

    function onSelectQuestion(question) {
        setSelectedQuestions(question)
    }

    function onSelectDifficulty(difficulty) {
        setSelectedDifficulty(difficulty)
    }

    useEffect(() => {
        if (selectedDifficulty !== '' && selectedCategory !== '') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [selectedDifficulty, selectedCategory]);


    console.log('Cat: ' + selectedCategory + " ques: " + selectedQuestions + " diff: " + selectedDifficulty);
    console.log('disabled ' + isDisabled)


    return <Fragment>
        <TitleBar>
            <Title/>
        </TitleBar>
        <Selection buttonState={isDisabled}>
            <FormGenerate
                onSelectCategory={onSelectCategory}
                onSelectQuestion={onSelectQuestion}
                onSelectDifficulty={onSelectDifficulty}
            />
        </Selection>
    </Fragment>
}

export default App

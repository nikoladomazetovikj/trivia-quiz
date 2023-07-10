import Title from "./components/Title";
import TitleBar from "./partials/TitleBar";
import Selection from "./components/Selection";
import {Fragment, useEffect, useState} from "react";
import FormGenerate from "./partials/FormGenerate";

const App = () => {

    const [selectedCategory, setSelectedCategory] = useState('any');
    const [selectedQuestions, setSelectedQuestions] = useState(10);
    const [selectedDifficulty, setSelectedDifficulty] = useState('any');
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

    useEffect(() => {
        const generateQuizQuestions = async () => {
            try {
                let url = `https://opentdb.com/api.php?amount=${selectedQuestions}&type=multiple`;
                if (selectedCategory.trim() !== 'any') {
                    url += `&category=${selectedCategory}`;
                }
                if (selectedDifficulty.trim() !== 'any') {
                    url += `&difficulty=${selectedDifficulty}`;
                }
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }

        generateQuizQuestions();
    }, [isDisabled, selectedCategory, selectedDifficulty, selectedQuestions]);

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

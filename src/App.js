import Title from "./components/Title";
import TitleBar from "./components/partials/TitleBar";
import Selection from "./components/Selection";
import {Fragment, useEffect, useState} from "react";
import FormGenerate from "./components/partials/FormGenerate";
import QuestionCard from "./utilities/QuestionCard";
import Loader from "./components/Loader";
import ErrorAlert from "./components/ErrorAlert";
import Results from "./components/Results";

const App = () => {

    const [selectedCategory, setSelectedCategory] = useState('any');
    const [selectedQuestions, setSelectedQuestions] = useState(10);
    const [selectedDifficulty, setSelectedDifficulty] = useState('any');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [quiz, setQuiz] = useState([]);
    const [status, setStatus] = useState(0);
    const [categoryName,setCategoryName] = useState('any');

    function onSelectCategory(category, categoryName) {
        setSelectedCategory(category)
        setCategoryName(categoryName || 'any');
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
                setStatus(data.response_code);
                setQuiz(data.results);
            } catch (err) {
                console.log(err);
            }
        }

        generateQuizQuestions();
    }, [isDisabled, selectedCategory, selectedDifficulty, selectedQuestions]);

    function hideForm(isVisible) {
        setIsVisible(isVisible);
    }

    console.log(categoryName)
    return (
        <Fragment>
            <TitleBar>
                <Title />
            </TitleBar>
            {isVisible && (
              <>
                  <Selection buttonState={isDisabled} onHideForm={hideForm}>
                      <FormGenerate
                          onSelectCategory={onSelectCategory}
                          onSelectQuestion={onSelectQuestion}
                          onSelectDifficulty={onSelectDifficulty}
                      />
                  </Selection>
                  <Results/>
              </>
            )}
            {(status === 2 || status === 1) ? (
                <ErrorAlert />
            ) : (
                !isVisible && (
                    quiz.length > 0 ? (
                        <QuestionCard quiz={quiz} selectedDifficulty={selectedDifficulty} selectedCategory={categoryName} />
                    ) : (
                        <Loader />
                    )
                )
            )}
        </Fragment>
    );
}

export default App

import {useState} from "react";

export default function useStoreToLocalStorage(key) {
    const [quizDetail, setQuizDetails] = useState(() => {
        const data = localStorage.key(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    });

}
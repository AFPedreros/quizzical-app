import { useState, useEffect } from "react";

type Props = {};

export default function Trivia({}: Props) {
    const [questions, setQuestions] = useState();

    const url =
        "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.results);
            setQuestions(json);
        }
        fetchData();
    }, []);

    return <div>Trivia</div>;
}

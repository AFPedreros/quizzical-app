import { useState, useEffect } from "react";

type Props = {};

export default function Trivia({}: Props) {
    const url =
        "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium";

    const [trivia, setTrivia] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setTrivia(json);
        }
        fetchData();
    }, []);
    return <div>Trivia</div>;
}

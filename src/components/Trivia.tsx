import { useState, useEffect } from "react";
import Question from "./Question";

type Props = {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
};

export default function Trivia({ isPlaying, setIsPlaying }: Props) {
    const [questions, setQuestions] = useState([]);

    const url =
        "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setQuestions(json.results);
        }
        fetchData();
    }, []);

    function renderQuestions() {
        let questionsToRender: React.ReactElement<typeof Question>[] = [];

        if (questions.length > 0) {
            questions.map((question, index) => {
                questionsToRender.push(
                    <Question key={index} questionInfo={question} />
                );
            });
        }
        return questionsToRender;
    }
    return (
        <div>
            {renderQuestions()}
            <button
                className=" bg-[#4D5B9E] hover:bg-[#D6DBF5] hover:text-[#4D5B9E]
                            rounded-2xl py-6 px-8 text-white text-3xl"
                onClick={() => setIsPlaying(!isPlaying)}
            >
                Check Answers
            </button>
        </div>
    );
}

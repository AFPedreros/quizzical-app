import { useState, useEffect } from "react";
import Question from "./Question";

type Props = {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
};

interface QuestionInfo {
    question: string;
    incorrect_answers: [];
    correct_answer: string;
}

export default function Trivia({ isPlaying, setIsPlaying }: Props) {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);

    const url =
        "https://opentdb.com/api.php?amount=5&category=21&encode=base64";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setQuestions(json.results);
        }
        fetchData();
    }, []);
    return (
        <>
            {!questions ? (
                <div>Loading...</div>
            ) : (
                <div className="flex flex-col w-full px-16">
                    {questions.map((info: QuestionInfo, index) => {
                        return (
                            <Question
                                key={index}
                                question={info.question}
                                correctAnswer={info.correct_answer}
                                incorrectAnswers={info.incorrect_answers}
                            />
                        );
                    })}
                    <button
                        className="bg-[#4D5B9E] hover:bg-[#D6DBF5] w-fit hover:text-[#4D5B9E] rounded-2xl py-4 px-10 text-white text-xl"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        Check Answers
                    </button>
                </div>
            )}
        </>
    );
}

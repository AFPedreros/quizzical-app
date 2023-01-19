import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import Question from "./Question";

type Props = {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    difficulty: string;
    category: string;
};

interface QuestionInfo {
    question: string;
    incorrect_answers: [];
    correct_answer: string;
}

export default function Trivia({
    isPlaying,
    setIsPlaying,
    category,
    difficulty,
}: Props) {
    const [questions, setQuestions] = useState([]);
    const [checkAnswers, setCheckAnswers] = useState(false);
    const [score, setScore] = useState(0);

    const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&encode=base64`;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setQuestions(json.results);
        }
        fetchData();
    }, []);

    function handleClick() {
        setCheckAnswers((prev) => !prev);
        console.log(score);
    }

    function endGame() {
        setIsPlaying(!isPlaying);
    }
    console.log(score);
    return (
        <>
            {!questions ? (
                <div>Loading...</div>
            ) : (
                <div className="w-fill flex flex-col px-16">
                    {questions.map((info: QuestionInfo, index) => {
                        return (
                            <Question
                                key={index}
                                question={info.question}
                                correctAnswer={info.correct_answer}
                                incorrectAnswers={info.incorrect_answers}
                                checkAnswers={checkAnswers}
                                setScore={setScore}
                            />
                        );
                    })}
                    {!checkAnswers ? (
                        <Button
                            className="w-fit font-bold"
                            onClick={handleClick}
                        >
                            Check Answers
                        </Button>
                    ) : (
                        <div className="m-0 flex h-full p-0">
                            <p className="text-normal my-auto mr-4 text-xl">
                                {`You scored ${score}/5 correct answers`}
                            </p>

                            <Button
                                className="w-fit font-bold"
                                onClick={endGame}
                            >
                                Play Again
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

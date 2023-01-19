import { useState, useEffect } from "react";
import Answer from "./Answer";

type Props = {
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    checkAnswers: boolean;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

type TAnswer = {
    id: number;
    answer: string;
    isHeld: boolean;
    isCorrect: boolean;
};

export default function Question({
    question,
    correctAnswer,
    incorrectAnswers,
    checkAnswers,
    setScore,
}: Props) {
    const [answers, setAnswers] = useState<TAnswer[]>();

    useEffect(() => {
        console.log(atob(correctAnswer));
        const allAnswers = incorrectAnswers;
        allAnswers.push(correctAnswer);
        const shuffleArray = shuffle(allAnswers);
        setAnswers(
            shuffleArray.map((answer, index) => {
                return {
                    id: index,
                    answer: answer,
                    isHeld: false,
                    isCorrect: answer === correctAnswer,
                };
            })
        );
    }, []);

    function shuffle(array: string[]) {
        const newArray = [...array];
        const length = newArray.length;

        for (let start = 0; start < length; start++) {
            const randomPosition = Math.floor(
                (newArray.length - start) * Math.random()
            );
            const randomItem = newArray.splice(randomPosition, 1);

            newArray.push(...randomItem);
        }

        return newArray;
    }

    function holdAnswer(id: number) {
        setAnswers((prevAnswers) =>
            prevAnswers?.map((a) => {
                return a.id !== id
                    ? { ...a, isHeld: false }
                    : { ...a, isHeld: !a.isHeld };
            })
        );
    }

    const questionElements = answers?.map((info, index) => {
        return (
            <Answer
                key={index}
                answerInfo={info.answer}
                isCorrect={info.answer === correctAnswer}
                isHeld={info.isHeld}
                holdAnswer={() => holdAnswer(info.id)}
                checkAnswers={checkAnswers}
                setScore={setScore}
            />
        );
    });

    return (
        <div className=" my-4 border-b-2 border-solid border-[#DBDEF0] py-2 font-[#293264]">
            <h2>{atob(question)}</h2>
            <div className="flex">{questionElements}</div>
        </div>
    );
}

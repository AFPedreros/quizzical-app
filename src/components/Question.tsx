import { useState, useEffect } from "react";
import Answer from "./Answer";

type Props = {
    questionInfo: QuestionInfo;
};

interface QuestionInfo {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export default function Question({ questionInfo }: Props) {
    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [wrongAnswer, setWrongAnswer] = useState([""]);

    const answers = renderAnswers();

    function renderAnswers() {
        const shuffledAnswers = [correctAnswer, ...wrongAnswer].sort(
            () => Math.random() - 0.5
        );

        const answerComponents = shuffledAnswers.map((answer, index) => {
            return (
                <Answer
                    key={index}
                    answerInfo={answer}
                    isCorrect={answer === correctAnswer}
                />
            );
        });

        return (
            <div className="flex my-2 justify-start">{answerComponents}</div>
        );
    }

    useEffect(() => {
        setQuestion(questionInfo.question);
        setCorrectAnswer(questionInfo.correct_answer);
        setWrongAnswer(questionInfo.incorrect_answers);
    }, []);

    return (
        <div className=" my-4 py-2 border-b-2 border-[#DBDEF0] border-solid font-[#293264]">
            <div>{atob(question)}</div>
            {answers}
        </div>
    );
}

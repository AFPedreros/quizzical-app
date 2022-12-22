import { useState, useEffect } from "react";

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

    useEffect(() => {
        setQuestion(questionInfo.question);
        setCorrectAnswer(questionInfo.correct_answer);
    }, []);

    // console.log(questionInfo.incorrect_answers);

    return (
        <div className=" my-4 py-2 border-b-2 border-slate-300 border-solid">
            <div>{question}</div>
            <div className=" flex my-2 justify-start ">
                <div className=" mr-4 px-4 border-solid border-2 border-black rounded-lg">
                    {correctAnswer}
                </div>
            </div>
        </div>
    );
}

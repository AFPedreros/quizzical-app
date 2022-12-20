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

    useEffect(() => {
        setQuestion(questionInfo.question);
    }, []);
    return <div>{question}</div>;
}

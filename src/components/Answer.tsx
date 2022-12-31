import { useState } from "react";

type Props = {
    answerInfo: string;
    isCorrect: boolean;
};

export default function Answer({ answerInfo, isCorrect }: Props) {
    return (
        <div
            className=" mr-4 px-4 border-solid border-2 border-[#4D5B9E] hover:bg-[#D6DBF5]
        hover:border-transparent rounded-lg cursor-pointer"
        >
            {atob(answerInfo)}
        </div>
    );
}

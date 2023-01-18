import { useState } from "react";

type Props = {
    answerInfo: string;
    isCorrect: boolean;
    isHeld: boolean;
    holdAnswer: () => void;
};

export default function Answer({
    answerInfo,
    isCorrect,
    isHeld,
    holdAnswer,
}: Props) {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick() {
        setIsSelected((prev: boolean) => !prev);
        holdAnswer();
        // console.log(isCorrect);
        // console.log(isHeld);
        // console.log(atob(answerInfo));
    }

    return (
        <div
            className={`${
                isHeld
                    ? "bg-[#D6DBF5] border-solid border-2 border-transparent"
                    : "border-solid border-2 border-[#4D5B9E]"
            } mr-4 px-4 hover:bg-[#D6DBF5]
                    hover:border-transparent rounded-lg cursor-pointer`}
            onClick={handleClick}
        >
            {atob(answerInfo)}
        </div>
    );
}

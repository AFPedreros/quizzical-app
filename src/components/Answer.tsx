import { useState, useEffect } from "react";

type Props = {
    answerInfo: string;
    isCorrect: boolean;
    isHeld: boolean;
    holdAnswer: () => void;
    checkAnswers: boolean;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function Answer({
    answerInfo,
    isCorrect,
    isHeld,
    holdAnswer,
    checkAnswers,
    setScore,
}: Props) {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (isHeld && isCorrect) {
            setScore((prev) => prev + 1);
        }
    }, [checkAnswers]);

    function handleClick() {
        setIsSelected((prev: boolean) => !prev);
        holdAnswer();
    }

    const rightAnswer = (
        <div
            className={
                "mr-4 cursor-not-allowed rounded-lg border-2 border-solid border-transparent bg-[#94D7A2] px-4 hover:border-transparent"
            }
        >
            {atob(answerInfo)}
        </div>
    );
    const wrongAnswer = (
        <div
            className={
                "mr-4 cursor-not-allowed rounded-lg border-2 border-solid border-transparent bg-[#F8BCBC] px-4 hover:border-transparent"
            }
        >
            {atob(answerInfo)}
        </div>
    );
    const notSelectedAnswer = (
        <div
            className={
                "mr-4 cursor-not-allowed rounded-lg border-2 border-solid border-slate-300 bg-transparent px-4 text-slate-400"
            }
        >
            {atob(answerInfo)}
        </div>
    );

    return (
        <>
            {!checkAnswers ? (
                <div
                    className={`${
                        isHeld
                            ? "border-2 border-solid border-transparent bg-[#D6DBF5]"
                            : "border-2 border-solid border-[#4D5B9E]"
                    } mr-4 cursor-pointer rounded-lg px-4 hover:border-transparent hover:bg-[#D6DBF5]`}
                    onClick={handleClick}
                >
                    {atob(answerInfo)}
                </div>
            ) : isCorrect ? (
                rightAnswer
            ) : isHeld ? (
                wrongAnswer
            ) : (
                notSelectedAnswer
            )}
        </>
    );
}

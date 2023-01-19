import { Dropdown, Button } from "flowbite-react";

type Props = {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    difficulty: string;
    setCategory: (difficulty: string) => void;
    category: string;
    setDifficulty: (category: string) => void;
};

export default function Intro({
    isPlaying,
    setIsPlaying,
    category,
    setCategory,
    difficulty,
    setDifficulty,
}: Props) {
    function handleClick() {
        setIsPlaying(!isPlaying);
    }

    return (
        <div>
            <div className=" flex flex-col items-center justify-center border-black">
                <h1 className="text-6xl font-semibold">Quizzical</h1>
                <p className=" text-normal mb-8 text-xl">
                    Your favorite trivia game
                </p>
                <Button
                    className="mb-8 font-bold"
                    onClick={() => handleClick()}
                >
                    Start Quiz!
                </Button>
                <div className="flex gap-4">
                    <Dropdown label="Select Category:">
                        <Dropdown.Item
                            onClick={() => {
                                setCategory("9");
                            }}
                        >
                            General Knowledge
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setCategory("17");
                            }}
                        >
                            Science & Nature
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setCategory("27");
                            }}
                        >
                            Animals
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setCategory("26");
                            }}
                        >
                            Celebrities
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setCategory("21");
                            }}
                        >
                            Sports
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setCategory("25");
                            }}
                        >
                            Art
                        </Dropdown.Item>
                    </Dropdown>
                    <Dropdown label="Select Difficulty:">
                        <Dropdown.Item
                            onClick={() => {
                                setDifficulty("easy");
                            }}
                        >
                            Easy
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setDifficulty("medium");
                            }}
                        >
                            Medium
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setDifficulty("hard");
                            }}
                        >
                            Hard
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

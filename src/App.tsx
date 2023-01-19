import { useState } from "react";
import Intro from "./components/Intro";
import Trivia from "./components/Trivia";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");

    return (
        <div className=" flex h-screen items-center justify-center bg-slate-200 text-[#293264]">
            {!isPlaying ? (
                <Intro
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    category={category}
                    setCategory={setCategory}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                />
            ) : (
                <Trivia
                    difficulty={difficulty}
                    category={category}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                />
            )}
        </div>
    );
}

export default App;

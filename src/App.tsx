import { useState } from "react";
import Intro from "./components/Intro";
import Trivia from "./components/Trivia";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className=" bg-slate-200 text-[#293264] h-screen flex justify-center items-center">
            {!isPlaying ? (
                <Intro isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            ) : (
                <Trivia />
            )}
        </div>
    );
}

export default App;

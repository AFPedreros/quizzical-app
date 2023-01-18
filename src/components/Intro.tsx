type Props = {
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
};

export default function Intro({ isPlaying, setIsPlaying }: Props) {
    return (
        <div>
            <div className=" border-black flex flex-col justify-center items-center gap-12">
                <h1 className="text-8xl font-semibold">Quizzical</h1>
                <p className=" text-3xl text-normal">Sports Trivia</p>
                <button
                    className=" bg-[#4D5B9E] hover:bg-[#D6DBF5] hover:text-[#4D5B9E] rounded-2xl py-4 px-10 text-white text-xl"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    Start Quiz!
                </button>
            </div>
        </div>
    );
}

type Props = {};

export default function Intro({}: Props) {
    return (
        <div>
            <div className=" flex flex-col justify-center items-center gap-12">
                <h1 className="text-8xl font-semibold">Quizzical</h1>
                <p className=" text-3xl text-normal">Description to add</p>
                <button
                    className=" bg-[#4D5B9E] hover:bg-[#D6DBF5] hover:text-[#4D5B9E]
                 rounded-2xl py-6 px-8 text-white text-3xl"
                >
                    Start Quiz!
                </button>
            </div>
        </div>
    );
}

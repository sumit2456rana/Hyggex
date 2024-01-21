import { useState } from "react";

export default function StudyCard() {
    const [isFlip, setIsFlip] = useState(false);

    return (
        <div className="w-[62%]">
            <div
                onClick={() => setIsFlip((prev) => !prev)}
                className="relative w-full cursor-pointer rounded-[43px] h-96 transition-all duration-500 grid place-items-center"
                style={{
                    background: isFlip
                        ? 'linear-gradient(223deg, #071844 -4.31%, #071844 14.41%, #2D87B6 81.88%, #2D87B6 103.81%)'
                        : 'linear-gradient(223deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
                    transform: `rotateY(${isFlip ? '180deg' : '0deg'}) scaleX(${isFlip ? '-1' : '1'})`,
                }}
            >
                <div className="absolute w-full flex justify-between top-8 px-8">
                    <img src="/IdeaIcon.svg" />
                    <img src="/SoundIcon.svg" />
                </div>
                <p className="text-white text-4xl font-bold break-words tracking-[0.77]">
                    {isFlip ? "5x + 12" : "9 + 6 + 7x - 2x - 3"}
                </p>
            </div>
            <div className="m-10 flex justify-between items-center">
                <img src="/ReloadIcon.svg" />
                <div className="flex items-center gap-10 text-2xl font-bold text-[#202B37]">
                    <img src="/BackIcon.svg" />
                    <span>01/10</span>
                    <img src="/NextIcon.svg" />
                </div>
                <img src="/MaximizeIcon.svg" />
            </div>
        </div>
    );
}

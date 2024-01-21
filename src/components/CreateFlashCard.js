import Heading from "./Heading";

export default function CreateFlashCard() {
    return (
        <div className="flex justify-between items-center mb-16">
            <div className="flex gap-6">
                <div className="w-20 h-20 bg-white rounded-full grid place-items-center shadow-2xl shadow-[#0b3488]">
                    <img src="/BrandLogo.png" className="w-12" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-xs text-text2">Published by</span>
                    <img src="/BrandName.png" />
                </div>
            </div>
            <div className="flex gap-2" >
                <img src="/AddIcon.svg" />
                <Heading>Create Flashcard</Heading>
            </div>
        </div>
    )
}
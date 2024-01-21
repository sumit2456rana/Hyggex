import { useState } from "react";

const Accordion = ({ children, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div onClick={toggleAccordion} className={`w-2/3 h-[auto] cursor-pointer px-6 py-[17px] my-8 border border-[#217EEC] rounded-xl`}>
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg">{children}</p>
                <img src="/Arrow.svg" alt="Arrow Icon" />
            </div>
            <div className={`overflow-hidden transition-height duration-500 ${isOpen ? 'h-[80px]' : 'h-0'}`}>
                <p className="pt-2 text-base text-text1 font-medium">{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
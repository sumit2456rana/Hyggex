import Accordion from './Accordion'

const faqData = [
    {
        title: 'Can education flashcards be used for all age groups?',
        content: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
    },
    {
        title: 'How do education flashcards work?',
        content: 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.'
    },
    {
        title: 'Can education flashcards be used for test preparation?',
        content: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
    }
]

export default function Faq() {
    return (
        <div>
            <h1 style={{ background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: 'transparent' }} className="my-12 text-[48px] bg-clip-text font-bold">
                FAQ
            </h1>
            {faqData.map((e, i) => (
                <Accordion key={i} content={e.content}>{e.title}</Accordion>
            ))}
        </div>
    )
}


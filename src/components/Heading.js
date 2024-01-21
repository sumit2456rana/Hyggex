export default function Heading({ children }){
    return (
        <h1 style={{ background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: 'transparent' }} className="my-12 text-[32px] bg-clip-text font-bold">
            {children}
        </h1>
    )
}
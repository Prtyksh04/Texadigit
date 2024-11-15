

interface TextAdviceProps {
    advice : string;
    name : string
}

const TextAdvice = ({advice , name} : TextAdviceProps) => {
    return (
        <div>
            <div className="flex w-4/5 h-auto gap-x-8 mt-4 mb-8 ml-8">
                <div className="border-l-2 border-[#e80566] h-32"></div>
                <div>
                    <h3 className="md:text-xl text-justify mt-2 text-sm">
                        {advice}
                    </h3>
                    <div className="flex">
                        <p>___</p>
                        <p className="m-2">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextAdvice;
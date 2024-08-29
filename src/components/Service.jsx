
const Service = ({ card }) => {

    return (
        <article className={`${card.bgColor} rounded-lg flex flex-col xs:flex-row justify-between p-5 border-b-4 border-black`}>
            <div className="flex flex-col justify-between gap-5">
                <h2 className={`${card.title.bgColor} ${card.title.txtColor} px-2 py-1 font-bold rounded-md lg:text-xl max-w-40`}>{card.title.name}</h2>
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 lg:size-8 p-1 cursor-pointer rounded-full -rotate-45 hover:rotate-0 transition-all duration-200 ${card.btn?.bgColor} ${card.btn?.txtColor}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <p className={`hidden md:inline ${card.leranMoreColor}`}>Learn more</p>
                </div>
            </div>
            <img src={card.src.srcSm} className="lg:hidden" alt="card" />
            <img src={card.src.srcBg} className="hidden lg:inline" alt="card" />
        </article>
    )
}

export default Service

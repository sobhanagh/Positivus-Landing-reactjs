

const CaseStudies = () => {

    const data = [
        {
            desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        },
        {
            desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
        },
        {
            desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
        }
    ]

    return (
        <div className="my-28 px-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1 lg:text-4xl">Case Studies</h1>
                <p className="text-center max-w-5xl lg:text-xl">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 bg-darkColor mt-10 rounded-lg divide-y divide-silverColor lg:divide-y-0 lg:divide-x">
                {
                    data.map((item) => {
                        return (
                            <div key={item.desc} className="flex flex-col items-start justify-between p-5 lg:gap-10 gap-3">
                                <p className="text-silverColor lg:text-lg">{item.desc}</p>
                                <div className="flex items-center gap-3 text-greenColor">
                                    <p>Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 lg:size-8 p-1 cursor-pointer rounded-full -rotate-45 hover:rotate-0 transition-all duration-200">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CaseStudies

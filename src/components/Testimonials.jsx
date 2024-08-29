import { useState } from "react"
import { useEffect } from "react"

const Testimonials = () => {

    const data = [
        {
            name: "John Smith",
            title: "Marketing Director at XYZ Corp",
            comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.The team is professional, responsive, and truly cares about the success of our business.We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            name: "Emily Johnson",
            title: "Senior SEO Specialist",
            comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.The team is professional, responsive, and truly cares about the success of our business.We highly recommend Positivus to any company looking to grow their online presence."
        },
        {
            name: "Brian Wiliams",
            title: "Social Media Specialist",
            comment: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.The team is professional, responsive, and truly cares about the success of our business.We highly recommend Positivus to any company looking to grow their online presence."
        },
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = data.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        else if (index > lastIndex) {
            setIndex(0);
        }
    }, [index])

    return (
        <div className="my-16 max-w-7xl mx-auto px-10 xl:px-0">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1 lg:text-4xl">Testimonials</h1>
                <p className="text-center max-w-5xl lg:text-xl">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
            <div className="flex flex-col items-center justify-between bg-darkColor sm:p-10 rounded-3xl overflow-hidden mt-10 min-h-[600px] sm:min-h-[400px]">
                <div className="w-11/12 text-white relative">
                    {
                        data.map((item, itemIndex) => {
                            const { name, title, comment } = item;
                            let style = "translate-x-full";
                            if (index === itemIndex) {
                                style = "translate-x-0";
                            }
                            else if (index - 1 === itemIndex || (index === 0 && itemIndex === data.length - 1)) {
                                style = "-translate-x-full";
                            }

                            return (
                                <article key={item.title}
                                    className={`${style} transition duration-300 absolute inset-0 flex flex-col gap-5
                                ${index === itemIndex ? 'opacity-100' : 'opacity-0'} p-5`}
                                >
                                    <p className="border-2 text-justify border-greenColor rounded-lg p-5 lg:text-lg">{comment}</p>
                                    <h1 className="font-semibold text-greenColor lg:text-lg">{name}</h1>
                                    <h2>{title}</h2>
                                </article>
                            )
                        })
                    }
                </div>
                <div className="flex items-center text-greenColor gap-5 mt-10">
                    <button onClick={() => setIndex(index - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button onClick={() => setIndex(index + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>


        </div >
    )
}

export default Testimonials

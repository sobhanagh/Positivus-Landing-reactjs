import one from "../images/services/sm/one.svg";
import two from "../images/services/sm/two.svg";
import three from "../images/services/sm/three.svg";
import four from "../images/services/sm/four.svg";
import five from "../images/services/sm/five.svg";
import six from "../images/services/sm/six.svg";


const Services = () => {

    const cards = [
        {
            src: one,
            bgColor: "bg-silverColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Search engine optimization",
                bgColor: "bg-greenColor",
                txtColor: "text-darkColor"
            }
        },
        {
            src: two,
            bgColor: "bg-greenColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Pay-per-click advertising",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            }
        },
        {
            src: three,
            bgColor: "bg-darkColor",
            btn: {
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            title: {
                name: "Social Media Marketing",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            }
        },
        {
            src: four,
            bgColor: "bg-silverColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Email Marketing",
                bgColor: "bg-greenColor",
                txtColor: "text-darkColor"
            }
        },
        {
            src: five,
            bgColor: "bg-greenColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Content Creation",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            }
        },
        {
            src: six,
            bgColor: "bg-darkColor",
            btn: {
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            title: {
                name: "Analytics and Tracking",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            }
        }
    ]

    return (
        <div className="my-16 px-5">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1">Services</h1>
                <p className="text-center max-w-xl">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-10">
                {
                    cards.map((card) => {
                        return (
                            <article key={card.title} className={`${card.bgColor} rounded-lg flex justify-between p-5`}>
                                <div className="flex flex-col justify-between ">
                                    <h2 className={`${card.title.bgColor} ${card.title.txtColor} px-2 py-1 font-bold rounded-md`}>{card.title.name}</h2>
                                    <div className={`flex items-center`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 p-1 cursor-pointer rounded-full ${card.btn?.bgColor} ${card.btn?.txtColor}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                        <p className="hidden md:inline">Learn more</p>
                                    </div>
                                </div>
                                <img src={card.src} />
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services

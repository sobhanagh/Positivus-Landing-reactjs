import one from "../images/services/sm/one.svg";
import two from "../images/services/sm/two.svg";
import three from "../images/services/sm/three.svg";
import four from "../images/services/sm/four.svg";
import five from "../images/services/sm/five.svg";
import six from "../images/services/sm/six.svg";

import oneBG from "../images/services/bg/one.svg";
import twoBG from "../images/services/bg/two.svg";
import threeBG from "../images/services/bg/three.svg";
import fourBG from "../images/services/bg/four.svg";
import fiveBG from "../images/services/bg/five.svg";
import sixBG from "../images/services/bg/six.svg";

import happen from "../images/services/happen.svg";


const Services = () => {

    const cards = [
        {
            src: {
                srcSm: one,
                srcBg: oneBG
            },
            bgColor: "bg-silverColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Search engine optimization",
                bgColor: "bg-greenColor",
                txtColor: "text-darkColor"
            },
            leranMoreColor: "text-darkColor"
        },
        {
            src: {
                srcSm: two,
                srcBg: twoBG,
            },
            bgColor: "bg-greenColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Pay-per-click advertising",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            leranMoreColor: "text-darkColor"
        },
        {
            src: {
                srcSm: three,
                srcBg: threeBG,
            },
            bgColor: "bg-darkColor",
            btn: {
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            title: {
                name: "Social Media Marketing",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            leranMoreColor: "text-silverColor"
        },
        {
            src: {
                srcSm: four,
                srcBg: fourBG,
            },
            bgColor: "bg-silverColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Email Marketing",
                bgColor: "bg-greenColor",
                txtColor: "text-darkColor"
            },
            leranMoreColor: "text-darkColor"
        },
        {
            src: {
                srcSm: five,
                srcBg: fiveBG,
            },
            bgColor: "bg-greenColor",
            btn: {
                bgColor: "bg-darkColor",
                txtColor: "text-greenColor"
            },
            title: {
                name: "Content Creation",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            leranMoreColor: "text-darkColor"
        },
        {
            src: {
                srcSm: six,
                srcBg: sixBG,
            },
            bgColor: "bg-darkColor",
            btn: {
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            title: {
                name: "Analytics and Tracking",
                bgColor: "bg-silverColor",
                txtColor: "text-darkColor"
            },
            leranMoreColor: "text-silverColor"
        }
    ]

    return (
        <div className="my-16 px-10">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1 lg:text-4xl">Services</h1>
                <p className="text-center max-w-5xl lg:text-xl">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 max-w-6xl mx-auto lg:gap-10">
                {
                    cards.map((card) => {
                        return (
                            <article key={card.title} className={`${card.bgColor} rounded-lg flex justify-between p-5 border-b-4 border-black`}>
                                <div className="flex flex-col justify-between ">
                                    <h2 className={`${card.title.bgColor} ${card.title.txtColor} px-2 py-1 font-bold rounded-md lg:text-xl max-w-40`}>{card.title.name}</h2>
                                    <div className="lex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 lg:size-8 p-1 cursor-pointer rounded-full -rotate-45 hover:rotate-0 transition-all duration-200 ${card.btn?.bgColor} ${card.btn?.txtColor}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                        <p className={`hidden lg:inline ${card.leranMoreColor}`}>Learn more</p>
                                    </div>
                                </div>
                                <img src={card.src.srcSm} className="lg:hidden" alt="card" />
                                <img src={card.src.srcBg} className="hidden lg:inline" alt="card" />
                            </article>
                        )
                    })
                }
            </div>
            <div className="flex items-center justify-between bg-silverColor max-w-6xl mx-auto p-5 rounded-lg">
                <div className="flex flex-col gap-3 lg:gap-14">
                    <h1 className="font-bold text-lg lg:text-5xl">Let’s make things happen</h1>
                    <p className="max-w-xl lg:text-xl">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <a className="w-full sm:max-w-96" href="#">
                        <button className="text-white bg-darkColor px-3 py-2 rounded-md hover:bg-black w-full lg:text-lg">Get your free proposal</button>
                    </a>
                </div>
                <img src={happen} alt="make things happen" className="hidden lg:inline" />
            </div>
        </div>
    )
}

export default Services

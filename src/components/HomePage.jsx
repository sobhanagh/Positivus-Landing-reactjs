import bgsm from "../images/home/bgsm.svg"
import bglg from "../images/home/bglg.svg"

import amazon from "../images/home/companies/amazon.svg";
import dLogo from "../images/home/companies/d.svg";
import hubspot from "../images/home/companies/hubspot.svg";
import netflix from "../images/home/companies/netflix.png";
import notion from "../images/home/companies/notion.svg";
import zoom from "../images/home/companies/zoom.svg";


const HomePage = () => {

    const logos = [
        { src: amazon },
        { src: dLogo },
        { src: hubspot },
        { src: netflix },
        { src: notion },
        { src: zoom },
    ]

    return (
        <div className="flex flex-col gap-8">
            <div className="px-8 sm:mt-10 flex flex-col items-center lg:flex-row lg:justify-between">
                <div className="flex flex-col items-start gap-5 lg:gap-10 md:max-w-2xl">
                    <h1 className="font-semibold text-4xl lg:text-6xl">Navigating the digital landscape for success</h1>
                    <img src={bgsm} alt="positive" className="lg:hidden" />
                    <p className="lg:text-lg">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <a className="w-full sm:w-auto" href="#">
                        <button className="text-white bg-darkColor px-3 py-2 rounded-md hover:bg-black w-full lg:text-lg">Book a consultation</button>
                    </a>
                </div>
                <div className="min-w-fit">
                    <img className="hidden lg:inline" src={bglg} alt="positive" />
                </div>

            </div>
            <div className="flex w-full items-center justify-center flex-wrap gap-5 lg:gap-10">
                {
                    logos.map((logo) => {
                        return (
                            <img className="w-28 md:w-32" src={logo.src} key={logo.src} alt="company" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage

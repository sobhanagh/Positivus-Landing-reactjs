import person1 from "../images/Teams/person_1.png"
import person2 from "../images/Teams/person_2.png"
import person3 from "../images/Teams/person_3.png"
import person4 from "../images/Teams/person_4.png"
import person5 from "../images/Teams/person_5.png"
import person6 from "../images/Teams/person_6.png"

import Team from "./Team"

const Teams = () => {

    const members = [
        {
            name: "John Smith",
            title: "CEO and Founder",
            desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            src: person1
        },
        {
            name: "Jane Doe",
            title: "Director of Operations",
            desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            src: person2
        },
        {
            name: "Michael Brown",
            title: "Senior SEO Specialist",
            desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
            src: person3
        },
        {
            name: "Emily Johnson",
            title: "PPC Manger",
            desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
            src: person4
        },
        {
            name: "Brian Wiliams",
            title: "Social Media Specialist",
            desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
            src: person5
        },
        {
            name: "Sarah Kim",
            title: "Content Creator",
            desc: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
            src: person6
        },
    ]

    return (
        <div className="my-16 max-w-7xl mx-auto px-10 xl:px-0">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1 lg:text-4xl">Teams</h1>
                <p className="text-center max-w-5xl lg:text-xl">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 ">
                {
                    members.map((member) => {
                        return (
                            <Team key={member.name} member={member} />
                        )
                    })
                }
            </div>
            <a className="flex justify-center" href="#">
                <button className="text-white bg-darkColor px-3 py-2 rounded-md hover:bg-black w-full lg:text-lg mt-10 md:max-w-52">See all team</button>
            </a>
        </div >
    )
}

export default Teams

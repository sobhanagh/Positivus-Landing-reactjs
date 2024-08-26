import Linkdien from "../images/social_media/Linkdien.svg"

const Team = ({ member }) => {

    const { src, name, title, desc } = member;

    return (
        <article className="flex flex-col border-2 border-b-4 border-black rounded-2xl p-5 gap-4">
            <div className="flex justify-between relative">
                <div className="flex items-center gap-3">
                    <img className="size-20 lg:size-24" src={src} alt={name} />
                    <div className="flex flex-col">
                        <h1 className="font-bold lg:text-lg">{name}</h1>
                        <h2>{title}</h2>
                    </div>
                </div>
                <img className="absolute right-0 top-0 lg:size-12 cursor-pointer" src={Linkdien} alt="Linkdien" />
            </div>
            <hr className="h-0.5 bg-darkColor" />
            <p>
                {desc}
            </p>
        </article>
    )
}

export default Team

import plus from "../images/onworkingprocess/plus.svg";
import minuse from "../images/onworkingprocess/minuse.svg";


const OnWorkingProcess = () => {

    const plans = [
        {
            title: "Consultation",
            desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Research and Strategy Development",
            desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Implementation",
            desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Monitoring and Optimization",
            desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Reporting and Communication",
            desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Continual Improvement",
            desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        }
    ]

    const handleClick = (e, title) => {
        const element = e.target;
        const planBox = element.parentNode.parentNode;
        const pBox = element.parentNode.nextElementSibling;

        if (element.src.includes("plus")) {
            element.src = minuse;
            planBox.classList.replace("bg-silverColor", "bg-greenColor")
            pBox.classList.replace("hidden", "block")
        }
        else {
            element.src = plus;
            planBox.classList.replace("bg-greenColor", "bg-silverColor")
            pBox.classList.replace("block", "hidden")
        }



        const box = document.querySelector(".box");
        const boxChildren = box.childNodes;

        for (let i = 0; i < plans.length; i++) {
            if (plans[i].title !== title) {
                console.log(title);

                const planBox = boxChildren[i];
                const imgPlanBox = boxChildren[i].childNodes[0].childNodes[1];
                const pPlanBox = boxChildren[i].childNodes[1];

                planBox.classList.replace("bg-greenColor", "bg-silverColor")
                pPlanBox.classList.replace("block", "hidden")
                imgPlanBox.src = plus;
            }
        }
    }

    return (
        <div className="my-16 px-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1 lg:text-4xl">Our Working Process </h1>
                <p className="text-center max-w-5xl lg:text-xl">Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>
            <div className="flex flex-col justify-center mx-auto gap-5 mt-10 box">
                {
                    plans.map((plan, index) => {
                        return (
                            <div key={plan.title} className="flex flex-col bg-silverColor p-5 gap-5 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-xl lg:text-2xl">
                                        <span className="text-2xl lg:text-4xl mr-3">0{index + 1}</span>
                                        {plan.title}</h1>
                                    <img onClick={(e) => handleClick(e, plan.title)} src={plus} alt="expand" className="size-6 cursor-pointer lg:size-8" />
                                </div>
                                <p className="hidden pt-3 border-t-2 border-darkColor lg:text-xl">
                                    {plan.desc}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OnWorkingProcess

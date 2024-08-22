import logo from '../images/logo.svg';


const Navbar = () => {

    const Links = [
        { title: "About us", href: "/" },
        { title: "Services", href: "/" },
        { title: "Use Cases", href: "/" },
        { title: "Pricing", href: "/" },
        { title: "Blog", href: "/" }
    ]

    const showLinks = () => {
        const ul = document.querySelector("ul");

        if (ul.classList.contains("max-h-0")) {
            ul.classList.replace("max-h-0", "max-h-96");
        }
        else {
            ul.classList.replace("max-h-96", "max-h-0");
        }
    }


    return (
        <div className='flex items-center flex-wrap justify-between p-5 text-darkColor md:px-8 lg:px-12 py-6'>
            <div>
                <img src={logo} alt='logo' className='w-32 lg:w-44' />
            </div>
            <svg onClick={showLinks} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <ul className='flex flex-col md:flex-row w-full max-h-0 overflow-hidden transition-all duration-300 mt-4 gap-1 md:max-h-96 md:w-auto md:mt-0 md:gap-5'>
                {
                    Links.map((link) => {
                        return (
                            <a className='lg:text-lg' href={link.href} key={link.title}>{link.title}</a>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar

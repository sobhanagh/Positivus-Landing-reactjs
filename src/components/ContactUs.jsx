
const ContactUs = () => {
    return (
        <div className="my-16 px-10 w-10/12 mx-auto">
            <div className="flex flex-col items-center gap-5">
                <h1 className="bg-greenColor font-bold text-2xl px-5 py-1 lg:text-4xl">Contact Us</h1>
                <p className="text-center max-w-5xl lg:text-xl">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>
            <div className=" bg-silverColor gap-5 p-7 mt-10 rounded-lg">
                <div className="flex flex-col gap-5 ">
                    <form className="flex flex-col gap-1">
                        <label>Name:</label>
                        <input placeholder="Name" className="border-darkColor border-2 outline-none rounded-md px-2 py-1" type="text" />
                    </form>
                    <form className="flex flex-col gap-1">
                        <label>Email:</label>
                        <input placeholder="Email" className="border-darkColor border-2 outline-none rounded-md px-2 py-1" type="text" />
                    </form>
                    <form className="flex flex-col gap-1">
                        <label>Message:</label>
                        <textarea placeholder="Message" className="border-darkColor border-2 outline-none rounded-md px-2 py-1 resize-none h-40" type="text" />
                    </form>
                    <a className="flex" href="#">
                        <button className="text-white bg-darkColor px-3 py-2 rounded-md hover:bg-black w-full lg:text-lg mt-0 md:max-w-52">Send Message</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ContactUs

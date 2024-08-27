import logo_footer from '../images/logo_footer.svg';

import linkdien from "../images/Footer_social_media/linkdien.svg";
import facebook from "../images/Footer_social_media/facebook.svg";
import twitter from "../images/Footer_social_media/twitter.svg";


const Footer = () => {
    return (
        <div className="bg-darkColor text-white p-5">
            <div className="flex flex-col items-center py-3 md:px-10 gap-5 md:gap-10">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 w-full">
                    <img src={logo_footer} alt="logo" className='w-32 md:w-44' />
                    <ul className='flex flex-col items-center md:text-lg md:flex-row gap-2 md:gap-5'>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Use Cases</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 w-full">
                    <div className="flex flex-col items-center md:items-start gap-3 md:text-lg">
                        <button className='text-darkColor bg-greenColor font-semibold px-3 py-1 rounded-lg'>Contact us:</button>
                        <ul className='flex flex-col items-center md:items-start gap-2'>
                            <li>Email: info@positivus.com</li>
                            <li>Phone: 555-567-8901</li>
                            <li>Address: 1234 Main St
                                Moonstone City, Stardust State 12345</li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full gap-2 rounded-lg bg-bgInputFooter p-5 max-w-3xl md:gap-5">
                        <input className='border-2 border-silverColor outline-none bg-transparent p-3 rounded-lg' placeholder='Email' />
                        <button className='bg-greenColor rounded-lg py-2 font-semibold text-darkColor'>Subscribe to news</button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 md:gap-5 w-full">
                    <div className="flex items-center gap-3">
                        <img src={linkdien} alt='linkdien' className='w-10' />
                        <img src={facebook} alt='facebook' className='w-10' />
                        <img src={twitter} alt='twitter' className='w-10' />
                    </div>
                    <hr className='w-full' />
                    <p className='md:text-lg'>© 2023 Positivus. All Rights Reserved.</p>
                </div>
            </div>
        </div >
    )
}

export default Footer

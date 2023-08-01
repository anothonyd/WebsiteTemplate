import { useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";


const Footer = () => {
    const [isAccordionOpen1, setAccordionOpen1] = useState(false);
    const [isAccordionOpen2, setAccordionOpen2] = useState(false);
    const [isAccordionOpen3, setAccordionOpen3] = useState(false);


    const handleAccordionClick1 = () => { setAccordionOpen1(!isAccordionOpen1); };
    const handleAccordionClick2 = () => { setAccordionOpen2(!isAccordionOpen2); };
    const handleAccordionClick3 = () => { setAccordionOpen3(!isAccordionOpen3); };
    return (
        <footer className="w-full max-w-7xl mx-auto p-2">
            <div className="container mx-auto py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:py-7">
                    {/* Column 2: Sitemap */}
                    <div className='grid md:grid-cols-3 space-y-1 md:space-y-0'>
                        <div className="text-black border-y-[1px] border-black  md:border-none pt-2 md:pt-0">
                            <h4 className="text-lg px-3 font-semibold mb-2 cursor-pointer" onClick={handleAccordionClick1}>
                                Sitemap
                            </h4>
                            <ul className={`${isAccordionOpen1 ? 'block' : 'hidden'} md:block`}>
                                <li className="mb-2 px-3">
                                    <a href="/">Home</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/about">About</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/services">Services</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Sample Content */}
                        <div className="text-black border-b-[1px] border-black  md:border-none">
                            <h4 className="text-lg px-3 font-semibold mb-2 cursor-pointer" onClick={handleAccordionClick2}>
                                Sitemap
                            </h4>
                            <ul className={`${isAccordionOpen2 ? 'block' : 'hidden'} md:block`}>
                                <li className="mb-2 px-3">
                                    <a href="/">Home</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/about">About</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/services">Services</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Sample Content */}
                        <div className="text-black border-b-[1px] border-black  md:border-none">
                            <h4 className="text-lg px-3 font-semibold mb-2  cursor-pointer" onClick={handleAccordionClick3}>
                                Sitemap
                            </h4>
                            <ul className={`${isAccordionOpen3 ? 'block' : 'hidden'} md:block`}>
                                <li className="mb-2 px-3">
                                    <a href="/">Home</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/about">About</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/services">Services</a>
                                </li>
                                <li className="mb-2 px-3">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Column 1: Logo */}
                    <div className="text-black flex justify-center md:justify-end w-full">
                        <img src="src/assets/react.svg" alt="Logo" className="h-8 md:h-20" />
                    </div>
                </div>
            </div>
            <hr className="hidden md:block"
                style={{
                    height: '1px',
                    backgroundColor: '#262626',
                    border: 'none',
                }} />
            <div className="w-full py-3 md:pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Column 1: Copyright */}
                    <div className="text-black text-center md:text-left">
                        <p data-tooltip-id="tooltip" className='cursor pointer'><a href="https://anthonydulguime.vercel.app/" target="_blank" rel="noopener noreferrer">&copy; 2023 Anthony Dulguime. All rights reserved.</a></p>
                        <ReactTooltip
                            id="tooltip"
                            place="top-start"
                            content="Click to view Developer's Portfolio."
                        />
                    </div>

                    {/* Column 2: Social Links */}
                    <div className="text-black text-center md:text-right">
                        <ul className="flex justify-center md:justify-end space-x-6">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square text-2xl text-black"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter-square text-2xl text-black"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram-square text-2xl text-black"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>        </footer>
    );
};

export default Footer;

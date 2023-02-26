import Link from 'next/link'
import React, { useEffect } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
            display: "block",
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.1, delay: 0 },
            display: "none",
        },
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsOpen(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className="flex px-4 items-center max-w-screen-xl mx-auto justify-between py-2 relative">
            <div className="text-lg font-bold md:py-2 py-1.5 cursor-pointer tracking-wider">
                <Link href="/">
                    IntelliDocs!
                </Link>
            </div>
            <div className='hidden gap-2 sm:flex font-semibold text-[15px] tracking-wide items-center'>
                <Link href="/" className="flex items-center hover:bg-gray-100 py-2 px-3.5 rounded-lg cursor-pointer">
                    <span>Home</span>
                </Link>
                <Link href="/blogs" className="flex items-center hover:bg-gray-100 py-2 px-3.5 rounded-lg ">
                    <span>Blogs</span>
                </Link>
                <Link href="/chatgpt" className="flex items-center hover:bg-gray-100 py-2 px-3.5 rounded-lg">
                    <span>ChatGPT</span>
                </Link>
                <Link href="/ai-tools" className="flex items-center hover:bg-gray-100 py-2 px-3.5 rounded-lg">
                    <span>AI Tools</span>
                </Link>
            </div>
            <div className='flex sm:hidden items-center'  >
                <HiOutlineMenuAlt3 size={23} className='text-black' onClick={handleButtonClick} />
            </div>


            <motion.div
                variants={menuVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                className=" sm:hidden absolute w-full top-8 py-4 right-0 left-0 block" >
                <div className="flex flex-col py-6 mt-[8px] gap-4 bg-gray-50 font-medium border-y ">
                    <Link href="/" className='flex hover:bg-gray-100 justify-between px-4 items-center' onClick={() => setIsOpen(false)}>
                        <div className="block py-2 text-black rounded ">Home</div>
                        <RiArrowDropRightLine size={30} />
                    </Link>
                    <Link href="/blogs" className='flex hover:bg-gray-100 justify-between px-4 items-center' onClick={() => setIsOpen(false)}>
                        <div className="block py-2 text-black rounded ">Blogs</div>
                        <RiArrowDropRightLine size={30} />
                    </Link>
                    <Link href="/chatgpt" className='flex hover:bg-gray-100 justify-between px-4 items-center' onClick={() => setIsOpen(false)}>
                        <div className="block py-2 text-black rounded ">ChatGPT</div>
                        <RiArrowDropRightLine size={30} />
                    </Link>
                    <Link href="/ai-tools" className='flex hover:bg-gray-100 justify-between px-4 items-center' onClick={() => setIsOpen(false)}>
                        <div className="block py-2 text-black rounded ">AI Tools</div>
                        <RiArrowDropRightLine size={30} />
                    </Link>

                </div>
            </motion.div>

        </nav>
    )
}

export default Navbar
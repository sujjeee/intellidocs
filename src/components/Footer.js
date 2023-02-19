import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer aria-label="Site Footer" className="bg-white">
                <div className="max-w-screen-xl px-4  mx-auto ">

                    <div
                        className=" sm:flex sm:items-center sm:justify-between "
                    >
                        <nav aria-label="Footer Navigation - Support">
                            <ul className="flex flex-wrap justify-center gap-5 lg:justify-end font-semibold tracking-wide text-xs">
                                <li>
                                    <Link href={`/about`} className="text-gray-500 transition hover:opacity-75">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/about`} className="text-gray-500 transition hover:opacity-75">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/about`} className="text-gray-500 transition hover:opacity-75">
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <Link href={`/privacy/policy`} className="text-gray-500 transition hover:opacity-75">
                                        Terms and Conditions
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                                        Terms & Conditions
                                    </a>
                                </li> */}
                            </ul>
                        </nav>

                        <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                            <li>
                                <Link href={`/`} className="text-gray-500 text-sm tracking-wide hover:opacity-75 font-semibold">
                                    © 2023. IntelliDocs. All rights reserved.
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
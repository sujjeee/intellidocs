import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Head from 'next/head';
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const contact = () => {

    const [verified, setVerified] = useState(false)
    const [userDetails, setUserDetails] = useState({ fullname: "", email: "", message: "" })

    const onChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { fullname, email, message } = userDetails
        console.log('youre ', fullname, email, message)
        const res = await addDoc(collection(db, 'emails'), {
            name: fullname,
            email: email,
            message: message,
            timestamp: serverTimestamp()
        });
        if (res) {
            e.target.reset();
            setUserDetails({ fullname: "", email: "", message: "" })
            window.location.reload();
        }
    }

    function onCaptcha(value) {
        console.log("Captcha value:", value);
        setVerified(true)
    }
    return (
        <>
            <Head>
                <title>Contact us - IntelliDocs</title>
                <meta name="description" content="Get in touch with us! Fill out the contact form and we'll be in touch shortly. We look forward to hearing from you." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Intellidocs" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact us - IntelliDocs" />
                <meta property="og:description" content="Get in touch with us! Fill out the contact form and we'll be in touch shortly. We look forward to hearing from you." />
                <meta property="og:url" content='https://intellidocs.vercel.app/info/contact' />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <div className="bg-white pt-12 pb-16 px-4 overflow-hidden sm:px-6 lg:px-8 ">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl">Contact us</h2>
                        <p className="mt-4 text-base md:text-lg leading-6 text-gray-500">
                            Get in touch with us! Fill out the contact form and we'll be in touch shortly. We look forward to hearing from you.
                        </p>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className='sm:col-span-2'>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Full name
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={userDetails.name}
                                        onChange={onChange}
                                        type="text"
                                        name="fullname"
                                        id='fullname'
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md"
                                        placeholder='enter your name'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={userDetails.email}
                                        onChange={onChange}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md"
                                        placeholder='email your email'
                                        // pattern=".+@gmail\.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        value={userDetails.message}
                                        type="text"
                                        onChange={onChange}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                        placeholder='type your message here...'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='sm:col-span-2 flex items-center justify-center'>
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
                                    onChange={onCaptcha}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type='submit'
                                    className={`${verified ? 'cursor-pointer' : 'cursor-not-allowed'} w-full inline-flex tracking-wide items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70`}
                                    disabled={!verified}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
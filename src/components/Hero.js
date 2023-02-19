import React from 'react'

const Hero = () => {
    return (
        <section className='max-w-screen-xl mx-auto'>
            <div className=" h-[28rem] ">
                <div className=" container mx-auto px-4 flex h-full py-6 items-center justify-center">
                    <div className=" max-w-[500px] text-center">
                        <p className=" text-blue-600 uppercase  tracking-[3px] font-semibold">IntelliDocs</p>
                        <h2 className=" text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-gray-800">Documenting the Power of AI</h2>
                        <p className=" text-gray-500 mt-4 text-sm sm:text-base md:text-lg">Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation. Join us today!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
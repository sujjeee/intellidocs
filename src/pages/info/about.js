import Head from 'next/head'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>About us - IntelliDocs</title>
                <meta name="description" content="we share amazing information and tools related to Artificial Intelligence (AI)." />
                <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Intellidocs" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="About us - IntelliDocs" />
                <meta property="og:description" content="we share amazing information and tools related to Artificial Intelligence (AI)." />
                {/* <meta property="og:url" content="URL of your about page" /> */}
                <meta property="og:url" content='https://intellidocs.vercel.app/info/about' />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <main className='max-w-screen-xl mx-auto items-center justify-between px-4 py-7'>
                <section>
                    <div className='md:max-w-[750px] mb-3 text-base text-gray-700 w-full sm:text-lg prose mx-auto'>
                        <h2 className='font-bold text-2xl tracking-wide text-gray-800  py-2 md:py-4'>About us</h2>
                        <p>Welcome to our website, where we share amazing information and tools related to Artificial Intelligence (AI).</p>

                        <p>Our goal is to help you stay up-to-date with the latest developments in the field of AI, and provide you with the tools and knowledge you need to leverage this powerful technology in your daily life.</p>

                        <p>At our website, you will find tips and tricks for using AI to increase your productivity, streamline your workflow, and achieve your goals more effectively. We also provide in-depth coverage of the latest AI news and trends, including insights into how this technology is being used in a variety of industries and applications.</p>

                        <p>Whether you're an AI enthusiast, a business owner looking to implement AI in your organization, or simply someone who wants to stay informed about this exciting field, our website has something for you.</p>

                        <p> In addition to our informative articles and resources, we also offer a range of AI tools and services that can help you unlock the full potential of this technology. From chatbots to predictive analytics, our tools are designed to help you make the most of your AI investment.</p>

                        <p>So take a look around, and discover all the amazing things that AI has to offer. We're excited to share our knowledge and expertise with you, and help you become an AI rockstar!</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default about
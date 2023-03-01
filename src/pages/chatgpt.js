import RelatedCard from '@/components/RelatedCard'
import { getPosts } from '@/services';
import Head from 'next/head';
import React from 'react'

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: { posts }
    };

}
const chatgpt = ({ posts }) => {
    const ChatGPTPosts = posts.filter(post => post.category.some(cate => cate.name === "chatgpt"));
    return (
        <>
            <Head>
                <title>Learn More about chatGPT - IntelliDocs</title>
                <meta name="description" content="Learn brief details and how to use ChatGPT in a professional way to increase productivity." />
                <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="twitter:card" content="Learn brief details and how to use ChatGPT in a professional way to increase productivity." />
                <meta name="twitter:title" content="Learn More about chatGPT - IntelliDocs" />
                <meta name="twitter:description" content="Learn brief details and how to use ChatGPT in a professional way to increase productivity." />
                <meta name="twitter:image" content='https://intellidocs.vercel.app/images/chatgpt.png' />
                <meta name="twitter:url" content='https://intellidocs.vercel.app/chatgpt' />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Learn More about chatGPT - IntelliDocs" />
                <meta property="og:description" content="Learn brief details and how to use ChatGPT in a professional way to increase productivity." />
                <meta property="og:image" content='https://intellidocs.vercel.app/images/chatgpt.png' />
                <meta property="og:url" content='https://intellidocs.vercel.app/chatgpt' />

                <link rel="canonical" href="https://intellidocs.vercel.app/blogs" key="canonical" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <div className='max-w-screen-xl mx-auto flex items-center justify-center px-4 py-7 md:py-9'>
                <h2 className='font-bold text-xl sm:text-2xl tracking-wide'>More about <span className='text-blue-500'>ChatGPT</span></h2>
            </div>
            <section className='max-w-screen-xl  mx-auto px-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-12 ' >
                {ChatGPTPosts.map((post, index) => {
                    return (
                        <div key={index}>
                            <RelatedCard posts={post} />
                        </div>
                    )
                })}
            </section>

        </ >
    )
}

export default chatgpt
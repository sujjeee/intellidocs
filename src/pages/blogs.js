import RelatedCard from '@/components/RelatedCard'
import { getPosts } from '@/services';
import React from 'react'
import Head from 'next/head';

export async function getStaticProps() {
    const posts = await getPosts({});

    return {
        props: { posts }
    };

}

const blogs = ({ posts }) => {
    return (
        <>
            <Head>
                <title>IntelliDocs Blogs - Documenting the Power of AI</title>
                <meta name="description" content="Discover the latest AI tools and boost your productivity with our tips and tricks and many more things to fun with AI." />
                <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="twitter:card" content="Discover the latest AI tools and boost your productivity with our tips and tricks and many more things to fun with AI." />
                <meta name="twitter:title" content="IntelliDocs Blogs - Documenting the Power of AI" />
                <meta name="twitter:description" content="Discover the latest AI tools and boost your productivity with our tips and tricks and many more things to fun with AI." />
                <meta name="twitter:image" content='https://intellidocs.vercel.app/images/intellidocs.png' />
                <meta name="twitter:url" content='https://intellidocs.vercel.app/blogs' />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="IntelliDocs Blogs - Documenting the Power of AI" />
                <meta property="og:description" content="Discover the latest AI tools and boost your productivity with our tips and tricks and many more things to fun with AI." />
                <meta property="og:image" content='https://intellidocs.vercel.app/images/intellidocs.png' />
                <meta property="og:url" content='https://intellidocs.vercel.app/blogs' />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <div className='max-w-screen-xl mx-auto flex items-center justify-center px-4 py-7 md:py-9'>
                <h2 className='font-bold text-xl sm:text-2xl tracking-wide'>Explore the <span className='text-blue-500'>Blogs</span></h2>
            </div>
            <section className='max-w-screen-xl  mx-auto px-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-12 ' >
                {posts.map((post, index) => {
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

export default blogs
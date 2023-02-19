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
const aifun = ({ posts }) => {
    const aiPosts = posts.filter(post => post.category.some(cate => cate.name === "ai"));
    return (
        <div>
            <Head>
                <title>Fun with AI Tools - IntelliDocs</title>
                <meta name="description" content="Explore fun AI tools, learn useful tips and tricks, and discover new ways to use AI technology." />
                <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="twitter:card" content="Explore fun AI tools, learn useful tips and tricks, and discover new ways to use AI technology." />
                <meta name="twitter:title" content="Fun with AI Tools - IntelliDocs" />
                <meta name="twitter:description" content="Explore fun AI tools, learn useful tips and tricks, and discover new ways to use AI technology." />
                <meta name="twitter:image" content='https://intellidocs.vercel.app/images/ai-fun.png' />
                <meta name="twitter:url" content='https://intellidocs.vercel.app/ai-fun' />


                <meta property="og:title" content="Fun with AI Tools - IntelliDocs" />
                <meta property="og:description" content="Explore fun AI tools, learn useful tips and tricks, and discover new ways to use AI technology." />
                <meta property="og:image" content='https://intellidocs.vercel.app/images/ai-fun.png' />
                <meta property="og:url" content='https://intellidocs.vercel.app/ai-fun' />

                <link rel="canonical" href="https://intellidocs.vercel.app/blogs" key="canonical" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>

            <div className='max-w-screen-xl mx-auto flex items-center justify-center px-4 py-7 md:py-9'>
                <h2 className='font-bold text-xl sm:text-2xl tracking-wide'>Fun with <span className='text-blue-500'>AI Tools</span></h2>
            </div>
            <section className='max-w-screen-xl  mx-auto px-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-12 ' >
                {aiPosts.map((post, index) => {
                    return (
                        <div key={index}>
                            <RelatedCard posts={post} />
                        </div>
                    )
                })}

            </section>

        </div >
    )
}

export default aifun
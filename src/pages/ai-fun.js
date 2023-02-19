import BlogCard from '@/components/BlogCard'
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
                <title>{posts[0].title}</title>
                {/* <meta name="description" content={posts[0].description} />

                <meta name="twitter:card" content={posts[0].description} />
                <meta name="twitter:title" content={posts[0].title} />
                <meta name="twitter:description" content={posts[0].description} />
                <meta name="twitter:image" content={posts[0].coverImg.url} />


                <meta property="og:title" content={posts[0].title} />
                <meta property="og:description" content={posts[0].description} />
                <meta property="og:image" content={posts[0].coverImg.url} />
                <meta property="og:url" content={`http://localhost:3000/${posts[0].slug}`} /> */}


                {/* add keyword in cms */}

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="chatgpt, ai " />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://example.com/blogs" key="canonical" />
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
import BlogPost from '@/components/BlogPost'
import PopularPosts from '@/components/PopularPosts'
import SimilarPosts from '@/components/SimilarPosts'
import { getPostDetail, getPostsSlug } from '@/services'
import Head from 'next/head'
import React from 'react'
import NotFound from './404'

export async function getStaticProps({ params }) {
    const slugQuery = params.slug
    const posts = await getPostDetail(slugQuery);
    // console.log('all details', posts)

    return {
        props: { posts },
    };

}

export async function getStaticPaths() {
    const allPosts = await getPostsSlug();
    // console.log('aall slugs', allPosts)
    if (!allPosts) {
        return {
            notFound: true,
        };
    }
    return {
        paths: allPosts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: "blocking",
    };
}

const slug = ({ posts }) => {

    if (!posts || !posts.length) {
        return <NotFound />;
    }
    // const blog = posts.map((post) => { return post })
    // console.log("first", posts)
    // console.log('blog data', posts.map((post) => { return post.relatedPosts.flatMap((post) => post) }))
    function blogJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": ${posts[0].title},
                "image": {
                    "@type": "ImageObject",
                    "url": ${posts[0].coverImg.url},
                    "width": 600,
                    "height": 300
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "IntelliDocs",
                    "url": "https://intellidocs.vercel.app/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://intellidocs.vercel.app/logo.png",
                        "width": "250",
                        "height": "250"
                    }
                },
                "url": ${`https://intellidocs.vercel.app/${posts[0].slug}`},
                "description": ${posts[0].description},
                "datePublished": ${posts[0].createdAt},
                "dateModified": ${posts[0].updatedAt},
                "author": {
                    "@type": "Person",
                    "name": "IntelliDocs",
                    "url": "https://intellidocs.vercel.app/"
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.intellidocs.vercel.app/blogs"
                },
                "keywords": [
                    "chatGPT",
                    "Ai tools",
                    "Future of ai",
                    "AI tools",
                    "artificial intelligence",
                    "chatbot",
                    "GPT",
                    "deep learning", 
                    "AI technologies",
                    " AI solutions". 
                ],
            }`,
        };
    }

    return (
        <>
            <Head>
                <title>{posts[0].title}</title>
                <meta name="description" content={posts[0].description} />

                <meta name="twitter:card" content={posts[0].description} />
                <meta name="twitter:title" content={posts[0].title} />
                <meta name="twitter:description" content={posts[0].description} />
                <meta name="twitter:image" content={posts[0].coverImg.url} />
                <meta name="twitter:url" content={`https://intellidocs.vercel.app/${posts[0].slug}`} />

                <meta property="og:type" content="blog" />
                <meta property="og:title" content={posts[0].title} />
                <meta property="og:description" content={posts[0].description} />
                <meta property="og:image" content={posts[0].coverImg.url} />
                <meta property="og:url" content={`https://intellidocs.vercel.app/${posts[0].slug}`} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={blogJsonLd()}
                    key="blog-jsonld"
                />
            </Head>

            <style global jsx>{`
                body {
                background-color: #f7f7f7;
                }
            `}</style>

            <div className='max-w-screen-xl mx-auto lg:py-4 lg:px-4 lg:flex justify-between gap-5'>
                <div className='lg:max-w-[820px] border lg:px-20 bg-white '>
                    <div>
                        {posts.map((post, index) => {
                            return (
                                <div key={index}>
                                    <BlogPost posts={post} />
                                </div>
                            )
                        })}

                    </div>
                    <div className='px-4 lg:px-0'>
                        <h2 className='text-xl font-bold pb-5'>Related posts</h2>
                        <div className='pb-8 grid sm:grid-cols-2 gap-3' >
                            {posts.flatMap((post) => post.relatedPosts.map((relatedPost, key) => (
                                <div key={key}>
                                    <SimilarPosts posts={relatedPost} />
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
                <div className=' h-fit pb-4 border bg-white lg:sticky lg:top-[75px] my-3 lg:my-0'>
                    <div className='w-full lg:w-[400px]'>
                        <div className='border-b px-4 lg:px-6 py-3 mb-2.5'>
                            <h3 className='text-lg font-bold tracking-wide'>Popular stories</h3>
                        </div>
                        <div className=' justify-between'>
                            {posts.flatMap((post) => post.popularPosts.map((popularPost, key) => (
                                <div key={key}>
                                    <PopularPosts posts={popularPost} />
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default slug
import BlogCard from '@/components/BlogCard'
import BlogPost from '@/components/BlogPost'
import PopularPosts from '@/components/PopularPosts'
import RelatedCard from '@/components/RelatedCard'
import { getPostDetail, getPosts } from '@/services'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export async function getStaticProps({ params }) {
    const slugQuery = params.slug
    const posts = await getPostDetail(slugQuery);
    // console.log('all details', posts)

    return {
        props: { posts },
    };

}

export async function getStaticPaths() {
    const allPosts = await getPosts();
    // console.log('aall slugs', allPosts)
    return {
        paths: allPosts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

const slug = ({ posts }) => {
    // const blog = posts.map((post) => { return post })
    // console.log('blog data', posts.map((post) => { return post.relatedPosts.flatMap((post) => post) }))
    // function blogJsonLd() {
    //     return {
    //         __html: `{
    //             "@context": "https://schema.org",
    //             "@type": "BlogPosting",
    //             "headline": ${posts[0].title},
    //             "image": {
    //                 "@type": "ImageObject",
    //                 "url": ${posts[0].coverImg.url},
    //                 "width": 1200,
    //                 "height": 630
    //             },
    //             "publisher": {
    //                 "@type": "Organization",
    //                 "name": "IntelliDocs",
    //                 "url": "https://dataliberate.com",
    //                 "logo": {
    //                     "@type": "ImageObject",
    //                     "url": "https://www.myblog.com/logo.png",
    //                     "width": "1200",
    //                     "height": "630"
    //                 }
    //             },
    //             "url": ${`http://localhost:3000/${posts[0].slug}`},
    //             "description": ${posts[0].description},
    //             "datePublished": "2023-02-10T09:00:00Z",
    //             "dateModified": "2023-02-10T12:00:00Z",
    //             "author": {
    //                 "@type": "Person",
    //                 "name": "Author Name",
    //                 "url": "https://benborgers.com"
    //             },
    //             "mainEntityOfPage": {
    //                 "@type": "WebPage",
    //                 "@id": "https://www.intellidocs.vercel.app"
    //             },
    //             "keywords": [
    //                 "chatGPT",
    //                 "Ai tools",
    //                 "Future of ai"
    //             ],
    //         }`,
    //     };
    // }
    return (

        <>
            <Head>
                <title>{posts[0].title}</title>
                <meta name="description" content={posts[0].description} />

                <meta name="twitter:card" content={posts[0].description} />
                <meta name="twitter:title" content={posts[0].title} />
                <meta name="twitter:description" content={posts[0].description} />
                <meta name="twitter:image" content={posts[0].coverImg.url} />


                <meta property="og:title" content={posts[0].title} />
                <meta property="og:description" content={posts[0].description} />
                <meta property="og:image" content={posts[0].coverImg.url} />
                <meta property="og:url" content={`http://localhost:3000/${posts[0].slug}`} />


                {/* add keyword in cms */}

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="chatgpt, ai " />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://example.com/blogs" key="canonical" />
                {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={blogJsonLd()}
                    key="blog-jsonld"
                /> */}
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
                                    <RelatedCard posts={relatedPost} />
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
                        <div className='px-4 lg:px-6 justify-between'>
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
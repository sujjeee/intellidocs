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
    const keywords_list = posts[0].keywords.split(",")
    // const blog = posts.map((post) => { return post })
    // console.log("first", posts)
    // console.log('blog data', posts.map((post) => { return post.relatedPosts.flatMap((post) => post) }))


    const blogJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": [
                    "Person",
                    "Organization"
                ],
                "@id": "https://intellidocs.vercel.app/#organization",
                "name": "IntelliDocs",
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://intellidocs.vercel.app/#logo",
                    "url": "https://intellidocs.vercel.app/logo.png",
                    "contentUrl": "https://intellidocs.vercel.app/logo.png",
                    "caption": "IntelliDocs",
                    "inLanguage": "en-US"
                },
                "image": {
                    "@type": "ImageObject",
                    "@id": "https://intellidocs.vercel.app/#logo",
                    "url": "https://intellidocs.vercel.app/logo.png",
                    "contentUrl": "https://intellidocs.vercel.app/logo.png",
                    "caption": "IntelliDocs",
                    "inLanguage": "en-US"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://intellidocs.vercel.app/#website",
                "url": "https://intellidocs.vercel.app/",
                "name": "IntelliDocs",
                "publisher": {
                    "@id": "https://intellidocs.vercel.app/#organization"
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "ImageObject",
                "@id": posts[0].coverImg.url,
                "url": posts[0].coverImg.url,
                "width": "620",
                "height": "340",
                "caption": posts[0].title,
                "inLanguage": "en-US"
            },
            {
                "@type": "WebPage",
                "@id": `https://intellidocs.vercel.app/${posts[0].slug}/#webpage`,
                "url": `https://intellidocs.vercel.app/${posts[0].slug}`,
                "name": posts[0].title,
                "datePublished": posts[0].createdAt,
                "dateModified": posts[0].updatedAt,
                "isPartOf": {
                    "@id": "https://intellidocs.vercel.app/#website"
                },
                "primaryImageOfPage": {
                    "@id": posts[0].coverImg.url
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "Person",
                "@id": "https://intellidocs.vercel.app/info/about",
                "name": "IntelliDocs Team",
                "url": "https://intellidocs.vercel.app/info/about",
                "image": {
                    "@type": "ImageObject",
                    "@id": "https://intellidocs.vercel.app/logo.png",
                    "url": "https://intellidocs.vercel.app/logo.png",
                    "caption": "IntelliDocs Team",
                    "inLanguage": "en-US"
                },
                "sameAs": [
                    "https://intellidocs.vercel.app"
                ]
            },
            {
                "@type": "BlogPosting",
                "headline": posts[0].title,
                "keywords": keywords_list,
                "datePublished": posts[0].createdAt,
                "dateModified": posts[0].updatedAt,
                "articleSection": "TECHNOLOGY",
                "author": {
                    "@id": "https://intellidocs.vercel.app/info/about",
                    "name": "IntelliDocs Team"
                },
                "publisher": {
                    "@id": "https://intellidocs.vercel.app/#organization",
                },
                "description": posts[0].description,
                "url": `https: //intellidocs.vercel.app/${posts[0].slug}`,
                "name": posts[0].title,
                "@id": `https://intellidocs.vercel.app/${posts[0].slug}/#richSnippet`,
                "isPartOf": {
                    "@id": `https://intellidocs.vercel.app/${posts[0].slug}/#webpage`
                },
                "image": {
                    "@id": posts[0].coverImg.url,
                },
                "inLanguage": "en-US",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://intellidocs.vercel.app/${posts[0].slug}/#webpage`
                }
            }
        ]
    }


    return (
        <>
            <Head>
                <title>{posts[0].title}</title>
                <meta name="google-site-verification" content="5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs" />
                <meta name="description" content={posts[0].description} />
                <meta name="keywords" content={posts[0].keywords} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

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
                <meta property="og:site_name" content="Intellidocs" />
                <meta property="og:image:alt" content={posts[0].title} />

                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={`https://intellidocs.vercel.app/${posts[0].slug}`} />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
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
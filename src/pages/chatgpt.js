import BlogCard from '@/components/BlogCard'
import RelatedCard from '@/components/RelatedCard'
import { getPosts } from '@/services';
import React from 'react'

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: { posts }
    };

}
const chatgpt = ({ posts }) => {
    const ChatGPTPosts = posts.filter(post => post.category.some(cate => cate.name === "chatgpt"));
    // console.log("first", aiPosts)
    return (
        <div>
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

        </div >
    )
}

export default chatgpt
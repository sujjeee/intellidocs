import RelatedCard from '@/components/RelatedCard'
import { getPosts, getPostsByCategory } from '@/services';
import React from 'react'



export async function getStaticProps() {
    const posts = await getPosts({});

    return {
        props: { posts }
    };

}

const blogs = ({ posts }) => {
    return (
        <div>
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
        </div >
    )
}

export default blogs
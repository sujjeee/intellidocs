import React from 'react'
import parse from 'html-react-parser';


const BlogPost = ({ posts }) => {
    return (

        <article className='w-full mb-3 '>
            <div className="w-full">
                <div className='p-4 sm:py-8 lg:px-0 '>
                    <header>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl md:tracking-wide text-black font-bold'>{posts.title}</h1>
                        <div className='pt-5 pb-8'>
                            <time className="text-xs text-gray-400 font-medium tracking-wide">
                                Posted on january 23, 2022
                            </time>
                        </div>
                    </header>
                    <div className="mb-3 text-base text-gray-700 w-full sm:text-lg prose max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-md prose-img:max-h-[400px] prose-img:shadow-lg prose-h6:text-xl prose-h6:text-black prose-h6:font-semibold">
                        {parse(posts.content?.html)}
                    </div>
                </div>
            </div>
        </article>

    )
}

export default BlogPost
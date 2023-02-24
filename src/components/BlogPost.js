import React from 'react'
import parse, { Element } from 'html-react-parser';
import Image from 'next/image';


const BlogPost = ({ posts }) => {
    return (

        <article className='w-full mb-3 '>
            <div className="w-full">
                <div className='p-4 sm:py-8 lg:px-0 '>
                    <header>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl md:tracking-wide text-black font-bold'>{posts.title}</h1>
                        <div className='pt-5 pb-8'>
                            <time className="text-xs text-gray-500 font-medium tracking-wide">
                                Posted on january 23, 2022
                            </time>
                        </div>
                    </header>
                    <div className="mb-3 text-base text-gray-700 w-full sm:text-lg prose max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-md prose-img:max-h-[400px] prose-img:shadow-md prose-h3:text-lg prose-h2:text-xl prose-h2:text-black prose-h3:text-black prose-h3:font-medium prose-h2:font-semibold">
                        {parse(posts.content?.html, {
                            replace: (domNode) => {
                                if (domNode instanceof Element && domNode.name === "img") {
                                    return (
                                        <Image
                                            alt={domNode.attribs.alt}
                                            src={domNode.attribs.src}
                                            height={500}
                                            width={800}
                                            priority
                                        />
                                    );
                                }
                            },
                        })}
                    </div>
                </div>
            </div>
        </article>

    )
}

export default BlogPost
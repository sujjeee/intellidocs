import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
    return (
        <section className='max-w-screen-xl mx-auto '>
            <div className='flex flex-wrap items-center justify-center sm:justify-between'>
                <Link href="/slug" className='pb-12'>
                    <Image
                        alt="Art"
                        src={`https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
                        className="h-60 rounded-lg shadow-lg w-full object-cover"
                        width={500}
                        height={500}
                    // unoptimized

                    />

                    <h3 className="mt-4 text-lg max-w-sm font-bold text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>

                    {/* <p className="mt-2 max-w-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
                        sequi ipsam incidunt.
                    </p> */}
                </Link>
            </div>
        </section>
    )
}

export default BlogCard
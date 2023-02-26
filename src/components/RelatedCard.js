import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RelatedCard = ({ posts }) => {
    // console.log('my posts', posts)
    return (
        <div >
            <Link href={`/${encodeURIComponent(posts.slug)}`}>
                <div
                    className="mx-auto w-full  bg-white border border-gray-200 rounded-md cursor-pointer">
                    <div>
                        <Image
                            className="w-full h-[200px] rounded-t-md object-cover hover:opacity-90"
                            src={posts.coverImg.url}
                            alt={posts.title}
                            height={300}
                            width={600}
                            priority
                        />
                    </div>
                    <div className="p-4 ">
                        <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-900 hover:text-blue-800 h-full ">
                            {posts.title}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RelatedCard

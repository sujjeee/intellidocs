import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PopularPosts = ({ posts }) => {
    return (
        <div>
            <Link href={`/${encodeURIComponent(posts.slug)}`}>
                <div className="flex py-2">
                    <Image
                        className="w-20 max-h-14 rounded"
                        src={posts.coverImg.url}
                        height={200}
                        width={500}
                        loading="lazy"
                        alt={posts.title} />
                    <div className="pl-4">
                        <h3 className="text-base font-medium">{posts.title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PopularPosts
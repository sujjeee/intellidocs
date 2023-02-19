import { getPosts } from '@/services';
import RSS from 'rss';

export default function Rss() { }

export async function getServerSideProps({ res }) {

    const allPosts = await getPosts();
    const feed = new RSS({
        title: 'IntelliDocs',
        description: 'The latest news and insights from my blog',
        link: 'http://localhost:3000',
        language: 'en-US',
        copyright: '© 2023 IntelliDocs. All rights reserved.'
    })

    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: 'http://localhost:3000',
            guid: `http://localhost:3000/${post.slug}`,
        })
    })

    res.setHeader('Content-Type', 'text/xml')
    res.write(feed.xml())
    res.end()

    return {
        props: {},
    };
}

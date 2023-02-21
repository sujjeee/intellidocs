import { getPosts } from '@/services';
import RSS from 'rss';

export default function Rss() { }

export async function getServerSideProps({ res }) {
    const allPosts = await getPosts();
    const feed = new RSS({
        title: 'IntelliDocs',
        description: 'Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation.',
        site_url: "https://intellidocs.vercel.app",
        url: "https://intellidocs.vercel.app/rss.xml",
        language: "en-US",
        copyright: '© 2023 IntelliDocs. All rights reserved.'
    })

    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: `https://intellidocs.vercel.app/${post.slug}`,
            guid: `https://intellidocs.vercel.app/${post.slug}`,
        })
    })

    res.setHeader('Content-Type', 'text/xml')
    res.write(feed.xml())
    res.end()

    return {
        props: {},
    };
}

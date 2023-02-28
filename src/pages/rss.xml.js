import { getFeedPosts } from '@/services';
import moment from 'moment';
import RSS from 'rss';

export default function Rss() { }

export async function getServerSideProps({ res }) {
    const allPosts = await getFeedPosts();
    const feed = new RSS({
        title: 'IntelliDocs',
        description: 'Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation.',
        feed_url: 'https://intellidocs.vercel.app/rss.xml',
        site_url: "https://intellidocs.vercel.app",
        language: "en-US",
        copyright: '© 2023 IntelliDocs. All rights reserved.'
    })

    allPosts.map((post) => {
        // console.log("all dates", post)
        feed.item({
            title: post.title,
            date: moment(post.updatedAt).format("MMMM DD, YYYY HH:mm:ss [GMT]"),
            custom_elements: [
                {
                    'content:encoded': {
                        _cdata: post.content.html
                    },
                },
            ],
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

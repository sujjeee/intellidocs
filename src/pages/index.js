import Hero from '@/components/Hero'
import RelatedCard from '@/components/RelatedCard';
import { getPosts } from '@/services';
import Head from 'next/head'
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts }
  };

}

export default function Home({ posts }) {
  // console.log('all is here', posts)
  // function homeJsonLd() {
  //   return {
  //     __html: `{
  //       "@context": "https://schema.org",
  //       "@type": "WebSite",
  //       "name": "My Blog",
  //       "url": "https://www.myblog.com/",
  //       "description": "A blog about various topics.",
  //       "publisher": {
  //         "@type": "Organization",
  //         "name": "My Blog",
  //         "logo": {
  //           "@type": "ImageObject",
  //           "url": "https://www.myblog.com/logo.png"
  //         }
  //       }
  //     }`,
  //   };
  // }
  return (
    <>
      <Head>
        <title>IntelliDocs</title>
        <meta name="description" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="twitter:card" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        <meta name="twitter:title" content="IntelliDocs" />
        <meta name="twitter:description" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        {/* <meta name="twitter:image" content={posts[0].coverImg.url} /> */}


        <meta property="og:title" content="IntelliDocs" />
        <meta property="og:description" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        {/* <meta property="og:image" content={posts[0].coverImg.url} /> */}
        <meta property="og:url" content={`http://localhost:3000/`} />
        <link rel="canonical" href="https://example.com/blogs" key="canonical" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={homeJsonLd()}
          key="home-jsonld"
        /> */}
      </Head>

      <main>
        <section>
          <div className='bg-gray-50'>
            <Hero />
          </div>
          <div className='py-7 sm:py-12'>
            <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 py-7'>
              <h2 className='font-bold text-xl tracking-wide text-gray-800'>Latest stories</h2>
              <Link href="/blogs" className='flex items-center'>
                <span className='font-semibold text-base tracking-wide text-blue-600 px-3 focus:outline-none'>Explore All</span>
                <HiOutlineArrowNarrowRight className='text-blue-500' />
              </Link>
            </div>
            <div className='max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 mx-auto px-4 gap-5'>
              {posts.map((post, index) => {
                return (
                  <div key={index}>
                    <RelatedCard posts={post} />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

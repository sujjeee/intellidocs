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
  function homeJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "IntelliDocs",
        "url": "https://intellidocs.vercel.app/",
        "description": "Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation.",
        "publisher": {
          "@type": "Organization",
          "name": "IntelliDocs",
          "logo": {
            "@type": "ImageObject",
            "url": "https://intellidocs.vercel.app/logo.png"
          }
        }
      }`,
    };
  }
  return (
    <>
      <Head>
        <title>IntelliDocs - Documenting the Power of AI</title>
        <meta name="google-site-verification" content="5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs" />
        <meta name="description" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        <meta name="keywords" content="AI tools, artificial intelligence, chatbot, GPT, deep learning, machine learning, natural language processing, NLP, neural networks, robotics, virtual assistants, automation, intelligent systems, data analytics, cognitive computing, speech recognition, image recognition, computer vision, predictive analytics, decision support systems, expert systems, knowledge engineering, chatbot development, conversational AI, AI-powered chatbots, chatbot platforms, AI assistants, AI algorithms, AI programming, AI applications, AI technologies, AI solutions. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="twitter:card" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        <meta name="twitter:title" content="IntelliDocs - Documenting the Power of AI" />
        <meta name="twitter:description" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        <meta name="twitter:image" content='https://intellidocs.vercel.app/images/intellidocs.png' />
        <meta name="twitter:url" content='https://intellidocs.vercel.app/' />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="IntelliDocs - Documenting the Power of AI" />
        <meta property="og:description" content="Discover the latest AI tools and boost your productivity with our tips and tricks. Explore the power of AI with our documentation." />
        <meta property="og:image" content='https://intellidocs.vercel.app/images/intellidocs.png' />
        <meta property="og:url" content='https://intellidocs.vercel.app/' />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={homeJsonLd()}
          key="home-jsonld"
        />
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

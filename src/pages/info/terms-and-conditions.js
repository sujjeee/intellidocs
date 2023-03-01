import Head from 'next/head'
import React from 'react'

const terms = () => {
    return (
        <>
            <Head>
                <title>Term and Conditions - IntelliDocs</title>
                <meta name="description" content="Terms and Conditions of Intellidocs" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Intellidocs" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Term and Conditions - IntelliDocs" />
                {/* <meta property="og:description" content="we share amazing information and tools related to Artificial Intelligence (AI)." /> */}
                <meta property="og:url" content='https://intellidocs.vercel.app/info/term-and-conditions' />
                {/* <meta property="og:image" content='https://intellidocs.vercel.app/term-and-conditions' /> */}

                <meta charset="UTF-8" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <main className='max-w-screen-xl mx-auto items-center justify-between px-4 py-7'>
                <section>
                    <div className='md:max-w-[750px] mb-3 text-base text-gray-700 w-full sm:text-lg prose mx-auto'>
                        <h2 className='font-bold text-2xl tracking-wide text-gray-800  py-2 md:py-4'>Terms and Conditions</h2>
                        <p>By accessing our website, you agree to the terms and conditions stated on this page. If you do not agree to these terms, please do not use our website.</p>

                        <p>The content on this website is for general information purposes only. We strive to provide accurate and up-to-date information, but we make no warranties or representations regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, or services on this website.</p>

                        <p>We may provide links to other websites that are not under our control. These links are provided for your convenience only and do not signify that we endorse these websites. We are not responsible for the content, policies, or practices of any third-party websites.</p>

                        <p>All images on this website that are not owned by us are licensed under the Creative Commons license or are otherwise in the public domain. We have made every effort to ensure that we have the right to use these images, but if you believe that an image on our website infringes on your copyright, please contact us and we will remove the image in question.</p>

                        <p>We use Google Analytics and Vercel Analytics to track website performance and visitor statistics. These services collect information such as your IP address, browser type, device type, and pages visited. This information is used to improve our website and to analyze trends. By using our website, you consent to the processing of your data by these services.</p>

                        <p>We reserve the right to modify or terminate our website at any time without notice. We are not liable for any damages or losses that may arise from the use or inability to use our website.</p>

                        <p>By using our website, you agree to indemnify and hold us harmless from any claims, damages, or other liabilities arising from your use of our website.</p>

                        <p>These terms and conditions are governed by the laws of IntelliDocs, and any dispute arising from the use of our website shall be resolved in accordance with those laws.</p>

                        <p>Thank you for visiting our website!</p>
                    </div>

                </section>
            </main>
        </>
    )
}

export default terms
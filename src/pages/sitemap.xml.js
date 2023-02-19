import { getPosts } from "@/services";

function generateSiteMap(allslugs) {
  console.log('getting slugs', allslugs)
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://intellidocs.vercel.app/</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/rss.xml</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/blog</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/chatgpt</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/ai-fun</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/about</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/contact</loc>
     </url>
     <url>
     <loc>https://intellidocs.vercel.app/privacy-policy</loc>
     </url>
     <url>
       <loc>https://intellidocs.vercel.app/terms-and-conditions</loc>
     </url>
     ${allslugs
      .map(({ slug }) => {
        return `
       <url>
           <loc>${`https://intellidocs.vercel.app/${slug}`}</loc>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}


export async function getServerSideProps({ res }) {
  const allPosts = await getPosts();
  // console.log('all sitemap', allPosts)

  const allslugs = allPosts.map((post) => ({ slug: post.slug }));
  // console.log('all slugs of sitemap', allslugs)
  const sitemap = generateSiteMap(allslugs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
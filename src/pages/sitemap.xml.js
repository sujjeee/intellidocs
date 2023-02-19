import { getPosts } from "@/services";

function generateSiteMap(allslugs) {
  console.log('getting slugs', allslugs)
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>http://localhost:3000/</loc>
     </url>
     <url>
       <loc>http://localhost:3000/blog</loc>
     </url>
     <url>
       <loc>http://localhost:3000/chatgpt</loc>
     </url>
     <url>
       <loc>http://localhost:3000/ai-fun</loc>
     </url>
     <url>
       <loc>http://localhost:3000/about</loc>
     </url>
     <url>
       <loc>http://localhost:3000/contact</loc>
     </url>
     <url>
     <loc>http://localhost:3000/privacy-policy</loc>
     </url>
     <url>
       <loc>http://localhost:3000/terms-and-conditions</loc>
     </url>
     ${allslugs
      .map(({ slug }) => {
        return `
       <url>
           <loc>${`https://localhost:3000/${slug}`}</loc>
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

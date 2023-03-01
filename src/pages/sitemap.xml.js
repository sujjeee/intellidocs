import { getPostsSlug } from "@/services";
import moment from "moment";

function generateSiteMap(allslugs) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://intellidocs.vercel.app/</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/blogs</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/chatgpt</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/ai-tools</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/info/about</loc>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/info/contact</loc>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/info/privacy-policy</loc>
      </url>
      <url>
        <loc>https://intellidocs.vercel.app/info/terms-and-conditions</loc>
      </url>
      ${allslugs
      .map(({ slug, date }) => {
        return `
       <url>
           <loc>${`https://intellidocs.vercel.app/${encodeURI(slug)}`}</loc>
           <lastmod>${moment(date).format("YYYY-MM-DD")}</lastmod>
           <changefreq>daily</changefreq>
           <priority>1.0</priority>
       </url>
     `;
      })
      .join('')}
    </urlset>
 `;
}

function SiteMap() { }


export async function getServerSideProps({ res }) {

  const allPosts = await getPostsSlug();
  const allslugs = allPosts.map((post) => ({ slug: post.slug, date: post.updatedAt }));
  const sitemap = generateSiteMap(allslugs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

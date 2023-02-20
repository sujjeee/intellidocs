import path from "path";

export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.SECRET) {
        return res.status(401).json({ message: "Invalid token" });
    }

    if (!req.body) {
        return res.status(422).json({ message: "Invalid request body" });
    }

    try {
        await res.revalidate('/')
        await res.revalidate('/blogs')
        await res.revalidate('/chatgpt')
        await res.revalidate('/ai-fun')
        await res.revalidate(path.join("/", req.body.data.slug));
        return res.status(200).json({ revalidated: true });
    } catch (err) {
        return res.status(500).send("Error revalidating");
    }

    // checking for the secret
    // if (req.headers['secret'] !== process.env.SECRET) {
    //     return res.status(401).json({ message: 'Invalid token' })
    // }

    // try {

    //     await res.revalidate('/')
    //     await res.revalidate('/blogs')
    //     await res.revalidate('/chatgpt')
    //     await res.revalidate('/ai-fun')
    //     await res.revalidate(`/${req.body.data.slug}`)

    //     return res.json({ revalidated: true })

    // } catch (error) {
    //     return res.status(500).send({
    //         error: 'Error'
    //     })
    // }
}

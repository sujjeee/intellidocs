export default async function handler(req, res) {
    // checking for the secret
    if (req.headers['secret'] !== process.env.SECRET) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {

        await res.revalidate('/')
        await res.revalidate('/blogs')
        await res.revalidate('/chatgpt')
        await res.revalidate('/ai-fun')
        await res.revalidate(`/${req.body.data.slug}`)

        return res.json({ revalidated: true })

    } catch (error) {
        return res.status(500).send({
            error: 'Error'
        })
    }
}

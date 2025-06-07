import {createShortUrlServiceWithoutUser} from "../services/shortUrl.service.js"

export const createShortUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl= await createShortUrlServiceWithoutUser(url);
    res.send(process.env.APP_URL+""+shortUrl)
    
}
import {createShortUrlService} from "../services/shortUrl.service.js"

export const createShortUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl= await createShortUrlService(url);
    
}
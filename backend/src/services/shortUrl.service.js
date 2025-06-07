import { generateNanoId } from "../utils/helper.js"
import UrlSchema from "../models/shortUrl.model.js"

export const createShortUrlService = (url) =>{
    const shortUrl = generateNanoId(7)
    const newUrl = new UrlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save();
    return newUrl;
}
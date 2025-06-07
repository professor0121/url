import { generateNanoId } from "../utils/helper.js"
import UrlSchema from "../models/shortUrl.model.js"
import { saveShortUrl } from "../dao/shortUrl.dao.js"

export const createShortUrlServiceWithoutUser = async (url) =>{
    const shortUrl =await generateNanoId(7)
    await saveShortUrl(shortUrl,url)
    return shortUrl;
}

export const createShortUrlServiceWithUser = async (url,userId) =>{
    const shortUrl =await generateNanoId(7)
    await saveShortUrl(shortUrl,url,userId)
    return shortUrl;
}
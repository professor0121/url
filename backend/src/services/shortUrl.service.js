import { generateNanoId } from "../utils/helper.js"
import UrlSchema from "../models/shortUrl.model.js"
import { saveShortUrl,getCustomShortUrl } from "../dao/shortUrl.dao.js"

export const createShortUrlServiceWithoutUser = async (url) => {
    try {
        const shortUrl = await generateNanoId(7)
        await saveShortUrl(shortUrl, url)
        return shortUrl;
    } catch (error) {
        throw new Error(error)
    }
}

export const createShortUrlServiceWithUser = async (url, userId ,slug=null) => {
    try {
        const shortUrl =slug|| await generateNanoId(7)
        const isExist= await getCustomShortUrl(slug)
        if(isExist){
            throw new Error("Custom Url already exists")
        }
        await saveShortUrl(shortUrl, url, userId)
        return shortUrl;
    } catch (error) {
        throw new Error(error)
    }
}
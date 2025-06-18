import UrlSchema from "../models/shortUrl.model.js"

export const saveShortUrl = async (shortUrl, longUrl, userId) => {

    try {
        const newUrl = new UrlSchema({
            full_url: longUrl,
            short_url: shortUrl
        })
        if (userId) {
            newUrl.user_id = userId;
        }
        await newUrl.save();
    } catch (error) {
        throw new Error(error)
    }
}

export const getShortUrl = async (shortUrl) => {
    return await UrlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } })
}
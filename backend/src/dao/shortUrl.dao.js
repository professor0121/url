import UrlSchema from "../models/shortUrl.model.js"

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
   console.log("saging user",userId)
    try {
        const newUrl = new UrlSchema({
            full_url: longUrl,
            short_url: shortUrl
        })
        if (userId) {
            newUrl.user = userId;
        }
        await newUrl.save();
    } catch (error) {
        throw new Error(error)
    }
}

export const getShortUrl = async (shortUrl) => {
    return await UrlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } })
}

export const getCustomShortUrl = async (slug) => {
    return await UrlSchema.findOne({ short_url: slug })
}
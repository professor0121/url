import UrlSchema from "../models/shortUrl.model.js"
export const saveShortUrl = async (shortUrl, longUrl, userId) => {

    const newUrl = new UrlSchema({
        full_url: longUrl,
        short_url: shortUrl
    })
    if(userId){
        newUrl.user_id=userId;
    }
    newUrl.save();
}

export const getShortUrl=async (shortUrl) => {
    return await UrlSchema.findOne({short_url:shortUrl})
}
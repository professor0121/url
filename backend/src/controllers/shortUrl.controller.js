import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js"
import { getShortUrl } from "../dao/shortUrl.dao.js"
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
        const { url } = req.body;
        const shortUrl = await createShortUrlServiceWithoutUser(url);
        res.send(process.env.APP_URL + "" + shortUrl)
})

export const redirectFromShortUrl =wrapAsync(async (req, res) => {
        const { id } = await req.params;
        const url = await getShortUrl(id);
        res.redirect(url.full_url)

})
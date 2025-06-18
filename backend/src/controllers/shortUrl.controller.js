import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js"
import { getShortUrl } from "../dao/shortUrl.dao.js"
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
        const { url } = req.body;
        const shortUrl = await createShortUrlServiceWithoutUser(url);
        res.send(process.env.APP_URL + "" + shortUrl)
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
        const { id } = req.params;
        const url = await getShortUrl(id);
        const urlToRedirect = url.full_url.startsWith('http')
                ? url.full_url
                : `http://${url.full_url}`;

        res.redirect(urlToRedirect);
})
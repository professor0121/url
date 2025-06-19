import { createShortUrlServiceWithoutUser, createShortUrlServiceWithUser } from "../services/shortUrl.service.js"
import { getShortUrl } from "../dao/shortUrl.dao.js"
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
        const { url } = req.body;
        let shortUrl;
        console.log("the user from contonroller"+req.user)
        if (req.user._id) {
                shortUrl = await createShortUrlServiceWithUser(url, req.user._id);
        } else {
                shortUrl = await createShortUrlServiceWithoutUser(url);
        }
        res.send(process.env.APP_URL + "" + shortUrl)
})
// export const createShortUrlAuth = wrapAsync(async (req, res) => {
//         const { url } = req.body;
//         res.send(process.env.APP_URL + "" + shortUrl)
// })

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
        const { id } = req.params;
        const url = await getShortUrl(id);
        const urlToRedirect = url.full_url.startsWith('http')
                ? url.full_url
                : `http://${url.full_url}`;

        res.redirect(urlToRedirect);
})

export const createCustomUrl = wrapAsync(async (req, res) => {
        const { url, customSlug } = req.body;
        const shortUrl = await createShortUrlServiceWithoutUser(url, customSlug);
        res.send(process.env.APP_URL + "" + shortUrl)
})
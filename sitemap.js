/**
 * Generates a sitemap in XML format.
 * @param {Object} res - The response object.
 * @param {Array<Object>} data - An array of objects containing URL and date information.
 * @returns {void} The function does not return a value.
 */
export default function sitemap(res, data) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${data.map(({ url, date }) => (`
                    <url> 
                    <loc>${url}</loc>
                    <lastmod>${date}</lastmod>  
                </url>`)).join('')}
        </urlset>`
 
    res.setHeader('Content-Type', 'text/xml')
    res.write(xml)
    res.end()

    return
}
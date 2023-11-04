
export default function funSitemap(res, data) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${data.map(({ url, date }) => (`
                    <url> 
                    <loc>${url}</loc>
                    <lastmod>${date}</lastmod>  
                </url>`)).join('')}
        </urlset>`

    console.log("prosessing 📦 ");
    res.setHeader('Content-Type', 'text/xml')
    res.write(xml)
    res.end()

    return
}
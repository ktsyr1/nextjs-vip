import API from "../server.js"
import sitemap from "../sitemap.js"

(() => {
    let log = t => console.log(` ✅  OK : ${t} \n`)

    let app = new API({ method: "GET", query: { _id: "1" } }, {})
    app.get(() => log("API GET"))

    let app1 = new API({ method: "POST", query: { _id: "1" } }, {})
    app1.post(() => log("API POST"))

    let app2 = new API({ method: "PUT", query: { _id: "1" } }, {})
    app2.put(() => log("API PUT"))

    let app3 = new API({ method: "PATCH", query: { _id: "1" } }, {})
    app3.patch(() => log("API PATCH"))

    let app4 = new API({ method: "DELETE", query: { _id: "1" } }, {})
    app4.delete(() => log("API DELETE"))

    let app5 = new API({ method: "ALL", query: { _id: "1" } }, {})
    app5.all(() => log("API ALL"))

    sitemap(null, [{ url: `/`, }])

})()
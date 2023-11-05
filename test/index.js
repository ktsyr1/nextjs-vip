import API from "../server.js"

(() => {
    let app = new API({ method: "GET", query: { _id: "1" } }, {})
    app.get(() => console.log(" ✅  OK : API GET \n"))

    let app1 = new API({ method: "POST", query: { _id: "1" } }, {})
    app1.post(() => console.log(" ✅  OK : API POST \n"))

    let app2 = new API({ method: "PUT", query: { _id: "1" } }, {})
    app2.put(() => console.log(" ✅  OK : API PUT \n"))

    let app3 = new API({ method: "PATCH", query: { _id: "1" } }, {})
    app3.patch(() => console.log(" ✅  OK : API PATCH \n"))

    let app4 = new API({ method: "DELETE", query: { _id: "1" } }, {})
    app4.delete(() => console.log(" ✅  OK : API DELETE \n"))

    let app5 = new API({ method: "ALL", query: { _id: "1" } }, {})
    app5.all(() => console.log(" ✅  OK : API ALL \n"))


})()
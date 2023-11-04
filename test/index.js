import API from "../server.js"

export function TestLibs() {
    let app = new API({ method: "GET", query: { _id: "1" } }, {})
    app.get(() => console.log(" 📦  OK : API GET \n"))

}

TestLibs() 
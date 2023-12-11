# nextjs-vip
 Simple and streamlined, built as a helper library for the [Nextjs](https://nextjs.org) library
 
 The library is under development, and if there are any problems or comments, please submit them on [github issues](https://github.com/ktsyr1/nextjs-vip/issues)
```bash
npm i nextjs-vip
```
More in the [documentation ](https://nextjsvip.netlify.app/docs/getstartd)

## Project structure
- [API](#api) 
- [sitemap](#sitemap) 


## API

This library was built solely for use in API Routes because it is built to improve developer experience and bring the express.js code structure to nextjs API Routes.
You can write them within API Routes files

syntx
```js
let app = new API(req, res) 

app.get(auth: Boolean ,callback: fun)
// or
app.get(callback: fun)
```
example
```js
import API from "nextjs-vip"

export default async function API_Send(req, res, next) {

    let app = new API(req, res)
    app.get(async () => {
        // send data  
        // format JSON
        app.Send(data)
    })
}
```
| name method | syntx                   |
| ----------- | ----------------------- |
| get         | get(auth? ,callback)    |
| post        | post(auth? ,callback)   |
| put         | put(auth? ,callback)    |
| delete      | delete(auth? ,callback) |
| patch       | patch(auth? ,callback)  |
| all         | all(auth? ,callback)    |


## sitemap 
Create a site map automatically

syntx
```js
// data example
let data =[
    {url:"http://example.com/132",lastmod:"2023-11-4"},
    {url:"http://example.com/131",lastmod:"2023-11-3"}
]
sitemap(res, data)
```


example
```js
// file: sitemap.xml.js

// imports
import sitemap from "nextjs-vip/sitemap"

export async function getServerSideProps({ res }) {
    const request = await fetch(process.env.NEXT_PUBLIC_API)
    const data = await request.json()

    // generate sitemap.xml
    sitemap(res, data)

    return { props: {} }
} 

export default function s() { }
```

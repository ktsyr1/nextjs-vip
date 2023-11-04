# nextjs-vip
## تنزيل المكتبة 
```bash
npm i nextjs-vip
```

## بنية المشروع
```
/
|____/server
    |____{API} {get,post,...}
#    |____{AuthPage}
# |____/SEO init
#    |____<SEO>
#    |____{SiteMap}

```
## API

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
|name method| syntx|
|---|---|
|get|get(auth? ,callback)
|post|post(auth? ,callback)
|put|put(auth? ,callback)
|delete|delete(auth? ,callback)
|path|path(auth? ,callback)
|all|all(auth? ,callback) 

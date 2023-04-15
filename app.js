const runAttackServer = require("./src/attackServer")
const runTargetServer = require("./src/targetServer/app")
const runEmailServer = require("./src/emailServer")

runTargetServer(3000)
runEmailServer(4000)
runAttackServer(5000)
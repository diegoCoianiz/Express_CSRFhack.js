const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
console.clear()

//express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "text",
    resave: false,
    saveUninitialized: false
}))
app.use(express.static(__dirname + '/public'));

//routes
app.get("/", (req, res) => {
    console.log(`targetServer: new user // not logged //, redirecting to login page`)
    res.sendFile(path.join(path.join(__dirname, "public"), "loginForm.html"));
});

const routesDir = path.join(__dirname, "routes");
app.use("/", require(path.join(routesDir, "pages")));
app.use("/api", require(path.join(routesDir, "api")));

//server
const runTargetServer = (port) =>
app.listen(port, () => {
    console.log(`target server listening on port ${port}`)
});

module.exports = runTargetServer;
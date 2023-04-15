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
    res.sendFile(path.join(path.join(__dirname, "public"), "home.html"));
});
const apiDir = path.join(__dirname, "api");
app.use("/api", require(path.join(apiDir)));

//server
const runEmailServer = (port) => 
app.listen(port, () => {
    console.log(`email server listening on port ${port}`)
});

module.exports = runEmailServer
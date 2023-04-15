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
    console.log(`>> 4TT4CK_S3RV3R: user ID session ${req.session.id}: new Flag and password sended`)
    res.sendFile(path.join(path.join(__dirname, "public"), "home.html"));
});

//server
const runAttackServer = (port) => 
app.listen(port, () => {
    console.log(`attack server listening on port ${port}`)
});

module.exports = runAttackServer
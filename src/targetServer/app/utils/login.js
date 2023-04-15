const loginMiddleware = (req, res, next) => {
    if(!req.session.userID) {
        return res.redirect("/");
    } else {
        next();
    }
}

module.exports = loginMiddleware
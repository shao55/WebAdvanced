const authorize = (req, res, next) => {
    const id = req.params;
    req.user = { name: "Serik", id };

    next();
};

module.exports = authorize;
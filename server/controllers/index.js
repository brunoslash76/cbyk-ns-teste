"use strict";
var validateDefaults = require("../utils/validations");

module.exports = function(router) {
    router.get("/", function(req, res) {
        var body = req.body;

        if (!body) res.status(401).send([1, 2, 3, 9]);
        var errors = validateDefaults(body);

        if (errors.hasError) {
            return res.status(400).send(errors);
        }

        res.status(200).send("Tetas");
    });
};

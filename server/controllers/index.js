"use strict";
var validateDefaults = require("../utils/validations");
var isObjectEmpty = require("../utils/objectFunctions");

module.exports = function(router) {
    router.post("/", function(req, res) {
        var body = req.body.initialCondition;
        console.log(body);
        if (isObjectEmpty(body))
            return res.status(401).send({
                attrError: ["Request body"],
                attrErrorMessage: ["No data sent"],
                hasError: true
            });
        var errors = validateDefaults(body);

        if (errors.hasError) {
            return res.status(400).send(errors);
        }

        res.status(200).send([1, 2, 3]);
    });
};

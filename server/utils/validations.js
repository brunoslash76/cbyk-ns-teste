"use strict";

module.exports = function validateDefaults(defaultValues) {
    var error = {
        attrError: [],
        attrErrorMessage: [],
        hasError: false
    };

    var airports = defaultValues.airports;
    var clouds = defaultValues.clouds;
    var terrain = defaultValues.terrain;

    if (isAirportsInvalid(airports)) {
        error = setErrors(error, "Airports", "Invalid amount: Minimun is 3");
    }

    if (isCloudsInvalid(clouds)) {
        error = setErrors(
            error,
            "Clouds",
            "Invalid amount: Minimun amount is 4"
        );
    }

    isTerrainInvalid(terrain).map(function(isInvalid) {
        if (isInvalid) {
            error = setErrors(
                error,
                "Terrain",
                "Invalid amount: Minimun size is 10 x 10"
            );
        }
    });
    return error;
};

function isAirportsInvalid(airports) {
    return airports < 3;
}

function isCloudsInvalid(clouds) {
    return clouds < 4;
}

function isTerrainInvalid(terrain) {
    return terrain.map(function(t) {
        return t < 10;
    });
}

function setErrors(errorObject, attr, errorMessage) {
    if (!attr) throw new Error("Attribute name is required", attr);
    if (!errorMessage) {
        throw new Error("Error message is required", errorMessage);
    }
    if (!errorObject) throw new Error("Error Object is required", errorObject);

    errorObject.attrError.push(attr);
    errorObject.attrErrorMessage.push(errorMessage);
    errorObject.hasError = true;

    return errorObject;
}

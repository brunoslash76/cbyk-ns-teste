"use strict";

module.exports = function Grid(gridData) {
    var clouds = gridData.clouds;
    var airports = gridData.airports;
    var terrain = createTerrain(gridData.terrain);
};

function createTerrain(terrainSize) {
    var newTerrain = new Array(terrainSize[0]);
    for (var i = 0, length = newTerrain.length; i < length; i++) {
        newTerrain[i] = new Array(terrainSize[1]);
    }

    return newTerrain;
}

"use strict";
var hopLiteJSBlueprint = /** @class */ (function () {
    function hopLiteJSBlueprint() {
    }
    hopLiteJSBlueprint.prototype.test = function (str) {
        var num = 5;
        console.log(str + num);
    };
    return hopLiteJSBlueprint;
}());
var hopLiteJS = new hopLiteJSBlueprint();
var test = hopLiteJS.test;
module.exports = {
    test: test
};

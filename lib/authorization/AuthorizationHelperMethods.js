"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationHelperMethodsBlueprint = void 0;
// import { response } from "express";
// import { isJSDocUnknownTag } from "typescript";
var jwt = require('jsonwebtoken');
var err = new Error('Incorrect ownership or insufficient permissions');
var AuthorizationHelperMethodsBlueprint = /** @class */ (function () {
    function AuthorizationHelperMethodsBlueprint() {
    }
    AuthorizationHelperMethodsBlueprint.hasRole = function (req, res, next) {
        console.log("HasRole is firing.");
        var cookies = req.cookies;
        if (cookies.role === 'Admin') {
            console.log(cookies.role);
            next();
        }
        else {
            console.log('it did not work');
            throw err;
            res.status(403).send('Authorized');
        }
    };
    return AuthorizationHelperMethodsBlueprint;
}());
exports.AuthorizationHelperMethodsBlueprint = AuthorizationHelperMethodsBlueprint;

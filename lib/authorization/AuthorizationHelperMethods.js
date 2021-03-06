"use strict";
// req.cookie.role === "admin"
// const {};
// const { Request, Response } = require('@types/express');
// we need to require a cookie parser
// we need to have user install a cookie parser
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationHelperMethods = void 0;
// interface cookie {role: string = "admin"}
var err = new Error('Incorrect ownership or insufficient permissions');
var AuthorizationHelperMethodsBlueprint = /** @class */ (function () {
    function AuthorizationHelperMethodsBlueprint() {
    }
    AuthorizationHelperMethodsBlueprint.prototype.hasRole = function (req, res, next) {
        var cookies = req.cookies;
        if (cookies.role)
            next();
        else {
            throw err;
            res.status(403).send('Authorized');
        }
    };
    return AuthorizationHelperMethodsBlueprint;
}());
var AuthorizationHelperMethods = new AuthorizationHelperMethodsBlueprint();
exports.AuthorizationHelperMethods = AuthorizationHelperMethods;

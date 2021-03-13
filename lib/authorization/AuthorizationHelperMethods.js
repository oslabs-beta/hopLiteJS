"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
var err = new Error('Incorrect ownership or insufficient permissions');
var AuthorizationHelperMethodsBlueprint = /** @class */ (function () {
    function AuthorizationHelperMethodsBlueprint() {
    }
    AuthorizationHelperMethodsBlueprint.prototype.hasRole = function (req, res, next) {
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
//user needs to import secret from config.secret
async;
hasCorrectToken(req, any, res, any, next, any);
{
    console.log('hasCorrectToken is firing.');
    var token = req.headers['x-access-token'];
    if (token) {
        try {
            var verifyJWT = await jwt.verify(token, secret);
            res.locals.decoded = verifyJWT;
        }
        catch (error) {
            console.log(error);
        }
    }
    var AuthorizationHelperMethods = new AuthorizationHelperMethodsBlueprint();
    export { AuthorizationHelperMethods };
}

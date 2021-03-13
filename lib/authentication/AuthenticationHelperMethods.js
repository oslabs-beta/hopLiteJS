"use strict";
// class QueriedUser {
//   const username: string;
//   const password: string;
//   const role: boolean;
//   constructor(username:string, password:string, role:boolean){
//     this.username = username,
//     this.password = password,
//     this.role = role
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationHelperMethods = void 0;
// const userLoggingIn = new QueriedUser('john1234','password',false)
var RuleSet = /** @class */ (function () {
    function RuleSet() {
    }
    return RuleSet;
}());
var AuthenticationHelperMethods = /** @class */ (function () {
    function AuthenticationHelperMethods() {
    }
    // const userData = res.locals.user;
    AuthenticationHelperMethods.prototype.CookieRules = function (cookieRuleset) {
        return {};
    };
    AuthenticationHelperMethods.prototype.addJWT = function () {
    };
    return AuthenticationHelperMethods;
}());
exports.AuthenticationHelperMethods = AuthenticationHelperMethods;

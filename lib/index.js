"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopliteSchemas = exports.DefaultHoplite = void 0;
var DefaultHoplite_1 = require("./modes/DefaultHoplite");
var AuthorizationController_1 = require("./authorization/AuthorizationController");
var AuthenticationController_1 = require("./authentication/AuthenticationController");
var HopliteSchemas_1 = require("./modes/HopliteSchemas");
var AuthorizationController = new AuthorizationController_1.AuthorizationControllerBlueprint();
var AuthenticationController = new AuthenticationController_1.AuthenticationControllerBlueprint();
var DefaultHoplite = new DefaultHoplite_1.default(AuthorizationController, AuthenticationController);
exports.DefaultHoplite = DefaultHoplite;
var HopliteSchemas = new HopliteSchemas_1.HopliteSchemasBlueprint();
exports.HopliteSchemas = HopliteSchemas;
// //authentication
// app.get('/api', someController.findItem, (req,res)=>{
//   hoplite.authenticateCookie(user,ruleset)
// })
// app.get('/api', someController.findItem, (req,res)=>{
//   hoplite.authenticateJWT(user,ruleset)
// })
// app.get('/api', someController.findItem, (req,res)=>{
//   hoplite.authenticateCookieJWT(user,ruleset)
// })
// //authorization
// app.get('/api', someController.findItem, hoplite.authorizeCookie(secret),(req,res)=>{
//   //user action
// })
// app.get('/api', someController.findItem, hoplite.authorizeJWT(secret),(req,res)=>{
//   //user action
// })
// app.get('/api', someController.findItem, hoplite.authorizeCookieJWT(secret),(req,res)=>{
//   //user action
// })
// //hashing
// app.get('/api', someMiddleware, (req,res)=>{
//   hoplite.pwBcrypt(user,ruleset);
// })
// app.get('/api', someMiddleware, (req,res)=>{
//   hoplite.compareBcrypt(user,ruleset);
// })
// app.get('/api', someMiddleware, (req,res)=>{
//   hoplite.argon(user,ruleset);
// })
// app.get('/api', someMiddleware, (req,res)=>{
//   hoplite.compareArgon(user,ruleset);
// })

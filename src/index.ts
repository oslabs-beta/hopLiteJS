import DefaultHopliteBlueprint  from './modes/DefaultHoplite';
import { AuthorizationControllerBlueprint } from './authorization/AuthorizationController';
import { AuthenticationControllerBlueprint } from './authentication/AuthenticationController';
import { HopliteSchemasBlueprint } from './modes/HopliteSchemas';
import { RulesetBlueprint } from './modes/RulesetSchema';
const AuthorizationController = new AuthorizationControllerBlueprint();
const AuthenticationController = new AuthenticationControllerBlueprint();

//const DefaultHoplite = new DefaultHopliteBlueprint(AuthorizationController, AuthenticationController);
const HopliteSchemas = new HopliteSchemasBlueprint();
const RulesetSchema = new RulesetBlueprint();
export {
  //DefaultHoplite,
  HopliteSchemas,
  RulesetSchema
};


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

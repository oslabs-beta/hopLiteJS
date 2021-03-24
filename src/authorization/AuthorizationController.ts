
import { AuthorizationHelperMethodsBlueprint } from './AuthorizationHelperMethods';
import * as jwt from 'jsonwebtoken';
import { HopLiteRuleset } from "../types";


function authorize(ruleset: HopLiteRuleset) {
  console.log("Authorize is firing.");
  return function (req: any, res: any, next: any) {
    const cookies = req.cookies;
    if (ruleset.cookieJWT) {
      for (let cookieName in ruleset.cookieJWT) {
        const existingCookieJWT = cookies[cookieName];
        const clientSecret = ruleset.cookieJWT[cookieName].secret;
        try {
          jwt.verify(existingCookieJWT, clientSecret);
        } catch (err) {
          console.log(err);
          res.status(403).send("You do not have access to this resource.");
        }
      }
      next();
    } else if (ruleset.cookie) {
      const cookieList = ruleset.cookie.cookies;
      for (let cookieName in cookieList) {
        if (cookies[cookieName] !== cookieList[cookieName]) {
          console.log("Failed.");
          return res.status(403).send("You do not have access to this resource.");
        }
      }
      console.log("Succeeded");
      next();
    }
    else if (ruleset.JWT) {
      console.log("JWT: ", ruleset.JWT)
    }
  }
}

// authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
//   console.log('authorizeCookie is firing.');
//   AuthorizationHelperMethodsBlueprint.hasRole(req, res, next);
// }

// authorizeJWT(secret: string) {
//   return function (req: any, res: any, next: any) {
//     console.log('authorizeJWT is firing.');
//     const token = req.headers['x-access-token'];
//     if (token) {
//       const verifyJWT = jwt.verify(token, secret)
//       return verifyJWT;
//     }
//   }
// }

// authorize(ruleset: HopLiteRuleset, secret: string) {
//   return function (req: any, res: any, next: any) {
//     console.log('authorizeCookieJWT is firing.');
//     const cookies = req.cookies;
//     if (cookies[ruleset.cookiejwt.cookieKey]) {
//       const token = cookies[ruleset.cookiejwt.cookieKey];
//       //returns decoded token or error message
//       try {
//         jwt.verify(token, secret);
//         next();
//       } catch {
//         res.status(403).send("You do not have the required credentials.")
//       }
//     }
//   }
// }

export {
  authorize
}
import { AuthorizationHelperMethodsBlueprint } from './AuthorizationHelperMethods';
import * as jwt from 'jsonwebtoken';
import { HopLiteRuleset, RequiredClaims, ClaimsList } from "../types";
import { Request, Response, NextFunction } from 'express';
import { Utilities } from '../utils/Utilities';


function authorize(ruleset: HopLiteRuleset, requiredClaims: RequiredClaims) {
  console.log("Authorize is firing.");
  return function (req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    if (ruleset.cookieJWT) {
      try {
        const claimsList = Object.keys(requiredClaims);
        const myClaims: ClaimsList = {};
        claimsList.forEach(elem => {
          myClaims[elem] = false;
        })
        for (let cookieName in ruleset.cookieJWT) {
          const existingCookieJWT = cookies[cookieName];
          const clientSecret = ruleset.cookieJWT[cookieName].secret;
          for (let key in requiredClaims) {
            const myPayload = jwt.verify(existingCookieJWT, clientSecret) as any;
            if (requiredClaims[key] === myPayload[key]) {
              myClaims[key] = true;
            }
          }
        }
        if (Object.values(myClaims).includes(false)) {
          
          throw new Error(`Required Claims missing. myClaims: ${JSON.stringify(myClaims)}`);
        }
      } catch (err) {
        console.log(err);
        return res.status(403).send("You do not have access to this resource.")
      }
      next();
    } else if (ruleset.cookie) {
      try {
        const claimsList = Object.keys(requiredClaims);
        const myClaims: ClaimsList = {};
        claimsList.forEach(elem => {
          myClaims[elem] = false;
        })
        for (let cookieName in ruleset.cookie.cookies) {
          const existingCookie = cookies[cookieName];
          const myPayload = Utilities.opaqueTokenVerify(ruleset, existingCookie);
          for (let key in requiredClaims) {
            if (requiredClaims[key] === myPayload[key]) {
              myClaims[key] = true;
            }
          }
        }
        if (Object.values(myClaims).includes(false)) {
          throw new Error(`Required Claims missing. myClaims: ${JSON.stringify(myClaims)}`);
        }
      } catch (err) {
        console.log(err);
        return res.status(403).send("You do not have access to this resource.")
      }
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
import { HopLiteRuleset } from "../types";
const jwt = require('jsonwebtoken');
{cookieName:{secret:payload}}
function authenticate(ruleset: HopLiteRuleset, res: any) {
  const defaultOptions = {
    httpOnly: true,
    // secure: true, //with this option, you will not see it in Postman. Keep this in mind.
    maxAge: 1209600000,
    sameSite: "lax"
  };
  if (ruleset.cookie) {
    let userOptions;
    const cookieList = ruleset.cookie.cookies;
    if (ruleset.cookie.options) {
      userOptions = ruleset.cookie.options;
      for (let key in cookieList) {
        console.log("Useroptions exist: ", userOptions)
        res.cookie(key, cookieList[key], userOptions);
      }
    } else {
      for (let key in cookieList) {
        console.log("defaultoptions exist: ", defaultOptions)
        res.cookie(key, cookieList[key], defaultOptions);
      }
    }
  }
  if (ruleset.cookieJWT) {
    const jwtList = ruleset.cookieJWT;
    const userOptions: any = {};
    for (let cookieName in jwtList) {
      userOptions[cookieName] = ruleset.cookieJWT[cookieName].options;
    }

  
      for (let cookieName in jwtList) {
        const clientSecret = ruleset.cookieJWT[cookieName].secret;
        const token = jwt.sign(jwtList[cookieName], clientSecret);
        if(userOptions[cookieName]) {
          res.cookie(cookieName, token, userOptions);
        } else {
          res.cookie(cookieName, token, defaultOptions);
        }
      }
  }
  typeof ruleset.message === 'string' ? res.status(200).send(ruleset.message) : res.status(200).json(ruleset.message);
  // if (ruleset.JWT) {
  //   const JWTObj = ruleset.JWT;
  //   const header: any = {
  //     auth: true,
  //     'x-access-token': {}
  //   };
  //   /*
  //   Ruleset.cookieJWT = {
  //     cookieName: {
  //       secret: kjasdhkjasd,
  //       payload: {
  //         key: "value"
  //       }
  //     }
  //   }
  //   */
  //   // let tokenNumber = 1;
  //   for (let jwtName in JWTObj) {
  //     let tokenString = ['token'];
  //     //eg. tokenString[0] becomes 'token1'
  //     tokenString[0] += tokenNumber;
  //     tokenNumber++;
  //     //jwt.sign sign and payload
  //     const token = jwt.sign(JWTObj.payloads[jwtName], JWTObj.secret);
  //     //eg. header = {auth:true, token1:'something', token2:'something else'}
  //     header['x-access-token'][tokenString[0]] = token;
  //   }
  //   //adding header obj to the header in res obj
  //   res.set(header)
  // }

}


export {
  authenticate
}
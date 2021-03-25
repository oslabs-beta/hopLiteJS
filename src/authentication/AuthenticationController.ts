import { HopLiteRuleset } from "../types";
const jwt = require('jsonwebtoken');

//create authentication method to iterate through individual creation methods and apply authentication
function authenticate(ruleset: HopLiteRuleset, res: any) {
  //default option if cookieOption within ruleset.cookie.options is not inputted
  const defaultOptions = {
    httpOnly: true,
    // secure: true, //with this option, you will not see it in Postman. Keep this in mind.
    maxAge: 1209600000,
    sameSite: "lax"
  };
  //conditional statement to run authentication if ruleset.cookie exists on global ruleset
  if (ruleset.cookie) {
    let userOptions;
    const cookieList = ruleset.cookie.cookies;
    //if ruleset.cookie.option exists, run input options
    if (ruleset.cookie.options) {
      userOptions = ruleset.cookie.options;
      for (let key in cookieList) {
        console.log("Useroptions exist: ", userOptions)
        res.cookie(key, cookieList[key], userOptions);
      }
      //else run with default option settings
    } else {
      for (let key in cookieList) {
        console.log("defaultoptions exist: ", defaultOptions)
        res.cookie(key, cookieList[key], defaultOptions);
      }
    }
  }
    //conditional statement to run authentication if ruleset.cookieJWT exists on global ruleset
  if (ruleset.cookieJWT) {
    const jwtList = ruleset.cookieJWT;
    const userOptions: any = {};
    for (let cookieName in jwtList) {
      userOptions[cookieName] = ruleset.cookieJWT[cookieName].options;
    }
      //iterate through each cookieName to sign each jwt
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
  //find if ruleset.messgae is a string or JSON to determine if it should be sent as a json object
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
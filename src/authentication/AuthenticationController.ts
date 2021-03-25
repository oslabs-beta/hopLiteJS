import { HopLiteRuleset, Payloads } from "../types";
import { Utilities } from '../utils/Utilities';
const jwt = require('jsonwebtoken');

function authenticate(ruleset: HopLiteRuleset, payload: Payloads, res: any) {
  const defaultOptions = {
    httpOnly: true,
    // secure: true, //with this option, you will not see it in Postman. Keep this in mind.
    maxAge: 1209600000,
    sameSite: "lax"
  };
  if (ruleset.cookie) {
    let userOptions;
    const { options, cookies } = ruleset.cookie;
    if (options) {
      for (let key in cookies) {
        const cipherText = Utilities.opaqueTokenCreation(ruleset, payload[key]);
        res.cookie(key, cipherText, userOptions);
      }
    } else {
      for (let key in cookies) {
        const cipherText = Utilities.opaqueTokenCreation(ruleset, payload[key]);
        res.cookie(key, cipherText, defaultOptions);
      }
    }
  }
  if (ruleset.cookieJWT) {
    const cookieJWTList = ruleset.cookieJWT;
    console.log(cookieJWTList)
    for (let cookieName in cookieJWTList) {
      if(!payload[cookieName]) {
        continue;
      }
      const clientSecret = cookieJWTList[cookieName].secret;
      // console.log(payload, typeof payload)
      const token = jwt.sign(payload[cookieName], clientSecret);
      if (cookieJWTList[cookieName].options) {
        res.cookie(cookieName, token, cookieJWTList[cookieName].options);
      } else {
        res.cookie(cookieName, token, defaultOptions);
      }
    }
  }
  typeof ruleset.message === 'string' ? res.status(200).send(ruleset.message) : res.status(200).json(ruleset.message);
}

export {
  authenticate
}
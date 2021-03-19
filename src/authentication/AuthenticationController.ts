import { SourceMapPayload } from "node:module";
import { HopLiteUser, HopLiteRuleset } from "../types";
const jwt = require('jsonwebtoken');

//interface for error object
interface errorHandler {
  code: number;
  message: string;
}

interface payload {
  username: string;
  password: string;
  privilege: boolean;
}

class AuthenticationControllerBlueprint {
  authenticateCookie(hopLiteUser: HopLiteUser, ruleset: HopLiteRuleset, res: any) {
    console.log('authenticate fx is working')
    if (ruleset.cookie) {
      res.cookie('role', 'Admin').send("Cookie Set.");
    } else {
      throw new Error("Cookie not Set.")
    }
  }
  authenticateJWT(payload: payload, secret: string, ruleset: HopLiteRuleset, res: any) {
    console.log('JWT is working')
    if (ruleset.jwt) {
      const token = jwt.sign(payload, secret)
      console.log(token);
      res.status(200).set({ auth: true, token: token })
    } else {
      throw new Error("JWT not Set.")
    }
  }
  authenticate(ruleset: HopLiteRuleset, res: any) {
    //this method needs to set a cookie AND JWT combination
    if (ruleset.cookiejwt) {
      const { payload, secret, cookieKey } = ruleset.cookiejwt;
      const token = jwt.sign(payload, secret);
      console.log("this is our jwt", token);
      // console.log(payload)
      res.cookie(cookieKey, token).send("Cookie-JWT Set.");
    } else {
      throw new Error("Cannot set Cookie-JWT.")
    }
  }
}

export {
  AuthenticationControllerBlueprint
}



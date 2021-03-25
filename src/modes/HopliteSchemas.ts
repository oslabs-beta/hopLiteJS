import { Cookies, CookieOptions, JWTConfig, MessageJSON, HopLiteRuleset } from "../types";

class HopliteSchemasBlueprint {
  createRuleset(message: string | MessageJSON, ...args: [string, number][]): HopLiteRuleset {
    const ruleset: any = {};
    for (let i = 0; i < args.length; i++) {
      ruleset[args[i][0]] = args[i][1];
    }
    ruleset.message = message;
    return ruleset;
  }
  createRulesetCookieJWT(cookieJWTObj: JWTConfig): [string, number][] { //...args: any
    const ruleset: any = {};
    for (let cookieName in cookieJWTObj) {
      ruleset[cookieName] = cookieJWTObj[cookieName];
    }
    return ['cookieJWT', ruleset];
  }
  createRulesetCookie(cookies: Cookies, cookieOptions?: CookieOptions): [string, number]{
    const ruleset: any = {};
    if (cookieOptions) {
      ruleset['options'] = cookieOptions;
    }
    ruleset['cookies'] = cookies;
    return ['cookie', ruleset];
  }
  createUser(username: string, password: string, role: string) {
    return {
      username,
      password,
      role
    }
  }
  // createRulesetJWT(JWTObj: JWTConfig) {
  //   const ruleset: any = {};
  //   for (let key in JWTObj) {
  //     ruleset[key] = JWTObj[key];
  //   }
  //   return ['JWT', ruleset];
  // }
}

export {
  HopliteSchemasBlueprint
}
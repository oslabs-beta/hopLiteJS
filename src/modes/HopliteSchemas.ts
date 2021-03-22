import { CookieInterface, CookieJWTInterface, JWTInterface, Payload} from "../types";

class HopliteSchemasBlueprint {
  createRulesetCookieJWT(cookieJWTObj:CookieJWTInterface) { //...args: any
    const ruleset:any = {};
    for(let key in cookieJWTObj){
      ruleset[key] = cookieJWTObj[key];
    }
    return ['cookieJWT',ruleset];
  }
  createRulesetCookie(cookieObj:CookieInterface) { 
    const ruleset:any = {};
    for(let key in cookieObj){
      ruleset[key] = cookieObj[key];
    }
    return ['cookie',ruleset];
 }
  createRulesetJWT(JWTObj:JWTInterface) { 
    const ruleset:any = {};
    for(let key in JWTObj ){
      ruleset[key] = JWTObj[key];
    }
    return ['JWT',ruleset];
  }
}

export {
  HopliteSchemasBlueprint
}
import { CookieInterface, CookieJWTInterface, JWTInterface, Payload} from "../types";

class HopliteSchemasBlueprint {
  
  createRulesetCookieJWT(cookieJWTObj:CookieJWTInterface) { //...args: any
    const ruleset:any = {};
    for(let cookieKey in cookieJWTObj){
      ruleset[cookieKey] = cookieJWTObj[cookieKey];
    }
    return ['cookieJWT',ruleset];
  }
  createRulesetCookie(cookieObj:CookieInterface) { 
    const ruleset:any = {};
    for(let cookieKey in cookieObj){
      ruleset[cookieKey] = cookieObj[cookieKey];
    }
    return ['cookie',ruleset];
 }
  createRulesetJWT(JWTObj:JWTInterface) { 
    const ruleset:any = {};
    for(let secret in JWTObj ){
      ruleset[secret] = JWTObj[secret];
    }
    return ['JWT',ruleset];
  }
}

export {
  HopliteSchemasBlueprint
}
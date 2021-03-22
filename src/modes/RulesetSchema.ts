import { CookieInterface, CookieJWTInterface, JWTInterface, Payload} from "../types";

class RulesetBlueprint {
  createRuleset(...args: any[][]){
    const ruleset:any = {}
    for(let i = 0; i < args.length; i++){
      ruleset[args[i][0]] = args[i][1];
    }
    return ruleset;
  }
}

export {
  RulesetBlueprint
}

import { CookieInterface, CookieJWTInterface, JWTInterface, Payload} from "../types";

class RulesetBlueprint {
  createRuleset(...args: any[][]){
    console.log(args)
    const ruleset:any = {}
    for(let i = 0; i < args.length; i++){
      // console.log(args[i][0])
      ruleset[args[i][0]] = args[i][1];
    }
    return ruleset;
  }
}

export {
  RulesetBlueprint
}

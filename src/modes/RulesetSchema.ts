import { MessageJSON} from "../types";

class RulesetBlueprint {
  createRuleset(message:string | MessageJSON, ...args: any[][]){
    const ruleset:any = {}
    for(let i = 0; i < args.length; i++){
      ruleset[args[i][0]] = args[i][1];
    }
    ruleset.message = message
    return ruleset;
  }
}

export {
  RulesetBlueprint
}
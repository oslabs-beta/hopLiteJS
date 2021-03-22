import { Payload } from '../types';

class HopliteSchemasBlueprint {

  createUser(username: string, password: string, userRole: boolean) {
    const user = {
      username,
      password,
      userRole
    };
    return user;
  }




  /*
 createRuleset(...args: any) {
    const rules = [...args];
    console.log(rules);

    const ruleset = {};

    for (let rule in ruleset){
      if (!rule) {
        ruleset[rule] = value: any;
      }
    }
    return ruleset;
  }


  - interface for dynamic key 
  https://stackoverflow.com/questions/39256682/interface-for-dynamic-key-in-typescript
interface Dic {
    [key: string]: Object[]
}
*/

  
  
  createRulesetCookieJWT(cookieKey: string, secret: string, payload: Payload) { //...args: any

    // loop through payloads and insert them as key pair values in the above object called payload
    const ruleset = {
      cookieKey: cookieKey,
      secret: secret,
      payload: payload
    } //{...args};
    console.log(ruleset);
    return ruleset;
  }
  createRulesetCookie(cookieKey: string, cookieValue: string) { //...args: any
    const ruleset = {
      cookieKey: cookieKey,
      cookieValue: cookieValue
    } //{...args};
    console.log(ruleset);
    return ruleset;
  }
  createRulesetJWT(payload: Payload, secret: string) { //...args: any
    const ruleset = {
      payload: payload,
      secret: secret
    } //{...args};
    console.log(ruleset);
    return ruleset;
  }

}

export {
  HopliteSchemasBlueprint
}

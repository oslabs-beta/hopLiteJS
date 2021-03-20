

class HopliteSchemasBlueprint {
  createUser(username: string, password: string, userRole: boolean) {
    const user = {
      username,
      password,
      userRole
    };
    return user;
  }

  createRuleset(bool: boolean) { // ...args: any
    const ruleset = {
      cookiejwt: boolean
    }; // {...args};
    console.log(ruleset);
    return ruleset;
  }


  /*
 createRuleset(...args: any) {
    const rules = [...args];
    console.log(rules);

    const ruleset = {};

    for (let rule in ruleset){
      if (!rule) {
        ruleset[rule] = ;
      }
    }
    return ruleset;
  }

*/

}

export {
  HopliteSchemasBlueprint
};

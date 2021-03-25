import { HopliteSchemasBlueprint } from '../modes/HopliteSchemas';
const HopliteSchemas = new HopliteSchemasBlueprint();
const { createRulesetCookie , createRuleset} = HopliteSchemas;

const testOptions = {
  httpOnly: true,
}
const cookieList = {
  cookie1: "Cookie1",
  cookie2: "Cookie2"
}
const rulesetCookieNoOptions = createRulesetCookie(cookieList);
const rulesetCookieWithOptions = createRulesetCookie(cookieList, testOptions);
describe('Creates ruleset array for Cookies.', () => {
  test('Should return an array', () => {
    expect(Array.isArray(rulesetCookieNoOptions)).toBeTruthy();
  })
  describe('When one argument is used, creates a cookie ruleset array', () => {
    test('Should return a string at index 0 of the array', () => {
      expect(rulesetCookieNoOptions[0]).toMatch('cookie');
    })
    test('Should return an object with one property at index 1 of the array', () => {
      expect(rulesetCookieNoOptions[1]).toStrictEqual({ cookies: cookieList });
    })
  })
  describe('When two arguments are used, creates a cookie ruleset array', () => {
    test('Should return an object with two properties at index 1 of the array', () => {
      expect(rulesetCookieWithOptions[1]).toMatchObject({ cookies: cookieList, options: testOptions })
    })
  })
})
describe('Creates overarching ruleset object', () => {
  const myMessage = 'this is a test message';
  const myNoOptionsRuleset = createRuleset(myMessage, rulesetCookieNoOptions);
  const myOptionsRuleset = createRuleset(myMessage, rulesetCookieWithOptions);
  console.log(myNoOptionsRuleset)
  test('Should return an object', () => {
    expect(typeof myNoOptionsRuleset).toMatch('object');
  })
  test('Should have a message property with type string', () => {
    expect(typeof myNoOptionsRuleset.message).toMatch('string');
  })
  describe('Has a cookie list and no options attached', () => {
    test('Should have property -cookie-, with a cookie list', () => {
      expect(myNoOptionsRuleset.cookie).toMatchObject({ cookies: cookieList });
    })
  })
  describe('Has both a cookie list and options attached', () => {
    test('Should have property -options-, with a user options', () => {
      expect(myOptionsRuleset.cookie).toMatchObject({ cookies: cookieList, options: testOptions});
    })
  })
})

describe('', () => {
  
})

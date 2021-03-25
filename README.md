Welcome to **hopLiteJS**!
hopLiteJS is a developer friendly, lightweight middleware library for Node.js. hopLiteJS can be imported and used in any Express-based web application. 
It has multiple developer interfaces for customizing authentication and authorization. With hopLiteJS, developers no longer have to dread authentication, authorization and hashing. 


COOKIES
The developer is able to add custom cookies by first utilizing the createRulesetCookie method. This method can be used alongside any other ruleset-creating methods in hopLiteJS (eg. createRulesetCookieJWT). 
The parameters of the method are cookies (object) and optional cookieOptions (object). The developer is required to first create the data for these parameters. Each key-value pair in the cookies object are individual cookies where
the keys are cookie names and values are cookie data. Each key-value pair in the optional cookie options object consists optional security measures such as domain, encode, etc. (shown below). If the option parameter is not inputted, default options will be applied.

Default Options for Cookies are as follows:
```js
const hopLiteJSDefaultOptions = {
  httpOnly: true,
  secure: true,
  maxAge: 1209600000,
  sameSite: "lax"
};
```
REMEMBER: These defaults are applied to every cookie unless the user provides options for their cookies.

Cookie:

Options:
domain (string), encode (function), expires (date), maxAge (number), httponly (boolean), path (string), secure (boolean), signed (boolean), sameSite (boolean or string)

Example Code:

The developer may create an object to store unique cookie options:
```js
const cookieOptions = {
  secure: true,
  httponly: true,
  signed: true,
  expires: new Date(Date.now() + 900000),
  domain: 'hopliteJS.com',
  path: '/hopliteJS'
}
```
Create an object to store cookie name and value:
```js
const cookies = {
  cookieName1: 'cookie value 1',
  cookieName2: 'cookie value 2',
  foo: 'bar'
}
```
Invoke createRulesetCookie with cookie object and optional cookie option object
const cookieRuleset = hoplite.createRulesetCookie(cookies [, cookieOptions])

COOKIE-JWTs
The developer is able to add custom JWTs to cookies by first utilizing the createRulesetCookieJWT method. This method can be used alongside any other ruleset-creating methods in hopLiteJS (eg. createRulesetCookie). 
This method takes in a CookieJWTList parameter, where a developer defines the names of the cookies, their secrets, and options. Each key-value pair in the CookieJWTList object are individual cookies where the keys are cookie names and their values are objects with a secret key, and the optional cookie options object consisting of optional security measures such as domain, encode, etc. (shown below). If the option parameter is not inputted, hopLiteJS default options will be applied.

```js
const cookieJWTList = {
  cookieName1: {
    secret: "kljashdflkjshadf",
    options: {
      httpOnly: true,
    }
  },
  cookieName2: {
    secret: "hello",
  }
}
```
```js
const myPayload = {
  cookieName1: h3bv3h3hg3g,
  cookieName2: 'L2'
}
```
OPTIONS:
domain (string), encode (function), expires (date), maxAge (number), httponly (boolean), path (string), secure (boolean), signed (boolean), sameSite (boolean or string)




Example Code:

Create a secret string:
```js
const mySecret = 'password123';
```
Create a payload object
```js
const myPayload = {
  cookieName1: h3bv3h3hg3g,
  cookieName2: 'L2'
}
```
Create an optional options object:
```js
const cookieOptions = {
  secure: true,
  httponly: true,
  signed: true,
  expires: new Date(Date.now() + 400000),
  domain: 'hopliteIsAwesome.com',
  path: '/hopliteAwesome'
}
```
Create a cookie-JWT object:
```js
const cookieJWTObj = {
  token1 = JWT
}
```
Invoke createRuleset method with cookieJWTObj as an argument:
const cookieJWTRuleset = hoplite.createRulesetCookieJWT(cookieJWTObject)

USING THE GLOBAL RULESET CREATOR:

After the developer decides which security methods (eg. cookie, cookieJWT, etc.) to use, they must invoke the createRuleset method with each of these creation methods as arguments. The first argument must be a message which will be used as the res.send at the end of the middleware.

Example Code:

Create a message which will be used as the res.send:
```js
const message = 'Cookie and Cookie-JWTs have been set successfully'
```
createRuleset with parameters:
```js
hoplite.createRuleset(message, ...args)
```
Invoke createRuleset with appropriate arguments:
```js
const ruleset = hoplite.createRuleset(message, cookieRuleset, cookieJWTRuleset)
```


AUTHENTICATION:
After creating the global ruleset, the developer is able to authenticate their clients by invoking the authenticate method. The parameters are the global ruleset, payload(represents list of cookies, OR JWT payload) and the response object, provided by express.

Example Code:
```js
app.post('/authn', async (req, res) => {
  const result = await authenticate(ruleset, payload, res); 
})
```
AUTHORIZATION:
After creating the global ruleset, defining unique payloads, and authenticating, the developer is able to authorize their clients by invoking the authorization middleware method. The parameters are the global ruleset, and the unique key-value pairs required to access the next resource.

Example: 
```js
const requiredClaims = {
  role: "admin",
  bonusKey: "Only I may access this resource"
}

Example Code:
app.post('/authz', authorize(myRuleset, requiredClaims), (req, res) => {
  res.status(200).send("Authorization Successful");
})
```
HASHING:

A. Hashing using bcrypt
The developer is required to provide inputPassword (string) and cost (number) as parameters. The inputPassword refers to the password input by the client and cost refers to the number of salt rounds in bcrypt. By default the cost is set to 10 rounds. The output of this function is a hashed string.

Example Code:
```js
const inputPassword = 'password123';
const cost = 10;

const hashedPassword = hoplite.bcryptHash(inputPassword, cost);
console.log(hashedPassword) //prints hashed string
```

B. Comparing input password with hashed string using bcrypt
The developer is required to provide inputPassword (string) and hashedPassword (string) as parameters. The inputPassword refers to the password input by the client and hashedPassword refers to the hashed password that is stored. A developer can store the hashed password in a database and query for it using the id that is associated with it. The output of this function is a boolean.

Example Code:
```js
const inputPassword = 'password123';
const hashedPassword = 'Hashed Database Password';

const samePassword = hoplite.bcryptCompare(inputPassword, hashedPassword);
console.log(samePassword) //prints true or false
```

C. Hashing using argon2
The developer is required to provide inputPassword (string) as a parameter. The inputPassword refers to the password input by the client. The output of this function is a hashed string.

Example Code:
```js
const inputPassword = 'password123';
const hashedPassword = hoplite.argonHash(inputPassword);
console.log(hashedPassword) //prints hashed string
```
D. Comparing input password with hashed string using argon2
The developer is required to provide inputPassword (string) and hashedPassword (string) as parameters. The inputPassword refers to the password input by the client and hashedPassword refers to the hashed password that is stored. A developer can store the hashed password in a database and query for it using the id that is associated with it. The output of this function is a boolean.

Example Code:
```js
const inputPassword = 'qwerty123';
const hashedPassword = 'Hashed Database Password';

const samePassword  = hoplite.argonCompare(inputPassword, hashedPassword);
console.log(samePassword) //prints true or false
```
CURRENTLY DEVELOPING:
-oAuth
-user privilege





<!-- # hoplitejs
![hopLiteJS](https://i.ibb.co/sPj9Zdp/hoplite.png)
- [hopLiteJS](#hopLiteJS)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Typescript](#Typescript)
      -[ts-loader](#ts-loader)
    - [ESLint](#eslint)
      -[VSCode + ESLint + Prettier](#vscode--eslint--prettier)
      -[eslint-config-airbnb](#eslint-config-airbnb)
      -[eslint-plugin-import](#eslint-plugin-import)
    - [Webpack](#webpack)
      -[webpack-cli](#webpack-cli)
      -[webpack-dev-server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [@types](#@types)
      -[@types/node](#@types/node)
      -[@types/express](#@types/express)
      -[@types/bcrypt](#@types/bcrypt)
      -[@types/argon2](#@types/argon2)
      -[@types/cookie-parser](#@types/cookie-parser)
      -[@types/jsonwebtoken](#@types/jsonwebtoken)
  - [Installation guide](#installation-guide)

## Introduction
Welcome to **hopLiteJS**!
hopLiteJS is a developer friendly middleware library for Node.js. hopLiteJS can be imported and used in to any Express-based web application. hopLiteJS has multiple developer interfaces for customizing authentication and authorization.

hopLiteJS is equiped with two modes: default and advanced. Default mode is recommended for most developers because it is easier to use and minimizes the need for users to make security decisions because of preset security methods. However, for more experienced developers who have a thorough understanding of security, advanced mode is recommended as it contains more options to customize authentication and authorization to fulfill specific needs. 

## Philosophy
**hopLiteJS** was created as a way to abstract authentication and authorization for developers who need to implement these functionalities. The purpose of this library is to create a security suite that will give developers the ability to hash, authenticate, and authorize users to protect routes. Since authentication and authorization can be time consuming and complex, hopLiteJS aims to solve this problem by providing developers a user-friendly library. 

### Installation Guide
In the terminal type the following line :
```
npm install hopLiteJS
```

## UsageNew
1. Import hopLiteJS using the following code : 
```js
 import HopliteSchemas from 'hopLiteJS';
```
2. Import DefaultHopLite :
Inside the file type - 
```js
const { DefaultHoplite } = require('hopLiteJS');
```
3. Import Authenticate and Authorize :
Inside the file type - 
```js
const { authenticate, authorize } = DefaultHoplite;
```
4. Import HopLiteSchemas : 
Inside the file type - 
```js
const { HopliteSchemas } = require('hopLiteJS');
```
5. Import Rulesets :
Inside the file type - 
```js
const { createRuleset, createRulesetCookieJWT, createRulesetCookie } = HopliteSchemas;
```




## Usage
**Default hopLite** [hopLiteJS](#hopLiteJS);
#### Step by Step:
1. Import HopLiteSchemas by writing at the top of the file 
```js
 import HopliteSchemas from 'hopLiteJS';
```
2. Create and save a user object using:
```js
 HopliteSchemas.createUser(username, password, role);
```
example : 
```js
const username = "JonSmith"
const password = "pass123"
const role = "admin"
 HopliteSchemas.createUser(username, password, role);
```
the above code creates an object that ends up turning into a hopLite friendly object ready for authorizational use and looks like : 
```js
 {username: "JonSmith",
  password: "pass123"
  role: "admin"
 }
```
3. Create and save a ruleset object using:
```js
 HopliteSchemas.createRuleset(...args);
```

{
  cookiejwt: {
    cookiekey: "testCookieKey",
    secret: "testSecretString",
    payload: {
      userKey1: someVal
    }

  }
}

*DefaultHoplite*
This is the batteries included option. By default, it will create a cookie and JWT combination upon successful user authentication. 

*AdvancedHoplite*

*HashMethods*
  -[bcrypt](#bcrypt)

  -[argon2](#argon2)

## Documentation
#### Step by Step:

1. Create and save a user object using:
```js
 HopliteSchemas.createUser(username, password, role);
```
2. Create and save a ruleset object using:
```js
 HopliteSchemas.createRuleset(...args);
```
3. Invoke DefaultHoplite Authenticate after verifying a user:
```js
const {username, password, role} = req.body
const userObject = HopliteSchemas.createUser(username, password, role);
const rulesetObject = HopliteSchemas.createRuleset(...args);
DefaultHoplite.AuthnController.Authenticate(userObject, rulesetObject)
```
4. Invoke DefaultHoplite Authorize on the routes you wish to protect!
```js
app.post('/protected-endpoint, DefaultHoplite.AuthnController.Authorize, (req, res) => {
  res.send("You've been authorized!");
})
```

Four Steps to protecting your assets!

##### DefaultHoplite
[DefaultHoplite](#DefaultHoplite)
  1. [AuthnController](#AuthnController)
    1. authentication
    2. authenticateCookie
    3. authenticateJWT
  2. [AuthzController](#AuthzController)
    1. authorize
    2. authorizeCookie
    3. authorizeJWT
##### AdvancedHoplite
[AdvancedHoplite](#AdvancedHoplite)
  1.[AuthnController](#AuthnController)
    1. authentication
    2. authenticateCookie
    3. authenticateJWT
  2.[AuthzController](#AuthzController)
    1. authorize
    2. authorizeCookie
    3. authorizeJWT


##### HopliteSchemas
[HopliteSchemas](#HopliteSchemas)
  These methods represent the information that **hopLiteJS** needs in order to function.
  1.[HopliteSchemas](#createHoplite)
    1. Takes in *username*, *password*, and *role/privilege* as arguments.
    2. Returns an **object**.
    ```javascript
    const { createUser } = require("your-file-path-here.someExtension");
    function createUser(username, password, role/privilege) { 
      return createdUser;
    }
    ```
  2.[HopliteSchemas](#createRuleset)
    1. Takes in many optional arguments.
      - cookie: object
      - jwt: object
      - bearerToken: boolean
      - ntlm: string
      - hawk: string
      - secret: string
    2. Returns an **object**.
    ```javascript
    const { createRuleset } = require("your-file-path-here.someExtension");
    function createRuleset() { 
      return createdRuleset;
    }
    ```
##### HashMethods
[HashMethods](#HashMethods)
  1.[pwbcrypt](#pwbcrypt)
    1. Takes *inputString* and an *optional* costFactor argument. costFactor has a default number.
    2. Returns a **hashed string**;
  2.[pwArgon2](#pwArgon2)
    1. Takes *inputString*.
    2. Returns a **hashed string**;
  3.[compareBcrypt](#compareBcrypt)
    1. Takes *inputString* and *hashedString* as arguments.
    2. Returns a **boolean**;
  4.[compareArgon2](#compareArgon2)
    1. Takes *inputString* and *hashedString* as arguments.
    2. Returns a **boolean**; -->

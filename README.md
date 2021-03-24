Welcome to **hopLiteJS**!
hopLiteJS was created in 2021 with the vision to be a developer friendly lightweight middleware library for Node.js. hopLiteJS can be imported and used in any Express-based web application. It has multiple developer interfaces for customizing authentication and authorization. With hopLiteJS, developers no longer have to dread authentication, authorization and hashing. 

In ancient history, the hoplites were some of the fiercest warriors. They showed fortitude and resilience when outnumbered because their mission was to protect what was important to them. Today as developers we often find ourselves outnumbered by online hackers. However, we at hopeLiteJS is here to help protect you, as you are important to us.


### Installation Guide
In the terminal type the following command :
```
npm install hopLiteJS
```

## Getting Started

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
## Data Flow
![hopLite Data Flow](https://ibb.co/L6WYhCg)

## INDIVIDUAL RULESET: COOKIES

The developer is able to add custom cookies by first utilizing the createRulesetCookie method in order to create a cookieRuleset. This method can be used alongside any other ruleset-creating methods in hopLiteJS (eg. createRulesetCookieJWT).

The parameters of the method are cookies (object) and optional cookieOptions (object). The developer is required to first create the data for these parameters. Each key-value pair in the cookies object are individual cookies where the keys are cookie names and values are cookie data. Each key-value pair in the cookie options object consists of security measures to choose from such as domain, encode, etc. (shown below). If the option parameter is not inputted, default options will be applied, the cookie options object itself is also optional. If there is no cookie option argument set by the developer the cookie option argument will be changed into defaultOptions shown below.

Cookie:
![Cookie Options](https://ibb.co/9h0Gtyv)

Default Cookie Option:
```js
const defaultOptions = {
  httpOnly: true,
  // secure: true, //with this option, you will not see it in Postman. Keep this in mind.
  maxAge: 1209600000,
  sameSite: "lax"
};
```

Example Code:
Create an object to store cookie options:
const cookieOptions = {
  secure: true,
  httponly: true,
  signed: true,
  expires: new Date(Date.now() + 900000),
  domain: 'hopliteJS.com',
  path: '/hopliteJS'
}
Example Code:
Create an object to store cookie name and value:
const cookies = {
  cookieName1: 'cookie value 1',
  cookieName2: 'cookie value 2',
  foo: 'bar'
}

Invoke createRulesetCookie with cookie object and optional cookie option object
const cookieRuleset = hoplite.createRulesetCookie(cookies [, cookieOptions])

## Individual Ruleset: Cookie-JWTs
The developer is able to add custom JWTs to cookies by first utilizing the createRulesetCookieJWT method. This method can be used alongside any other ruleset-creating methods in hopLiteJS (eg. createRulesetCookie). 
The parameter of this method is cookieJWTObject. The developer is required to first create the data for this parameters. Each key-value pair in the cookies object are individual cookies where the keys are cookie names and values are JWT objects. The key-value pairs in the JWT objects are secret, payload and the optional cookie options object consisting of optional security measures such as domain, encode, etc. (shown below). If the cookie options parameter is not inputted, default options will be applied, shown below. A developer can set as many cookieJWTs as they want within the cookieJWTObject.

OPTIONS:

domain (string), encode (function), expires (date), maxAge (number), httponly (boolean), path (string), secure (boolean), signed (boolean), sameSite (boolean or string)

Default Cookie Option:
const defaultOptions = {
  httpOnly: true,
  // secure: true, //with this option, you will not see it in Postman. Keep this in mind.
  maxAge: 1209600000,
  sameSite: "lax"
};

Example Code:

Create a secret string:
constant mySecret = 'password123';

Create a payload object
const myPayload = {
  id: h3bv3h3hg3g,
  privilege: 'L2'
}

Create an optional options object:
const cookieOptions = {
  secure: true,
  httponly: true,
  signed: true,
  expires: new Date(Date.now() + 400000),
  domain: 'hopliteIsAwesome.com',
  path: '/hopliteAwesome'
}

Create a JWT:
First Create a JWT object
const jwtObj = {
  secret: mySecret,
  payload: myPayload,
  options: cookieOptions
}

Create a cookie-JWT object:
const cookieJWTObject = {
  token1 = jwtObj
}

Invoke createRuleset method with cookieJWTObject as an argument:
const cookieJWTRuleset = hoplite.createRulesetCookieJWT(cookieJWTObject)

##GLOBAL RULESET:

After the developer has decided which security methods (eg. cookie, cookieJWT, etc.) to use, they must invoke the createRuleset method with each of these creation methods as arguments. The first argument must be a message which will be used as the res.send at the end of the middleware.


Usage : 
hoplite.createRuleset(message, [, cookieRuleset], [,  cookieJWTRuleset])

Example Code
Create a message which will be used as the res.send:
const message = 'Cookie and Cookie-JWTs have been set successfully'
Example Code: 
Invoke createRuleset with appropriate arguments:
const ruleset = hoplite.createRuleset(message, cookieRuleset, cookieJWTRuleset)



## AUTHENTICATION:
After creating the global ruleset, the developer is able to authenticate their clients by invoking the authentication helper method. The parameters are global ruleset and res which will allow the middleware chain to continue. The function will automatically iterate through the ruleset and apply all of the individual rulesets inputs.



Example Code:

app.post('/authn', async (req, res) => {
  const result = await authenticate(ruleset, res); 
})

## AUTHORIZATION:
After creating the global ruleset and authenticating, the developer is able to authorize their clients by invoking the authorization middleware method. The only parameter is the global ruleset. The function will automatically iterate through the ruleset and apply all of the individual rulesets inputs. On routes the developer can change the ruleset to allow or disallow certain users with cookies and/or cookieJWTs, this can be achieved by changing the globalruleset within the argument of the authorization middleware. If a user does not have authorization to access a route, the response will be sent with a status code of 403 and the message "You do not have access to this resource."

Example Code:
app.post('/authz', authorize(myRuleset), (req, res) => {
  res.status(200).send("Authorization Successful");
})
app.post('/authNotAllowed', authorize(myRuleset), (req, res) => {
  res.status(403).send("You do not have access to this resource.");
})

HASHING:

A. Hashing using bcrypt
The developer is required to provide inputPassword (string) and cost (number) as parameters. The inputPassword refers to the password input by the client and cost refers to the number of salt rounds in bcrypt. By default the cost is set to 10 rounds. The output of this function is a hashed string.

Example Code:

const inputPassword = 'password123';
const cost = 10;

const hashedPassword = hoplite.bcryptHash(inputPassword, cost);
console.log(hashedPassword) //prints hashed string


B. Comparing input password with hashed string using bcrypt
The developer is required to provide inputPassword (string) and hashedPassword (string) as parameters. The inputPassword refers to the password input by the client and hashedPassword refers to the hashed password that is stored. A developer can store the hashed password in a database and query for it using the id that is associated with it. The output of this function is a boolean.

Example Code:
const inputPassword = 'password123';
const hashedPassword = 'Hashed Database Password';

const samePassword = hoplite.bcryptCompare(inputPassword, hashedPassword);
console.log(samePassword) //prints true or false


C. Hashing using argon2
The developer is required to provide inputPassword (string) as a parameter. The inputPassword refers to the password input by the client. The output of this function is a hashed string.

Example Code:
const inputPassword = 'password123';
const hashedPassword = hoplite.argonHash(inputPassword);
console.log(hashedPassword) //prints hashed string

D. Comparing input password with hashed string using argon2
The developer is required to provide inputPassword (string) and hashedPassword (string) as parameters. The inputPassword refers to the password input by the client and hashedPassword refers to the hashed password that is stored. A developer can store the hashed password in a database and query for it using the id that is associated with it. The output of this function is a boolean.

Example Code:
const inputPassword = 'qwerty123';
const hashedPassword = 'Hashed Database Password';

const samePassword  = hoplite.argonCompare(inputPassword, hashedPassword);
console.log(samePassword) //prints true or false

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

# hoplitejs
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
    2. Returns a **boolean**;

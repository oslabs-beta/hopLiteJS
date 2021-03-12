# hoplitejs

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

### Installation Guide
It's as easy as:
**1.**
```
npm install hopLiteJS
```

## Philosophy
**hopLiteJS** was created as a way to abstract authentication and authorization for developers who need to implement these functionalities. We wanted to create a security suite that will give users the ability to hash, authenticate, and authorize users to protect routes. Authentication and Authorization can be time consuming; our goal is to solve this problem.

~~Verbose Code~~
~~Difficult Documentation~~

## Quick Start
**Install** [hopLiteJS](#hopLiteJS);

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
  -[AuthnController](#AuthnController)
    1. authentication
    2. authenticateCookie
    3. authenticateJWT
  -[AuthzController](#AuthzController)
    1. authorize
    2. authorizeCookie
    3. authorizeJWT
##### AdvancedHoplite
[AdvancedHoplite](#AdvancedHoplite)
  -[AuthnController](#AuthnController)
    1. authentication
    2. authenticateCookie
    3. authenticateJWT
  -[AuthzController](#AuthzController)
    1. authorize
    2. authorizeCookie
    3. authorizeJWT


##### HopliteSchemas
[HopliteSchemas](#HopliteSchemas)
  These methods represent the information that **hopLiteJS** needs in order to function.
  -[HopliteSchemas](#createHoplite)
    1. Takes in *username*, *password*, and *role/privilege* as arguments.
    2. Returns an **object**.
    ```javascript
    const { createUser } = require("your-file-path-here.someExtension");
    function createUser(username, password, role/privilege) { 
      return createdUser;
    }
    ```
  -[HopliteSchemas](#createRuleset)
    1. Takes in many optional arguments.
      1. cookie: object
      2. jwt: object
      3. bearerToken: boolean
      4. ntlm: string
      5. hawk: string
      6. secret: string
    2. Returns an **object**.
    ```javascript
    const { createRuleset } = require("your-file-path-here.someExtension");
    function createRuleset() { 
      return createdRuleset;
    }
    ```
##### HashMethods
[HashMethods](#HashMethods)
  -[pwbcrypt](#pwbcrypt)
    1. Takes *inputString* and an *optional* costFactor argument. costFactor has a default number.
    2. Returns a **hashed string**;
  -[pwArgon2](#pwArgon2)
    1. Takes *inputString*.
    2. Returns a **hashed string**;
  -[compareBcrypt](#compareBcrypt)
    1. Takes *inputString* and *hashedString* as arguments.
    2. Returns a **boolean**;
  -[compareArgon2](#compareArgon2)
    1. Takes *inputString* and *hashedString* as arguments.
    2. Returns a **boolean**;
import AuthenticationHelperMethods from 'AuthenticationHelperMethods';


//ted would you please create a branch, set me up as your partner and push it up there soI can pull?
// my handle :   koderka2020
//ted would you please create a branch, set me up as your partner and push it up there soI can pull?
// my handle :   koderka2020
//ted would you please create a branch, set me up as your partner and push it up there soI can pull?
// my handle :   koderka2020


class AuthenticationBlueprint {
  queriedUserSchema: queriedUserSchema
  ruleset: {};
  constructor(queriedUserSchema, ruleset) {
    this.queriedUserSchema = queriedUserSchema;
    this.ruleset = ruleset
  }
  // authenticate()
  authenticate(req: any, res: any, next: any) {
  //  userLoggingIn.username
    if (ruleset.cookie) {
      res.cookie('role', 'admin').send("Cookie Set.");
    } else {
      next(err)
    }
    addCookie();
    addTWT();
    hashing();
    runAll();
}



  // ApiRouter.get('/login', DefaultHoplite.authenticate(user, ruleset), (req, res) {}
  // })

module.exports = {
  AuthenticationBlueprint: object
};


// import { NextFunction, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
// import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
// import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';
// import DataStoredInToken from '../interfaces/dataStoredInToken';
// import RequestWithUser from '../interfaces/requestWithUser.interface';
// import userModel from '../user/user.model';

// async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
//   const cookies = request.cookies;
//   if (cookies && cookies.Authorization) {
//     const secret = process.env.JWT_SECRET;
//     try {
//       const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
//       const id = verificationResponse._id;
//       const user = await userModel.findById(id);
//       if (user) {
//         request.user = user;
//         next();
//       } else {
//         next(new WrongAuthenticationTokenException());
//       }
//     } catch (error) {
//       next(new WrongAuthenticationTokenException());
//     }
//   } else {
//     next(new AuthenticationTokenMissingException());
//   }
// }


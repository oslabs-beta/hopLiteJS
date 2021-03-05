"use strict";
// req.cookie.role === "admin"
// we need to require a cookie parser
// we need to have user install a cookie parser
// function hasRole(cookie: string, role: string, correctRole: string) {
//   if(cookie && role === correctRole) //do some stuff
//   else //do some other stuff
// }
// authorizationController.checkSignIn = function (req, res, next) {
//   console.log("these are the cookies", req.cookies);
//   if (req.cookies.role === "admin") {
//     console.log('it works')
//     next();     //If session exists, proceed to page
//   } else {
//     var err = new Error("Not logged in!");
//     console.log("not logged in with cookie");
//     next(err);  //Error, trying to access unauthorized page!
//   }
// }

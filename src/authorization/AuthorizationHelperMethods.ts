// req.cookie.role === "admin"
import http from 'http';
const {};

// we need to require a cookie parser
// we need to have user install a cookie parser

// interface cookie {role: string = "admin"}

function hasRole(role: string, correctRole: string, next: NextFunction) {
  const codes = {
    success: 200,
    failure: 401
  }
  if(role === correctRole){
    res.locals.code = codes.success;
    next();

  } 
  else console.log("error wrong username and password is incorrect or does not exist"), throw error, return codes.success;
}

export {
  hasRole
}

// ApiRouter.get('/authorizeuser', authorizationController.checkSignIn, (req, res) => {
//   console.log(req.cookies.role)
// })





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
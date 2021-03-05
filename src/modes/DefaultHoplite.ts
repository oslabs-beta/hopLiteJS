import Authentication from "../authentication/AuthenticationBlueprint";

class DefaultHopliteBlueprint {
  Authentication() //and authentication is going to set all the important parts for authorization.
  Authorization() //authorization will check whether or not someone has been authenticated.

}

//create an object with all the properties of calling Authentication and Authorization.
//export the object

const DefaultHoplite = new DefaultHopliteBlueprint();

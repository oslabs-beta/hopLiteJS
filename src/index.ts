import DefaultHopliteBlueprint  from './modes/DefaultHoplite';
import { AuthorizationControllerBlueprint } from './authorization/AuthorizationController';
import { AuthenticationControllerBlueprint } from './authentication/AuthenticationController';
import { HopliteUserSchemaBlueprint} from './modes/HopliteUserSchema'
import { HashingMethodsBlueprint } from './hashing/HashMethods';

const AuthorizationController = new AuthorizationControllerBlueprint();
const AuthenticationController = new AuthenticationControllerBlueprint();
const DefaultHoplite = new DefaultHopliteBlueprint(AuthorizationController, AuthenticationController);
const HopliteUserSchema = new HopliteUserSchemaBlueprint();
const HashMethods = new HashingMethodsBlueprint();


export {
  DefaultHoplite,
  HopliteUserSchema,
  HashMethods
};

import DefaultHopliteBlueprint  from './modes/DefaultHoplite';
import { AuthorizationControllerBlueprint } from './authorization/AuthorizationController';
import { AuthenticationControllerBlueprint } from './authentication/AuthenticationController';
import {HopliteUserSchemaBlueprint} from './modes/HopliteUserSchema'
const AuthorizationController = new AuthorizationControllerBlueprint();
const AuthenticationController = new AuthenticationControllerBlueprint();
const DefaultHoplite = new DefaultHopliteBlueprint(AuthorizationController, AuthenticationController);
const HopliteUserSchema = new HopliteUserSchemaBlueprint();
export {
  DefaultHoplite,
  HopliteUserSchema
};
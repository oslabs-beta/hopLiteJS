import DefaultHopliteBlueprint  from './modes/DefaultHoplite';
import { AuthorizationControllerBlueprint } from './authorization/AuthorizationController';
import { AuthenticationControllerBlueprint } from './authentication/AuthenticationController';

const AuthorizationController = new AuthorizationControllerBlueprint();
const AuthenticationController = new AuthenticationControllerBlueprint();
const DefaultHoplite = new DefaultHopliteBlueprint(AuthorizationController, AuthenticationController);

export {
  DefaultHoplite
};
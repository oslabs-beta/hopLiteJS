import DefaultHopliteBlueprint  from './modes/DefaultHoplite';
import { AuthorizationControllerBlueprint } from './authorization/AuthorizationController';

const AuthorizationController = new AuthorizationControllerBlueprint();

const DefaultHoplite = new DefaultHopliteBlueprint(AuthorizationController);

export {
  DefaultHoplite
};
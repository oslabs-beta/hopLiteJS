import DefaultHopliteBlueprint from './modes/DefaultHoplite';
import { authorize } from './authorization/AuthorizationController';
import { authenticate } from './authentication/AuthenticationController';
import { HopliteSchemasBlueprint } from './modes/HopliteSchemas';

const DefaultHoplite = new DefaultHopliteBlueprint(authenticate, authorize);
const HopliteSchemas = new HopliteSchemasBlueprint();
export {
  DefaultHoplite,
  HopliteSchemas,
};
//file to export DefaultHoplite and HopliteSchemas

import DefaultHopliteBlueprint from './modes/DefaultHoplite';
import { authorize } from './authorization/AuthorizationController';
import { authenticate } from './authentication/AuthenticationController';
import { HopliteSchemasBlueprint } from './modes/HopliteSchemas';
import { HashingMethodsBlueprint } from './modes/HashMethods';

const DefaultHoplite = new DefaultHopliteBlueprint(authenticate, authorize);
const HopliteSchemas = new HopliteSchemasBlueprint();
const HashMethods = new HashingMethodsBlueprint();

export {
  DefaultHoplite,
  HopliteSchemas,
  HashMethods
};
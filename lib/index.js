"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHoplite = void 0;
var DefaultHoplite_1 = require("./modes/DefaultHoplite");
var AuthorizationController_1 = require("./authorization/AuthorizationController");
var AuthorizationController = new AuthorizationController_1.AuthorizationControllerBlueprint();
var DefaultHoplite = new DefaultHoplite_1.default(AuthorizationController);
exports.DefaultHoplite = DefaultHoplite;

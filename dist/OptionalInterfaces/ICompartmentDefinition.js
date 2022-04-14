"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompartmentDefinitionStatusEnum = exports.CompartmentDefinitionCodeEnum = void 0;
/**
 * Code Values for the CompartmentDefinition.code field
 */
var CompartmentDefinitionCodeEnum;
(function (CompartmentDefinitionCodeEnum) {
    CompartmentDefinitionCodeEnum["PATIENT"] = "Patient";
    CompartmentDefinitionCodeEnum["ENCOUNTER"] = "Encounter";
    CompartmentDefinitionCodeEnum["RELATEDPERSON"] = "RelatedPerson";
    CompartmentDefinitionCodeEnum["PRACTITIONER"] = "Practitioner";
    CompartmentDefinitionCodeEnum["DEVICE"] = "Device";
})(CompartmentDefinitionCodeEnum = exports.CompartmentDefinitionCodeEnum || (exports.CompartmentDefinitionCodeEnum = {}));
/**
 * Code Values for the CompartmentDefinition.status field
 */
var CompartmentDefinitionStatusEnum;
(function (CompartmentDefinitionStatusEnum) {
    CompartmentDefinitionStatusEnum["DRAFT"] = "draft";
    CompartmentDefinitionStatusEnum["ACTIVE"] = "active";
    CompartmentDefinitionStatusEnum["RETIRED"] = "retired";
    CompartmentDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(CompartmentDefinitionStatusEnum = exports.CompartmentDefinitionStatusEnum || (exports.CompartmentDefinitionStatusEnum = {}));
//# sourceMappingURL=ICompartmentDefinition.js.map
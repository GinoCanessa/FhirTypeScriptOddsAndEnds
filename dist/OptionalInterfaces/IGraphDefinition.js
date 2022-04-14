"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphDefinitionStatusEnum = exports.GraphDefinitionLinkTargetCompartmentUseEnum = exports.GraphDefinitionLinkTargetCompartmentRuleEnum = exports.GraphDefinitionLinkTargetCompartmentCodeEnum = void 0;
/**
 * Code Values for the GraphDefinition.link.target.compartment.code field
 */
var GraphDefinitionLinkTargetCompartmentCodeEnum;
(function (GraphDefinitionLinkTargetCompartmentCodeEnum) {
    GraphDefinitionLinkTargetCompartmentCodeEnum["PATIENT"] = "Patient";
    GraphDefinitionLinkTargetCompartmentCodeEnum["ENCOUNTER"] = "Encounter";
    GraphDefinitionLinkTargetCompartmentCodeEnum["RELATEDPERSON"] = "RelatedPerson";
    GraphDefinitionLinkTargetCompartmentCodeEnum["PRACTITIONER"] = "Practitioner";
    GraphDefinitionLinkTargetCompartmentCodeEnum["DEVICE"] = "Device";
})(GraphDefinitionLinkTargetCompartmentCodeEnum = exports.GraphDefinitionLinkTargetCompartmentCodeEnum || (exports.GraphDefinitionLinkTargetCompartmentCodeEnum = {}));
/**
 * Code Values for the GraphDefinition.link.target.compartment.rule field
 */
var GraphDefinitionLinkTargetCompartmentRuleEnum;
(function (GraphDefinitionLinkTargetCompartmentRuleEnum) {
    GraphDefinitionLinkTargetCompartmentRuleEnum["IDENTICAL"] = "identical";
    GraphDefinitionLinkTargetCompartmentRuleEnum["MATCHING"] = "matching";
    GraphDefinitionLinkTargetCompartmentRuleEnum["DIFFERENT"] = "different";
    GraphDefinitionLinkTargetCompartmentRuleEnum["CUSTOM"] = "custom";
})(GraphDefinitionLinkTargetCompartmentRuleEnum = exports.GraphDefinitionLinkTargetCompartmentRuleEnum || (exports.GraphDefinitionLinkTargetCompartmentRuleEnum = {}));
/**
 * Code Values for the GraphDefinition.link.target.compartment.use field
 */
var GraphDefinitionLinkTargetCompartmentUseEnum;
(function (GraphDefinitionLinkTargetCompartmentUseEnum) {
    GraphDefinitionLinkTargetCompartmentUseEnum["CONDITION"] = "condition";
    GraphDefinitionLinkTargetCompartmentUseEnum["REQUIREMENT"] = "requirement";
})(GraphDefinitionLinkTargetCompartmentUseEnum = exports.GraphDefinitionLinkTargetCompartmentUseEnum || (exports.GraphDefinitionLinkTargetCompartmentUseEnum = {}));
/**
 * Code Values for the GraphDefinition.status field
 */
var GraphDefinitionStatusEnum;
(function (GraphDefinitionStatusEnum) {
    GraphDefinitionStatusEnum["DRAFT"] = "draft";
    GraphDefinitionStatusEnum["ACTIVE"] = "active";
    GraphDefinitionStatusEnum["RETIRED"] = "retired";
    GraphDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(GraphDefinitionStatusEnum = exports.GraphDefinitionStatusEnum || (exports.GraphDefinitionStatusEnum = {}));
//# sourceMappingURL=IGraphDefinition.js.map
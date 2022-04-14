"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementDefinitionRepresentationEnum = exports.ElementDefinitionBindingStrengthEnum = exports.ElementDefinitionConstraintSeverityEnum = exports.ElementDefinitionTypeVersioningEnum = exports.ElementDefinitionTypeAggregationEnum = exports.ElementDefinitionSlicingRulesEnum = exports.ElementDefinitionSlicingDiscriminatorTypeEnum = void 0;
/**
 * Code Values for the ElementDefinition.slicing.discriminator.type field
 */
var ElementDefinitionSlicingDiscriminatorTypeEnum;
(function (ElementDefinitionSlicingDiscriminatorTypeEnum) {
    ElementDefinitionSlicingDiscriminatorTypeEnum["VALUE"] = "value";
    ElementDefinitionSlicingDiscriminatorTypeEnum["EXISTS"] = "exists";
    ElementDefinitionSlicingDiscriminatorTypeEnum["PATTERN"] = "pattern";
    ElementDefinitionSlicingDiscriminatorTypeEnum["TYPE"] = "type";
    ElementDefinitionSlicingDiscriminatorTypeEnum["PROFILE"] = "profile";
})(ElementDefinitionSlicingDiscriminatorTypeEnum = exports.ElementDefinitionSlicingDiscriminatorTypeEnum || (exports.ElementDefinitionSlicingDiscriminatorTypeEnum = {}));
/**
 * Code Values for the ElementDefinition.slicing.rules field
 */
var ElementDefinitionSlicingRulesEnum;
(function (ElementDefinitionSlicingRulesEnum) {
    ElementDefinitionSlicingRulesEnum["CLOSED"] = "closed";
    ElementDefinitionSlicingRulesEnum["OPEN"] = "open";
    ElementDefinitionSlicingRulesEnum["OPENATEND"] = "openAtEnd";
})(ElementDefinitionSlicingRulesEnum = exports.ElementDefinitionSlicingRulesEnum || (exports.ElementDefinitionSlicingRulesEnum = {}));
/**
 * Code Values for the ElementDefinition.type.aggregation field
 */
var ElementDefinitionTypeAggregationEnum;
(function (ElementDefinitionTypeAggregationEnum) {
    ElementDefinitionTypeAggregationEnum["CONTAINED"] = "contained";
    ElementDefinitionTypeAggregationEnum["REFERENCED"] = "referenced";
    ElementDefinitionTypeAggregationEnum["BUNDLED"] = "bundled";
})(ElementDefinitionTypeAggregationEnum = exports.ElementDefinitionTypeAggregationEnum || (exports.ElementDefinitionTypeAggregationEnum = {}));
/**
 * Code Values for the ElementDefinition.type.versioning field
 */
var ElementDefinitionTypeVersioningEnum;
(function (ElementDefinitionTypeVersioningEnum) {
    ElementDefinitionTypeVersioningEnum["EITHER"] = "either";
    ElementDefinitionTypeVersioningEnum["INDEPENDENT"] = "independent";
    ElementDefinitionTypeVersioningEnum["SPECIFIC"] = "specific";
})(ElementDefinitionTypeVersioningEnum = exports.ElementDefinitionTypeVersioningEnum || (exports.ElementDefinitionTypeVersioningEnum = {}));
/**
 * Code Values for the ElementDefinition.constraint.severity field
 */
var ElementDefinitionConstraintSeverityEnum;
(function (ElementDefinitionConstraintSeverityEnum) {
    ElementDefinitionConstraintSeverityEnum["ERROR"] = "error";
    ElementDefinitionConstraintSeverityEnum["WARNING"] = "warning";
})(ElementDefinitionConstraintSeverityEnum = exports.ElementDefinitionConstraintSeverityEnum || (exports.ElementDefinitionConstraintSeverityEnum = {}));
/**
 * Code Values for the ElementDefinition.binding.strength field
 */
var ElementDefinitionBindingStrengthEnum;
(function (ElementDefinitionBindingStrengthEnum) {
    ElementDefinitionBindingStrengthEnum["REQUIRED"] = "required";
    ElementDefinitionBindingStrengthEnum["EXTENSIBLE"] = "extensible";
    ElementDefinitionBindingStrengthEnum["PREFERRED"] = "preferred";
    ElementDefinitionBindingStrengthEnum["EXAMPLE"] = "example";
})(ElementDefinitionBindingStrengthEnum = exports.ElementDefinitionBindingStrengthEnum || (exports.ElementDefinitionBindingStrengthEnum = {}));
/**
 * Code Values for the ElementDefinition.representation field
 */
var ElementDefinitionRepresentationEnum;
(function (ElementDefinitionRepresentationEnum) {
    ElementDefinitionRepresentationEnum["XMLATTR"] = "xmlAttr";
    ElementDefinitionRepresentationEnum["XMLTEXT"] = "xmlText";
    ElementDefinitionRepresentationEnum["TYPEATTR"] = "typeAttr";
    ElementDefinitionRepresentationEnum["CDATEXT"] = "cdaText";
    ElementDefinitionRepresentationEnum["XHTML"] = "xhtml";
})(ElementDefinitionRepresentationEnum = exports.ElementDefinitionRepresentationEnum || (exports.ElementDefinitionRepresentationEnum = {}));
//# sourceMappingURL=IElementDefinition.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureDefinitionStatusEnum = exports.StructureDefinitionKindEnum = exports.StructureDefinitionDerivationEnum = exports.StructureDefinitionContextTypeEnum = void 0;
/**
 * Code Values for the StructureDefinition.context.type field
 */
var StructureDefinitionContextTypeEnum;
(function (StructureDefinitionContextTypeEnum) {
    StructureDefinitionContextTypeEnum["FHIRPATH"] = "fhirpath";
    StructureDefinitionContextTypeEnum["ELEMENT"] = "element";
    StructureDefinitionContextTypeEnum["EXTENSION"] = "extension";
})(StructureDefinitionContextTypeEnum = exports.StructureDefinitionContextTypeEnum || (exports.StructureDefinitionContextTypeEnum = {}));
/**
 * Code Values for the StructureDefinition.derivation field
 */
var StructureDefinitionDerivationEnum;
(function (StructureDefinitionDerivationEnum) {
    StructureDefinitionDerivationEnum["SPECIALIZATION"] = "specialization";
    StructureDefinitionDerivationEnum["CONSTRAINT"] = "constraint";
})(StructureDefinitionDerivationEnum = exports.StructureDefinitionDerivationEnum || (exports.StructureDefinitionDerivationEnum = {}));
/**
 * Code Values for the StructureDefinition.kind field
 */
var StructureDefinitionKindEnum;
(function (StructureDefinitionKindEnum) {
    StructureDefinitionKindEnum["PRIMITIVE_TYPE"] = "primitive-type";
    StructureDefinitionKindEnum["COMPLEX_TYPE"] = "complex-type";
    StructureDefinitionKindEnum["RESOURCE"] = "resource";
    StructureDefinitionKindEnum["LOGICAL"] = "logical";
})(StructureDefinitionKindEnum = exports.StructureDefinitionKindEnum || (exports.StructureDefinitionKindEnum = {}));
/**
 * Code Values for the StructureDefinition.status field
 */
var StructureDefinitionStatusEnum;
(function (StructureDefinitionStatusEnum) {
    StructureDefinitionStatusEnum["DRAFT"] = "draft";
    StructureDefinitionStatusEnum["ACTIVE"] = "active";
    StructureDefinitionStatusEnum["RETIRED"] = "retired";
    StructureDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(StructureDefinitionStatusEnum = exports.StructureDefinitionStatusEnum || (exports.StructureDefinitionStatusEnum = {}));
//# sourceMappingURL=IStructureDefinition.js.map
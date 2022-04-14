"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationDefinitionStatusEnum = exports.OperationDefinitionKindEnum = exports.OperationDefinitionParameterUseEnum = exports.OperationDefinitionParameterSearchTypeEnum = exports.OperationDefinitionParameterBindingStrengthEnum = void 0;
/**
 * Code Values for the OperationDefinition.parameter.binding.strength field
 */
var OperationDefinitionParameterBindingStrengthEnum;
(function (OperationDefinitionParameterBindingStrengthEnum) {
    OperationDefinitionParameterBindingStrengthEnum["REQUIRED"] = "required";
    OperationDefinitionParameterBindingStrengthEnum["EXTENSIBLE"] = "extensible";
    OperationDefinitionParameterBindingStrengthEnum["PREFERRED"] = "preferred";
    OperationDefinitionParameterBindingStrengthEnum["EXAMPLE"] = "example";
})(OperationDefinitionParameterBindingStrengthEnum = exports.OperationDefinitionParameterBindingStrengthEnum || (exports.OperationDefinitionParameterBindingStrengthEnum = {}));
/**
 * Code Values for the OperationDefinition.parameter.searchType field
 */
var OperationDefinitionParameterSearchTypeEnum;
(function (OperationDefinitionParameterSearchTypeEnum) {
    OperationDefinitionParameterSearchTypeEnum["NUMBER"] = "number";
    OperationDefinitionParameterSearchTypeEnum["DATE"] = "date";
    OperationDefinitionParameterSearchTypeEnum["STRING"] = "string";
    OperationDefinitionParameterSearchTypeEnum["TOKEN"] = "token";
    OperationDefinitionParameterSearchTypeEnum["REFERENCE"] = "reference";
    OperationDefinitionParameterSearchTypeEnum["COMPOSITE"] = "composite";
    OperationDefinitionParameterSearchTypeEnum["QUANTITY"] = "quantity";
    OperationDefinitionParameterSearchTypeEnum["URI"] = "uri";
    OperationDefinitionParameterSearchTypeEnum["SPECIAL"] = "special";
})(OperationDefinitionParameterSearchTypeEnum = exports.OperationDefinitionParameterSearchTypeEnum || (exports.OperationDefinitionParameterSearchTypeEnum = {}));
/**
 * Code Values for the OperationDefinition.parameter.use field
 */
var OperationDefinitionParameterUseEnum;
(function (OperationDefinitionParameterUseEnum) {
    OperationDefinitionParameterUseEnum["IN"] = "in";
    OperationDefinitionParameterUseEnum["OUT"] = "out";
})(OperationDefinitionParameterUseEnum = exports.OperationDefinitionParameterUseEnum || (exports.OperationDefinitionParameterUseEnum = {}));
/**
 * Code Values for the OperationDefinition.kind field
 */
var OperationDefinitionKindEnum;
(function (OperationDefinitionKindEnum) {
    OperationDefinitionKindEnum["OPERATION"] = "operation";
    OperationDefinitionKindEnum["QUERY"] = "query";
})(OperationDefinitionKindEnum = exports.OperationDefinitionKindEnum || (exports.OperationDefinitionKindEnum = {}));
/**
 * Code Values for the OperationDefinition.status field
 */
var OperationDefinitionStatusEnum;
(function (OperationDefinitionStatusEnum) {
    OperationDefinitionStatusEnum["DRAFT"] = "draft";
    OperationDefinitionStatusEnum["ACTIVE"] = "active";
    OperationDefinitionStatusEnum["RETIRED"] = "retired";
    OperationDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(OperationDefinitionStatusEnum = exports.OperationDefinitionStatusEnum || (exports.OperationDefinitionStatusEnum = {}));
//# sourceMappingURL=IOperationDefinition.js.map
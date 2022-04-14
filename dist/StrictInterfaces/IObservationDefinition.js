"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservationDefinitionPermittedDataTypeEnum = exports.ObservationDefinitionQualifiedIntervalGenderEnum = exports.ObservationDefinitionQualifiedIntervalCategoryEnum = void 0;
/**
 * Code Values for the ObservationDefinition.qualifiedInterval.category field
 */
var ObservationDefinitionQualifiedIntervalCategoryEnum;
(function (ObservationDefinitionQualifiedIntervalCategoryEnum) {
    ObservationDefinitionQualifiedIntervalCategoryEnum["REFERENCE"] = "reference";
    ObservationDefinitionQualifiedIntervalCategoryEnum["CRITICAL"] = "critical";
    ObservationDefinitionQualifiedIntervalCategoryEnum["ABSOLUTE"] = "absolute";
})(ObservationDefinitionQualifiedIntervalCategoryEnum = exports.ObservationDefinitionQualifiedIntervalCategoryEnum || (exports.ObservationDefinitionQualifiedIntervalCategoryEnum = {}));
/**
 * Code Values for the ObservationDefinition.qualifiedInterval.gender field
 */
var ObservationDefinitionQualifiedIntervalGenderEnum;
(function (ObservationDefinitionQualifiedIntervalGenderEnum) {
    ObservationDefinitionQualifiedIntervalGenderEnum["MALE"] = "male";
    ObservationDefinitionQualifiedIntervalGenderEnum["FEMALE"] = "female";
    ObservationDefinitionQualifiedIntervalGenderEnum["OTHER"] = "other";
    ObservationDefinitionQualifiedIntervalGenderEnum["UNKNOWN"] = "unknown";
})(ObservationDefinitionQualifiedIntervalGenderEnum = exports.ObservationDefinitionQualifiedIntervalGenderEnum || (exports.ObservationDefinitionQualifiedIntervalGenderEnum = {}));
/**
 * Code Values for the ObservationDefinition.permittedDataType field
 */
var ObservationDefinitionPermittedDataTypeEnum;
(function (ObservationDefinitionPermittedDataTypeEnum) {
    ObservationDefinitionPermittedDataTypeEnum["QUANTITY"] = "Quantity";
    ObservationDefinitionPermittedDataTypeEnum["CODEABLECONCEPT"] = "CodeableConcept";
    ObservationDefinitionPermittedDataTypeEnum["STRING"] = "string";
    ObservationDefinitionPermittedDataTypeEnum["BOOLEAN"] = "boolean";
    ObservationDefinitionPermittedDataTypeEnum["INTEGER"] = "integer";
    ObservationDefinitionPermittedDataTypeEnum["RANGE"] = "Range";
    ObservationDefinitionPermittedDataTypeEnum["RATIO"] = "Ratio";
    ObservationDefinitionPermittedDataTypeEnum["SAMPLEDDATA"] = "SampledData";
    ObservationDefinitionPermittedDataTypeEnum["TIME"] = "time";
    ObservationDefinitionPermittedDataTypeEnum["DATETIME"] = "dateTime";
    ObservationDefinitionPermittedDataTypeEnum["PERIOD"] = "Period";
})(ObservationDefinitionPermittedDataTypeEnum = exports.ObservationDefinitionPermittedDataTypeEnum || (exports.ObservationDefinitionPermittedDataTypeEnum = {}));
//# sourceMappingURL=IObservationDefinition.js.map
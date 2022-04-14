"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSystemStatusEnum = exports.CodeSystemHierarchyMeaningEnum = exports.CodeSystemContentEnum = exports.CodeSystemPropertyTypeEnum = exports.CodeSystemFilterOperatorEnum = void 0;
/**
 * Code Values for the CodeSystem.filter.operator field
 */
var CodeSystemFilterOperatorEnum;
(function (CodeSystemFilterOperatorEnum) {
    CodeSystemFilterOperatorEnum["EQUALS"] = "=";
    CodeSystemFilterOperatorEnum["IS_A"] = "is-a";
    CodeSystemFilterOperatorEnum["DESCENDENT_OF"] = "descendent-of";
    CodeSystemFilterOperatorEnum["IS_NOT_A"] = "is-not-a";
    CodeSystemFilterOperatorEnum["REGEX"] = "regex";
    CodeSystemFilterOperatorEnum["IN"] = "in";
    CodeSystemFilterOperatorEnum["NOT_IN"] = "not-in";
    CodeSystemFilterOperatorEnum["GENERALIZES"] = "generalizes";
    CodeSystemFilterOperatorEnum["EXISTS"] = "exists";
})(CodeSystemFilterOperatorEnum = exports.CodeSystemFilterOperatorEnum || (exports.CodeSystemFilterOperatorEnum = {}));
/**
 * Code Values for the CodeSystem.property.type field
 */
var CodeSystemPropertyTypeEnum;
(function (CodeSystemPropertyTypeEnum) {
    CodeSystemPropertyTypeEnum["CODE"] = "code";
    CodeSystemPropertyTypeEnum["CODING"] = "Coding";
    CodeSystemPropertyTypeEnum["STRING"] = "string";
    CodeSystemPropertyTypeEnum["INTEGER"] = "integer";
    CodeSystemPropertyTypeEnum["BOOLEAN"] = "boolean";
    CodeSystemPropertyTypeEnum["DATETIME"] = "dateTime";
    CodeSystemPropertyTypeEnum["DECIMAL"] = "decimal";
})(CodeSystemPropertyTypeEnum = exports.CodeSystemPropertyTypeEnum || (exports.CodeSystemPropertyTypeEnum = {}));
/**
 * Code Values for the CodeSystem.content field
 */
var CodeSystemContentEnum;
(function (CodeSystemContentEnum) {
    CodeSystemContentEnum["NOT_PRESENT"] = "not-present";
    CodeSystemContentEnum["EXAMPLE"] = "example";
    CodeSystemContentEnum["FRAGMENT"] = "fragment";
    CodeSystemContentEnum["COMPLETE"] = "complete";
    CodeSystemContentEnum["SUPPLEMENT"] = "supplement";
})(CodeSystemContentEnum = exports.CodeSystemContentEnum || (exports.CodeSystemContentEnum = {}));
/**
 * Code Values for the CodeSystem.hierarchyMeaning field
 */
var CodeSystemHierarchyMeaningEnum;
(function (CodeSystemHierarchyMeaningEnum) {
    CodeSystemHierarchyMeaningEnum["GROUPED_BY"] = "grouped-by";
    CodeSystemHierarchyMeaningEnum["IS_A"] = "is-a";
    CodeSystemHierarchyMeaningEnum["PART_OF"] = "part-of";
    CodeSystemHierarchyMeaningEnum["CLASSIFIED_WITH"] = "classified-with";
})(CodeSystemHierarchyMeaningEnum = exports.CodeSystemHierarchyMeaningEnum || (exports.CodeSystemHierarchyMeaningEnum = {}));
/**
 * Code Values for the CodeSystem.status field
 */
var CodeSystemStatusEnum;
(function (CodeSystemStatusEnum) {
    CodeSystemStatusEnum["DRAFT"] = "draft";
    CodeSystemStatusEnum["ACTIVE"] = "active";
    CodeSystemStatusEnum["RETIRED"] = "retired";
    CodeSystemStatusEnum["UNKNOWN"] = "unknown";
})(CodeSystemStatusEnum = exports.CodeSystemStatusEnum || (exports.CodeSystemStatusEnum = {}));
//# sourceMappingURL=ICodeSystem.js.map
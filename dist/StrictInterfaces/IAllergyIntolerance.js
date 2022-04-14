"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntoleranceTypeEnum = exports.AllergyIntoleranceCriticalityEnum = exports.AllergyIntoleranceCategoryEnum = exports.AllergyIntoleranceReactionSeverityEnum = void 0;
/**
 * Code Values for the AllergyIntolerance.reaction.severity field
 */
var AllergyIntoleranceReactionSeverityEnum;
(function (AllergyIntoleranceReactionSeverityEnum) {
    AllergyIntoleranceReactionSeverityEnum["MILD"] = "mild";
    AllergyIntoleranceReactionSeverityEnum["MODERATE"] = "moderate";
    AllergyIntoleranceReactionSeverityEnum["SEVERE"] = "severe";
})(AllergyIntoleranceReactionSeverityEnum = exports.AllergyIntoleranceReactionSeverityEnum || (exports.AllergyIntoleranceReactionSeverityEnum = {}));
/**
 * Code Values for the AllergyIntolerance.category field
 */
var AllergyIntoleranceCategoryEnum;
(function (AllergyIntoleranceCategoryEnum) {
    AllergyIntoleranceCategoryEnum["FOOD"] = "food";
    AllergyIntoleranceCategoryEnum["MEDICATION"] = "medication";
    AllergyIntoleranceCategoryEnum["ENVIRONMENT"] = "environment";
    AllergyIntoleranceCategoryEnum["BIOLOGIC"] = "biologic";
})(AllergyIntoleranceCategoryEnum = exports.AllergyIntoleranceCategoryEnum || (exports.AllergyIntoleranceCategoryEnum = {}));
/**
 * Code Values for the AllergyIntolerance.criticality field
 */
var AllergyIntoleranceCriticalityEnum;
(function (AllergyIntoleranceCriticalityEnum) {
    AllergyIntoleranceCriticalityEnum["LOW"] = "low";
    AllergyIntoleranceCriticalityEnum["HIGH"] = "high";
    AllergyIntoleranceCriticalityEnum["UNABLE_TO_ASSESS"] = "unable-to-assess";
})(AllergyIntoleranceCriticalityEnum = exports.AllergyIntoleranceCriticalityEnum || (exports.AllergyIntoleranceCriticalityEnum = {}));
/**
 * Code Values for the AllergyIntolerance.type field
 */
var AllergyIntoleranceTypeEnum;
(function (AllergyIntoleranceTypeEnum) {
    AllergyIntoleranceTypeEnum["ALLERGY"] = "allergy";
    AllergyIntoleranceTypeEnum["INTOLERANCE"] = "intolerance";
})(AllergyIntoleranceTypeEnum = exports.AllergyIntoleranceTypeEnum || (exports.AllergyIntoleranceTypeEnum = {}));
//# sourceMappingURL=IAllergyIntolerance.js.map
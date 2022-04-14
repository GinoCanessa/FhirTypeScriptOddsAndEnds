"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationOfBenefitUseEnum = exports.ExplanationOfBenefitStatusEnum = exports.ExplanationOfBenefitOutcomeEnum = exports.ExplanationOfBenefitProcessNoteTypeEnum = void 0;
/**
 * Code Values for the ExplanationOfBenefit.processNote.type field
 */
var ExplanationOfBenefitProcessNoteTypeEnum;
(function (ExplanationOfBenefitProcessNoteTypeEnum) {
    ExplanationOfBenefitProcessNoteTypeEnum["DISPLAY"] = "display";
    ExplanationOfBenefitProcessNoteTypeEnum["PRINT"] = "print";
    ExplanationOfBenefitProcessNoteTypeEnum["PRINTOPER"] = "printoper";
})(ExplanationOfBenefitProcessNoteTypeEnum = exports.ExplanationOfBenefitProcessNoteTypeEnum || (exports.ExplanationOfBenefitProcessNoteTypeEnum = {}));
/**
 * Code Values for the ExplanationOfBenefit.outcome field
 */
var ExplanationOfBenefitOutcomeEnum;
(function (ExplanationOfBenefitOutcomeEnum) {
    ExplanationOfBenefitOutcomeEnum["QUEUED"] = "queued";
    ExplanationOfBenefitOutcomeEnum["COMPLETE"] = "complete";
    ExplanationOfBenefitOutcomeEnum["ERROR"] = "error";
    ExplanationOfBenefitOutcomeEnum["PARTIAL"] = "partial";
})(ExplanationOfBenefitOutcomeEnum = exports.ExplanationOfBenefitOutcomeEnum || (exports.ExplanationOfBenefitOutcomeEnum = {}));
/**
 * Code Values for the ExplanationOfBenefit.status field
 */
var ExplanationOfBenefitStatusEnum;
(function (ExplanationOfBenefitStatusEnum) {
    ExplanationOfBenefitStatusEnum["ACTIVE"] = "active";
    ExplanationOfBenefitStatusEnum["CANCELLED"] = "cancelled";
    ExplanationOfBenefitStatusEnum["DRAFT"] = "draft";
    ExplanationOfBenefitStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ExplanationOfBenefitStatusEnum = exports.ExplanationOfBenefitStatusEnum || (exports.ExplanationOfBenefitStatusEnum = {}));
/**
 * Code Values for the ExplanationOfBenefit.use field
 */
var ExplanationOfBenefitUseEnum;
(function (ExplanationOfBenefitUseEnum) {
    ExplanationOfBenefitUseEnum["CLAIM"] = "claim";
    ExplanationOfBenefitUseEnum["PREAUTHORIZATION"] = "preauthorization";
    ExplanationOfBenefitUseEnum["PREDETERMINATION"] = "predetermination";
})(ExplanationOfBenefitUseEnum = exports.ExplanationOfBenefitUseEnum || (exports.ExplanationOfBenefitUseEnum = {}));
//# sourceMappingURL=IExplanationOfBenefit.js.map
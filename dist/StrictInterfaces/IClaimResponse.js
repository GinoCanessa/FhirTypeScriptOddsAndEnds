"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimResponseUseEnum = exports.ClaimResponseStatusEnum = exports.ClaimResponseOutcomeEnum = exports.ClaimResponseProcessNoteTypeEnum = void 0;
/**
 * Code Values for the ClaimResponse.processNote.type field
 */
var ClaimResponseProcessNoteTypeEnum;
(function (ClaimResponseProcessNoteTypeEnum) {
    ClaimResponseProcessNoteTypeEnum["DISPLAY"] = "display";
    ClaimResponseProcessNoteTypeEnum["PRINT"] = "print";
    ClaimResponseProcessNoteTypeEnum["PRINTOPER"] = "printoper";
})(ClaimResponseProcessNoteTypeEnum = exports.ClaimResponseProcessNoteTypeEnum || (exports.ClaimResponseProcessNoteTypeEnum = {}));
/**
 * Code Values for the ClaimResponse.outcome field
 */
var ClaimResponseOutcomeEnum;
(function (ClaimResponseOutcomeEnum) {
    ClaimResponseOutcomeEnum["QUEUED"] = "queued";
    ClaimResponseOutcomeEnum["COMPLETE"] = "complete";
    ClaimResponseOutcomeEnum["ERROR"] = "error";
    ClaimResponseOutcomeEnum["PARTIAL"] = "partial";
})(ClaimResponseOutcomeEnum = exports.ClaimResponseOutcomeEnum || (exports.ClaimResponseOutcomeEnum = {}));
/**
 * Code Values for the ClaimResponse.status field
 */
var ClaimResponseStatusEnum;
(function (ClaimResponseStatusEnum) {
    ClaimResponseStatusEnum["ACTIVE"] = "active";
    ClaimResponseStatusEnum["CANCELLED"] = "cancelled";
    ClaimResponseStatusEnum["DRAFT"] = "draft";
    ClaimResponseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ClaimResponseStatusEnum = exports.ClaimResponseStatusEnum || (exports.ClaimResponseStatusEnum = {}));
/**
 * Code Values for the ClaimResponse.use field
 */
var ClaimResponseUseEnum;
(function (ClaimResponseUseEnum) {
    ClaimResponseUseEnum["CLAIM"] = "claim";
    ClaimResponseUseEnum["PREAUTHORIZATION"] = "preauthorization";
    ClaimResponseUseEnum["PREDETERMINATION"] = "predetermination";
})(ClaimResponseUseEnum = exports.ClaimResponseUseEnum || (exports.ClaimResponseUseEnum = {}));
//# sourceMappingURL=IClaimResponse.js.map
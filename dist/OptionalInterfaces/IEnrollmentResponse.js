"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentResponseStatusEnum = exports.EnrollmentResponseOutcomeEnum = void 0;
/**
 * Code Values for the EnrollmentResponse.outcome field
 */
var EnrollmentResponseOutcomeEnum;
(function (EnrollmentResponseOutcomeEnum) {
    EnrollmentResponseOutcomeEnum["QUEUED"] = "queued";
    EnrollmentResponseOutcomeEnum["COMPLETE"] = "complete";
    EnrollmentResponseOutcomeEnum["ERROR"] = "error";
    EnrollmentResponseOutcomeEnum["PARTIAL"] = "partial";
})(EnrollmentResponseOutcomeEnum = exports.EnrollmentResponseOutcomeEnum || (exports.EnrollmentResponseOutcomeEnum = {}));
/**
 * Code Values for the EnrollmentResponse.status field
 */
var EnrollmentResponseStatusEnum;
(function (EnrollmentResponseStatusEnum) {
    EnrollmentResponseStatusEnum["ACTIVE"] = "active";
    EnrollmentResponseStatusEnum["CANCELLED"] = "cancelled";
    EnrollmentResponseStatusEnum["DRAFT"] = "draft";
    EnrollmentResponseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(EnrollmentResponseStatusEnum = exports.EnrollmentResponseStatusEnum || (exports.EnrollmentResponseStatusEnum = {}));
//# sourceMappingURL=IEnrollmentResponse.js.map
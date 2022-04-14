"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageEligibilityResponseStatusEnum = exports.CoverageEligibilityResponsePurposeEnum = exports.CoverageEligibilityResponseOutcomeEnum = void 0;
/**
 * Code Values for the CoverageEligibilityResponse.outcome field
 */
var CoverageEligibilityResponseOutcomeEnum;
(function (CoverageEligibilityResponseOutcomeEnum) {
    CoverageEligibilityResponseOutcomeEnum["QUEUED"] = "queued";
    CoverageEligibilityResponseOutcomeEnum["COMPLETE"] = "complete";
    CoverageEligibilityResponseOutcomeEnum["ERROR"] = "error";
    CoverageEligibilityResponseOutcomeEnum["PARTIAL"] = "partial";
})(CoverageEligibilityResponseOutcomeEnum = exports.CoverageEligibilityResponseOutcomeEnum || (exports.CoverageEligibilityResponseOutcomeEnum = {}));
/**
 * Code Values for the CoverageEligibilityResponse.purpose field
 */
var CoverageEligibilityResponsePurposeEnum;
(function (CoverageEligibilityResponsePurposeEnum) {
    CoverageEligibilityResponsePurposeEnum["AUTH_REQUIREMENTS"] = "auth-requirements";
    CoverageEligibilityResponsePurposeEnum["BENEFITS"] = "benefits";
    CoverageEligibilityResponsePurposeEnum["DISCOVERY"] = "discovery";
    CoverageEligibilityResponsePurposeEnum["VALIDATION"] = "validation";
})(CoverageEligibilityResponsePurposeEnum = exports.CoverageEligibilityResponsePurposeEnum || (exports.CoverageEligibilityResponsePurposeEnum = {}));
/**
 * Code Values for the CoverageEligibilityResponse.status field
 */
var CoverageEligibilityResponseStatusEnum;
(function (CoverageEligibilityResponseStatusEnum) {
    CoverageEligibilityResponseStatusEnum["ACTIVE"] = "active";
    CoverageEligibilityResponseStatusEnum["CANCELLED"] = "cancelled";
    CoverageEligibilityResponseStatusEnum["DRAFT"] = "draft";
    CoverageEligibilityResponseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageEligibilityResponseStatusEnum = exports.CoverageEligibilityResponseStatusEnum || (exports.CoverageEligibilityResponseStatusEnum = {}));
//# sourceMappingURL=ICoverageEligibilityResponse.js.map
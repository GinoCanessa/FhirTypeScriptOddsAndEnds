"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedIssueStatusEnum = exports.DetectedIssueSeverityEnum = void 0;
/**
 * Code Values for the DetectedIssue.severity field
 */
var DetectedIssueSeverityEnum;
(function (DetectedIssueSeverityEnum) {
    DetectedIssueSeverityEnum["HIGH"] = "high";
    DetectedIssueSeverityEnum["MODERATE"] = "moderate";
    DetectedIssueSeverityEnum["LOW"] = "low";
})(DetectedIssueSeverityEnum = exports.DetectedIssueSeverityEnum || (exports.DetectedIssueSeverityEnum = {}));
/**
 * Code Values for the DetectedIssue.status field
 */
var DetectedIssueStatusEnum;
(function (DetectedIssueStatusEnum) {
    DetectedIssueStatusEnum["REGISTERED"] = "registered";
    DetectedIssueStatusEnum["PRELIMINARY"] = "preliminary";
    DetectedIssueStatusEnum["FINAL"] = "final";
    DetectedIssueStatusEnum["AMENDED"] = "amended";
    DetectedIssueStatusEnum["CORRECTED"] = "corrected";
    DetectedIssueStatusEnum["CANCELLED"] = "cancelled";
    DetectedIssueStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    DetectedIssueStatusEnum["UNKNOWN"] = "unknown";
})(DetectedIssueStatusEnum = exports.DetectedIssueStatusEnum || (exports.DetectedIssueStatusEnum = {}));
//# sourceMappingURL=IDetectedIssue.js.map
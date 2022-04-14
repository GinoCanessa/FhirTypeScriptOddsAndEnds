"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureReportTypeEnum = exports.MeasureReportStatusEnum = void 0;
/**
 * Code Values for the MeasureReport.status field
 */
var MeasureReportStatusEnum;
(function (MeasureReportStatusEnum) {
    MeasureReportStatusEnum["COMPLETE"] = "complete";
    MeasureReportStatusEnum["PENDING"] = "pending";
    MeasureReportStatusEnum["ERROR"] = "error";
})(MeasureReportStatusEnum = exports.MeasureReportStatusEnum || (exports.MeasureReportStatusEnum = {}));
/**
 * Code Values for the MeasureReport.type field
 */
var MeasureReportTypeEnum;
(function (MeasureReportTypeEnum) {
    MeasureReportTypeEnum["INDIVIDUAL"] = "individual";
    MeasureReportTypeEnum["SUBJECT_LIST"] = "subject-list";
    MeasureReportTypeEnum["SUMMARY"] = "summary";
    MeasureReportTypeEnum["DATA_COLLECTION"] = "data-collection";
})(MeasureReportTypeEnum = exports.MeasureReportTypeEnum || (exports.MeasureReportTypeEnum = {}));
//# sourceMappingURL=IMeasureReport.js.map
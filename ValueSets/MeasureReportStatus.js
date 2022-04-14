"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureReportStatus = void 0;
/**
 * The status of the measure report.
 */
exports.MeasureReportStatus = {
    /**
     * The report is complete and ready for use.
     */
    measure_report_status_Complete: {
        code: "complete",
        display: "Complete",
        system: "http://hl7.org/fhir/measure-report-status"
    },
    /**
     * An error occurred attempting to generate the report.
     */
    measure_report_status_Error: {
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/measure-report-status"
    },
    /**
     * The report is currently being generated.
     */
    measure_report_status_Pending: {
        code: "pending",
        display: "Pending",
        system: "http://hl7.org/fhir/measure-report-status"
    },
};
//# sourceMappingURL=MeasureReportStatus.js.map
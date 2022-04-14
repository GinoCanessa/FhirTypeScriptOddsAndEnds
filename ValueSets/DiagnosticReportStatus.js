"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticReportStatus = void 0;
/**
 * The status of the diagnostic report.
 */
exports.DiagnosticReportStatus = {
    /**
     * Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
     */
    diagnostic_report_status_Amended: {
        code: "amended",
        display: "Amended",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
     */
    diagnostic_report_status_Appended: {
        code: "appended",
        display: "Appended",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    diagnostic_report_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
     */
    diagnostic_report_status_Corrected: {
        code: "corrected",
        display: "Corrected",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    diagnostic_report_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * The report is complete and verified by an authorized person.
     */
    diagnostic_report_status_Final: {
        code: "final",
        display: "Final",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
     */
    diagnostic_report_status_Partial: {
        code: "partial",
        display: "Partial",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * Verified early results are available, but not all  results are final.
     */
    diagnostic_report_status_Preliminary: {
        code: "preliminary",
        display: "Preliminary",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * The existence of the report is registered, but there is nothing yet available.
     */
    diagnostic_report_status_Registered: {
        code: "registered",
        display: "Registered",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
    /**
     * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    diagnostic_report_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/diagnostic-report-status"
    },
};
//# sourceMappingURL=DiagnosticReportStatus.js.map
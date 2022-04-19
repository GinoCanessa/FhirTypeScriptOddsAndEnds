import { Coding } from '../fhir';
/**
 * The status of the diagnostic report.
 */
export declare const DiagnosticReportStatusValueSet: {
    /**
     * Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
     */
    diagnostic_report_status_Amended: Coding;
    /**
     * Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
     */
    diagnostic_report_status_Appended: Coding;
    /**
     * The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    diagnostic_report_status_Cancelled: Coding;
    /**
     * Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
     */
    diagnostic_report_status_Corrected: Coding;
    /**
     * The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    diagnostic_report_status_EnteredInError: Coding;
    /**
     * The report is complete and verified by an authorized person.
     */
    diagnostic_report_status_Final: Coding;
    /**
     * This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
     */
    diagnostic_report_status_Partial: Coding;
    /**
     * Verified early results are available, but not all  results are final.
     */
    diagnostic_report_status_Preliminary: Coding;
    /**
     * The existence of the report is registered, but there is nothing yet available.
     */
    diagnostic_report_status_Registered: Coding;
    /**
     * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    diagnostic_report_status_Unknown: Coding;
};
//# sourceMappingURL=DiagnosticReportStatusValueSet.d.ts.map
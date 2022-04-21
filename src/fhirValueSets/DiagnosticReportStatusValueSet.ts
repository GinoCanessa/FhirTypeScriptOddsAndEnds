// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-report-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * The status of the diagnostic report.
 */
export const DiagnosticReportStatusValueSet = {
  /**
   * amended: Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
   */
  Amended: new Coding({
    display: "Amended",
    code: "amended",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * appended: Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
   */
  Appended: new Coding({
    display: "Appended",
    code: "appended",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
   */
  Cancelled: new Coding({
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * corrected: Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
   */
  Corrected: new Coding({
    display: "Corrected",
    code: "corrected",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * entered-in-error: The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * final: The report is complete and verified by an authorized person.
   */
  Final: new Coding({
    display: "Final",
    code: "final",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
   */
  Partial: new Coding({
    display: "Partial",
    code: "partial",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * preliminary: Verified early results are available, but not all  results are final.
   */
  Preliminary: new Coding({
    display: "Preliminary",
    code: "preliminary",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * registered: The existence of the report is registered, but there is nothing yet available.
   */
  Registered: new Coding({
    display: "Registered",
    code: "registered",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
  /**
   * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  }),
} as const;

/**
 * The status of the diagnostic report.
 */
export type DiagnosticReportStatusValueSetType = typeof DiagnosticReportStatusValueSet;

/**
 * The status of the diagnostic report.
 */
export enum DiagnosticReportStatusValueSetEnum {
  /**
   * amended: Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
   */
  Amended = "amended",
  /**
   * appended: Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
   */
  Appended = "appended",
  /**
   * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
   */
  Cancelled = "cancelled",
  /**
   * corrected: Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
   */
  Corrected = "corrected",
  /**
   * entered-in-error: The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
   */
  EnteredInError = "entered-in-error",
  /**
   * final: The report is complete and verified by an authorized person.
   */
  Final = "final",
  /**
   * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
   */
  Partial = "partial",
  /**
   * preliminary: Verified early results are available, but not all  results are final.
   */
  Preliminary = "preliminary",
  /**
   * registered: The existence of the report is registered, but there is nothing yet available.
   */
  Registered = "registered",
  /**
   * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
   */
  Unknown = "unknown",
}

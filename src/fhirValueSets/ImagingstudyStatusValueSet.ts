// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/imagingstudy-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * The status of the ImagingStudy.
 */
export const ImagingstudyStatusValueSet = {
  /**
   * available: At least one instance has been associated with this imaging study.
   */
  Available: new Coding({
    display: "Available",
    code: "available",
    system: "http://hl7.org/fhir/imagingstudy-status",
  }),
  /**
   * cancelled: The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").
   */
  Cancelled: new Coding({
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/imagingstudy-status",
  }),
  /**
   * entered-in-error: The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/imagingstudy-status",
  }),
  /**
   * registered: The existence of the imaging study is registered, but there is nothing yet available.
   */
  Registered: new Coding({
    display: "Registered",
    code: "registered",
    system: "http://hl7.org/fhir/imagingstudy-status",
  }),
  /**
   * unknown: The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/imagingstudy-status",
  }),
} as const;

/**
 * The status of the ImagingStudy.
 */
export type ImagingstudyStatusValueSetType = typeof ImagingstudyStatusValueSet;

/**
 * The status of the ImagingStudy.
 */
export enum ImagingstudyStatusValueSetEnum {
  /**
   * available: At least one instance has been associated with this imaging study.
   */
  Available = "available",
  /**
   * cancelled: The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").
   */
  Cancelled = "cancelled",
  /**
   * entered-in-error: The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
   */
  EnteredInError = "entered-in-error",
  /**
   * registered: The existence of the imaging study is registered, but there is nothing yet available.
   */
  Registered = "registered",
  /**
   * unknown: The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown = "unknown",
}

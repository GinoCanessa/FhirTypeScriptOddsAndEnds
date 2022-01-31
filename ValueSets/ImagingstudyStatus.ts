// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The status of the ImagingStudy.
 */
export const ImagingstudyStatus = {
  /**
   * At least one instance has been associated with this imaging study.
   */
  imagingstudy_status_Available: {
    code: "available",
    display: "Available",
    system: "http://hl7.org/fhir/imagingstudy-status"
  } as Coding,
  /**
   * The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").
   */
  imagingstudy_status_Cancelled: {
    code: "cancelled",
    display: "Cancelled",
    system: "http://hl7.org/fhir/imagingstudy-status"
  } as Coding,
  /**
   * The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
   */
  imagingstudy_status_EnteredInError: {
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/imagingstudy-status"
  } as Coding,
  /**
   * The existence of the imaging study is registered, but there is nothing yet available.
   */
  imagingstudy_status_Registered: {
    code: "registered",
    display: "Registered",
    system: "http://hl7.org/fhir/imagingstudy-status"
  } as Coding,
  /**
   * The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  imagingstudy_status_Unknown: {
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/imagingstudy-status"
  } as Coding,
};

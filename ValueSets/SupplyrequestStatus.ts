// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Status of the supply request.
 */
export const SupplyrequestStatus = {
  /**
   * The request is ready to be acted upon.
   */
  supplyrequest_status_Active: {
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
  /**
   * The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
   */
  supplyrequest_status_Cancelled: {
    code: "cancelled",
    display: "Cancelled",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
  /**
   * Activity against the request has been sufficiently completed to the satisfaction of the requester.
   */
  supplyrequest_status_Completed: {
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
  /**
   * The request has been created but is not yet complete or ready for action.
   */
  supplyrequest_status_Draft: {
    code: "draft",
    display: "Draft",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
  /**
   * This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
   */
  supplyrequest_status_EnteredInError: {
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
  /**
   * The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.
   */
  supplyrequest_status_Suspended: {
    code: "suspended",
    display: "Suspended",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
  /**
   * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
   */
  supplyrequest_status_Unknown: {
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/supplyrequest-status"
  } as Coding,
};

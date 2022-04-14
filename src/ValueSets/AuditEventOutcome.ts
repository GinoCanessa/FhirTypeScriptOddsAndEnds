// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * Indicates whether the event succeeded or failed.
 */
export const AuditEventOutcome = {
  /**
   * The operation completed successfully (whether with warnings or not).
   */
  audit_event_outcome_Success: {
    code: "0",
    display: "Success",
    system: "http://hl7.org/fhir/audit-event-outcome"
  } as Coding,
  /**
   * An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
   */
  audit_event_outcome_MajorFailure: {
    code: "12",
    display: "Major failure",
    system: "http://hl7.org/fhir/audit-event-outcome"
  } as Coding,
  /**
   * The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
   */
  audit_event_outcome_MinorFailure: {
    code: "4",
    display: "Minor failure",
    system: "http://hl7.org/fhir/audit-event-outcome"
  } as Coding,
  /**
   * The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
   */
  audit_event_outcome_SeriousFailure: {
    code: "8",
    display: "Serious failure",
    system: "http://hl7.org/fhir/audit-event-outcome"
  } as Coding,
};

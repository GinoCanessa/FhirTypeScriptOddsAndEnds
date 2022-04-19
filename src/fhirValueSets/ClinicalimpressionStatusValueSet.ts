// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export const ClinicalimpressionStatusValueSet = {
  /**
   * The event has now concluded.
   */
  event_status_Completed: Coding.FromStrict({
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/event-status"
  }),
  /**
   * This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
   */
  event_status_EnteredInError: Coding.FromStrict({
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/event-status"
  }),
  /**
   * The event is currently occurring.
   */
  event_status_InProgress: Coding.FromStrict({
    code: "in-progress",
    display: "In Progress",
    system: "http://hl7.org/fhir/event-status"
  }),
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes identifying the lifecycle stage of an event.
 */
export const EventStatusValueSet = {
  /**
   * The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
   */
  event_status_NotDone: Coding.FromStrict({
    code: "not-done",
    display: "Not Done",
    system: "http://hl7.org/fhir/event-status"
  }),
  /**
   * The event has been temporarily stopped but is expected to resume in the future.
   */
  event_status_OnHold: Coding.FromStrict({
    code: "on-hold",
    display: "On Hold",
    system: "http://hl7.org/fhir/event-status"
  }),
  /**
   * The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
   */
  event_status_Preparation: Coding.FromStrict({
    code: "preparation",
    display: "Preparation",
    system: "http://hl7.org/fhir/event-status"
  }),
  /**
   * The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
   */
  event_status_Stopped: Coding.FromStrict({
    code: "stopped",
    display: "Stopped",
    system: "http://hl7.org/fhir/event-status"
  }),
  /**
   * The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
   */
  event_status_Unknown: Coding.FromStrict({
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/event-status"
  }),
};
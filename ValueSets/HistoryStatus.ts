// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * A code that identifies the status of the family history record.
 */
export const HistoryStatus = {
  /**
   * All available related health information is captured as of the date (and possibly time) when the family member history was taken.
   */
  history_status_Completed: {
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/history-status"
  } as Coding,
  /**
   * This instance should not have been part of this patient's medical record.
   */
  history_status_EnteredInError: {
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/history-status"
  } as Coding,
  /**
   * Health information for this family member is unavailable/unknown.
   */
  history_status_HealthUnknown: {
    code: "health-unknown",
    display: "Health Unknown",
    system: "http://hl7.org/fhir/history-status"
  } as Coding,
  /**
   * Some health information is known and captured, but not complete - see notes for details.
   */
  history_status_Partial: {
    code: "partial",
    display: "Partial",
    system: "http://hl7.org/fhir/history-status"
  } as Coding,
};

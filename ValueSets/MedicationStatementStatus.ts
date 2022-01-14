// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Medication Status Codes
 */
export const MedicationStatementStatus = {
  /**
   * The medication is still being taken.
   */
  medication_statement_status_Active: {
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * The medication is no longer being taken.
   */
  medication_statement_status_Completed: {
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
   */
  medication_statement_status_EnteredInError: {
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * The medication may be taken at some time in the future.
   */
  medication_statement_status_Intended: {
    code: "intended",
    display: "Intended",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * The medication was not consumed by the patient
   */
  medication_statement_status_NotTaken: {
    code: "not-taken",
    display: "Not Taken",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
   */
  medication_statement_status_OnHold: {
    code: "on-hold",
    display: "On Hold",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
   */
  medication_statement_status_Stopped: {
    code: "stopped",
    display: "Stopped",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
  /**
   * The state of the medication use is not currently known.
   */
  medication_statement_status_Unknown: {
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/CodeSystem/medication-statement-status"
  } as Coding,
};

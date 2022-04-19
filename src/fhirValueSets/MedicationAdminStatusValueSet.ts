// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * MedicationAdministration Status Codes
 */
export const MedicationAdminStatusValueSet = {
  /**
   * The administration has started but has not yet completed.
   */
  medication_admin_status_InProgress: Coding.FromStrict({
    code: "in-progress",
    display: "In Progress",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
  }),
  /**
   * The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
   */
  medication_admin_status_NotDone: Coding.FromStrict({
    code: "not-done",
    display: "Not Done",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
  }),
  /**
   * Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
   */
  medication_admin_status_OnHold: Coding.FromStrict({
    code: "on-hold",
    display: "On Hold",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
  }),
  /**
   * Actions implied by the administration have been permanently halted, before all of them occurred.
   */
  medication_admin_status_Stopped: Coding.FromStrict({
    code: "stopped",
    display: "Stopped",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
  }),
  /**
   * The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  medication_admin_status_Unknown: Coding.FromStrict({
    code: "unknown",
    display: "Unknown",
    system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
  }),
};
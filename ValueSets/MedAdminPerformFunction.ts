// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * MedicationAdministration Performer Function Codes
 */
export const MedAdminPerformFunction = {
  /**
   * A person, non-person living subject, organization or device that who actually and principally carries out the action
   */
  med_admin_perform_function_Performer: {
    code: "performer",
    display: "Performer",
    system: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function"
  } as Coding,
  /**
   * A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
   */
  med_admin_perform_function_Verifier: {
    code: "verifier",
    display: "Verifier",
    system: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function"
  } as Coding,
  /**
   * A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
   */
  med_admin_perform_function_Witness: {
    code: "witness",
    display: "Witness",
    system: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function"
  } as Coding,
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The reason why the supply item was requested.
 */
export const SupplyrequestReasonValueSet = {
  /**
   * The supply has been requested for use in direct patient care.
   */
  supplyrequest_reason_PatientCare: Coding.FromStrict({
    code: "patient-care",
    display: "Patient Care",
    system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason"
  }),
  /**
   * The supply has been requested for creating or replenishing ward stock.
   */
  supplyrequest_reason_WardStock: Coding.FromStrict({
    code: "ward-stock",
    display: "Ward Stock",
    system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason"
  }),
};
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * A code specifying the state of the resource instance.
 */
export const ExplanationofbenefitStatusValueSet = {
  /**
   * The resource instance is currently in-force.
   */
  explanationofbenefit_status_Active: Coding.FromStrict({
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/explanationofbenefit-status"
  }),
  /**
   * The resource instance is withdrawn, rescinded or reversed.
   */
  explanationofbenefit_status_Cancelled: Coding.FromStrict({
    code: "cancelled",
    display: "Cancelled",
    system: "http://hl7.org/fhir/explanationofbenefit-status"
  }),
  /**
   * A new resource instance the contents of which is not complete.
   */
  explanationofbenefit_status_Draft: Coding.FromStrict({
    code: "draft",
    display: "Draft",
    system: "http://hl7.org/fhir/explanationofbenefit-status"
  }),
  /**
   * The resource instance was entered in error.
   */
  explanationofbenefit_status_EnteredInError: Coding.FromStrict({
    code: "entered-in-error",
    display: "Entered In Error",
    system: "http://hl7.org/fhir/explanationofbenefit-status"
  }),
};
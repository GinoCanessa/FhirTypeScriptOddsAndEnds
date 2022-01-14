// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export const AllergyIntoleranceCriticality = {
  /**
   * Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
   */
  allergy_intolerance_criticality_HighRisk: {
    code: "high",
    display: "High Risk",
    system: "http://hl7.org/fhir/allergy-intolerance-criticality"
  } as Coding,
  /**
   * Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
   */
  allergy_intolerance_criticality_LowRisk: {
    code: "low",
    display: "Low Risk",
    system: "http://hl7.org/fhir/allergy-intolerance-criticality"
  } as Coding,
  /**
   * Unable to assess the worst case result of a future exposure.
   */
  allergy_intolerance_criticality_UnableToAssessRisk: {
    code: "unable-to-assess",
    display: "Unable to Assess Risk",
    system: "http://hl7.org/fhir/allergy-intolerance-criticality"
  } as Coding,
};

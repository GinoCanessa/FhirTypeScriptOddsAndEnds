// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export const RiskProbability = {
  /**
   * The specified outcome is effectively guaranteed.
   */
  risk_probability_Certain: {
    code: "certain",
    display: "Certain",
    system: "http://terminology.hl7.org/CodeSystem/risk-probability"
  } as Coding,
  /**
   * The specified outcome is more likely to occur than not.
   */
  risk_probability_HighLikelihood: {
    code: "high",
    display: "High likelihood",
    system: "http://terminology.hl7.org/CodeSystem/risk-probability"
  } as Coding,
  /**
   * The specified outcome is possible but unlikely.
   */
  risk_probability_LowLikelihood: {
    code: "low",
    display: "Low likelihood",
    system: "http://terminology.hl7.org/CodeSystem/risk-probability"
  } as Coding,
  /**
   * The specified outcome has a reasonable likelihood of occurrence.
   */
  risk_probability_ModerateLikelihood: {
    code: "moderate",
    display: "Moderate likelihood",
    system: "http://terminology.hl7.org/CodeSystem/risk-probability"
  } as Coding,
  /**
   * The specified outcome is exceptionally unlikely.
   */
  risk_probability_NegligibleLikelihood: {
    code: "negligible",
    display: "Negligible likelihood",
    system: "http://terminology.hl7.org/CodeSystem/risk-probability"
  } as Coding,
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export const DetectedissueSeverityValueSet = {
  /**
   * Indicates the issue may be life-threatening or has the potential to cause permanent injury.
   */
  detectedissue_severity_High: Coding.FromStrict({
    code: "high",
    display: "High",
    system: "http://hl7.org/fhir/detectedissue-severity"
  }),
  /**
   * Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
   */
  detectedissue_severity_Low: Coding.FromStrict({
    code: "low",
    display: "Low",
    system: "http://hl7.org/fhir/detectedissue-severity"
  }),
  /**
   * Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
   */
  detectedissue_severity_Moderate: Coding.FromStrict({
    code: "moderate",
    display: "Moderate",
    system: "http://hl7.org/fhir/detectedissue-severity"
  }),
};
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes sample Missing Tooth Reason codes.
 */
export const MissingToothReasonValueSet = {
  /**
   * Congenital
   */
  missing_tooth_reason_C: Coding.FromStrict({
    code: "c",
    display: "C",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason"
  }),
  /**
   * Extraction
   */
  missing_tooth_reason_E: Coding.FromStrict({
    code: "e",
    display: "E",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason"
  }),
  /**
   * Other
   */
  missing_tooth_reason_O: Coding.FromStrict({
    code: "o",
    display: "O",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason"
  }),
  /**
   * Unknown
   */
  missing_tooth_reason_U: Coding.FromStrict({
    code: "u",
    display: "U",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason"
  }),
};

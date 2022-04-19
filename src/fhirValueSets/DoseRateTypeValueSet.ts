// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The kind of dose or rate specified.
 */
export const DoseRateTypeValueSet = {
  /**
   * The dose specified is calculated by the prescriber or the system.
   */
  dose_rate_type_Calculated: Coding.FromStrict({
    code: "calculated",
    display: "Calculated",
    system: "http://terminology.hl7.org/CodeSystem/dose-rate-type"
  }),
  /**
   * The dose specified is as ordered by the prescriber.
   */
  dose_rate_type_Ordered: Coding.FromStrict({
    code: "ordered",
    display: "Ordered",
    system: "http://terminology.hl7.org/CodeSystem/dose-rate-type"
  }),
};

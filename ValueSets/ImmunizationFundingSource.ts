// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
export const ImmunizationFundingSource = {
  /**
   * The vaccine was purchased with private funds.
   */
  immunization_funding_source_Private: {
    code: "private",
    display: "Private",
    system: "http://terminology.hl7.org/CodeSystem/immunization-funding-source"
  } as Coding,
  /**
   * The vaccine was purchased with public funds.
   */
  immunization_funding_source_Public: {
    code: "public",
    display: "Public",
    system: "http://terminology.hl7.org/CodeSystem/immunization-funding-source"
  } as Coding,
};

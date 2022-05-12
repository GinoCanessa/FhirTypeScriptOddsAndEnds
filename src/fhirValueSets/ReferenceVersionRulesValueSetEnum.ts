// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/reference-version-rules|4.0.1

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export enum ReferenceVersionRulesValueSetEnum {
  /**
   * either: The reference may be either version independent or version specific.
   */
  EitherSpecificOrIndependent = "either",
  /**
   * independent: The reference must be version independent.
   */
  VersionIndependent = "independent",
  /**
   * specific: The reference must be version specific.
   */
  VersionSpecific = "specific",
}

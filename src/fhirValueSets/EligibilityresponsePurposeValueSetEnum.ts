// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose|4.0.1

/**
 * A code specifying the types of information being requested.
 */
export enum EligibilityresponsePurposeValueSetEnum {
  /**
   * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
   */
  CoverageAuthRequirements = "auth-requirements",
  /**
   * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
   */
  CoverageBenefits = "benefits",
  /**
   * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
   */
  CoverageDiscovery = "discovery",
  /**
   * validation: A check that the specified coverages are in-force is requested.
   */
  CoverageValidation = "validation",
}

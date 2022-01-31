// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * A code specifying the types of information being requested.
 */
export const EligibilityrequestPurpose = {
  /**
   * The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
   */
  eligibilityrequest_purpose_CoverageAuthRequirements: {
    code: "auth-requirements",
    display: "Coverage auth-requirements",
    system: "http://hl7.org/fhir/eligibilityrequest-purpose"
  } as Coding,
  /**
   * The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
   */
  eligibilityrequest_purpose_CoverageBenefits: {
    code: "benefits",
    display: "Coverage benefits",
    system: "http://hl7.org/fhir/eligibilityrequest-purpose"
  } as Coding,
  /**
   * The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
   */
  eligibilityrequest_purpose_CoverageDiscovery: {
    code: "discovery",
    display: "Coverage Discovery",
    system: "http://hl7.org/fhir/eligibilityrequest-purpose"
  } as Coding,
  /**
   * A check that the specified coverages are in-force is requested.
   */
  eligibilityrequest_purpose_CoverageValidation: {
    code: "validation",
    display: "Coverage Validation",
    system: "http://hl7.org/fhir/eligibilityrequest-purpose"
  } as Coding,
};

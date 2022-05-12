// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-careteamrole|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample Claim Care Team Role codes.
 */
export const ClaimCareteamroleValueSet = {
  /**
   * assist: Assisting care provider.
   */
  AssistingProvider: new Coding({
    display: "Assisting Provider",
    code: "assist",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  }),
  /**
   * other: Other role on the care team.
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  }),
  /**
   * primary: The primary care provider.
   */
  PrimaryProvider: new Coding({
    display: "Primary provider",
    code: "primary",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  }),
  /**
   * supervisor: Supervising care provider.
   */
  SupervisingProvider: new Coding({
    display: "Supervising Provider",
    code: "supervisor",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  }),
} as const;

/**
 * This value set includes sample Claim Care Team Role codes.
 */
export type ClaimCareteamroleValueSetType = typeof ClaimCareteamroleValueSet;

/**
 * This value set includes sample Claim Care Team Role codes.
 */

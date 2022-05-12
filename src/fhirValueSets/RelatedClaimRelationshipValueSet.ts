// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/related-claim-relationship|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample Related Claim Relationship codes.
 */
export const RelatedClaimRelationshipValueSet = {
  /**
   * associated: A claim for a different suite of services which is related the suite claimed here.
   */
  AssociatedClaim: new Coding({
    display: "Associated Claim",
    code: "associated",
    system: "http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship",
  }),
  /**
   * prior: A prior claim instance for the same intended suite of services.
   */
  PriorClaim: new Coding({
    display: "Prior Claim",
    code: "prior",
    system: "http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship",
  }),
} as const;

/**
 * This value set includes sample Related Claim Relationship codes.
 */
export type RelatedClaimRelationshipValueSetType = typeof RelatedClaimRelationshipValueSet;

/**
 * This value set includes sample Related Claim Relationship codes.
 */

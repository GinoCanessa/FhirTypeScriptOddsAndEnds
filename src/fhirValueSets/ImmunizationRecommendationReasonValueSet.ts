// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-recommendation-reason|4.0.1

import { Coding } from '../fhir.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 */
export const ImmunizationRecommendationReasonValueSet = {
  /**
   * Code: 77176002
   */
  VAL77176002: new Coding({
    code: "77176002",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 77386006
   */
  VAL77386006: new Coding({
    code: "77386006",
    system: "http://snomed.info/sct",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 */
export type ImmunizationRecommendationReasonValueSetType = typeof ImmunizationRecommendationReasonValueSet;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 */
export enum ImmunizationRecommendationReasonValueSetEnum {
  /**
   * Code: 77176002
   */
  VAL77176002 = "77176002",
  /**
   * Code: 77386006
   */
  VAL77386006 = "77386006",
}

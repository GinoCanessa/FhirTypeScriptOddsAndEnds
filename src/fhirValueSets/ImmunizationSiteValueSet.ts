// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-site|4.0.1

import { Coding } from '../fhir.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the body site where the vaccination occurred. This value set is provided as a suggestive example.
 */
export const ImmunizationSiteValueSet = {
  /**
   * LA: left arm
   */
  LeftArm: new Coding({
    display: "left arm",
    code: "LA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActSite",
  }),
  /**
   * RA: right arm
   */
  RightArm: new Coding({
    display: "right arm",
    code: "RA",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActSite",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the body site where the vaccination occurred. This value set is provided as a suggestive example.
 */
export type ImmunizationSiteValueSetType = typeof ImmunizationSiteValueSet;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the body site where the vaccination occurred. This value set is provided as a suggestive example.
 */
export enum ImmunizationSiteValueSetEnum {
  /**
   * LA: left arm
   */
  LeftArm = "LA",
  /**
   * RA: right arm
   */
  RightArm = "RA",
}

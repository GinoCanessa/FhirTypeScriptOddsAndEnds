// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-subtype|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export const ClaimSubtypeValueSet = {
  /**
   * emergency: A claim for emergency services.
   */
  EmergencyClaim: new Coding({
    display: "Emergency Claim",
    code: "emergency",
    system: "http://terminology.hl7.org/CodeSystem/ex-claimsubtype",
  }),
  /**
   * ortho: A claim for Orthodontic Services.
   */
  OrthodonticClaim: new Coding({
    display: "Orthodontic Claim",
    code: "ortho",
    system: "http://terminology.hl7.org/CodeSystem/ex-claimsubtype",
  }),
} as const;

/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export type ClaimSubtypeValueSetType = typeof ClaimSubtypeValueSet;

/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */

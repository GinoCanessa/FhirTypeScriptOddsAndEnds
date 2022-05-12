// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */
export const EncounterTypeValueSet = {
  /**
   * Code: ADMS
   */
  AnnualDiabetesMellitusScreening: new Coding({
    display: "Annual diabetes mellitus screening",
    code: "ADMS",
    system: "http://terminology.hl7.org/CodeSystem/encounter-type",
  }),
  /**
   * Code: BD/BM-clin
   */
  BoneDrillingBoneMarrowPunctionInClinic: new Coding({
    display: "Bone drilling/bone marrow punction in clinic",
    code: "BD/BM-clin",
    system: "http://terminology.hl7.org/CodeSystem/encounter-type",
  }),
  /**
   * Code: CCS60
   */
  InfantColonScreening60Minutes: new Coding({
    display: "Infant colon screening - 60 minutes",
    code: "CCS60",
    system: "http://terminology.hl7.org/CodeSystem/encounter-type",
  }),
  /**
   * Code: OKI
   */
  OutpatientKenacortInjection: new Coding({
    display: "Outpatient Kenacort injection",
    code: "OKI",
    system: "http://terminology.hl7.org/CodeSystem/encounter-type",
  }),
} as const;

/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */
export type EncounterTypeValueSetType = typeof EncounterTypeValueSet;

/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */

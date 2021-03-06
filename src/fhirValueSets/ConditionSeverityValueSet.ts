// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-severity|4.0.1

import { Coding } from '../fhir.js'

/**
 * Preferred value set for Condition/Diagnosis severity grading.
 */
export const ConditionSeverityValueSet = {
  /**
   * Code: 24484000
   */
  VAL24484000: new Coding({
    code: "24484000",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 255604002
   */
  VAL255604002: new Coding({
    code: "255604002",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 6736007
   */
  VAL6736007: new Coding({
    code: "6736007",
    system: "http://snomed.info/sct",
  }),
} as const;

/**
 * Preferred value set for Condition/Diagnosis severity grading.
 */
export type ConditionSeverityValueSetType = typeof ConditionSeverityValueSet;

/**
 * Preferred value set for Condition/Diagnosis severity grading.
 */

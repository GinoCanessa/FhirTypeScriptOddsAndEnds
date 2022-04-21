// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export const ImmunizationEvaluationDoseStatusValueSet = {
  /**
   * notvalid: The dose does not count toward fulfilling a path to immunity for a patient.
   */
  NotValid: new Coding({
    display: "Not valid",
    code: "notvalid",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status",
  }),
  /**
   * valid: The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.
   */
  Valid: new Coding({
    display: "Valid",
    code: "valid",
    system: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export type ImmunizationEvaluationDoseStatusValueSetType = typeof ImmunizationEvaluationDoseStatusValueSet;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 */
export enum ImmunizationEvaluationDoseStatusValueSetEnum {
  /**
   * notvalid: The dose does not count toward fulfilling a path to immunity for a patient.
   */
  NotValid = "notvalid",
  /**
   * valid: The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.
   */
  Valid = "valid",
}

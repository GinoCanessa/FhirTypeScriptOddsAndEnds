// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-actorrole|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample Contract Actor Role codes.
 */
export const ContractActorroleValueSet = {
  /**
   * patient: A receiver, human or animal, of health care related goods and services.
   */
  Patient: new Coding({
    display: "Patient",
    code: "patient",
    system: "http://terminology.hl7.org/CodeSystem/contractactorrole",
  }),
  /**
   * practitioner: Someone who provides health care related services to people or animals including both clinical and support services.
   */
  Practitioner: new Coding({
    display: "Practitioner",
    code: "practitioner",
    system: "http://terminology.hl7.org/CodeSystem/contractactorrole",
  }),
} as const;

/**
 * This value set includes sample Contract Actor Role codes.
 */
export type ContractActorroleValueSetType = typeof ContractActorroleValueSet;

/**
 * This value set includes sample Contract Actor Role codes.
 */
export enum ContractActorroleValueSetEnum {
  /**
   * patient: A receiver, human or animal, of health care related goods and services.
   */
  Patient = "patient",
  /**
   * practitioner: Someone who provides health care related services to people or animals including both clinical and support services.
   */
  Practitioner = "practitioner",
}

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/icd-10-procedures|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample ICD-10 Procedure codes.
 */
export const Icd10ProceduresValueSet = {
  /**
   * 123001: Procedure 1
   */
  PROC1: new Coding({
    display: "PROC-1",
    code: "123001",
    system: "http://hl7.org/fhir/sid/ex-icd-10-procedures",
  }),
  /**
   * 123002: Procedure 2
   */
  PROC2: new Coding({
    display: "PROC-2",
    code: "123002",
    system: "http://hl7.org/fhir/sid/ex-icd-10-procedures",
  }),
  /**
   * 123003: Procedure 3
   */
  PROC3: new Coding({
    display: "PROC-3",
    code: "123003",
    system: "http://hl7.org/fhir/sid/ex-icd-10-procedures",
  }),
} as const;

/**
 * This value set includes sample ICD-10 Procedure codes.
 */
export type Icd10ProceduresValueSetType = typeof Icd10ProceduresValueSet;

/**
 * This value set includes sample ICD-10 Procedure codes.
 */
export enum Icd10ProceduresValueSetEnum {
  /**
   * 123001: Procedure 1
   */
  PROC1 = "123001",
  /**
   * 123002: Procedure 2
   */
  PROC2 = "123002",
  /**
   * 123003: Procedure 3
   */
  PROC3 = "123003",
}

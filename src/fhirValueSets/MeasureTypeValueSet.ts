// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export const MeasureTypeValueSet = {
  /**
   * composite: A measure that combines multiple component measures in to a single quality measure.
   */
  Composite: new Coding({
    display: "Composite",
    code: "composite",
    system: "http://terminology.hl7.org/CodeSystem/measure-type",
  }),
  /**
   * outcome: A measure that indicates the result of the performance (or non-performance) of a function or process.
   */
  Outcome: new Coding({
    display: "Outcome",
    code: "outcome",
    system: "http://terminology.hl7.org/CodeSystem/measure-type",
  }),
  /**
   * patient-reported-outcome: A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
   */
  PatientReportedOutcome: new Coding({
    display: "Patient Reported Outcome",
    code: "patient-reported-outcome",
    system: "http://terminology.hl7.org/CodeSystem/measure-type",
  }),
  /**
   * process: A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
   */
  Process: new Coding({
    display: "Process",
    code: "process",
    system: "http://terminology.hl7.org/CodeSystem/measure-type",
  }),
  /**
   * structure: A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
   */
  Structure: new Coding({
    display: "Structure",
    code: "structure",
    system: "http://terminology.hl7.org/CodeSystem/measure-type",
  }),
} as const;

/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export type MeasureTypeValueSetType = typeof MeasureTypeValueSet;

/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export const MeasureTypeValueSet = {
  /**
   * A measure that combines multiple component measures in to a single quality measure.
   */
  measure_type_Composite: new Coding({
    code: "composite",
    display: "Composite",
    system: "http://terminology.hl7.org/CodeSystem/measure-type"
  }),
  /**
   * A measure that indicates the result of the performance (or non-performance) of a function or process.
   */
  measure_type_Outcome: new Coding({
    code: "outcome",
    display: "Outcome",
    system: "http://terminology.hl7.org/CodeSystem/measure-type"
  }),
  /**
   * A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
   */
  measure_type_PatientReportedOutcome: new Coding({
    code: "patient-reported-outcome",
    display: "Patient Reported Outcome",
    system: "http://terminology.hl7.org/CodeSystem/measure-type"
  }),
  /**
   * A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
   */
  measure_type_Process: new Coding({
    code: "process",
    display: "Process",
    system: "http://terminology.hl7.org/CodeSystem/measure-type"
  }),
  /**
   * A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
   */
  measure_type_Structure: new Coding({
    code: "structure",
    display: "Structure",
    system: "http://terminology.hl7.org/CodeSystem/measure-type"
  }),
};

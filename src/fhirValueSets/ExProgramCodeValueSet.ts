// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes sample Program Reason Span codes.
 */
export const ExProgramCodeValueSet = {
  /**
   * Child Asthma Program
   */
  ex_program_code_ChildAsthma: new Coding({
    code: "as",
    display: "Child Asthma",
    system: "http://terminology.hl7.org/CodeSystem/ex-programcode"
  }),
  /**
   * Autism Screening Program.
   */
  ex_program_code_AutismScreening: new Coding({
    code: "auscr",
    display: "Autism Screening",
    system: "http://terminology.hl7.org/CodeSystem/ex-programcode"
  }),
  /**
   * Hemodialysis Program.
   */
  ex_program_code_Hemodialysis: new Coding({
    code: "hd",
    display: "Hemodialysis",
    system: "http://terminology.hl7.org/CodeSystem/ex-programcode"
  }),
  /**
   * No program code applies.
   */
  ex_program_code_None: new Coding({
    code: "none",
    display: "None",
    system: "http://terminology.hl7.org/CodeSystem/ex-programcode"
  }),
};

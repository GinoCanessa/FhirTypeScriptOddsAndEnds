// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export const FlagCategory = {
  /**
   * Flags related to administrative and financial processes.
   */
  flag_category_Administrative: {
    code: "admin",
    display: "Administrative",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to subject's advance directives.
   */
  flag_category_AdvanceDirective: {
    code: "advance-directive",
    display: "Advance Directive",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to behavior.
   */
  flag_category_Behavioral: {
    code: "behavioral",
    display: "Behavioral",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to the subject's clinical data.
   */
  flag_category_Clinical: {
    code: "clinical",
    display: "Clinical",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to coming into contact with the patient.
   */
  flag_category_SubjectContact: {
    code: "contact",
    display: "Subject Contact",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to the subject's dietary needs.
   */
  flag_category_Diet: {
    code: "diet",
    display: "Diet",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to the subject's medications.
   */
  flag_category_Drug: {
    code: "drug",
    display: "Drug",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
   */
  flag_category_Lab: {
    code: "lab",
    display: "Lab",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to research.
   */
  flag_category_Research: {
    code: "research",
    display: "Research",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
  /**
   * Flags related to safety precautions.
   */
  flag_category_Safety: {
    code: "safety",
    display: "Safety",
    system: "http://terminology.hl7.org/CodeSystem/flag-category"
  } as Coding,
};

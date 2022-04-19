// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes describing the reason why a family member's history is not available.
 */
export const HistoryAbsentReasonValueSet = {
  /**
   * Patient does not have the information now, but can provide the information at a later date.
   */
  history_absent_reason_Deferred: Coding.FromStrict({
    code: "deferred",
    display: "Deferred",
    system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
  }),
  /**
   * Patient does not know the subject, e.g. the biological parent of an adopted patient.
   */
  history_absent_reason_SubjectUnknown: Coding.FromStrict({
    code: "subject-unknown",
    display: "Subject Unknown",
    system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
  }),
  /**
   * Information cannot be obtained; e.g. unconscious patient.
   */
  history_absent_reason_UnableToObtain: Coding.FromStrict({
    code: "unable-to-obtain",
    display: "Unable To Obtain",
    system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
  }),
  /**
   * The patient withheld or refused to share the information.
   */
  history_absent_reason_InformationWithheld: Coding.FromStrict({
    code: "withheld",
    display: "Information Withheld",
    system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
  }),
};

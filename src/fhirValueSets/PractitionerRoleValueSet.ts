// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This example value set defines a set of codes that can be used to indicate the role of a Practitioner.
 */
export const PractitionerRoleValueSet = {
  /**
   * A qualified/registered medical practitioner
   */
  practitioner_role_Doctor: Coding.FromStrict({
    code: "doctor",
    display: "Doctor",
    system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
  }),
  /**
   * Someone who is qualified in Information and Communication Technologies
   */
  practitioner_role_ICTProfessional: Coding.FromStrict({
    code: "ict",
    display: "ICT professional",
    system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
  }),
  /**
   * A practitioner with nursing experience that may be qualified/registered
   */
  practitioner_role_Nurse: Coding.FromStrict({
    code: "nurse",
    display: "Nurse",
    system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
  }),
  /**
   * A qualified/registered/licensed pharmacist
   */
  practitioner_role_Pharmacist: Coding.FromStrict({
    code: "pharmacist",
    display: "Pharmacist",
    system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
  }),
  /**
   * A practitioner that may perform research
   */
  practitioner_role_Researcher: Coding.FromStrict({
    code: "researcher",
    display: "Researcher",
    system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
  }),
  /**
   * Someone who is able to provide educational services
   */
  practitioner_role_TeacherEducator: Coding.FromStrict({
    code: "teacher",
    display: "Teacher/educator",
    system: "http://terminology.hl7.org/CodeSystem/practitioner-role"
  }),
};
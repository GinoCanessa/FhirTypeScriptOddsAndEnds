// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes example Diagnosis on Admission codes.
 */
export const ExDiagnosisOnAdmissionValueSet = {
  /**
   * Diagnosis was not present at time of inpatient admission.
   */
  ex_diagnosis_on_admission_No: new Coding({
    code: "n",
    display: "No",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
  }),
  /**
   * Documentation insufficient to determine if condition was present at the time of inpatient admission.
   */
  ex_diagnosis_on_admission_Unknown: new Coding({
    code: "u",
    display: "Unknown",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
  }),
  /**
   * Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.
   */
  ex_diagnosis_on_admission_Undetermined: new Coding({
    code: "w",
    display: "Undetermined",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
  }),
  /**
   * Diagnosis was present at time of inpatient admission.
   */
  ex_diagnosis_on_admission_Yes: new Coding({
    code: "y",
    display: "Yes",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
  }),
};

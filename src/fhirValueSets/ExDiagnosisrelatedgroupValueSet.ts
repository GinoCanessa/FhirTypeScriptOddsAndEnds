// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes example Diagnosis Related Group codes.
 */
export const ExDiagnosisrelatedgroupValueSet = {
  /**
   * Normal Vaginal Delivery.
   */
  ex_diagnosisrelatedgroup_NormalVaginalDelivery: Coding.FromStrict({
    code: "100",
    display: "Normal Vaginal Delivery",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup"
  }),
  /**
   * Appendectomy without rupture or other complications.
   */
  ex_diagnosisrelatedgroup_AppendectomyUncomplicated: Coding.FromStrict({
    code: "101",
    display: "Appendectomy - uncomplicated",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup"
  }),
  /**
   * Emergency department treatment of a tooth abscess.
   */
  ex_diagnosisrelatedgroup_ToothAbscess: Coding.FromStrict({
    code: "300",
    display: "Tooth abscess",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup"
  }),
  /**
   * Head trauma - concussion.
   */
  ex_diagnosisrelatedgroup_HeadTraumaConcussion: Coding.FromStrict({
    code: "400",
    display: "Head trauma - concussion",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup"
  }),
};

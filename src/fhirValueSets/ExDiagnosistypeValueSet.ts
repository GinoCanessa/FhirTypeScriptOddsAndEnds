// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes example Diagnosis Type codes.
 */
export const ExDiagnosistypeValueSet = {
  /**
   * The diagnosis given as the reason why the patient was admitted to the hospital.
   */
  ex_diagnosistype_AdmittingDiagnosis: new Coding({
    code: "admitting",
    display: "Admitting Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
   */
  ex_diagnosistype_ClinicalDiagnosis: new Coding({
    code: "clinical",
    display: "Clinical Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
   */
  ex_diagnosistype_DifferentialDiagnosis: new Coding({
    code: "differential",
    display: "Differential Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * The diagnosis given when the patient is discharged from the hospital.
   */
  ex_diagnosistype_DischargeDiagnosis: new Coding({
    code: "discharge",
    display: "Discharge Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
   */
  ex_diagnosistype_LaboratoryDiagnosis: new Coding({
    code: "laboratory",
    display: "Laboratory Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
   */
  ex_diagnosistype_NursingDiagnosis: new Coding({
    code: "nursing",
    display: "Nursing Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis determined prior to birth.
   */
  ex_diagnosistype_PrenatalDiagnosis: new Coding({
    code: "prenatal",
    display: "Prenatal Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
   */
  ex_diagnosistype_PrincipalDiagnosis: new Coding({
    code: "principal",
    display: "Principal Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis based primarily on the results from medical imaging studies.
   */
  ex_diagnosistype_RadiologyDiagnosis: new Coding({
    code: "radiology",
    display: "Radiology Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis determined using telemedicine techniques.
   */
  ex_diagnosistype_RemoteDiagnosis: new Coding({
    code: "remote",
    display: "Remote Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
   */
  ex_diagnosistype_RetrospectiveDiagnosis: new Coding({
    code: "retrospective",
    display: "Retrospective Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
  /**
   * A diagnosis determined by the patient.
   */
  ex_diagnosistype_SelfDiagnosis: new Coding({
    code: "self",
    display: "Self Diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype"
  }),
};

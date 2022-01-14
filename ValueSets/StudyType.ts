// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Types of research studies (types of research methods).
 */
export const StudyType = {
  /**
   * case-control study.
   */
  study_type_CaseControlStudy: {
    code: "case-control",
    display: "case-control study",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
  /**
   * a single case report.
   */
  study_type_CaseReport: {
    code: "case-report",
    display: "case report",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
  /**
   * controlled (but not randomized) trial.
   */
  study_type_ControlledTrialNonRandomized: {
    code: "CCT",
    display: "controlled trial (non-randomized)",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
  /**
   * observational study comparing cohorts.
   */
  study_type_ComparativeCohortStudy: {
    code: "cohort",
    display: "comparative cohort study",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
  /**
   * a combination of 1 or more types of studies.
   */
  study_type_MixedMethods: {
    code: "mixed",
    display: "mixed methods",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
  /**
   * randomized controlled trial.
   */
  study_type_RandomizedTrial: {
    code: "RCT",
    display: "randomized trial",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
  /**
   * uncontrolled cohort or case series.
   */
  study_type_UncontrolledCohortOrCaseSeries: {
    code: "series",
    display: "uncontrolled cohort or case series",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  } as Coding,
};

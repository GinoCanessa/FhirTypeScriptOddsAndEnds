// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Types of research studies (types of research methods).
 */
export const StudyTypeValueSet = {
  /**
   * case-control study.
   */
  study_type_CaseControlStudy: Coding.FromStrict({
    code: "case-control",
    display: "case-control study",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
  /**
   * a single case report.
   */
  study_type_CaseReport: Coding.FromStrict({
    code: "case-report",
    display: "case report",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
  /**
   * controlled (but not randomized) trial.
   */
  study_type_ControlledTrialNonRandomized: Coding.FromStrict({
    code: "CCT",
    display: "controlled trial (non-randomized)",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
  /**
   * observational study comparing cohorts.
   */
  study_type_ComparativeCohortStudy: Coding.FromStrict({
    code: "cohort",
    display: "comparative cohort study",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
  /**
   * a combination of 1 or more types of studies.
   */
  study_type_MixedMethods: Coding.FromStrict({
    code: "mixed",
    display: "mixed methods",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
  /**
   * randomized controlled trial.
   */
  study_type_RandomizedTrial: Coding.FromStrict({
    code: "RCT",
    display: "randomized trial",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
  /**
   * uncontrolled cohort or case series.
   */
  study_type_UncontrolledCohortOrCaseSeries: Coding.FromStrict({
    code: "series",
    display: "uncontrolled cohort or case series",
    system: "http://terminology.hl7.org/CodeSystem/study-type"
  }),
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes for the kind of study objective.
 */
export const ResearchStudyObjectiveTypeValueSet = {
  /**
   * Exploratory questions to be answered in the study.
   */
  research_study_objective_type_Exploratory: Coding.FromStrict({
    code: "exploratory",
    display: "Exploratory",
    system: "http://terminology.hl7.org/CodeSystem/research-study-objective-type"
  }),
  /**
   * The main question to be answered, and the one that drives any statistical planning for the study—e.g., calculation of the sample size to provide the appropriate power for statistical testing.
   */
  research_study_objective_type_Primary: Coding.FromStrict({
    code: "primary",
    display: "Primary",
    system: "http://terminology.hl7.org/CodeSystem/research-study-objective-type"
  }),
  /**
   * Question to be answered in the study that is of lesser importance than the primary objective.
   */
  research_study_objective_type_Secondary: Coding.FromStrict({
    code: "secondary",
    display: "Secondary",
    system: "http://terminology.hl7.org/CodeSystem/research-study-objective-type"
  }),
};

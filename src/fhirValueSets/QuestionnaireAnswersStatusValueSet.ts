// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Lifecycle status of the questionnaire response.
 */
export const QuestionnaireAnswersStatusValueSet = {
  /**
   * This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
   */
  questionnaire_answers_status_Amended: new Coding({
    code: "amended",
    display: "Amended",
    system: "http://hl7.org/fhir/questionnaire-answers-status"
  }),
  /**
   * This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
   */
  questionnaire_answers_status_Completed: new Coding({
    code: "completed",
    display: "Completed",
    system: "http://hl7.org/fhir/questionnaire-answers-status"
  }),
  /**
   * This QuestionnaireResponse was entered in error and voided.
   */
  questionnaire_answers_status_EnteredInError: new Coding({
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/questionnaire-answers-status"
  }),
  /**
   * This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
   */
  questionnaire_answers_status_InProgress: new Coding({
    code: "in-progress",
    display: "In Progress",
    system: "http://hl7.org/fhir/questionnaire-answers-status"
  }),
  /**
   * This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
   */
  questionnaire_answers_status_Stopped: new Coding({
    code: "stopped",
    display: "Stopped",
    system: "http://hl7.org/fhir/questionnaire-answers-status"
  }),
};

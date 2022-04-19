import { Coding } from '../fhir';
/**
 * Lifecycle status of the questionnaire response.
 */
export declare const QuestionnaireAnswersStatusValueSet: {
    /**
     * This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    questionnaire_answers_status_Amended: Coding;
    /**
     * This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
     */
    questionnaire_answers_status_Completed: Coding;
    /**
     * This QuestionnaireResponse was entered in error and voided.
     */
    questionnaire_answers_status_EnteredInError: Coding;
    /**
     * This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
     */
    questionnaire_answers_status_InProgress: Coding;
    /**
     * This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
     */
    questionnaire_answers_status_Stopped: Coding;
};
//# sourceMappingURL=QuestionnaireAnswersStatusValueSet.d.ts.map
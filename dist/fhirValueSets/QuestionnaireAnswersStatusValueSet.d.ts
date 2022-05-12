import { Coding } from '../fhir.js';
/**
 * Lifecycle status of the questionnaire response.
 */
export declare const QuestionnaireAnswersStatusValueSet: {
    /**
     * amended: This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    readonly Amended: Coding;
    /**
     * completed: This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: This QuestionnaireResponse was entered in error and voided.
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
     */
    readonly InProgress: Coding;
    /**
     * stopped: This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
     */
    readonly Stopped: Coding;
};
/**
 * Lifecycle status of the questionnaire response.
 */
export declare type QuestionnaireAnswersStatusValueSetType = typeof QuestionnaireAnswersStatusValueSet;
/**
 * Lifecycle status of the questionnaire response.
 */
//# sourceMappingURL=QuestionnaireAnswersStatusValueSet.d.ts.map
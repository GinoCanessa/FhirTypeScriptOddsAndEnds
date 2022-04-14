"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireAnswersStatus = void 0;
/**
 * Lifecycle status of the questionnaire response.
 */
exports.QuestionnaireAnswersStatus = {
    /**
     * This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    questionnaire_answers_status_Amended: {
        code: "amended",
        display: "Amended",
        system: "http://hl7.org/fhir/questionnaire-answers-status"
    },
    /**
     * This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
     */
    questionnaire_answers_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/questionnaire-answers-status"
    },
    /**
     * This QuestionnaireResponse was entered in error and voided.
     */
    questionnaire_answers_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/questionnaire-answers-status"
    },
    /**
     * This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
     */
    questionnaire_answers_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/questionnaire-answers-status"
    },
    /**
     * This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
     */
    questionnaire_answers_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://hl7.org/fhir/questionnaire-answers-status"
    },
};
//# sourceMappingURL=QuestionnaireAnswersStatus.js.map
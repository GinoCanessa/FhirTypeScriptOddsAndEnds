"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireEnableBehavior = void 0;
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
exports.QuestionnaireEnableBehavior = {
    /**
     * Enable the question when all the enableWhen criteria are satisfied.
     */
    questionnaire_enable_behavior_All: {
        code: "all",
        display: "All",
        system: "http://hl7.org/fhir/questionnaire-enable-behavior"
    },
    /**
     * Enable the question when any of the enableWhen criteria are satisfied.
     */
    questionnaire_enable_behavior_Any: {
        code: "any",
        display: "Any",
        system: "http://hl7.org/fhir/questionnaire-enable-behavior"
    },
};
//# sourceMappingURL=QuestionnaireEnableBehavior.js.map
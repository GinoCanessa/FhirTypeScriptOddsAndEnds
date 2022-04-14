"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireEnableOperator = void 0;
/**
 * The criteria by which a question is enabled.
 */
exports.QuestionnaireEnableOperator = {
    /**
     * True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    questionnaire_enable_operator_NotEquals: {
        code: "!=",
        display: "Not Equals",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
    /**
     * True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    questionnaire_enable_operator_LessThan: {
        code: "<",
        display: "Less Than",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
    /**
     * True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    questionnaire_enable_operator_LessOrEquals: {
        code: "<=",
        display: "Less or Equals",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
    /**
     * True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    questionnaire_enable_operator_Equals: {
        code: "=",
        display: "Equals",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
    /**
     * True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    questionnaire_enable_operator_GreaterThan: {
        code: ">",
        display: "Greater Than",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
    /**
     * True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    questionnaire_enable_operator_GreaterOrEquals: {
        code: ">=",
        display: "Greater or Equals",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
    /**
     * True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    questionnaire_enable_operator_Exists: {
        code: "exists",
        display: "Exists",
        system: "http://hl7.org/fhir/questionnaire-enable-operator"
    },
};
//# sourceMappingURL=QuestionnaireEnableOperator.js.map
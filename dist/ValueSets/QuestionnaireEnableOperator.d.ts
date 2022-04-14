import { Coding } from '../strictmodels';
/**
 * The criteria by which a question is enabled.
 */
export declare const QuestionnaireEnableOperator: {
    /**
     * True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    questionnaire_enable_operator_NotEquals: Coding;
    /**
     * True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    questionnaire_enable_operator_LessThan: Coding;
    /**
     * True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    questionnaire_enable_operator_LessOrEquals: Coding;
    /**
     * True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    questionnaire_enable_operator_Equals: Coding;
    /**
     * True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    questionnaire_enable_operator_GreaterThan: Coding;
    /**
     * True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    questionnaire_enable_operator_GreaterOrEquals: Coding;
    /**
     * True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    questionnaire_enable_operator_Exists: Coding;
};
//# sourceMappingURL=QuestionnaireEnableOperator.d.ts.map
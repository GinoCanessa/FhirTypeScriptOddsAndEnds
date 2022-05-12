// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.0.1
/**
 * The criteria by which a question is enabled.
 */
export var QuestionnaireEnableOperatorValueSetEnum;
(function (QuestionnaireEnableOperatorValueSetEnum) {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    QuestionnaireEnableOperatorValueSetEnum["NotEquals"] = "!=";
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    QuestionnaireEnableOperatorValueSetEnum["LessThan"] = "<";
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    QuestionnaireEnableOperatorValueSetEnum["LessOrEquals"] = "<=";
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    QuestionnaireEnableOperatorValueSetEnum["Equals"] = "=";
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    QuestionnaireEnableOperatorValueSetEnum["GreaterThan"] = ">";
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    QuestionnaireEnableOperatorValueSetEnum["GreaterOrEquals"] = ">=";
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    QuestionnaireEnableOperatorValueSetEnum["Exists"] = "exists";
})(QuestionnaireEnableOperatorValueSetEnum || (QuestionnaireEnableOperatorValueSetEnum = {}));
//# sourceMappingURL=QuestionnaireEnableOperatorValueSetEnum.js.map
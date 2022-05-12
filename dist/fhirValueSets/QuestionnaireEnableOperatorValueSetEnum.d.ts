/**
 * The criteria by which a question is enabled.
 */
export declare enum QuestionnaireEnableOperatorValueSetEnum {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    NotEquals = "!=",
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    LessThan = "<",
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    LessOrEquals = "<=",
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    Equals = "=",
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    GreaterThan = ">",
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    GreaterOrEquals = ">=",
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    Exists = "exists"
}
//# sourceMappingURL=QuestionnaireEnableOperatorValueSetEnum.d.ts.map
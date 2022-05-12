/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare enum MessageheaderResponseRequestValueSetEnum {
    /**
     * always: initiator expects a response for this message.
     */
    Always = "always",
    /**
     * never: initiator does not expect a response.
     */
    Never = "never",
    /**
     * on-error: initiator expects a response only if in error.
     */
    ErrorRejectConditionsOnly = "on-error",
    /**
     * on-success: initiator expects a response only if successful.
     */
    SuccessfulCompletionOnly = "on-success"
}
//# sourceMappingURL=MessageheaderResponseRequestValueSetEnum.d.ts.map
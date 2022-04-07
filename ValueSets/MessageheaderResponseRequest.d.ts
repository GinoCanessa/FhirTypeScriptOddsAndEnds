import { Coding } from '../strictmodels';
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare const MessageheaderResponseRequest: {
    /**
     * initiator expects a response for this message.
     */
    messageheader_response_request_Always: Coding;
    /**
     * initiator does not expect a response.
     */
    messageheader_response_request_Never: Coding;
    /**
     * initiator expects a response only if in error.
     */
    messageheader_response_request_ErrorRejectConditionsOnly: Coding;
    /**
     * initiator expects a response only if successful.
     */
    messageheader_response_request_SuccessfulCompletionOnly: Coding;
};
//# sourceMappingURL=MessageheaderResponseRequest.d.ts.map
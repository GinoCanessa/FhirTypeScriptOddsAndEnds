/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export var MessageheaderResponseRequest = {
    /**
     * initiator expects a response for this message.
     */
    messageheader_response_request_Always: {
        code: "always",
        display: "Always",
        system: "http://hl7.org/fhir/messageheader-response-request"
    },
    /**
     * initiator does not expect a response.
     */
    messageheader_response_request_Never: {
        code: "never",
        display: "Never",
        system: "http://hl7.org/fhir/messageheader-response-request"
    },
    /**
     * initiator expects a response only if in error.
     */
    messageheader_response_request_ErrorRejectConditionsOnly: {
        code: "on-error",
        display: "Error/reject conditions only",
        system: "http://hl7.org/fhir/messageheader-response-request"
    },
    /**
     * initiator expects a response only if successful.
     */
    messageheader_response_request_SuccessfulCompletionOnly: {
        code: "on-success",
        display: "Successful completion only",
        system: "http://hl7.org/fhir/messageheader-response-request"
    }
};

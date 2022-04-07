/**
 * The kind of response to a message.
 */
export var ResponseCode = {
    /**
     * The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    response_code_FatalError: {
        code: "fatal-error",
        display: "Fatal Error",
        system: "http://hl7.org/fhir/response-code"
    },
    /**
     * The message was accepted and processed without error.
     */
    response_code_OK: {
        code: "ok",
        display: "OK",
        system: "http://hl7.org/fhir/response-code"
    },
    /**
     * Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    response_code_TransientError: {
        code: "transient-error",
        display: "Transient Error",
        system: "http://hl7.org/fhir/response-code"
    }
};

/**
 * The type of direction to use for assertion.
 */
export var AssertDirectionCodes = {
    /**
     * The assertion is evaluated on the request.
     */
    assert_direction_codes_Request: {
        code: "request",
        display: "request",
        system: "http://hl7.org/fhir/assert-direction-codes"
    },
    /**
     * The assertion is evaluated on the response. This is the default value.
     */
    assert_direction_codes_Response: {
        code: "response",
        display: "response",
        system: "http://hl7.org/fhir/assert-direction-codes"
    }
};

/**
 * A code that indicates how the server supports conditional read.
 */
export var ConditionalReadStatus = {
    /**
     * Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    conditional_read_status_FullSupport: {
        code: "full-support",
        display: "Full Support",
        system: "http://hl7.org/fhir/conditional-read-status"
    },
    /**
     * Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    conditional_read_status_IfModifiedSince: {
        code: "modified-since",
        display: "If-Modified-Since",
        system: "http://hl7.org/fhir/conditional-read-status"
    },
    /**
     * Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    conditional_read_status_IfNoneMatch: {
        code: "not-match",
        display: "If-None-Match",
        system: "http://hl7.org/fhir/conditional-read-status"
    },
    /**
     * No support for conditional reads.
     */
    conditional_read_status_NotSupported: {
        code: "not-supported",
        display: "Not Supported",
        system: "http://hl7.org/fhir/conditional-read-status"
    }
};

/**
 * Indicates whether the event succeeded or failed.
 */
export var AuditEventOutcome = {
    /**
     * The operation completed successfully (whether with warnings or not).
     */
    audit_event_outcome_Success: {
        code: "0",
        display: "Success",
        system: "http://hl7.org/fhir/audit-event-outcome"
    },
    /**
     * An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    audit_event_outcome_MajorFailure: {
        code: "12",
        display: "Major failure",
        system: "http://hl7.org/fhir/audit-event-outcome"
    },
    /**
     * The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    audit_event_outcome_MinorFailure: {
        code: "4",
        display: "Minor failure",
        system: "http://hl7.org/fhir/audit-event-outcome"
    },
    /**
     * The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    audit_event_outcome_SeriousFailure: {
        code: "8",
        display: "Serious failure",
        system: "http://hl7.org/fhir/audit-event-outcome"
    }
};

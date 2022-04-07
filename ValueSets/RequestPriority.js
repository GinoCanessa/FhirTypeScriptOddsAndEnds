/**
 * The clinical priority of a diagnostic order.
 */
export var RequestPriority = {
    /**
     * The request should be actioned as soon as possible - higher priority than urgent.
     */
    request_priority_ASAP: {
        code: "asap",
        display: "ASAP",
        system: "http://hl7.org/fhir/request-priority"
    },
    /**
     * The request has normal priority.
     */
    request_priority_Routine: {
        code: "routine",
        display: "Routine",
        system: "http://hl7.org/fhir/request-priority"
    },
    /**
     * The request should be actioned immediately - highest possible priority.  E.g. an emergency.
     */
    request_priority_STAT: {
        code: "stat",
        display: "STAT",
        system: "http://hl7.org/fhir/request-priority"
    },
    /**
     * The request should be actioned promptly - higher priority than routine.
     */
    request_priority_Urgent: {
        code: "urgent",
        display: "Urgent",
        system: "http://hl7.org/fhir/request-priority"
    }
};

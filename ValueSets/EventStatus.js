/**
 * Codes identifying the lifecycle stage of an event.
 */
export var EventStatus = {
    /**
     * The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    event_status_NotDone: {
        code: "not-done",
        display: "Not Done",
        system: "http://hl7.org/fhir/event-status"
    },
    /**
     * The event has been temporarily stopped but is expected to resume in the future.
     */
    event_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/event-status"
    },
    /**
     * The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    event_status_Preparation: {
        code: "preparation",
        display: "Preparation",
        system: "http://hl7.org/fhir/event-status"
    },
    /**
     * The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
     */
    event_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://hl7.org/fhir/event-status"
    },
    /**
     * The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    event_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/event-status"
    }
};
/**
 * The free/busy status of the slot.
 */
export var Slotstatus = {
    /**
     * Indicates that the time interval is busy because one  or more events have been scheduled for that interval.
     */
    slotstatus_Busy: {
        code: "busy",
        display: "Busy",
        system: "http://hl7.org/fhir/slotstatus"
    },
    /**
     * Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.
     */
    slotstatus_BusyTentative: {
        code: "busy-tentative",
        display: "Busy (Tentative)",
        system: "http://hl7.org/fhir/slotstatus"
    },
    /**
     * Indicates that the time interval is busy and that the interval cannot be scheduled.
     */
    slotstatus_BusyUnavailable: {
        code: "busy-unavailable",
        display: "Busy (Unavailable)",
        system: "http://hl7.org/fhir/slotstatus"
    },
    /**
     * This instance should not have been part of this patient's medical record.
     */
    slotstatus_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in error",
        system: "http://hl7.org/fhir/slotstatus"
    },
    /**
     * Indicates that the time interval is free for scheduling.
     */
    slotstatus_Free: {
        code: "free",
        display: "Free",
        system: "http://hl7.org/fhir/slotstatus"
    }
};

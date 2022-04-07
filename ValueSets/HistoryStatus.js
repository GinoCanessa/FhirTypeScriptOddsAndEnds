/**
 * A code that identifies the status of the family history record.
 */
export var HistoryStatus = {
    /**
     * All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    history_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/history-status"
    },
    /**
     * This instance should not have been part of this patient's medical record.
     */
    history_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/history-status"
    },
    /**
     * Health information for this family member is unavailable/unknown.
     */
    history_status_HealthUnknown: {
        code: "health-unknown",
        display: "Health Unknown",
        system: "http://hl7.org/fhir/history-status"
    },
    /**
     * Some health information is known and captured, but not complete - see notes for details.
     */
    history_status_Partial: {
        code: "partial",
        display: "Partial",
        system: "http://hl7.org/fhir/history-status"
    }
};

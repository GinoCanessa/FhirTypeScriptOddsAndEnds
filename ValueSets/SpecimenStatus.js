/**
 * Codes providing the status/availability of a specimen.
 */
export var SpecimenStatus = {
    /**
     * The physical specimen is present and in good condition.
     */
    specimen_status_Available: {
        code: "available",
        display: "Available",
        system: "http://hl7.org/fhir/specimen-status"
    },
    /**
     * The specimen was entered in error and therefore nullified.
     */
    specimen_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/specimen-status"
    },
    /**
     * There is no physical specimen because it is either lost, destroyed or consumed.
     */
    specimen_status_Unavailable: {
        code: "unavailable",
        display: "Unavailable",
        system: "http://hl7.org/fhir/specimen-status"
    },
    /**
     * The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
     */
    specimen_status_Unsatisfactory: {
        code: "unsatisfactory",
        display: "Unsatisfactory",
        system: "http://hl7.org/fhir/specimen-status"
    }
};

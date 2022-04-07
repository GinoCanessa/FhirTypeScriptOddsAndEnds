/**
 * A code to indicate if the substance is actively used.
 */
export var SubstanceStatus = {
    /**
     * The substance is considered for use or reference.
     */
    substance_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/substance-status"
    },
    /**
     * The substance was entered in error.
     */
    substance_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/substance-status"
    },
    /**
     * The substance is considered for reference, but not for use.
     */
    substance_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/substance-status"
    }
};

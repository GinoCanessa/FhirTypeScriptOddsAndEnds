/**
 * This value set includes Status codes.
 */
export var FmStatus = {
    /**
     * The instance is currently in-force.
     */
    fm_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/fm-status"
    },
    /**
     * The instance is withdrawn, rescinded or reversed.
     */
    fm_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/fm-status"
    },
    /**
     * A new instance the contents of which is not complete.
     */
    fm_status_Draft: {
        code: "draft",
        display: "Draft",
        system: "http://hl7.org/fhir/fm-status"
    },
    /**
     * The instance was entered in error.
     */
    fm_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/fm-status"
    }
};

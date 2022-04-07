/**
 * MedicationKnowledge Status Codes
 */
export var MedicationknowledgeStatus = {
    /**
     * The medication is available for use.
     */
    medicationknowledge_status_Active: {
        code: "active",
        display: "Active",
        system: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status"
    },
    /**
     * The medication was entered in error.
     */
    medicationknowledge_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status"
    },
    /**
     * The medication is not available for use.
     */
    medicationknowledge_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status"
    }
};

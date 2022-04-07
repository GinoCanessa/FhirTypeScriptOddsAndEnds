/**
 * MedicationDispense Status Codes
 */
export var MedicationdispenseStatus = {
    /**
     * The dispensed product was not and will never be picked up by the patient.
     */
    medicationdispense_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The dispensed product has been picked up.
     */
    medicationdispense_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The dispense was declined and not performed.
     */
    medicationdispense_status_Declined: {
        code: "declined",
        display: "Declined",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The dispense was entered in error and therefore nullified.
     */
    medicationdispense_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The dispensed product is ready for pickup.
     */
    medicationdispense_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    medicationdispense_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    medicationdispense_status_Preparation: {
        code: "preparation",
        display: "Preparation",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    medicationdispense_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    },
    /**
     * The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    medicationdispense_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status"
    }
};

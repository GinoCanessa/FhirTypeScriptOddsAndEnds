import { Coding } from '../strictmodels';
/**
 * MedicationDispense Status Codes
 */
export declare const MedicationdispenseStatus: {
    /**
     * The dispensed product was not and will never be picked up by the patient.
     */
    medicationdispense_status_Cancelled: Coding;
    /**
     * The dispensed product has been picked up.
     */
    medicationdispense_status_Completed: Coding;
    /**
     * The dispense was declined and not performed.
     */
    medicationdispense_status_Declined: Coding;
    /**
     * The dispense was entered in error and therefore nullified.
     */
    medicationdispense_status_EnteredInError: Coding;
    /**
     * The dispensed product is ready for pickup.
     */
    medicationdispense_status_InProgress: Coding;
    /**
     * The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    medicationdispense_status_OnHold: Coding;
    /**
     * The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    medicationdispense_status_Preparation: Coding;
    /**
     * Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    medicationdispense_status_Stopped: Coding;
    /**
     * The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    medicationdispense_status_Unknown: Coding;
};
//# sourceMappingURL=MedicationdispenseStatus.d.ts.map
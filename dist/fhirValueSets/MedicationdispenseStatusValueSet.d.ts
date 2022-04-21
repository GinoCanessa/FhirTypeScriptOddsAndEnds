import { Coding } from '../fhir.js';
/**
 * MedicationDispense Status Codes
 */
export declare const MedicationdispenseStatusValueSet: {
    /**
     * cancelled: The dispensed product was not and will never be picked up by the patient.
     */
    readonly Cancelled: Coding;
    /**
     * completed: The dispensed product has been picked up.
     */
    readonly Completed: Coding;
    /**
     * declined: The dispense was declined and not performed.
     */
    readonly Declined: Coding;
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: The dispensed product is ready for pickup.
     */
    readonly InProgress: Coding;
    /**
     * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    readonly OnHold: Coding;
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    readonly Preparation: Coding;
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    readonly Stopped: Coding;
    /**
     * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    readonly Unknown: Coding;
};
/**
 * MedicationDispense Status Codes
 */
export declare type MedicationdispenseStatusValueSetType = typeof MedicationdispenseStatusValueSet;
/**
 * MedicationDispense Status Codes
 */
export declare enum MedicationdispenseStatusValueSetEnum {
    /**
     * cancelled: The dispensed product was not and will never be picked up by the patient.
     */
    Cancelled = "cancelled",
    /**
     * completed: The dispensed product has been picked up.
     */
    Completed = "completed",
    /**
     * declined: The dispense was declined and not performed.
     */
    Declined = "declined",
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError = "entered-in-error",
    /**
     * in-progress: The dispensed product is ready for pickup.
     */
    InProgress = "in-progress",
    /**
     * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    OnHold = "on-hold",
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    Preparation = "preparation",
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped = "stopped",
    /**
     * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=MedicationdispenseStatusValueSet.d.ts.map
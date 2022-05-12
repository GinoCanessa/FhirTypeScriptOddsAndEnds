/**
 * MedicationAdministration Status Codes
 */
export declare enum MedicationAdminStatusValueSetEnum {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed = "completed",
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError = "entered-in-error",
    /**
     * in-progress: The administration has started but has not yet completed.
     */
    InProgress = "in-progress",
    /**
     * not-done: The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    NotDone = "not-done",
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold = "on-hold",
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    Stopped = "stopped",
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=MedicationAdminStatusValueSetEnum.d.ts.map
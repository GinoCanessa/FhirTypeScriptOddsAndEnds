/**
 * Medication Status Codes
 */
export declare enum MedicationStatementStatusValueSetEnum {
    /**
     * active: The medication is still being taken.
     */
    Active = "active",
    /**
     * completed: The medication is no longer being taken.
     */
    Completed = "completed",
    /**
     * entered-in-error: Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    EnteredInError = "entered-in-error",
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended = "intended",
    /**
     * not-taken: The medication was not consumed by the patient
     */
    NotTaken = "not-taken",
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold = "on-hold",
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    Stopped = "stopped",
    /**
     * unknown: The state of the medication use is not currently known.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=MedicationStatementStatusValueSetEnum.d.ts.map
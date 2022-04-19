import { Coding } from '../fhir';
/**
 * Medication Status Codes
 */
export declare const MedicationStatementStatusValueSet: {
    /**
     * The medication is still being taken.
     */
    medication_statement_status_Active: Coding;
    /**
     * The medication is no longer being taken.
     */
    medication_statement_status_Completed: Coding;
    /**
     * Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    medication_statement_status_EnteredInError: Coding;
    /**
     * The medication may be taken at some time in the future.
     */
    medication_statement_status_Intended: Coding;
    /**
     * The medication was not consumed by the patient
     */
    medication_statement_status_NotTaken: Coding;
    /**
     * Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    medication_statement_status_OnHold: Coding;
    /**
     * Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    medication_statement_status_Stopped: Coding;
    /**
     * The state of the medication use is not currently known.
     */
    medication_statement_status_Unknown: Coding;
};
//# sourceMappingURL=MedicationStatementStatusValueSet.d.ts.map
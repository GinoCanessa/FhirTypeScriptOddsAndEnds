import { Coding } from '../strictmodels';
/**
 * MedicationRequest Status Codes
 */
export declare const MedicationrequestStatus: {
    /**
     * The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    medicationrequest_status_Active: Coding;
    /**
     * The prescription has been withdrawn before any administrations have occurred
     */
    medicationrequest_status_Cancelled: Coding;
    /**
     * All actions that are implied by the prescription have occurred.
     */
    medicationrequest_status_Completed: Coding;
    /**
     * The prescription is not yet 'actionable', e.g. it is a work in progress, requires sign-off, verification or needs to be run through decision support process.
     */
    medicationrequest_status_Draft: Coding;
    /**
     * Some of the actions that are implied by the medication request may have occurred.  For example, the medication may have been dispensed and the patient may have taken some of the medication.  Clinical decision support systems should take this status into account
     */
    medicationrequest_status_EnteredInError: Coding;
    /**
     * Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called 'suspended'.
     */
    medicationrequest_status_OnHold: Coding;
    /**
     * Actions implied by the prescription are to be permanently halted, before all of the administrations occurred. This should not be used if the original order was entered in error
     */
    medicationrequest_status_Stopped: Coding;
    /**
     * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    medicationrequest_status_Unknown: Coding;
};
//# sourceMappingURL=MedicationrequestStatus.d.ts.map
import { Coding } from '../strictmodels';
/**
 * MedicationAdministration Status Codes
 */
export declare const MedicationAdminStatus: {
    /**
     * The administration has started but has not yet completed.
     */
    medication_admin_status_InProgress: Coding;
    /**
     * The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    medication_admin_status_NotDone: Coding;
    /**
     * Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    medication_admin_status_OnHold: Coding;
    /**
     * Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    medication_admin_status_Stopped: Coding;
    /**
     * The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    medication_admin_status_Unknown: Coding;
};
//# sourceMappingURL=MedicationAdminStatus.d.ts.map
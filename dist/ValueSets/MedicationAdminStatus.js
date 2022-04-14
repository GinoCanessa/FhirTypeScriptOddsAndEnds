"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationAdminStatus = void 0;
/**
 * MedicationAdministration Status Codes
 */
exports.MedicationAdminStatus = {
    /**
     * The administration has started but has not yet completed.
     */
    medication_admin_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
    /**
     * The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    medication_admin_status_NotDone: {
        code: "not-done",
        display: "Not Done",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
    /**
     * Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    medication_admin_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
    /**
     * Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    medication_admin_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
    /**
     * The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    medication_admin_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
};
//# sourceMappingURL=MedicationAdminStatus.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationrequestStatus = void 0;
/**
 * MedicationRequest Status Codes
 */
exports.MedicationrequestStatus = {
    /**
     * The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    medicationrequest_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * The prescription has been withdrawn before any administrations have occurred
     */
    medicationrequest_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * All actions that are implied by the prescription have occurred.
     */
    medicationrequest_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * The prescription is not yet 'actionable', e.g. it is a work in progress, requires sign-off, verification or needs to be run through decision support process.
     */
    medicationrequest_status_Draft: {
        code: "draft",
        display: "Draft",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * Some of the actions that are implied by the medication request may have occurred.  For example, the medication may have been dispensed and the patient may have taken some of the medication.  Clinical decision support systems should take this status into account
     */
    medicationrequest_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called 'suspended'.
     */
    medicationrequest_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * Actions implied by the prescription are to be permanently halted, before all of the administrations occurred. This should not be used if the original order was entered in error
     */
    medicationrequest_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
    /**
     * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    medicationrequest_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status"
    },
};
//# sourceMappingURL=MedicationrequestStatus.js.map
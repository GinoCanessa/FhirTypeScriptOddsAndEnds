// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * MedicationRequest Status Codes
 */
export const MedicationrequestStatusValueSet = {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * cancelled: The prescription has been withdrawn before any administrations have occurred
     */
    Cancelled: new Coding({
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * completed: All actions that are implied by the prescription have occurred.
     */
    Completed: new Coding({
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * draft: The prescription is not yet 'actionable', e.g. it is a work in progress, requires sign-off, verification or needs to be run through decision support process.
     */
    Draft: new Coding({
        display: "Draft",
        code: "draft",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * entered-in-error: Some of the actions that are implied by the medication request may have occurred.  For example, the medication may have been dispensed and the patient may have taken some of the medication.  Clinical decision support systems should take this status into account
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * on-hold: Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called 'suspended'.
     */
    OnHold: new Coding({
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * stopped: Actions implied by the prescription are to be permanently halted, before all of the administrations occurred. This should not be used if the original order was entered in error
     */
    Stopped: new Coding({
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown: new Coding({
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
    }),
};
/**
 * MedicationRequest Status Codes
 */
//# sourceMappingURL=MedicationrequestStatusValueSet.js.map
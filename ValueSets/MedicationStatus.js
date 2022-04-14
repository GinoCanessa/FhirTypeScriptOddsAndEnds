"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationStatus = void 0;
/**
 * Medication Status Codes
 */
exports.MedicationStatus = {
    /**
     * The medication is available for use.
     */
    medication_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/CodeSystem/medication-status"
    },
    /**
     * The medication was entered in error.
     */
    medication_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/CodeSystem/medication-status"
    },
    /**
     * The medication is not available for use.
     */
    medication_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/CodeSystem/medication-status"
    },
};
//# sourceMappingURL=MedicationStatus.js.map
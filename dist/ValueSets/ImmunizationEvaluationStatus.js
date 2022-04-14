"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmunizationEvaluationStatus = void 0;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 */
exports.ImmunizationEvaluationStatus = {
    /**
     * All actions that are implied by the administration have occurred.
     */
    medication_admin_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
    /**
     * The administration was entered in error and therefore nullified.
     */
    medication_admin_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status"
    },
};
//# sourceMappingURL=ImmunizationEvaluationStatus.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationofbenefitStatus = void 0;
/**
 * A code specifying the state of the resource instance.
 */
exports.ExplanationofbenefitStatus = {
    /**
     * The resource instance is currently in-force.
     */
    explanationofbenefit_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/explanationofbenefit-status"
    },
    /**
     * The resource instance is withdrawn, rescinded or reversed.
     */
    explanationofbenefit_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/explanationofbenefit-status"
    },
    /**
     * A new resource instance the contents of which is not complete.
     */
    explanationofbenefit_status_Draft: {
        code: "draft",
        display: "Draft",
        system: "http://hl7.org/fhir/explanationofbenefit-status"
    },
    /**
     * The resource instance was entered in error.
     */
    explanationofbenefit_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered In Error",
        system: "http://hl7.org/fhir/explanationofbenefit-status"
    },
};
//# sourceMappingURL=ExplanationofbenefitStatus.js.map
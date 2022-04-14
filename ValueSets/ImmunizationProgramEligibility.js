"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmunizationProgramEligibility = void 0;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
exports.ImmunizationProgramEligibility = {
    /**
     * The patient is not eligible for the funding program.
     */
    immunization_program_eligibility_NotEligible: {
        code: "ineligible",
        display: "Not Eligible",
        system: "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility"
    },
    /**
     * The patient is eligible for the funding program because they are uninsured.
     */
    immunization_program_eligibility_Uninsured: {
        code: "uninsured",
        display: "Uninsured",
        system: "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility"
    },
};
//# sourceMappingURL=ImmunizationProgramEligibility.js.map
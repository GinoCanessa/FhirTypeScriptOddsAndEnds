import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
export declare const ImmunizationProgramEligibilityValueSet: {
    /**
     * ineligible: The patient is not eligible for the funding program.
     */
    readonly NotEligible: Coding;
    /**
     * uninsured: The patient is eligible for the funding program because they are uninsured.
     */
    readonly Uninsured: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
export declare type ImmunizationProgramEligibilityValueSetType = typeof ImmunizationProgramEligibilityValueSet;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
export declare enum ImmunizationProgramEligibilityValueSetEnum {
    /**
     * ineligible: The patient is not eligible for the funding program.
     */
    NotEligible = "ineligible",
    /**
     * uninsured: The patient is eligible for the funding program because they are uninsured.
     */
    Uninsured = "uninsured"
}
//# sourceMappingURL=ImmunizationProgramEligibilityValueSet.d.ts.map
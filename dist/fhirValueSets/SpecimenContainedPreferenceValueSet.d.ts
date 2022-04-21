import { Coding } from '../fhir.js';
/**
 * Degree of preference of a type of conditioned specimen.
 */
export declare const SpecimenContainedPreferenceValueSet: {
    /**
     * alternate: This type of conditioned specimen is an alternate.
     */
    readonly Alternate: Coding;
    /**
     * preferred: This type of contained specimen is preferred to collect this kind of specimen.
     */
    readonly Preferred: Coding;
};
/**
 * Degree of preference of a type of conditioned specimen.
 */
export declare type SpecimenContainedPreferenceValueSetType = typeof SpecimenContainedPreferenceValueSet;
/**
 * Degree of preference of a type of conditioned specimen.
 */
export declare enum SpecimenContainedPreferenceValueSetEnum {
    /**
     * alternate: This type of conditioned specimen is an alternate.
     */
    Alternate = "alternate",
    /**
     * preferred: This type of contained specimen is preferred to collect this kind of specimen.
     */
    Preferred = "preferred"
}
//# sourceMappingURL=SpecimenContainedPreferenceValueSet.d.ts.map
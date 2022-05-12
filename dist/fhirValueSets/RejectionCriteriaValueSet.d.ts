import { Coding } from '../fhir.js';
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare const RejectionCriteriaValueSet: {
    /**
     * broken: specimen container broken.
     */
    readonly BrokenSpecimenContainer: Coding;
    /**
     * clotted: specimen clotted.
     */
    readonly SpecimenClotted: Coding;
    /**
     * hemolized: blood specimen hemolized.
     */
    readonly HemolizedSpecimen: Coding;
    /**
     * insufficient: insufficient quantity of specimen.
     */
    readonly InsufficientSpecimenVolume: Coding;
    /**
     * wrong-temperature: specimen temperature inappropriate.
     */
    readonly SpecimenTemperatureInappropriate: Coding;
};
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export declare type RejectionCriteriaValueSetType = typeof RejectionCriteriaValueSet;
/**
 * Criterion for rejection of the specimen by laboratory.
 */
//# sourceMappingURL=RejectionCriteriaValueSet.d.ts.map
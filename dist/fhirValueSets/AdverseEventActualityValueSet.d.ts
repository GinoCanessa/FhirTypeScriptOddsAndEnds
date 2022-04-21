import { Coding } from '../fhir.js';
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare const AdverseEventActualityValueSet: {
    /**
     * actual: The adverse event actually happened regardless of whether anyone was affected or harmed.
     */
    readonly AdverseEvent: Coding;
    /**
     * potential: A potential adverse event.
     */
    readonly PotentialAdverseEvent: Coding;
};
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare type AdverseEventActualityValueSetType = typeof AdverseEventActualityValueSet;
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export declare enum AdverseEventActualityValueSetEnum {
    /**
     * actual: The adverse event actually happened regardless of whether anyone was affected or harmed.
     */
    AdverseEvent = "actual",
    /**
     * potential: A potential adverse event.
     */
    PotentialAdverseEvent = "potential"
}
//# sourceMappingURL=AdverseEventActualityValueSet.d.ts.map
import { Coding } from '../fhir.js';
/**
 * The scoring type of the measure.
 */
export declare const MeasureScoringValueSet: {
    /**
     * cohort: The measure is a cohort definition.
     */
    readonly Cohort: Coding;
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    readonly ContinuousVariable: Coding;
    /**
     * proportion: The measure score is defined using a proportion.
     */
    readonly Proportion: Coding;
    /**
     * ratio: The measure score is defined using a ratio.
     */
    readonly Ratio: Coding;
};
/**
 * The scoring type of the measure.
 */
export declare type MeasureScoringValueSetType = typeof MeasureScoringValueSet;
/**
 * The scoring type of the measure.
 */
export declare enum MeasureScoringValueSetEnum {
    /**
     * cohort: The measure is a cohort definition.
     */
    Cohort = "cohort",
    /**
     * continuous-variable: The score is defined by a calculation of some quantity.
     */
    ContinuousVariable = "continuous-variable",
    /**
     * proportion: The measure score is defined using a proportion.
     */
    Proportion = "proportion",
    /**
     * ratio: The measure score is defined using a ratio.
     */
    Ratio = "ratio"
}
//# sourceMappingURL=MeasureScoringValueSet.d.ts.map
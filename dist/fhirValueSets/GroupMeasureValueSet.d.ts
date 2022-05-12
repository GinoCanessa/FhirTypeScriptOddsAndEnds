import { Coding } from '../fhir.js';
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export declare const GroupMeasureValueSet: {
    /**
     * mean: Aggregated using Mean of participant values.
     */
    readonly Mean: Coding;
    /**
     * mean-of-mean: Aggregated using Mean of study mean values.
     */
    readonly MeanOfStudyMeans: Coding;
    /**
     * mean-of-median: Aggregated using Mean of study median values.
     */
    readonly MeanOfStudyMedins: Coding;
    /**
     * median: Aggregated using Median of participant values.
     */
    readonly Median: Coding;
    /**
     * median-of-mean: Aggregated using Median of study mean values.
     */
    readonly MedianOfStudyMeans: Coding;
    /**
     * median-of-median: Aggregated using Median of study median values.
     */
    readonly MedianOfStudyMedians: Coding;
};
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export declare type GroupMeasureValueSetType = typeof GroupMeasureValueSet;
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
//# sourceMappingURL=GroupMeasureValueSet.d.ts.map
import { Coding } from '../fhir.js';
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare const CertaintySubcomponentRatingValueSet: {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    readonly Absent: Coding;
    /**
     * critical-concern: critical concern.
     */
    readonly CriticalConcern: Coding;
    /**
     * downcode1: reduce quality rating by 1.
     */
    readonly ReduceRating1: Coding;
    /**
     * downcode2: reduce quality rating by 2.
     */
    readonly ReduceRating2: Coding;
    /**
     * downcode3: reduce quality rating by 3.
     */
    readonly ReduceRating3: Coding;
    /**
     * no-change: no change to quality rating.
     */
    readonly NoChangeToRating: Coding;
    /**
     * no-concern: no serious concern.
     */
    readonly NoSeriousConcern: Coding;
    /**
     * present: possible reason for increasing quality rating was checked and found to bepresent.
     */
    readonly Present: Coding;
    /**
     * serious-concern: serious concern.
     */
    readonly SeriousConcern: Coding;
    /**
     * upcode1: increase quality rating by 1.
     */
    readonly IncreaseRatingPlus1: Coding;
    /**
     * upcode2: increase quality rating by 2.
     */
    readonly IncreaseRatingPlus2: Coding;
};
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare type CertaintySubcomponentRatingValueSetType = typeof CertaintySubcomponentRatingValueSet;
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare enum CertaintySubcomponentRatingValueSetEnum {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    Absent = "absent",
    /**
     * critical-concern: critical concern.
     */
    CriticalConcern = "critical-concern",
    /**
     * downcode1: reduce quality rating by 1.
     */
    ReduceRating1 = "downcode1",
    /**
     * downcode2: reduce quality rating by 2.
     */
    ReduceRating2 = "downcode2",
    /**
     * downcode3: reduce quality rating by 3.
     */
    ReduceRating3 = "downcode3",
    /**
     * no-change: no change to quality rating.
     */
    NoChangeToRating = "no-change",
    /**
     * no-concern: no serious concern.
     */
    NoSeriousConcern = "no-concern",
    /**
     * present: possible reason for increasing quality rating was checked and found to bepresent.
     */
    Present = "present",
    /**
     * serious-concern: serious concern.
     */
    SeriousConcern = "serious-concern",
    /**
     * upcode1: increase quality rating by 1.
     */
    IncreaseRatingPlus1 = "upcode1",
    /**
     * upcode2: increase quality rating by 2.
     */
    IncreaseRatingPlus2 = "upcode2"
}
//# sourceMappingURL=CertaintySubcomponentRatingValueSet.d.ts.map
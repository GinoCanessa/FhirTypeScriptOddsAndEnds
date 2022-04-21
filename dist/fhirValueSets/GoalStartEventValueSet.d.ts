import { Coding } from '../fhir.js';
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare const GoalStartEventValueSet: {
    /**
     * Code: 308283009
     */
    readonly DischargeFromHospital: Coding;
    /**
     * Code: 32485007
     */
    readonly AdmissionToHospital: Coding;
    /**
     * Code: 386216000
     */
    readonly Childbirth: Coding;
    /**
     * Code: 442137000
     */
    readonly CompletionTimeOfProcedure: Coding;
};
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare type GoalStartEventValueSetType = typeof GoalStartEventValueSet;
/**
 * Identifies types of events that might trigger the start of a goal.
 */
export declare enum GoalStartEventValueSetEnum {
    /**
     * Code: 308283009
     */
    DischargeFromHospital = "308283009",
    /**
     * Code: 32485007
     */
    AdmissionToHospital = "32485007",
    /**
     * Code: 386216000
     */
    Childbirth = "386216000",
    /**
     * Code: 442137000
     */
    CompletionTimeOfProcedure = "442137000"
}
//# sourceMappingURL=GoalStartEventValueSet.d.ts.map
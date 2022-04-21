import { Coding } from '../fhir.js';
/**
 * A code specifying the state of the resource instance.
 */
export declare const ExplanationofbenefitStatusValueSet: {
    /**
     * active: The resource instance is currently in-force.
     */
    readonly Active: Coding;
    /**
     * cancelled: The resource instance is withdrawn, rescinded or reversed.
     */
    readonly Cancelled: Coding;
    /**
     * draft: A new resource instance the contents of which is not complete.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: The resource instance was entered in error.
     */
    readonly EnteredInError: Coding;
};
/**
 * A code specifying the state of the resource instance.
 */
export declare type ExplanationofbenefitStatusValueSetType = typeof ExplanationofbenefitStatusValueSet;
/**
 * A code specifying the state of the resource instance.
 */
export declare enum ExplanationofbenefitStatusValueSetEnum {
    /**
     * active: The resource instance is currently in-force.
     */
    Active = "active",
    /**
     * cancelled: The resource instance is withdrawn, rescinded or reversed.
     */
    Cancelled = "cancelled",
    /**
     * draft: A new resource instance the contents of which is not complete.
     */
    Draft = "draft",
    /**
     * entered-in-error: The resource instance was entered in error.
     */
    EnteredInError = "entered-in-error"
}
//# sourceMappingURL=ExplanationofbenefitStatusValueSet.d.ts.map
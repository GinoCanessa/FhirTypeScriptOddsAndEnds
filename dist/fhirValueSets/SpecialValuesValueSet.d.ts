import { Coding } from '../fhir.js';
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare const SpecialValuesValueSet: {
    /**
     * false: Boolean false.
     */
    readonly False: Coding;
    /**
     * nil-known: The are no known applicable values in this context.
     */
    readonly NilKnown: Coding;
    /**
     * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
     */
    readonly SufficientQuantity: Coding;
    /**
     * trace: The content is greater than zero, but too small to be quantified.
     */
    readonly TraceAmountDetected: Coding;
    /**
     * true: Boolean true.
     */
    readonly True: Coding;
    /**
     * withdrawn: The value is no longer available.
     */
    readonly ValueWithdrawn: Coding;
};
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare type SpecialValuesValueSetType = typeof SpecialValuesValueSet;
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare enum SpecialValuesValueSetEnum {
    /**
     * false: Boolean false.
     */
    False = "false",
    /**
     * nil-known: The are no known applicable values in this context.
     */
    NilKnown = "nil-known",
    /**
     * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
     */
    SufficientQuantity = "sufficient",
    /**
     * trace: The content is greater than zero, but too small to be quantified.
     */
    TraceAmountDetected = "trace",
    /**
     * true: Boolean true.
     */
    True = "true",
    /**
     * withdrawn: The value is no longer available.
     */
    ValueWithdrawn = "withdrawn"
}
//# sourceMappingURL=SpecialValuesValueSet.d.ts.map
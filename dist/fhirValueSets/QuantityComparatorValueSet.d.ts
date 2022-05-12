import { Coding } from '../fhir.js';
/**
 * How the Quantity should be understood and represented.
 */
export declare const QuantityComparatorValueSet: {
    /**
     * &lt;: The actual value is less than the given value.
     */
    readonly LessThan: Coding;
    /**
     * &lt;=: The actual value is less than or equal to the given value.
     */
    readonly LessOrEqualTo: Coding;
    /**
     * &gt;: The actual value is greater than the given value.
     */
    readonly GreaterThan: Coding;
    /**
     * &gt;=: The actual value is greater than or equal to the given value.
     */
    readonly GreaterOrEqualTo: Coding;
};
/**
 * How the Quantity should be understood and represented.
 */
export declare type QuantityComparatorValueSetType = typeof QuantityComparatorValueSet;
/**
 * How the Quantity should be understood and represented.
 */
//# sourceMappingURL=QuantityComparatorValueSet.d.ts.map
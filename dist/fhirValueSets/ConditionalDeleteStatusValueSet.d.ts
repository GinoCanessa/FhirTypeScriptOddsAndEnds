import { Coding } from '../fhir.js';
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare const ConditionalDeleteStatusValueSet: {
    /**
     * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    readonly MultipleDeletesSupported: Coding;
    /**
     * not-supported: No support for conditional deletes.
     */
    readonly NotSupported: Coding;
    /**
     * single: Conditional deletes are supported, but only single resources at a time.
     */
    readonly SingleDeletesSupported: Coding;
};
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare type ConditionalDeleteStatusValueSetType = typeof ConditionalDeleteStatusValueSet;
/**
 * A code that indicates how the server supports conditional delete.
 */
//# sourceMappingURL=ConditionalDeleteStatusValueSet.d.ts.map
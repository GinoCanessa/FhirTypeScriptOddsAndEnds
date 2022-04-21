import { Coding } from '../fhir.js';
/**
 * This value set includes Status codes.
 */
export declare const FmStatusValueSet: {
    /**
     * active: The instance is currently in-force.
     */
    readonly Active: Coding;
    /**
     * cancelled: The instance is withdrawn, rescinded or reversed.
     */
    readonly Cancelled: Coding;
    /**
     * draft: A new instance the contents of which is not complete.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: The instance was entered in error.
     */
    readonly EnteredInError: Coding;
};
/**
 * This value set includes Status codes.
 */
export declare type FmStatusValueSetType = typeof FmStatusValueSet;
/**
 * This value set includes Status codes.
 */
export declare enum FmStatusValueSetEnum {
    /**
     * active: The instance is currently in-force.
     */
    Active = "active",
    /**
     * cancelled: The instance is withdrawn, rescinded or reversed.
     */
    Cancelled = "cancelled",
    /**
     * draft: A new instance the contents of which is not complete.
     */
    Draft = "draft",
    /**
     * entered-in-error: The instance was entered in error.
     */
    EnteredInError = "entered-in-error"
}
//# sourceMappingURL=FmStatusValueSet.d.ts.map
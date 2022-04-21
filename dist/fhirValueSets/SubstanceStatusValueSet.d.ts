import { Coding } from '../fhir.js';
/**
 * A code to indicate if the substance is actively used.
 */
export declare const SubstanceStatusValueSet: {
    /**
     * active: The substance is considered for use or reference.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The substance was entered in error.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The substance is considered for reference, but not for use.
     */
    readonly Inactive: Coding;
};
/**
 * A code to indicate if the substance is actively used.
 */
export declare type SubstanceStatusValueSetType = typeof SubstanceStatusValueSet;
/**
 * A code to indicate if the substance is actively used.
 */
export declare enum SubstanceStatusValueSetEnum {
    /**
     * active: The substance is considered for use or reference.
     */
    Active = "active",
    /**
     * entered-in-error: The substance was entered in error.
     */
    EnteredInError = "entered-in-error",
    /**
     * inactive: The substance is considered for reference, but not for use.
     */
    Inactive = "inactive"
}
//# sourceMappingURL=SubstanceStatusValueSet.d.ts.map
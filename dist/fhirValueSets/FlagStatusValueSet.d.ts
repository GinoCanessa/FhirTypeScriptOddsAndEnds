import { Coding } from '../fhir.js';
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export declare const FlagStatusValueSet: {
    /**
     * active: A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: The flag was added in error and should no longer be displayed.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: The flag no longer needs to be displayed.
     */
    readonly Inactive: Coding;
};
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export declare type FlagStatusValueSetType = typeof FlagStatusValueSet;
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
//# sourceMappingURL=FlagStatusValueSet.d.ts.map
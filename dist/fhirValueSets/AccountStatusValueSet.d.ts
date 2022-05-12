import { Coding } from '../fhir.js';
/**
 * Indicates whether the account is available to be used.
 */
export declare const AccountStatusValueSet: {
    /**
     * active: This account is active and may be used.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: Coding;
    /**
     * inactive: This account is inactive and should not be used to track financial information.
     */
    readonly Inactive: Coding;
    /**
     * on-hold: This account is on hold.
     */
    readonly OnHold: Coding;
    /**
     * unknown: The account status is unknown.
     */
    readonly Unknown: Coding;
};
/**
 * Indicates whether the account is available to be used.
 */
export declare type AccountStatusValueSetType = typeof AccountStatusValueSet;
/**
 * Indicates whether the account is available to be used.
 */
//# sourceMappingURL=AccountStatusValueSet.d.ts.map
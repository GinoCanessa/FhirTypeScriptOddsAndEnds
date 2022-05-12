import { Coding } from '../fhir.js';
/**
 * The current state of the list.
 */
export declare const ListStatusValueSet: {
    /**
     * current: The list is considered to be an active part of the patient's record.
     */
    readonly Current: Coding;
    /**
     * entered-in-error: The list was never accurate.  It is retained for medico-legal purposes only.
     */
    readonly EnteredInError: Coding;
    /**
     * retired: The list is "old" and should no longer be considered accurate or relevant.
     */
    readonly Retired: Coding;
};
/**
 * The current state of the list.
 */
export declare type ListStatusValueSetType = typeof ListStatusValueSet;
/**
 * The current state of the list.
 */
//# sourceMappingURL=ListStatusValueSet.d.ts.map
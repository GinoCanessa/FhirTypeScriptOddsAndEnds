import { Coding } from '../fhir.js';
/**
 * This value set includes Claim Processing Outcome codes.
 */
export declare const RemittanceOutcomeValueSet: {
    /**
     * complete: The processing has completed without errors
     */
    readonly ProcessingComplete: Coding;
    /**
     * error: One or more errors have been detected in the Claim
     */
    readonly Error: Coding;
    /**
     * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    readonly PartialProcessing: Coding;
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    readonly Queued: Coding;
};
/**
 * This value set includes Claim Processing Outcome codes.
 */
export declare type RemittanceOutcomeValueSetType = typeof RemittanceOutcomeValueSet;
/**
 * This value set includes Claim Processing Outcome codes.
 */
//# sourceMappingURL=RemittanceOutcomeValueSet.d.ts.map
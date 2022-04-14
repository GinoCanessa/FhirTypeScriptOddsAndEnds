import { Coding } from '../strictmodels';
/**
 * This value set includes Claim Processing Outcome codes.
 */
export declare const RemittanceOutcome: {
    /**
     * The processing has completed without errors
     */
    remittance_outcome_ProcessingComplete: Coding;
    /**
     * One or more errors have been detected in the Claim
     */
    remittance_outcome_Error: Coding;
    /**
     * No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    remittance_outcome_PartialProcessing: Coding;
    /**
     * The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    remittance_outcome_Queued: Coding;
};
//# sourceMappingURL=RemittanceOutcome.d.ts.map
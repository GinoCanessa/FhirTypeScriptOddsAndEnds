/**
 * This value set includes Claim Processing Outcome codes.
 */
export declare enum RemittanceOutcomeValueSetEnum {
    /**
     * complete: The processing has completed without errors
     */
    ProcessingComplete = "complete",
    /**
     * error: One or more errors have been detected in the Claim
     */
    Error = "error",
    /**
     * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    PartialProcessing = "partial",
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    Queued = "queued"
}
//# sourceMappingURL=RemittanceOutcomeValueSetEnum.d.ts.map
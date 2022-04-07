/**
 * This value set includes Claim Processing Outcome codes.
 */
export var RemittanceOutcome = {
    /**
     * The processing has completed without errors
     */
    remittance_outcome_ProcessingComplete: {
        code: "complete",
        display: "Processing Complete",
        system: "http://hl7.org/fhir/remittance-outcome"
    },
    /**
     * One or more errors have been detected in the Claim
     */
    remittance_outcome_Error: {
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/remittance-outcome"
    },
    /**
     * No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    remittance_outcome_PartialProcessing: {
        code: "partial",
        display: "Partial Processing",
        system: "http://hl7.org/fhir/remittance-outcome"
    },
    /**
     * The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    remittance_outcome_Queued: {
        code: "queued",
        display: "Queued",
        system: "http://hl7.org/fhir/remittance-outcome"
    }
};

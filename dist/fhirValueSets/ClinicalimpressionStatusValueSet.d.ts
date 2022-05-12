import { Coding } from '../fhir.js';
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare const ClinicalimpressionStatusValueSet: {
    /**
     * completed: The event has now concluded.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: The event is currently occurring.
     */
    readonly InProgress: Coding;
};
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare type ClinicalimpressionStatusValueSetType = typeof ClinicalimpressionStatusValueSet;
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
//# sourceMappingURL=ClinicalimpressionStatusValueSet.d.ts.map
import { Coding } from '../fhir.js';
/**
 * Indicates whether the event succeeded or failed.
 */
export declare const AuditEventOutcomeValueSet: {
    /**
     * 0: The operation completed successfully (whether with warnings or not).
     */
    readonly Success: Coding;
    /**
     * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    readonly MajorFailure: Coding;
    /**
     * 4: The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    readonly MinorFailure: Coding;
    /**
     * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    readonly SeriousFailure: Coding;
};
/**
 * Indicates whether the event succeeded or failed.
 */
export declare type AuditEventOutcomeValueSetType = typeof AuditEventOutcomeValueSet;
/**
 * Indicates whether the event succeeded or failed.
 */
export declare enum AuditEventOutcomeValueSetEnum {
    /**
     * 0: The operation completed successfully (whether with warnings or not).
     */
    Success = "0",
    /**
     * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    MajorFailure = "12",
    /**
     * 4: The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    MinorFailure = "4",
    /**
     * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    SeriousFailure = "8"
}
//# sourceMappingURL=AuditEventOutcomeValueSet.d.ts.map
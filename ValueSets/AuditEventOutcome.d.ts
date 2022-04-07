import { Coding } from '../strictmodels';
/**
 * Indicates whether the event succeeded or failed.
 */
export declare const AuditEventOutcome: {
    /**
     * The operation completed successfully (whether with warnings or not).
     */
    audit_event_outcome_Success: Coding;
    /**
     * An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    audit_event_outcome_MajorFailure: Coding;
    /**
     * The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    audit_event_outcome_MinorFailure: Coding;
    /**
     * The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    audit_event_outcome_SeriousFailure: Coding;
};
//# sourceMappingURL=AuditEventOutcome.d.ts.map
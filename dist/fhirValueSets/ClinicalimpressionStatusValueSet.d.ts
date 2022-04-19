import { Coding } from '../fhir';
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare const ClinicalimpressionStatusValueSet: {
    /**
     * The event has now concluded.
     */
    event_status_Completed: Coding;
    /**
     * This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    event_status_EnteredInError: Coding;
    /**
     * The event is currently occurring.
     */
    event_status_InProgress: Coding;
};
//# sourceMappingURL=ClinicalimpressionStatusValueSet.d.ts.map
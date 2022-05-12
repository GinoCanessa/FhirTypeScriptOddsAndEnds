/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare enum ImmunizationStatusValueSetEnum {
    /**
     * completed: The event has now concluded.
     */
    Completed = "completed",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    EnteredInError = "entered-in-error",
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    NotDone = "not-done"
}
//# sourceMappingURL=ImmunizationStatusValueSetEnum.d.ts.map
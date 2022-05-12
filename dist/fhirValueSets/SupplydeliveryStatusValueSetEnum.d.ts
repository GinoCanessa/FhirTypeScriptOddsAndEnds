/**
 * Status of the supply delivery.
 */
export declare enum SupplydeliveryStatusValueSetEnum {
    /**
     * abandoned: Delivery was not completed.
     */
    Abandoned = "abandoned",
    /**
     * completed: Supply has been delivered ("completed").
     */
    Delivered = "completed",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    EnteredInError = "entered-in-error",
    /**
     * in-progress: Supply has been requested, but not delivered.
     */
    InProgress = "in-progress"
}
//# sourceMappingURL=SupplydeliveryStatusValueSetEnum.d.ts.map
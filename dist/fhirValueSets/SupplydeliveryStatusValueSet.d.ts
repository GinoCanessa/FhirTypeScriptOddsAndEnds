import { Coding } from '../fhir.js';
/**
 * Status of the supply delivery.
 */
export declare const SupplydeliveryStatusValueSet: {
    /**
     * abandoned: Delivery was not completed.
     */
    readonly Abandoned: Coding;
    /**
     * completed: Supply has been delivered ("completed").
     */
    readonly Delivered: Coding;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: Supply has been requested, but not delivered.
     */
    readonly InProgress: Coding;
};
/**
 * Status of the supply delivery.
 */
export declare type SupplydeliveryStatusValueSetType = typeof SupplydeliveryStatusValueSet;
/**
 * Status of the supply delivery.
 */
//# sourceMappingURL=SupplydeliveryStatusValueSet.d.ts.map
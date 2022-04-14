import { Coding } from '../strictmodels';
/**
 * Status of the supply delivery.
 */
export declare const SupplydeliveryStatus: {
    /**
     * Delivery was not completed.
     */
    supplydelivery_status_Abandoned: Coding;
    /**
     * Supply has been delivered ("completed").
     */
    supplydelivery_status_Delivered: Coding;
    /**
     * This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
     */
    supplydelivery_status_EnteredInError: Coding;
    /**
     * Supply has been requested, but not delivered.
     */
    supplydelivery_status_InProgress: Coding;
};
//# sourceMappingURL=SupplydeliveryStatus.d.ts.map
import { Coding } from '../fhir.js';
/**
 * This value set includes sample Payment Type codes.
 */
export declare const PaymentTypeValueSet: {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    readonly Adjustment: Coding;
    /**
     * advance: The amount is an advance against future claims.
     */
    readonly Advance: Coding;
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    readonly Payment: Coding;
};
/**
 * This value set includes sample Payment Type codes.
 */
export declare type PaymentTypeValueSetType = typeof PaymentTypeValueSet;
/**
 * This value set includes sample Payment Type codes.
 */
export declare enum PaymentTypeValueSetEnum {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    Adjustment = "adjustment",
    /**
     * advance: The amount is an advance against future claims.
     */
    Advance = "advance",
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    Payment = "payment"
}
//# sourceMappingURL=PaymentTypeValueSet.d.ts.map
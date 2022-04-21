import { Coding } from '../fhir.js';
/**
 * This value set includes a sample set of Payment Status codes.
 */
export declare const PaymentStatusValueSet: {
    /**
     * cleared: The payment has been received by the payee.
     */
    readonly Cleared: Coding;
    /**
     * paid: The payment has been sent physically or electronically.
     */
    readonly Paid: Coding;
};
/**
 * This value set includes a sample set of Payment Status codes.
 */
export declare type PaymentStatusValueSetType = typeof PaymentStatusValueSet;
/**
 * This value set includes a sample set of Payment Status codes.
 */
export declare enum PaymentStatusValueSetEnum {
    /**
     * cleared: The payment has been received by the payee.
     */
    Cleared = "cleared",
    /**
     * paid: The payment has been sent physically or electronically.
     */
    Paid = "paid"
}
//# sourceMappingURL=PaymentStatusValueSet.d.ts.map
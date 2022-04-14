"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustmentReason = void 0;
/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 */
exports.PaymentAdjustmentReason = {
    /**
     * Prior Payment Reversal
     */
    payment_adjustment_reason_PriorPaymentReversal: {
        code: "a001",
        display: "Prior Payment Reversal",
        system: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason"
    },
    /**
     * Prior Overpayment
     */
    payment_adjustment_reason_PriorOverpayment: {
        code: "a002",
        display: "Prior Overpayment",
        system: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason"
    },
};
//# sourceMappingURL=PaymentAdjustmentReason.js.map
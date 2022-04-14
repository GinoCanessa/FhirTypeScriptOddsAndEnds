"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = void 0;
/**
 * This value set includes a sample set of Payment Status codes.
 */
exports.PaymentStatus = {
    /**
     * The payment has been received by the payee.
     */
    payment_status_Cleared: {
        code: "cleared",
        display: "Cleared",
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus"
    },
    /**
     * The payment has been sent physically or electronically.
     */
    payment_status_Paid: {
        code: "paid",
        display: "Paid",
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus"
    },
};
//# sourceMappingURL=PaymentStatus.js.map
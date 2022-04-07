/**
 * This value set includes sample Payment Type codes.
 */
export var PaymentType = {
    /**
     * The amount is an adjustment regarding claims already paid.
     */
    payment_type_Adjustment: {
        code: "adjustment",
        display: "Adjustment",
        system: "http://terminology.hl7.org/CodeSystem/payment-type"
    },
    /**
     * The amount is an advance against future claims.
     */
    payment_type_Advance: {
        code: "advance",
        display: "Advance",
        system: "http://terminology.hl7.org/CodeSystem/payment-type"
    },
    /**
     * The amount is partial or complete settlement of the amounts due.
     */
    payment_type_Payment: {
        code: "payment",
        display: "Payment",
        system: "http://terminology.hl7.org/CodeSystem/payment-type"
    }
};

/**
 * This value set includes example Payment Type codes.
 */
export var ExPaymenttype = {
    /**
     * Complete (final) payment of the benefit under the Claim less any adjustments.
     */
    ex_paymenttype_Complete: {
        code: "complete",
        display: "Complete",
        system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype"
    },
    /**
     * Partial payment of the benefit under the Claim less any adjustments.
     */
    ex_paymenttype_Partial: {
        code: "partial",
        display: "Partial",
        system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype"
    }
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes sample Payment Type codes.
 */
export const PaymentTypeValueSet = {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    Adjustment: new Coding({
        display: "Adjustment",
        code: "adjustment",
        system: "http://terminology.hl7.org/CodeSystem/payment-type",
    }),
    /**
     * advance: The amount is an advance against future claims.
     */
    Advance: new Coding({
        display: "Advance",
        code: "advance",
        system: "http://terminology.hl7.org/CodeSystem/payment-type",
    }),
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    Payment: new Coding({
        display: "Payment",
        code: "payment",
        system: "http://terminology.hl7.org/CodeSystem/payment-type",
    }),
};
/**
 * This value set includes sample Payment Type codes.
 */
export var PaymentTypeValueSetEnum;
(function (PaymentTypeValueSetEnum) {
    /**
     * adjustment: The amount is an adjustment regarding claims already paid.
     */
    PaymentTypeValueSetEnum["Adjustment"] = "adjustment";
    /**
     * advance: The amount is an advance against future claims.
     */
    PaymentTypeValueSetEnum["Advance"] = "advance";
    /**
     * payment: The amount is partial or complete settlement of the amounts due.
     */
    PaymentTypeValueSetEnum["Payment"] = "payment";
})(PaymentTypeValueSetEnum || (PaymentTypeValueSetEnum = {}));
//# sourceMappingURL=PaymentTypeValueSet.js.map
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes a sample set of Payment Status codes.
 */
export const PaymentStatusValueSet = {
    /**
     * cleared: The payment has been received by the payee.
     */
    Cleared: new Coding({
        display: "Cleared",
        code: "cleared",
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus",
    }),
    /**
     * paid: The payment has been sent physically or electronically.
     */
    Paid: new Coding({
        display: "Paid",
        code: "paid",
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus",
    }),
};
/**
 * This value set includes a sample set of Payment Status codes.
 */
//# sourceMappingURL=PaymentStatusValueSet.js.map
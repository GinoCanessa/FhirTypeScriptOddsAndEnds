// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes a sample set of Payment Status codes.
 */
export const PaymentStatusValueSet = {
  /**
   * The payment has been received by the payee.
   */
  payment_status_Cleared: new Coding({
    code: "cleared",
    display: "Cleared",
    system: "http://terminology.hl7.org/CodeSystem/paymentstatus"
  }),
  /**
   * The payment has been sent physically or electronically.
   */
  payment_status_Paid: new Coding({
    code: "paid",
    display: "Paid",
    system: "http://terminology.hl7.org/CodeSystem/paymentstatus"
  }),
};

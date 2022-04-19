// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 */
export const PaymentAdjustmentReasonValueSet = {
  /**
   * Prior Payment Reversal
   */
  payment_adjustment_reason_PriorPaymentReversal: Coding.FromStrict({
    code: "a001",
    display: "Prior Payment Reversal",
    system: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason"
  }),
  /**
   * Prior Overpayment
   */
  payment_adjustment_reason_PriorOverpayment: Coding.FromStrict({
    code: "a002",
    display: "Prior Overpayment",
    system: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason"
  }),
};
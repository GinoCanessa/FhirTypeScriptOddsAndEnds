// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/invoice-status|4.0.1

/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export enum InvoiceStatusValueSetEnum {
  /**
   * balanced: the invoice has been balaced / completely paid.
   */
  Balanced = "balanced",
  /**
   * cancelled: the invoice was cancelled.
   */
  Cancelled = "cancelled",
  /**
   * draft: the invoice has been prepared but not yet finalized.
   */
  Draft = "draft",
  /**
   * entered-in-error: the invoice was determined as entered in error before it was issued.
   */
  EnteredInError = "entered-in-error",
  /**
   * issued: the invoice has been finalized and sent to the recipient.
   */
  Issued = "issued",
}

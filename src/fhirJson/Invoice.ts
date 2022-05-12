// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Invoice

import * as fhir from '../fhirJson.js';


/**
 * Indicates who or what performed or participated in the charged service.
 */
export interface InvoiceParticipant extends fhir.BackboneElement { 
  /**
   * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
   */
  role?: fhir.CodeableConcept|undefined;
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  actor: fhir.Reference|null;
}

/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export interface InvoiceLineItemPriceComponent extends fhir.BackboneElement { 
  /**
   * This code identifies the type of the component.
   */
  type: 'base'|'deduction'|'discount'|'informational'|'surcharge'|'tax'|null;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: fhir.CodeableConcept|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  factor?: number|undefined;
  /**
   * Extended properties for primitive element: Invoice.lineItem.priceComponent.factor
   */
  _factor?:fhir.FhirElement;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  amount?: fhir.Money|undefined;
}

/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export interface InvoiceLineItem extends fhir.BackboneElement { 
  /**
   * Sequence in which the items appear on the invoice.
   */
  sequence?: number|undefined;
  /**
   * Extended properties for primitive element: Invoice.lineItem.sequence
   */
  _sequence?:fhir.FhirElement;
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  chargeItemReference?: fhir.Reference|undefined;
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  chargeItemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
   */
  priceComponent?: fhir.InvoiceLineItemPriceComponent[]|undefined;
}

/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export interface Invoice extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Invoice";
  /**
   * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   */
  identifier?: fhir.Identifier[]|undefined;
  /**
   * The current state of the Invoice.
   */
  status: 'balanced'|'cancelled'|'draft'|'entered-in-error'|'issued'|null;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  cancelledReason?: string|undefined;
  /**
   * Extended properties for primitive element: Invoice.cancelledReason
   */
  _cancelledReason?:fhir.FhirElement;
  /**
   * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   */
  type?: fhir.CodeableConcept|undefined;
  /**
   * The individual or set of individuals receiving the goods and services billed in this invoice.
   */
  subject?: fhir.Reference|undefined;
  /**
   * The individual or Organization responsible for balancing of this invoice.
   */
  recipient?: fhir.Reference|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: Invoice.date
   */
  _date?:fhir.FhirElement;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  participant?: fhir.InvoiceParticipant[]|undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  issuer?: fhir.Reference|undefined;
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  account?: fhir.Reference|undefined;
  /**
   * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
   */
  lineItem?: fhir.InvoiceLineItem[]|undefined;
  /**
   * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
   */
  totalPriceComponent?: fhir.InvoiceLineItemPriceComponent[]|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  totalNet?: fhir.Money|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  totalGross?: fhir.Money|undefined;
  /**
   * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  paymentTerms?: string|undefined;
  /**
   * Extended properties for primitive element: Invoice.paymentTerms
   */
  _paymentTerms?:fhir.FhirElement;
  /**
   * Comments made about the invoice by the issuer, subject, or other participants.
   */
  note?: fhir.Annotation[]|undefined;
}

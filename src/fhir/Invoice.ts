// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Indicates who or what performed or participated in the charged service.
 */
export type IInvoiceParticipant = fhir.IBackboneElement & {
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  actor: fhir.IReference|null;
  /**
   * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
   */
  role?: fhir.ICodeableConcept|undefined;
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export type IInvoiceLineItemPriceComponent = fhir.IBackboneElement & {
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  amount?: fhir.IMoney|undefined;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  factor?: number|undefined;
  _factor?: fhir.IFhirElement|undefined;
  /**
   * This code identifies the type of the component.
   */
  type: InvoiceLineItemPriceComponentTypeEnum|null;
  _type?: fhir.IFhirElement|undefined;
}
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export type IInvoiceLineItem = fhir.IBackboneElement & {
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  chargeItemReference?: fhir.IReference|undefined;
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  chargeItemCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
   */
  priceComponent?: fhir.IInvoiceLineItemPriceComponent[]|undefined;
  /**
   * Sequence in which the items appear on the invoice.
   */
  sequence?: number|undefined;
  _sequence?: fhir.IFhirElement|undefined;
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export type IInvoice = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "Invoice";
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  account?: fhir.IReference|undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  cancelledReason?: string|undefined;
  _cancelledReason?: fhir.IFhirElement|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  date?: string|undefined;
  _date?: fhir.IFhirElement|undefined;
  /**
   * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  issuer?: fhir.IReference|undefined;
  /**
   * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
   */
  lineItem?: fhir.IInvoiceLineItem[]|undefined;
  /**
   * Comments made about the invoice by the issuer, subject, or other participants.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  participant?: fhir.IInvoiceParticipant[]|undefined;
  /**
   * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  paymentTerms?: string|undefined;
  _paymentTerms?: fhir.IFhirElement|undefined;
  /**
   * The individual or Organization responsible for balancing of this invoice.
   */
  recipient?: fhir.IReference|undefined;
  /**
   * The current state of the Invoice.
   */
  status: InvoiceStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * The individual or set of individuals receiving the goods and services billed in this invoice.
   */
  subject?: fhir.IReference|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  totalGross?: fhir.IMoney|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  totalNet?: fhir.IMoney|undefined;
  /**
   * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
   */
  totalPriceComponent?: fhir.IInvoiceLineItemPriceComponent[]|undefined;
  /**
   * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   */
  type?: fhir.ICodeableConcept|undefined;
}
/**
 * Indicates who or what performed or participated in the charged service.
 */
export class InvoiceParticipant extends fhir.BackboneElement implements fhir.IInvoiceParticipant {
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  public actor: fhir.Reference|null;
  /**
   * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for InvoiceParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IInvoiceParticipant> = {}) {
    super(source);
    this.actor = null;
    if (source["actor"]) { this.actor = new fhir.Reference(source.actor!); }
    if (this.actor === undefined) { this.actor = null }
    if (source["role"]) { this.role = new fhir.CodeableConcept(source.role!); }
  }
  /**
   * Check if the current InvoiceParticipant contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["actor"] === undefined) { missingElements.push("actor"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a InvoiceParticipant from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IInvoiceParticipant):InvoiceParticipant {
    var dest:InvoiceParticipant = new InvoiceParticipant(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `InvoiceParticipant is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export class InvoiceLineItemPriceComponent extends fhir.BackboneElement implements fhir.IInvoiceLineItemPriceComponent {
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public amount?: fhir.Money|undefined;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public factor?: number|undefined;
  public _factor?: fhir.FhirElement|undefined;
  /**
   * This code identifies the type of the component.
   */
  public type: InvoiceLineItemPriceComponentTypeEnum|null;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for InvoiceLineItemPriceComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IInvoiceLineItemPriceComponent> = {}) {
    super(source);
    if (source["amount"]) { this.amount = new fhir.Money(source.amount!); }
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["factor"]) { this.factor = source.factor; }
    if (source["_factor"]) { this._factor = new fhir.FhirElement(source._factor!); }
    this.type = null;
    if (source["type"]) { this.type = source.type; }
    if (this.type === undefined) { this.type = null }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Check if the current InvoiceLineItemPriceComponent contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a InvoiceLineItemPriceComponent from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IInvoiceLineItemPriceComponent):InvoiceLineItemPriceComponent {
    var dest:InvoiceLineItemPriceComponent = new InvoiceLineItemPriceComponent(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `InvoiceLineItemPriceComponent is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export class InvoiceLineItem extends fhir.BackboneElement implements fhir.IInvoiceLineItem {
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  public chargeItemReference?: fhir.Reference|undefined;
  /**
   * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
   */
  public chargeItemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
   */
  public priceComponent?: fhir.InvoiceLineItemPriceComponent[]|undefined;
  /**
   * Sequence in which the items appear on the invoice.
   */
  public sequence?: number|undefined;
  public _sequence?: fhir.FhirElement|undefined;
  /**
   * Default constructor for InvoiceLineItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IInvoiceLineItem> = {}) {
    super(source);
    if (source["chargeItemReference"]) { this.chargeItemReference = new fhir.Reference(source.chargeItemReference!); }
    if (source["chargeItemCodeableConcept"]) { this.chargeItemCodeableConcept = new fhir.CodeableConcept(source.chargeItemCodeableConcept!); }
    if (source["priceComponent"]) { this.priceComponent = source.priceComponent.map((x:Partial<fhir.IInvoiceLineItemPriceComponent>) => new fhir.InvoiceLineItemPriceComponent(x)); }
    if (source["sequence"]) { this.sequence = source.sequence; }
    if (source["_sequence"]) { this._sequence = new fhir.FhirElement(source._sequence!); }
  }
  /**
   * Check if the current InvoiceLineItem contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a InvoiceLineItem from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IInvoiceLineItem):InvoiceLineItem {
    var dest:InvoiceLineItem = new InvoiceLineItem(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `InvoiceLineItem is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export class Invoice extends fhir.DomainResource implements fhir.IInvoice {
  /**
   * Resource Type Name
   */
  public override resourceType: "Invoice";
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  public account?: fhir.Reference|undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  public cancelledReason?: string|undefined;
  public _cancelledReason?: fhir.FhirElement|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  public date?: string|undefined;
  public _date?: fhir.FhirElement|undefined;
  /**
   * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  public issuer?: fhir.Reference|undefined;
  /**
   * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
   */
  public lineItem?: fhir.InvoiceLineItem[]|undefined;
  /**
   * Comments made about the invoice by the issuer, subject, or other participants.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  public participant?: fhir.InvoiceParticipant[]|undefined;
  /**
   * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  public paymentTerms?: string|undefined;
  public _paymentTerms?: fhir.FhirElement|undefined;
  /**
   * The individual or Organization responsible for balancing of this invoice.
   */
  public recipient?: fhir.Reference|undefined;
  /**
   * The current state of the Invoice.
   */
  public status: InvoiceStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * The individual or set of individuals receiving the goods and services billed in this invoice.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public totalGross?: fhir.Money|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public totalNet?: fhir.Money|undefined;
  /**
   * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
   */
  public totalPriceComponent?: fhir.InvoiceLineItemPriceComponent[]|undefined;
  /**
   * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for Invoice - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IInvoice> = {}) {
    super(source);
    this.resourceType = 'Invoice';
    if (source["account"]) { this.account = new fhir.Reference(source.account!); }
    if (source["cancelledReason"]) { this.cancelledReason = source.cancelledReason; }
    if (source["_cancelledReason"]) { this._cancelledReason = new fhir.FhirElement(source._cancelledReason!); }
    if (source["date"]) { this.date = source.date; }
    if (source["_date"]) { this._date = new fhir.FhirElement(source._date!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["issuer"]) { this.issuer = new fhir.Reference(source.issuer!); }
    if (source["lineItem"]) { this.lineItem = source.lineItem.map((x:Partial<fhir.IInvoiceLineItem>) => new fhir.InvoiceLineItem(x)); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["participant"]) { this.participant = source.participant.map((x:Partial<fhir.IInvoiceParticipant>) => new fhir.InvoiceParticipant(x)); }
    if (source["paymentTerms"]) { this.paymentTerms = source.paymentTerms; }
    if (source["_paymentTerms"]) { this._paymentTerms = new fhir.FhirElement(source._paymentTerms!); }
    if (source["recipient"]) { this.recipient = new fhir.Reference(source.recipient!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (source["totalGross"]) { this.totalGross = new fhir.Money(source.totalGross!); }
    if (source["totalNet"]) { this.totalNet = new fhir.Money(source.totalNet!); }
    if (source["totalPriceComponent"]) { this.totalPriceComponent = source.totalPriceComponent.map((x:Partial<fhir.IInvoiceLineItemPriceComponent>) => new fhir.InvoiceLineItemPriceComponent(x)); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
  }
  /**
   * Check if the current Invoice contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Invoice from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IInvoice):Invoice {
    var dest:Invoice = new Invoice(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Invoice is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the Invoice.lineItem.priceComponent.type field
 */
export enum InvoiceLineItemPriceComponentTypeEnum {
  BASE = "base",
  SURCHARGE = "surcharge",
  DEDUCTION = "deduction",
  DISCOUNT = "discount",
  TAX = "tax",
  INFORMATIONAL = "informational",
}
/**
 * Code Values for the Invoice.status field
 */
export enum InvoiceStatusEnum {
  DRAFT = "draft",
  ISSUED = "issued",
  BALANCED = "balanced",
  CANCELLED = "cancelled",
  ENTERED_IN_ERROR = "entered-in-error",
}

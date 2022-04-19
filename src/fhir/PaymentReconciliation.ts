// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export type IPaymentReconciliationDetail = fhir.IBackboneElement & {
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  amount?: fhir.IMoney|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  date?: string|undefined;
  _date?: fhir.IFhirElement|undefined;
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * The party which is receiving the payment.
   */
  payee?: fhir.IReference|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: fhir.IIdentifier|undefined;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: fhir.IReference|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: fhir.IReference|undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: fhir.IReference|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  submitter?: fhir.IReference|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  type: fhir.ICodeableConcept|null;
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export type IPaymentReconciliationProcessNote = fhir.IBackboneElement & {
  /**
   * The explanation or description associated with the processing.
   */
  text?: string|undefined;
  _text?: fhir.IFhirElement|undefined;
  /**
   * The business purpose of the note text.
   */
  type?: PaymentReconciliationProcessNoteTypeEnum|undefined;
  _type?: fhir.IFhirElement|undefined;
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export type IPaymentReconciliation = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "PaymentReconciliation";
  /**
   * The date when the resource was created.
   */
  created: string|null;
  _created?: fhir.IFhirElement|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: fhir.IPaymentReconciliationDetail[]|undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  disposition?: string|undefined;
  _disposition?: fhir.IFhirElement|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  formCode?: fhir.ICodeableConcept|undefined;
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome?: PaymentReconciliationOutcomeEnum|undefined;
  _outcome?: fhir.IFhirElement|undefined;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: fhir.IMoney|null;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  paymentDate: string|null;
  _paymentDate?: fhir.IFhirElement|undefined;
  /**
   * For example: EFT number or check number.
   */
  paymentIdentifier?: fhir.IIdentifier|undefined;
  /**
   * This party is also responsible for the reconciliation.
   */
  paymentIssuer?: fhir.IReference|undefined;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  processNote?: fhir.IPaymentReconciliationProcessNote[]|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhir.IReference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: PaymentReconciliationStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
}
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export class PaymentReconciliationDetail extends fhir.BackboneElement implements fhir.IPaymentReconciliationDetail {
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  public amount?: fhir.Money|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  public date?: string|undefined;
  public _date?: fhir.FhirElement|undefined;
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * The party which is receiving the payment.
   */
  public payee?: fhir.Reference|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  public predecessor?: fhir.Identifier|undefined;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  public request?: fhir.Reference|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  public response?: fhir.Reference|undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  public submitter?: fhir.Reference|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Default constructor for PaymentReconciliationDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IPaymentReconciliationDetail> = {}) {
    super(source);
    if (source["amount"]) { this.amount = new fhir.Money(source.amount!); }
    if (source["date"]) { this.date = source.date; }
    if (source["_date"]) { this._date = new fhir.FhirElement(source._date!); }
    if (source["identifier"]) { this.identifier = new fhir.Identifier(source.identifier!); }
    if (source["payee"]) { this.payee = new fhir.Reference(source.payee!); }
    if (source["predecessor"]) { this.predecessor = new fhir.Identifier(source.predecessor!); }
    if (source["request"]) { this.request = new fhir.Reference(source.request!); }
    if (source["response"]) { this.response = new fhir.Reference(source.response!); }
    if (source["responsible"]) { this.responsible = new fhir.Reference(source.responsible!); }
    if (source["submitter"]) { this.submitter = new fhir.Reference(source.submitter!); }
    this.type = null;
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (this.type === undefined) { this.type = null }
  }
  /**
   * Check if the current PaymentReconciliationDetail contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a PaymentReconciliationDetail from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IPaymentReconciliationDetail):PaymentReconciliationDetail {
    var dest:PaymentReconciliationDetail = new PaymentReconciliationDetail(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `PaymentReconciliationDetail is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export class PaymentReconciliationProcessNote extends fhir.BackboneElement implements fhir.IPaymentReconciliationProcessNote {
  /**
   * The explanation or description associated with the processing.
   */
  public text?: string|undefined;
  public _text?: fhir.FhirElement|undefined;
  /**
   * The business purpose of the note text.
   */
  public type?: PaymentReconciliationProcessNoteTypeEnum|undefined;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IPaymentReconciliationProcessNote> = {}) {
    super(source);
    if (source["text"]) { this.text = source.text; }
    if (source["_text"]) { this._text = new fhir.FhirElement(source._text!); }
    if (source["type"]) { this.type = source.type; }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Check if the current PaymentReconciliationProcessNote contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a PaymentReconciliationProcessNote from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IPaymentReconciliationProcessNote):PaymentReconciliationProcessNote {
    var dest:PaymentReconciliationProcessNote = new PaymentReconciliationProcessNote(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `PaymentReconciliationProcessNote is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export class PaymentReconciliation extends fhir.DomainResource implements fhir.IPaymentReconciliation {
  /**
   * Resource Type Name
   */
  public override resourceType: "PaymentReconciliation";
  /**
   * The date when the resource was created.
   */
  public created: string|null;
  public _created?: fhir.FhirElement|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  public detail?: fhir.PaymentReconciliationDetail[]|undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  public disposition?: string|undefined;
  public _disposition?: fhir.FhirElement|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  public formCode?: fhir.CodeableConcept|undefined;
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  public outcome?: PaymentReconciliationOutcomeEnum|undefined;
  public _outcome?: fhir.FhirElement|undefined;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  public paymentAmount: fhir.Money|null;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  public paymentDate: string|null;
  public _paymentDate?: fhir.FhirElement|undefined;
  /**
   * For example: EFT number or check number.
   */
  public paymentIdentifier?: fhir.Identifier|undefined;
  /**
   * This party is also responsible for the reconciliation.
   */
  public paymentIssuer?: fhir.Reference|undefined;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  public period?: fhir.Period|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  public processNote?: fhir.PaymentReconciliationProcessNote[]|undefined;
  /**
   * Original request resource reference.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public requestor?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: PaymentReconciliationStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Default constructor for PaymentReconciliation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IPaymentReconciliation> = {}) {
    super(source);
    this.resourceType = 'PaymentReconciliation';
    this.created = null;
    if (source["created"]) { this.created = source.created; }
    if (this.created === undefined) { this.created = null }
    if (source["_created"]) { this._created = new fhir.FhirElement(source._created!); }
    if (source["detail"]) { this.detail = source.detail.map((x:Partial<fhir.IPaymentReconciliationDetail>) => new fhir.PaymentReconciliationDetail(x)); }
    if (source["disposition"]) { this.disposition = source.disposition; }
    if (source["_disposition"]) { this._disposition = new fhir.FhirElement(source._disposition!); }
    if (source["formCode"]) { this.formCode = new fhir.CodeableConcept(source.formCode!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["outcome"]) { this.outcome = source.outcome; }
    if (source["_outcome"]) { this._outcome = new fhir.FhirElement(source._outcome!); }
    this.paymentAmount = null;
    if (source["paymentAmount"]) { this.paymentAmount = new fhir.Money(source.paymentAmount!); }
    if (this.paymentAmount === undefined) { this.paymentAmount = null }
    this.paymentDate = null;
    if (source["paymentDate"]) { this.paymentDate = source.paymentDate; }
    if (this.paymentDate === undefined) { this.paymentDate = null }
    if (source["_paymentDate"]) { this._paymentDate = new fhir.FhirElement(source._paymentDate!); }
    if (source["paymentIdentifier"]) { this.paymentIdentifier = new fhir.Identifier(source.paymentIdentifier!); }
    if (source["paymentIssuer"]) { this.paymentIssuer = new fhir.Reference(source.paymentIssuer!); }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (source["processNote"]) { this.processNote = source.processNote.map((x:Partial<fhir.IPaymentReconciliationProcessNote>) => new fhir.PaymentReconciliationProcessNote(x)); }
    if (source["request"]) { this.request = new fhir.Reference(source.request!); }
    if (source["requestor"]) { this.requestor = new fhir.Reference(source.requestor!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
  }
  /**
   * Check if the current PaymentReconciliation contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["created"] === undefined) { missingElements.push("created"); }
    if (this["paymentAmount"] === undefined) { missingElements.push("paymentAmount"); }
    if (this["paymentDate"] === undefined) { missingElements.push("paymentDate"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a PaymentReconciliation from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IPaymentReconciliation):PaymentReconciliation {
    var dest:PaymentReconciliation = new PaymentReconciliation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `PaymentReconciliation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the PaymentReconciliation.processNote.type field
 */
export enum PaymentReconciliationProcessNoteTypeEnum {
  DISPLAY = "display",
  PRINT = "print",
  PRINTOPER = "printoper",
}
/**
 * Code Values for the PaymentReconciliation.outcome field
 */
export enum PaymentReconciliationOutcomeEnum {
  QUEUED = "queued",
  COMPLETE = "complete",
  ERROR = "error",
  PARTIAL = "partial",
}
/**
 * Code Values for the PaymentReconciliation.status field
 */
export enum PaymentReconciliationStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}

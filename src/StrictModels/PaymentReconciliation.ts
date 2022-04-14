// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export class PaymentReconciliationDetail extends fhirModels.BackboneElement implements fhirInterfaces.IPaymentReconciliationDetail {
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  amount?: fhirModels.Money|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: fhirModels.Identifier|undefined;
  /**
   * The party which is receiving the payment.
   */
  payee?: fhirModels.Reference|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: fhirModels.Identifier|undefined;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: fhirModels.Reference|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: fhirModels.Reference|undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: fhirModels.Reference|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  submitter?: fhirModels.Reference|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for PaymentReconciliationDetail from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPaymentReconciliationDetail) {
    super(source);
    if (source["amount"] !== undefined) {
      this.amount = new fhirModels.Money(source.amount);
    }
    if (source["date"] !== undefined) {
      this.date = source.date;
    }
    if (source["_date"] !== undefined) {
      this._date = new fhirModels.Element(source._date);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = new fhirModels.Identifier(source.identifier);
    }
    if (source["payee"] !== undefined) {
      this.payee = new fhirModels.Reference(source.payee);
    }
    if (source["predecessor"] !== undefined) {
      this.predecessor = new fhirModels.Identifier(source.predecessor);
    }
    if (source["request"] !== undefined) {
      this.request = new fhirModels.Reference(source.request);
    }
    if (source["response"] !== undefined) {
      this.response = new fhirModels.Reference(source.response);
    }
    if (source["responsible"] !== undefined) {
      this.responsible = new fhirModels.Reference(source.responsible);
    }
    if (source["submitter"] !== undefined) {
      this.submitter = new fhirModels.Reference(source.submitter);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export class PaymentReconciliationProcessNote extends fhirModels.BackboneElement implements fhirInterfaces.IPaymentReconciliationProcessNote {
  /**
   * The explanation or description associated with the processing.
   */
  text?: string|undefined;
  _text?: fhirModels.Element|undefined;
  /**
   * The business purpose of the note text.
   */
  type?: PaymentReconciliationProcessNoteTypeEnum|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for PaymentReconciliationProcessNote from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPaymentReconciliationProcessNote) {
    super(source);
    if (source["text"] !== undefined) {
      this.text = source.text;
    }
    if (source["_text"] !== undefined) {
      this._text = new fhirModels.Element(source._text);
    }
    if (source["type"] !== undefined) {
      this.type = source.type;
    }
    if (source["_type"] !== undefined) {
      this._type = new fhirModels.Element(source._type);
    }
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
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export class PaymentReconciliation extends fhirModels.DomainResource implements fhirInterfaces.IPaymentReconciliation {
  /**
   * Resource Type Name
   */
  readonly resourceType = "PaymentReconciliation";
  /**
   * The date when the resource was created.
   */
  created: string;
  _created?: fhirModels.Element|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: fhirModels.PaymentReconciliationDetail[]|undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  disposition?: string|undefined;
  _disposition?: fhirModels.Element|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  formCode?: fhirModels.CodeableConcept|undefined;
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome?: PaymentReconciliationOutcomeEnum|undefined;
  _outcome?: fhirModels.Element|undefined;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: fhirModels.Money;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  paymentDate: string;
  _paymentDate?: fhirModels.Element|undefined;
  /**
   * For example: EFT number or check number.
   */
  paymentIdentifier?: fhirModels.Identifier|undefined;
  /**
   * This party is also responsible for the reconciliation.
   */
  paymentIssuer?: fhirModels.Reference|undefined;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: fhirModels.Period|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  processNote?: fhirModels.PaymentReconciliationProcessNote[]|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhirModels.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: fhirModels.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: PaymentReconciliationStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * Default constructor for PaymentReconciliation from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPaymentReconciliation) {
    super(source);
    if ((source['resourceType'] !== "PaymentReconciliation") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a PaymentReconciliation'; }
    {
      this.created = source.created;
    }
    if (source["_created"] !== undefined) {
      this._created = new fhirModels.Element(source._created);
    }
    if (source["detail"] !== undefined) {
      this.detail = source.detail.map((x) => new fhirModels.PaymentReconciliationDetail(x));
    }
    if (source["disposition"] !== undefined) {
      this.disposition = source.disposition;
    }
    if (source["_disposition"] !== undefined) {
      this._disposition = new fhirModels.Element(source._disposition);
    }
    if (source["formCode"] !== undefined) {
      this.formCode = new fhirModels.CodeableConcept(source.formCode);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["outcome"] !== undefined) {
      this.outcome = source.outcome;
    }
    if (source["_outcome"] !== undefined) {
      this._outcome = new fhirModels.Element(source._outcome);
    }
    {
      this.paymentAmount = new fhirModels.Money(source.paymentAmount);
    }
    {
      this.paymentDate = source.paymentDate;
    }
    if (source["_paymentDate"] !== undefined) {
      this._paymentDate = new fhirModels.Element(source._paymentDate);
    }
    if (source["paymentIdentifier"] !== undefined) {
      this.paymentIdentifier = new fhirModels.Identifier(source.paymentIdentifier);
    }
    if (source["paymentIssuer"] !== undefined) {
      this.paymentIssuer = new fhirModels.Reference(source.paymentIssuer);
    }
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
    if (source["processNote"] !== undefined) {
      this.processNote = source.processNote.map((x) => new fhirModels.PaymentReconciliationProcessNote(x));
    }
    if (source["request"] !== undefined) {
      this.request = new fhirModels.Reference(source.request);
    }
    if (source["requestor"] !== undefined) {
      this.requestor = new fhirModels.Reference(source.requestor);
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
  }
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

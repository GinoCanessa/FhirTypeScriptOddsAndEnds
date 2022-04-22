// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: PaymentReconciliation

import * as fhir from '../fhir.js'

import { PaymentTypeValueSet, PaymentTypeValueSetType, PaymentTypeValueSetEnum } from '../fhirValueSets/PaymentTypeValueSet.js'
import { NoteTypeValueSet, NoteTypeValueSetType, NoteTypeValueSetEnum } from '../fhirValueSets/NoteTypeValueSet.js'
import { FmStatusValueSet, FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js'
import { RemittanceOutcomeValueSet, RemittanceOutcomeValueSetType, RemittanceOutcomeValueSetEnum } from '../fhirValueSets/RemittanceOutcomeValueSet.js'
import { FormsValueSet, FormsValueSetType, FormsValueSetEnum } from '../fhirValueSets/FormsValueSet.js'

/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export type IPaymentReconciliationDetail = fhir.IBackboneElement & { 
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: fhir.IIdentifier|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  type: fhir.ICodeableConcept|null;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: fhir.IReference|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  submitter?: fhir.IReference|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: fhir.IReference|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.detail.date
   */
  _date?: fhir.IFhirElement|undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: fhir.IReference|undefined;
  /**
   * The party which is receiving the payment.
   */
  payee?: fhir.IReference|undefined;
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  amount?: fhir.IMoney|undefined;
}

/**
 * A note that describes or explains the processing in a human readable form.
 */
export type IPaymentReconciliationProcessNote = fhir.IBackboneElement & { 
  /**
   * The business purpose of the note text.
   */
  type?: NoteTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.processNote.type
   */
  _type?: fhir.IFhirElement|undefined;
  /**
   * The explanation or description associated with the processing.
   */
  text?: string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.processNote.text
   */
  _text?: fhir.IFhirElement|undefined;
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
   * A unique identifier assigned to this payment reconciliation.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: FmStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: PaymentReconciliation.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * The date when the resource was created.
   */
  created: string|null;
  /**
   * Extended properties for primitive element: PaymentReconciliation.created
   */
  _created?: fhir.IFhirElement|undefined;
  /**
   * This party is also responsible for the reconciliation.
   */
  paymentIssuer?: fhir.IReference|undefined;
  /**
   * Original request resource reference.
   */
  request?: fhir.IReference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: fhir.IReference|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome?: RemittanceOutcomeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.outcome
   */
  _outcome?: fhir.IFhirElement|undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  disposition?: string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.disposition
   */
  _disposition?: fhir.IFhirElement|undefined;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  paymentDate: string|null;
  /**
   * Extended properties for primitive element: PaymentReconciliation.paymentDate
   */
  _paymentDate?: fhir.IFhirElement|undefined;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: fhir.IMoney|null;
  /**
   * For example: EFT number or check number.
   */
  paymentIdentifier?: fhir.IIdentifier|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: fhir.IPaymentReconciliationDetail[]|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  formCode?: fhir.ICodeableConcept|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  processNote?: fhir.IPaymentReconciliationProcessNote[]|undefined;
}

/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export class PaymentReconciliationDetail extends fhir.BackboneElement implements IPaymentReconciliationDetail {
  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  public predecessor?: fhir.Identifier|undefined;
  /**
   * For example: payment, adjustment, funds advance, etc.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The party which submitted the claim or financial transaction.
   */
  public submitter?: fhir.Reference|undefined;
  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  public response?: fhir.Reference|undefined;
  /**
   * The date from the response resource containing a commitment to pay.
   */
  public date?: string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.detail.date
   */
  public _date?: fhir.FhirElement|undefined;
  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * The party which is receiving the payment.
   */
  public payee?: fhir.Reference|undefined;
  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  public amount?: fhir.Money|undefined;
  /**
   * Default constructor for PaymentReconciliationDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPaymentReconciliationDetail> = { }) {
    super(source);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier!); }
    if (source['predecessor']) { this.predecessor = new fhir.Identifier(source.predecessor!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['request']) { this.request = new fhir.Reference(source.request!); }
    if (source['submitter']) { this.submitter = new fhir.Reference(source.submitter!); }
    if (source['response']) { this.response = new fhir.Reference(source.response!); }
    if (source['date']) { this.date = source.date; }
    if (source['_date']) { this._date = new fhir.FhirElement(source._date!); }
    if (source['responsible']) { this.responsible = new fhir.Reference(source.responsible!); }
    if (source['payee']) { this.payee = new fhir.Reference(source.payee!); }
    if (source['amount']) { this.amount = new fhir.Money(source.amount!); }
  }
  /**
   * Example-bound Value Set for type
   */
  public static typeExampleValueSet():PaymentTypeValueSetType {
    return PaymentTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["identifier"]) { results.push(...this.identifier.doModelValidation()); }
    if (this["predecessor"]) { results.push(...this.predecessor.doModelValidation()); }
    if (!this["type"]) { results.push(["type",'Missing required element: PaymentReconciliation.detail.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["request"]) { results.push(...this.request.doModelValidation()); }
    if (this["submitter"]) { results.push(...this.submitter.doModelValidation()); }
    if (this["response"]) { results.push(...this.response.doModelValidation()); }
    if (this["_date"]) { results.push(...this._date.doModelValidation()); }
    if (this["responsible"]) { results.push(...this.responsible.doModelValidation()); }
    if (this["payee"]) { results.push(...this.payee.doModelValidation()); }
    if (this["amount"]) { results.push(...this.amount.doModelValidation()); }
    return results;
  }
}

/**
 * A note that describes or explains the processing in a human readable form.
 */
export class PaymentReconciliationProcessNote extends fhir.BackboneElement implements IPaymentReconciliationProcessNote {
  /**
   * The business purpose of the note text.
   */
  public type?: NoteTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.processNote.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * The explanation or description associated with the processing.
   */
  public text?: string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.processNote.text
   */
  public _text?: fhir.FhirElement|undefined;
  /**
   * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPaymentReconciliationProcessNote> = { }) {
    super(source);
    if (source['type']) { this.type = source.type; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
    if (source['text']) { this.text = source.text; }
    if (source['_text']) { this._text = new fhir.FhirElement(source._text!); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():NoteTypeValueSetType {
    return NoteTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    if (this["_text"]) { results.push(...this._text.doModelValidation()); }
    return results;
  }
}

/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export class PaymentReconciliation extends fhir.DomainResource implements IPaymentReconciliation {
  /**
   * Resource Type Name
   */
  public resourceType: "PaymentReconciliation";
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: FmStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: PaymentReconciliation.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  public period?: fhir.Period|undefined;
  /**
   * The date when the resource was created.
   */
  public created: string|null;
  /**
   * Extended properties for primitive element: PaymentReconciliation.created
   */
  public _created?: fhir.FhirElement|undefined;
  /**
   * This party is also responsible for the reconciliation.
   */
  public paymentIssuer?: fhir.Reference|undefined;
  /**
   * Original request resource reference.
   */
  public request?: fhir.Reference|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  public requestor?: fhir.Reference|undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  public outcome?: RemittanceOutcomeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.outcome
   */
  public _outcome?: fhir.FhirElement|undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  public disposition?: string|undefined;
  /**
   * Extended properties for primitive element: PaymentReconciliation.disposition
   */
  public _disposition?: fhir.FhirElement|undefined;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  public paymentDate: string|null;
  /**
   * Extended properties for primitive element: PaymentReconciliation.paymentDate
   */
  public _paymentDate?: fhir.FhirElement|undefined;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  public paymentAmount: fhir.Money|null;
  /**
   * For example: EFT number or check number.
   */
  public paymentIdentifier?: fhir.Identifier|undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  public detail?: fhir.PaymentReconciliationDetail[]|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  public formCode?: fhir.CodeableConcept|undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  public processNote?: fhir.PaymentReconciliationProcessNote[]|undefined;
  /**
   * Default constructor for PaymentReconciliation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPaymentReconciliation> = { }) {
    super(source);
    this.resourceType = 'PaymentReconciliation';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['created']) { this.created = source.created; }
    else { this.created = null; }
    if (source['_created']) { this._created = new fhir.FhirElement(source._created!); }
    if (source['paymentIssuer']) { this.paymentIssuer = new fhir.Reference(source.paymentIssuer!); }
    if (source['request']) { this.request = new fhir.Reference(source.request!); }
    if (source['requestor']) { this.requestor = new fhir.Reference(source.requestor!); }
    if (source['outcome']) { this.outcome = source.outcome; }
    if (source['_outcome']) { this._outcome = new fhir.FhirElement(source._outcome!); }
    if (source['disposition']) { this.disposition = source.disposition; }
    if (source['_disposition']) { this._disposition = new fhir.FhirElement(source._disposition!); }
    if (source['paymentDate']) { this.paymentDate = source.paymentDate; }
    else { this.paymentDate = null; }
    if (source['_paymentDate']) { this._paymentDate = new fhir.FhirElement(source._paymentDate!); }
    if (source['paymentAmount']) { this.paymentAmount = new fhir.Money(source.paymentAmount!); }
    else { this.paymentAmount = null; }
    if (source['paymentIdentifier']) { this.paymentIdentifier = new fhir.Identifier(source.paymentIdentifier!); }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.PaymentReconciliationDetail(x)); }
    if (source['formCode']) { this.formCode = new fhir.CodeableConcept(source.formCode!); }
    if (source['processNote']) { this.processNote = source.processNote.map((x) => new fhir.PaymentReconciliationProcessNote(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():FmStatusValueSetType {
    return FmStatusValueSet;
  }
  /**
   * Required-bound Value Set for outcome
   */
  public static outcomeRequiredValueSet():RemittanceOutcomeValueSetType {
    return RemittanceOutcomeValueSet;
  }
  /**
   * Example-bound Value Set for formCode
   */
  public static formCodeExampleValueSet():FormsValueSetType {
    return FormsValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: PaymentReconciliation.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["status"]) { results.push(["status",'Missing required element: PaymentReconciliation.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (!this["created"]) { results.push(["created",'Missing required element: PaymentReconciliation.created']); }
    if (this["_created"]) { results.push(...this._created.doModelValidation()); }
    if (this["paymentIssuer"]) { results.push(...this.paymentIssuer.doModelValidation()); }
    if (this["request"]) { results.push(...this.request.doModelValidation()); }
    if (this["requestor"]) { results.push(...this.requestor.doModelValidation()); }
    if (this["_outcome"]) { results.push(...this._outcome.doModelValidation()); }
    if (this["_disposition"]) { results.push(...this._disposition.doModelValidation()); }
    if (!this["paymentDate"]) { results.push(["paymentDate",'Missing required element: PaymentReconciliation.paymentDate']); }
    if (this["_paymentDate"]) { results.push(...this._paymentDate.doModelValidation()); }
    if (!this["paymentAmount"]) { results.push(["paymentAmount",'Missing required element: PaymentReconciliation.paymentAmount']); }
    if (this["paymentAmount"]) { results.push(...this.paymentAmount.doModelValidation()); }
    if (this["paymentIdentifier"]) { results.push(...this.paymentIdentifier.doModelValidation()); }
    if (this["detail"]) { this.detail.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["formCode"]) { results.push(...this.formCode.doModelValidation()); }
    if (this["processNote"]) { this.processNote.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

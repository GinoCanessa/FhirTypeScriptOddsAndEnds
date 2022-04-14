// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export class PaymentNotice extends fhirModels.DomainResource implements fhirInterfaces.IPaymentNotice {
  /**
   * Resource Type Name
   */
  readonly resourceType = "PaymentNotice";
  /**
   * The amount sent to the payee.
   */
  amount?: fhirModels.Money|undefined;
  /**
   * The date when this resource was created.
   */
  created?: string|undefined;
  _created?: fhirModels.Element|undefined;
  /**
   * A unique identifier assigned to this payment notice.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The party who will receive or has received payment that is the subject of this notification.
   */
  payee?: fhirModels.Reference|undefined;
  /**
   * A reference to the payment which is the subject of this notice.
   */
  payment?: fhirModels.Reference|undefined;
  /**
   * The date when the above payment action occurred.
   */
  paymentDate?: string|undefined;
  _paymentDate?: fhirModels.Element|undefined;
  /**
   * Typically paid: payment sent, cleared: payment received.
   */
  paymentStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: fhirModels.Reference|undefined;
  /**
   * The party who is notified of the payment status.
   */
  recipient?: fhirModels.Reference|undefined;
  /**
   * Reference of resource for which payment is being made.
   */
  request?: fhirModels.Reference|undefined;
  /**
   * Reference of response to resource for which payment is being made.
   */
  response?: fhirModels.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: PaymentNoticeStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Default constructor for PaymentNotice from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IPaymentNotice>) {
    super(source);
    if ((source['resourceType'] !== "PaymentNotice") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a PaymentNotice'; }
    if (source["amount"] !== undefined) { this.amount = new fhirModels.Money(source.amount); }
    if (source["created"] !== undefined) { this.created = source.created; }
    if (source["_created"] !== undefined) { this._created = new fhirModels.Element(source._created); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["payee"] !== undefined) { this.payee = new fhirModels.Reference(source.payee); }
    if (source["payment"] !== undefined) { this.payment = new fhirModels.Reference(source.payment); }
    if (source["paymentDate"] !== undefined) { this.paymentDate = source.paymentDate; }
    if (source["_paymentDate"] !== undefined) { this._paymentDate = new fhirModels.Element(source._paymentDate); }
    if (source["paymentStatus"] !== undefined) { this.paymentStatus = new fhirModels.CodeableConcept(source.paymentStatus); }
    if (source["provider"] !== undefined) { this.provider = new fhirModels.Reference(source.provider); }
    if (source["recipient"] !== undefined) { this.recipient = new fhirModels.Reference(source.recipient); }
    if (source["request"] !== undefined) { this.request = new fhirModels.Reference(source.request); }
    if (source["response"] !== undefined) { this.response = new fhirModels.Reference(source.response); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
  }
  /**
   * Factory function to create a PaymentNotice from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IPaymentNotice):PaymentNotice {
    var dest:PaymentNotice = new PaymentNotice(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `PaymentNotice is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current PaymentNotice contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["amount"] === undefined) { missingElements.push("amount"); }
    if (this["created"] === undefined) { missingElements.push("created"); }
    if (this["payment"] === undefined) { missingElements.push("payment"); }
    if (this["recipient"] === undefined) { missingElements.push("recipient"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the PaymentNotice.status field
 */
export enum PaymentNoticeStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}

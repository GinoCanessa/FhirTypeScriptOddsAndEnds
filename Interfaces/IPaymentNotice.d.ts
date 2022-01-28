// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../interfaces'
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export interface IPaymentNotice extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "PaymentNotice";
  /**
   * The amount sent to the payee.
   */
  amount: fhirInterfaces.IMoney|undefined;
  /**
   * The date when this resource was created.
   */
  created: string|undefined;
  _created?: fhirInterfaces.IElement|undefined;
  /**
   * A unique identifier assigned to this payment notice.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The party who will receive or has received payment that is the subject of this notification.
   */
  payee?: fhirInterfaces.IReference|undefined;
  /**
   * A reference to the payment which is the subject of this notice.
   */
  payment: fhirInterfaces.IReference|undefined;
  /**
   * The date when the above payment action occurred.
   */
  paymentDate?: string|undefined;
  _paymentDate?: fhirInterfaces.IElement|undefined;
  /**
   * Typically paid: payment sent, cleared: payment received.
   */
  paymentStatus?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: fhirInterfaces.IReference|undefined;
  /**
   * The party who is notified of the payment status.
   */
  recipient: fhirInterfaces.IReference|undefined;
  /**
   * Reference of resource for which payment is being made.
   */
  request?: fhirInterfaces.IReference|undefined;
  /**
   * Reference of response to resource for which payment is being made.
   */
  response?: fhirInterfaces.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: PaymentNoticeStatusEnum|undefined;
  _status?: fhirInterfaces.IElement|undefined;
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

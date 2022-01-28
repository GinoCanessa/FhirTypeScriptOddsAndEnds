// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export class CommunicationRequestPayload extends fhirModels.BackboneElement implements fhirInterfaces.ICommunicationRequestPayload {
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: string|undefined;
  _contentString?: fhirModels.Element|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: fhirModels.Attachment|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: fhirModels.Reference|undefined;
  /**
   * Default constructor for CommunicationRequestPayload from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICommunicationRequestPayload>) {
    super(source);
    if (source["contentString"] !== undefined) { this.contentString = source.contentString; }
    if (source["_contentString"] !== undefined) { this._contentString = new fhirModels.Element(source._contentString); }
    if (source["contentAttachment"] !== undefined) { this.contentAttachment = new fhirModels.Attachment(source.contentAttachment); }
    if (source["contentReference"] !== undefined) { this.contentReference = new fhirModels.Reference(source.contentReference); }
  }
  /**
   * Check if the current CommunicationRequestPayload contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CommunicationRequestPayload from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICommunicationRequestPayload):CommunicationRequestPayload {
    var dest:CommunicationRequestPayload = new CommunicationRequestPayload(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CommunicationRequestPayload is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export class CommunicationRequest extends fhirModels.DomainResource implements fhirInterfaces.ICommunicationRequest {
  /**
   * Resource Type Name
   */
  readonly resourceType = "CommunicationRequest";
  /**
   * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
   */
  about?: fhirModels.Reference[]|undefined;
  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  authoredOn?: string|undefined;
  _authoredOn?: fhirModels.Element|undefined;
  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  basedOn?: fhirModels.Reference[]|undefined;
  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  category?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The attributes provided with the request qualify what is not to be done.
   */
  doNotPerform?: boolean|undefined;
  _doNotPerform?: fhirModels.Element|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  groupIdentifier?: fhirModels.Identifier|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhirModels.Element|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrencePeriod?: fhirModels.Period|undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  payload?: fhirModels.CommunicationRequestPayload[]|undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: CommunicationRequestPriorityEnum|undefined;
  _priority?: fhirModels.Element|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: fhirModels.Reference[]|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  recipient?: fhirModels.Reference[]|undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: fhirModels.Reference[]|undefined;
  /**
   * The device, individual, or organization who initiated the request and has responsibility for its activation.
   */
  requester?: fhirModels.Reference|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  sender?: fhirModels.Reference|undefined;
  /**
   * The status of the proposal or order.
   */
  status: CommunicationRequestStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   */
  statusReason?: fhirModels.CodeableConcept|undefined;
  /**
   * The patient or group that is the focus of this communication request.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * Default constructor for CommunicationRequest from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICommunicationRequest>) {
    super(source);
    if ((source['resourceType'] !== "CommunicationRequest") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a CommunicationRequest'; }
    if (source["about"] !== undefined) { this.about = source.about.map((x) => new fhirModels.Reference(x)); }
    if (source["authoredOn"] !== undefined) { this.authoredOn = source.authoredOn; }
    if (source["_authoredOn"] !== undefined) { this._authoredOn = new fhirModels.Element(source._authoredOn); }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x)); }
    if (source["category"] !== undefined) { this.category = source.category.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["doNotPerform"] !== undefined) { this.doNotPerform = source.doNotPerform; }
    if (source["_doNotPerform"] !== undefined) { this._doNotPerform = new fhirModels.Element(source._doNotPerform); }
    if (source["encounter"] !== undefined) { this.encounter = new fhirModels.Reference(source.encounter); }
    if (source["groupIdentifier"] !== undefined) { this.groupIdentifier = new fhirModels.Identifier(source.groupIdentifier); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["medium"] !== undefined) { this.medium = source.medium.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["occurrenceDateTime"] !== undefined) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"] !== undefined) { this._occurrenceDateTime = new fhirModels.Element(source._occurrenceDateTime); }
    if (source["occurrencePeriod"] !== undefined) { this.occurrencePeriod = new fhirModels.Period(source.occurrencePeriod); }
    if (source["payload"] !== undefined) { this.payload = source.payload.map((x) => new fhirModels.CommunicationRequestPayload(x)); }
    if (source["priority"] !== undefined) { this.priority = source.priority; }
    if (source["_priority"] !== undefined) { this._priority = new fhirModels.Element(source._priority); }
    if (source["reasonCode"] !== undefined) { this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["reasonReference"] !== undefined) { this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x)); }
    if (source["recipient"] !== undefined) { this.recipient = source.recipient.map((x) => new fhirModels.Reference(x)); }
    if (source["replaces"] !== undefined) { this.replaces = source.replaces.map((x) => new fhirModels.Reference(x)); }
    if (source["requester"] !== undefined) { this.requester = new fhirModels.Reference(source.requester); }
    if (source["sender"] !== undefined) { this.sender = new fhirModels.Reference(source.sender); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["statusReason"] !== undefined) { this.statusReason = new fhirModels.CodeableConcept(source.statusReason); }
    if (source["subject"] !== undefined) { this.subject = new fhirModels.Reference(source.subject); }
  }
  /**
   * Check if the current CommunicationRequest contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CommunicationRequest from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICommunicationRequest):CommunicationRequest {
    var dest:CommunicationRequest = new CommunicationRequest(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CommunicationRequest is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the CommunicationRequest.priority field
 */
export enum CommunicationRequestPriorityEnum {
  ROUTINE = "routine",
  URGENT = "urgent",
  ASAP = "asap",
  STAT = "stat",
}
/**
 * Code Values for the CommunicationRequest.status field
 */
export enum CommunicationRequestStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  REVOKED = "revoked",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}

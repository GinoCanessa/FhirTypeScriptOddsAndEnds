// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export type ICommunicationRequestPayload = fhir.IBackboneElement & {
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: string|undefined;
  _contentString?: fhir.IFhirElement|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: fhir.IAttachment|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: fhir.IReference|undefined;
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export type ICommunicationRequest = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "CommunicationRequest";
  /**
   * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
   */
  about?: fhir.IReference[]|undefined;
  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  authoredOn?: string|undefined;
  _authoredOn?: fhir.IFhirElement|undefined;
  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * The attributes provided with the request qualify what is not to be done.
   */
  doNotPerform?: boolean|undefined;
  _doNotPerform?: fhir.IFhirElement|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  groupIdentifier?: fhir.IIdentifier|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: fhir.ICodeableConcept[]|undefined;
  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrencePeriod?: fhir.IPeriod|undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  payload?: fhir.ICommunicationRequestPayload[]|undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: CommunicationRequestPriorityEnum|undefined;
  _priority?: fhir.IFhirElement|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  recipient?: fhir.IReference[]|undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: fhir.IReference[]|undefined;
  /**
   * The device, individual, or organization who initiated the request and has responsibility for its activation.
   */
  requester?: fhir.IReference|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  sender?: fhir.IReference|undefined;
  /**
   * The status of the proposal or order.
   */
  status: CommunicationRequestStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   */
  statusReason?: fhir.ICodeableConcept|undefined;
  /**
   * The patient or group that is the focus of this communication request.
   */
  subject?: fhir.IReference|undefined;
}
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export class CommunicationRequestPayload extends fhir.BackboneElement implements fhir.ICommunicationRequestPayload {
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  public contentString?: string|undefined;
  public _contentString?: fhir.FhirElement|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  public contentAttachment?: fhir.Attachment|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  public contentReference?: fhir.Reference|undefined;
  /**
   * Default constructor for CommunicationRequestPayload - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICommunicationRequestPayload> = {}) {
    super(source);
    if (source["contentString"]) { this.contentString = source.contentString; }
    if (source["_contentString"]) { this._contentString = new fhir.FhirElement(source._contentString!); }
    if (source["contentAttachment"]) { this.contentAttachment = new fhir.Attachment(source.contentAttachment!); }
    if (source["contentReference"]) { this.contentReference = new fhir.Reference(source.contentReference!); }
  }
  /**
   * Check if the current CommunicationRequestPayload contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CommunicationRequestPayload from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICommunicationRequestPayload):CommunicationRequestPayload {
    var dest:CommunicationRequestPayload = new CommunicationRequestPayload(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CommunicationRequestPayload is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export class CommunicationRequest extends fhir.DomainResource implements fhir.ICommunicationRequest {
  /**
   * Resource Type Name
   */
  public override resourceType: "CommunicationRequest";
  /**
   * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
   */
  public about?: fhir.Reference[]|undefined;
  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  public authoredOn?: string|undefined;
  public _authoredOn?: fhir.FhirElement|undefined;
  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * The attributes provided with the request qualify what is not to be done.
   */
  public doNotPerform?: boolean|undefined;
  public _doNotPerform?: fhir.FhirElement|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  public medium?: fhir.CodeableConcept[]|undefined;
  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * The time when this communication is to occur.
   */
  public occurrenceDateTime?: string|undefined;
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
  /**
   * The time when this communication is to occur.
   */
  public occurrencePeriod?: fhir.Period|undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  public payload?: fhir.CommunicationRequestPayload[]|undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  public priority?: CommunicationRequestPriorityEnum|undefined;
  public _priority?: fhir.FhirElement|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * Indicates another resource whose existence justifies this request.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  public recipient?: fhir.Reference[]|undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  public replaces?: fhir.Reference[]|undefined;
  /**
   * The device, individual, or organization who initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.Reference|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * The status of the proposal or order.
   */
  public status: CommunicationRequestStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * The patient or group that is the focus of this communication request.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Default constructor for CommunicationRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICommunicationRequest> = {}) {
    super(source);
    this.resourceType = 'CommunicationRequest';
    if (source["about"]) { this.about = source.about.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["authoredOn"]) { this.authoredOn = source.authoredOn; }
    if (source["_authoredOn"]) { this._authoredOn = new fhir.FhirElement(source._authoredOn!); }
    if (source["basedOn"]) { this.basedOn = source.basedOn.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["doNotPerform"]) { this.doNotPerform = source.doNotPerform; }
    if (source["_doNotPerform"]) { this._doNotPerform = new fhir.FhirElement(source._doNotPerform!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["groupIdentifier"]) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["medium"]) { this.medium = source.medium.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["occurrenceDateTime"]) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"]) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source["occurrencePeriod"]) { this.occurrencePeriod = new fhir.Period(source.occurrencePeriod!); }
    if (source["payload"]) { this.payload = source.payload.map((x:Partial<fhir.ICommunicationRequestPayload>) => new fhir.CommunicationRequestPayload(x)); }
    if (source["priority"]) { this.priority = source.priority; }
    if (source["_priority"]) { this._priority = new fhir.FhirElement(source._priority!); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["recipient"]) { this.recipient = source.recipient.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["replaces"]) { this.replaces = source.replaces.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["requester"]) { this.requester = new fhir.Reference(source.requester!); }
    if (source["sender"]) { this.sender = new fhir.Reference(source.sender!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["statusReason"]) { this.statusReason = new fhir.CodeableConcept(source.statusReason!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
  }
  /**
   * Check if the current CommunicationRequest contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CommunicationRequest from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICommunicationRequest):CommunicationRequest {
    var dest:CommunicationRequest = new CommunicationRequest(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CommunicationRequest is missing elements: ${missingElements.join(", ")}` }
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

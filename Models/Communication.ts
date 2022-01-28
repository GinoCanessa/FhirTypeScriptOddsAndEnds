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
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export class CommunicationPayload extends fhirModels.BackboneElement implements fhirInterfaces.ICommunicationPayload {
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: string|undefined;
  _contentString?: fhirModels.Element|undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: fhirModels.Attachment|undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: fhirModels.Reference|undefined;
  /**
   * Default constructor for CommunicationPayload from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICommunicationPayload>) {
    super(source);
    if (source["contentString"] !== undefined) { this.contentString = source.contentString; }
    if (source["_contentString"] !== undefined) { this._contentString = new fhirModels.Element(source._contentString); }
    if (source["contentAttachment"] !== undefined) { this.contentAttachment = new fhirModels.Attachment(source.contentAttachment); }
    if (source["contentReference"] !== undefined) { this.contentReference = new fhirModels.Reference(source.contentReference); }
  }
  /**
   * Check if the current CommunicationPayload contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CommunicationPayload from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICommunicationPayload):CommunicationPayload {
    var dest:CommunicationPayload = new CommunicationPayload(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CommunicationPayload is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export class Communication extends fhirModels.DomainResource implements fhirInterfaces.ICommunication {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Communication";
  /**
   * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
   */
  about?: fhirModels.Reference[]|undefined;
  /**
   * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
   */
  basedOn?: fhirModels.Reference[]|undefined;
  /**
   * There may be multiple axes of categorization and one communication may serve multiple purposes.
   */
  category?: fhirModels.CodeableConcept[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Prior communication that this communication is in response to.
   */
  inResponseTo?: fhirModels.Reference[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhirModels.Element[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhirModels.Element[]|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * Part of this action.
   */
  partOf?: fhirModels.Reference[]|undefined;
  /**
   * Text, attachment(s), or resource(s) that was communicated to the recipient.
   */
  payload?: fhirModels.CommunicationPayload[]|undefined;
  /**
   * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
   */
  priority?: CommunicationPriorityEnum|undefined;
  _priority?: fhirModels.Element|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Indicates another resource whose existence justifies this communication.
   */
  reasonReference?: fhirModels.Reference[]|undefined;
  /**
   * The time when this communication arrived at the destination.
   */
  received?: string|undefined;
  _received?: fhirModels.Element|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
   */
  recipient?: fhirModels.Reference[]|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
   */
  sender?: fhirModels.Reference|undefined;
  /**
   * The time when this communication was sent.
   */
  sent?: string|undefined;
  _sent?: fhirModels.Element|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
   */
  status: CommunicationStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: fhirModels.CodeableConcept|undefined;
  /**
   * The patient or group that was the focus of this communication.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * Communication.topic.text can be used without any codings.
   */
  topic?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for Communication from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICommunication>) {
    super(source);
    if ((source['resourceType'] !== "Communication") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Communication'; }
    if (source["about"] !== undefined) { this.about = source.about.map((x) => new fhirModels.Reference(x)); }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x)); }
    if (source["category"] !== undefined) { this.category = source.category.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["encounter"] !== undefined) { this.encounter = new fhirModels.Reference(source.encounter); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["inResponseTo"] !== undefined) { this.inResponseTo = source.inResponseTo.map((x) => new fhirModels.Reference(x)); }
    if (source["instantiatesCanonical"] !== undefined) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x)); }
    if (source["_instantiatesCanonical"] !== undefined) { this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhirModels.Element(x)); }
    if (source["instantiatesUri"] !== undefined) { this.instantiatesUri = source.instantiatesUri.map((x) => (x)); }
    if (source["_instantiatesUri"] !== undefined) { this._instantiatesUri = source._instantiatesUri.map((x) => new fhirModels.Element(x)); }
    if (source["medium"] !== undefined) { this.medium = source.medium.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["partOf"] !== undefined) { this.partOf = source.partOf.map((x) => new fhirModels.Reference(x)); }
    if (source["payload"] !== undefined) { this.payload = source.payload.map((x) => new fhirModels.CommunicationPayload(x)); }
    if (source["priority"] !== undefined) { this.priority = source.priority; }
    if (source["_priority"] !== undefined) { this._priority = new fhirModels.Element(source._priority); }
    if (source["reasonCode"] !== undefined) { this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["reasonReference"] !== undefined) { this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x)); }
    if (source["received"] !== undefined) { this.received = source.received; }
    if (source["_received"] !== undefined) { this._received = new fhirModels.Element(source._received); }
    if (source["recipient"] !== undefined) { this.recipient = source.recipient.map((x) => new fhirModels.Reference(x)); }
    if (source["sender"] !== undefined) { this.sender = new fhirModels.Reference(source.sender); }
    if (source["sent"] !== undefined) { this.sent = source.sent; }
    if (source["_sent"] !== undefined) { this._sent = new fhirModels.Element(source._sent); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["statusReason"] !== undefined) { this.statusReason = new fhirModels.CodeableConcept(source.statusReason); }
    if (source["subject"] !== undefined) { this.subject = new fhirModels.Reference(source.subject); }
    if (source["topic"] !== undefined) { this.topic = new fhirModels.CodeableConcept(source.topic); }
  }
  /**
   * Check if the current Communication contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Communication from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICommunication):Communication {
    var dest:Communication = new Communication(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Communication is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the Communication.priority field
 */
export enum CommunicationPriorityEnum {
  ROUTINE = "routine",
  URGENT = "urgent",
  ASAP = "asap",
  STAT = "stat",
}
/**
 * Code Values for the Communication.status field
 */
export enum CommunicationStatusEnum {
  PREPARATION = "preparation",
  IN_PROGRESS = "in-progress",
  NOT_DONE = "not-done",
  ON_HOLD = "on-hold",
  STOPPED = "stopped",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}

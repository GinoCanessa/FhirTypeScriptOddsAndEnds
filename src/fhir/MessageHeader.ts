// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export type IMessageHeaderDestination = fhir.IBackboneElement & {
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string|null;
  _endpoint?: fhir.IFhirElement|undefined;
  /**
   * Human-readable name for the target system.
   */
  name?: string|undefined;
  _name?: fhir.IFhirElement|undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  receiver?: fhir.IReference|undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  target?: fhir.IReference|undefined;
}
/**
 * The source application from which this message originated.
 */
export type IMessageHeaderSource = fhir.IBackboneElement & {
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  contact?: fhir.IContactPoint|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string|null;
  _endpoint?: fhir.IFhirElement|undefined;
  /**
   * Human-readable name for the source system.
   */
  name?: string|undefined;
  _name?: fhir.IFhirElement|undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  software?: string|undefined;
  _software?: fhir.IFhirElement|undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  version?: string|undefined;
  _version?: fhir.IFhirElement|undefined;
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export type IMessageHeaderResponse = fhir.IBackboneElement & {
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  code: MessageHeaderResponseCodeEnum|null;
  _code?: fhir.IFhirElement|undefined;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  details?: fhir.IReference|undefined;
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  identifier: string|null;
  _identifier?: fhir.IFhirElement|undefined;
}
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export type IMessageHeader = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "MessageHeader";
  /**
   * Usually only for the request but can be used in a response.
   */
  author?: fhir.IReference|undefined;
  /**
   * Permanent link to the MessageDefinition for this message.
   */
  definition?: string|undefined;
  _definition?: fhir.IFhirElement|undefined;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  destination?: fhir.IMessageHeaderDestination[]|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  enterer?: fhir.IReference|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventCoding?: fhir.ICoding|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventUri?: string|undefined;
  _eventUri?: fhir.IFhirElement|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  focus?: fhir.IReference[]|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  reason?: fhir.ICodeableConcept|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  response?: fhir.IMessageHeaderResponse|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  responsible?: fhir.IReference|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  sender?: fhir.IReference|undefined;
  /**
   * The source application from which this message originated.
   */
  source: fhir.IMessageHeaderSource|null;
}
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export class MessageHeaderDestination extends fhir.BackboneElement implements fhir.IMessageHeaderDestination {
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  public endpoint: string|null;
  public _endpoint?: fhir.FhirElement|undefined;
  /**
   * Human-readable name for the target system.
   */
  public name?: string|undefined;
  public _name?: fhir.FhirElement|undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  public receiver?: fhir.Reference|undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  public target?: fhir.Reference|undefined;
  /**
   * Default constructor for MessageHeaderDestination - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMessageHeaderDestination> = {}) {
    super(source);
    this.endpoint = null;
    if (source["endpoint"]) { this.endpoint = source.endpoint; }
    if (this.endpoint === undefined) { this.endpoint = null }
    if (source["_endpoint"]) { this._endpoint = new fhir.FhirElement(source._endpoint!); }
    if (source["name"]) { this.name = source.name; }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
    if (source["receiver"]) { this.receiver = new fhir.Reference(source.receiver!); }
    if (source["target"]) { this.target = new fhir.Reference(source.target!); }
  }
  /**
   * Check if the current MessageHeaderDestination contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["endpoint"] === undefined) { missingElements.push("endpoint"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MessageHeaderDestination from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMessageHeaderDestination):MessageHeaderDestination {
    var dest:MessageHeaderDestination = new MessageHeaderDestination(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MessageHeaderDestination is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The source application from which this message originated.
 */
export class MessageHeaderSource extends fhir.BackboneElement implements fhir.IMessageHeaderSource {
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  public contact?: fhir.ContactPoint|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  public endpoint: string|null;
  public _endpoint?: fhir.FhirElement|undefined;
  /**
   * Human-readable name for the source system.
   */
  public name?: string|undefined;
  public _name?: fhir.FhirElement|undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  public software?: string|undefined;
  public _software?: fhir.FhirElement|undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  public version?: string|undefined;
  public _version?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MessageHeaderSource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMessageHeaderSource> = {}) {
    super(source);
    if (source["contact"]) { this.contact = new fhir.ContactPoint(source.contact!); }
    this.endpoint = null;
    if (source["endpoint"]) { this.endpoint = source.endpoint; }
    if (this.endpoint === undefined) { this.endpoint = null }
    if (source["_endpoint"]) { this._endpoint = new fhir.FhirElement(source._endpoint!); }
    if (source["name"]) { this.name = source.name; }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
    if (source["software"]) { this.software = source.software; }
    if (source["_software"]) { this._software = new fhir.FhirElement(source._software!); }
    if (source["version"]) { this.version = source.version; }
    if (source["_version"]) { this._version = new fhir.FhirElement(source._version!); }
  }
  /**
   * Check if the current MessageHeaderSource contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["endpoint"] === undefined) { missingElements.push("endpoint"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MessageHeaderSource from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMessageHeaderSource):MessageHeaderSource {
    var dest:MessageHeaderSource = new MessageHeaderSource(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MessageHeaderSource is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export class MessageHeaderResponse extends fhir.BackboneElement implements fhir.IMessageHeaderResponse {
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  public code: MessageHeaderResponseCodeEnum|null;
  public _code?: fhir.FhirElement|undefined;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  public details?: fhir.Reference|undefined;
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  public identifier: string|null;
  public _identifier?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MessageHeaderResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMessageHeaderResponse> = {}) {
    super(source);
    this.code = null;
    if (source["code"]) { this.code = source.code; }
    if (this.code === undefined) { this.code = null }
    if (source["_code"]) { this._code = new fhir.FhirElement(source._code!); }
    if (source["details"]) { this.details = new fhir.Reference(source.details!); }
    this.identifier = null;
    if (source["identifier"]) { this.identifier = source.identifier; }
    if (this.identifier === undefined) { this.identifier = null }
    if (source["_identifier"]) { this._identifier = new fhir.FhirElement(source._identifier!); }
  }
  /**
   * Check if the current MessageHeaderResponse contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    if (this["identifier"] === undefined) { missingElements.push("identifier"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MessageHeaderResponse from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMessageHeaderResponse):MessageHeaderResponse {
    var dest:MessageHeaderResponse = new MessageHeaderResponse(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MessageHeaderResponse is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export class MessageHeader extends fhir.DomainResource implements fhir.IMessageHeader {
  /**
   * Resource Type Name
   */
  public override resourceType: "MessageHeader";
  /**
   * Usually only for the request but can be used in a response.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Permanent link to the MessageDefinition for this message.
   */
  public definition?: string|undefined;
  public _definition?: fhir.FhirElement|undefined;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  public destination?: fhir.MessageHeaderDestination[]|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  public eventCoding?: fhir.Coding|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  public eventUri?: string|undefined;
  public _eventUri?: fhir.FhirElement|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  public focus?: fhir.Reference[]|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  public reason?: fhir.CodeableConcept|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  public response?: fhir.MessageHeaderResponse|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * The source application from which this message originated.
   */
  public source: fhir.MessageHeaderSource|null;
  /**
   * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMessageHeader> = {}) {
    super(source);
    this.resourceType = 'MessageHeader';
    if (source["author"]) { this.author = new fhir.Reference(source.author!); }
    if (source["definition"]) { this.definition = source.definition; }
    if (source["_definition"]) { this._definition = new fhir.FhirElement(source._definition!); }
    if (source["destination"]) { this.destination = source.destination.map((x:Partial<fhir.IMessageHeaderDestination>) => new fhir.MessageHeaderDestination(x)); }
    if (source["enterer"]) { this.enterer = new fhir.Reference(source.enterer!); }
    if (source["eventCoding"]) { this.eventCoding = new fhir.Coding(source.eventCoding!); }
    if (source["eventUri"]) { this.eventUri = source.eventUri; }
    if (source["_eventUri"]) { this._eventUri = new fhir.FhirElement(source._eventUri!); }
    if (source["focus"]) { this.focus = source.focus.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["reason"]) { this.reason = new fhir.CodeableConcept(source.reason!); }
    if (source["response"]) { this.response = new fhir.MessageHeaderResponse(source.response!); }
    if (source["responsible"]) { this.responsible = new fhir.Reference(source.responsible!); }
    if (source["sender"]) { this.sender = new fhir.Reference(source.sender!); }
    this.source = null;
    if (source["source"]) { this.source = new fhir.MessageHeaderSource(source.source!); }
    if (this.source === undefined) { this.source = null }
  }
  /**
   * Check if the current MessageHeader contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["source"] === undefined) { missingElements.push("source"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MessageHeader from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMessageHeader):MessageHeader {
    var dest:MessageHeader = new MessageHeader(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MessageHeader is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the MessageHeader.response.code field
 */
export enum MessageHeaderResponseCodeEnum {
  OK = "ok",
  TRANSIENT_ERROR = "transient-error",
  FATAL_ERROR = "fatal-error",
}
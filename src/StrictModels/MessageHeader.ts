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
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export class MessageHeaderDestination extends fhirModels.BackboneElement implements fhirInterfaces.IMessageHeaderDestination {
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string;
  _endpoint?: fhirModels.Element|undefined;
  /**
   * Human-readable name for the target system.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  receiver?: fhirModels.Reference|undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  target?: fhirModels.Reference|undefined;
  /**
   * Default constructor for MessageHeaderDestination from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageHeaderDestination) {
    super(source);
    {
      this.endpoint = source.endpoint;
    }
    if (source["_endpoint"] !== undefined) {
      this._endpoint = new fhirModels.Element(source._endpoint);
    }
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    if (source["receiver"] !== undefined) {
      this.receiver = new fhirModels.Reference(source.receiver);
    }
    if (source["target"] !== undefined) {
      this.target = new fhirModels.Reference(source.target);
    }
  }
}
/**
 * The source application from which this message originated.
 */
export class MessageHeaderSource extends fhirModels.BackboneElement implements fhirInterfaces.IMessageHeaderSource {
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  contact?: fhirModels.ContactPoint|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string;
  _endpoint?: fhirModels.Element|undefined;
  /**
   * Human-readable name for the source system.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  software?: string|undefined;
  _software?: fhirModels.Element|undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for MessageHeaderSource from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageHeaderSource) {
    super(source);
    if (source["contact"] !== undefined) {
      this.contact = new fhirModels.ContactPoint(source.contact);
    }
    {
      this.endpoint = source.endpoint;
    }
    if (source["_endpoint"] !== undefined) {
      this._endpoint = new fhirModels.Element(source._endpoint);
    }
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    if (source["software"] !== undefined) {
      this.software = source.software;
    }
    if (source["_software"] !== undefined) {
      this._software = new fhirModels.Element(source._software);
    }
    if (source["version"] !== undefined) {
      this.version = source.version;
    }
    if (source["_version"] !== undefined) {
      this._version = new fhirModels.Element(source._version);
    }
  }
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export class MessageHeaderResponse extends fhirModels.BackboneElement implements fhirInterfaces.IMessageHeaderResponse {
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  code: MessageHeaderResponseCodeEnum;
  _code?: fhirModels.Element|undefined;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  details?: fhirModels.Reference|undefined;
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  identifier: string;
  _identifier?: fhirModels.Element|undefined;
  /**
   * Default constructor for MessageHeaderResponse from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageHeaderResponse) {
    super(source);
    {
      this.code = source.code;
    }
    if (source["_code"] !== undefined) {
      this._code = new fhirModels.Element(source._code);
    }
    if (source["details"] !== undefined) {
      this.details = new fhirModels.Reference(source.details);
    }
    {
      this.identifier = source.identifier;
    }
    if (source["_identifier"] !== undefined) {
      this._identifier = new fhirModels.Element(source._identifier);
    }
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
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export class MessageHeader extends fhirModels.DomainResource implements fhirInterfaces.IMessageHeader {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MessageHeader";
  /**
   * Usually only for the request but can be used in a response.
   */
  author?: fhirModels.Reference|undefined;
  /**
   * Permanent link to the MessageDefinition for this message.
   */
  definition?: string|undefined;
  _definition?: fhirModels.Element|undefined;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  destination?: fhirModels.MessageHeaderDestination[]|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  enterer?: fhirModels.Reference|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventCoding?: fhirModels.Coding|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventUri?: string|undefined;
  _eventUri?: fhirModels.Element|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  focus?: fhirModels.Reference[]|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  reason?: fhirModels.CodeableConcept|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  response?: fhirModels.MessageHeaderResponse|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  responsible?: fhirModels.Reference|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  sender?: fhirModels.Reference|undefined;
  /**
   * The source application from which this message originated.
   */
  source: fhirModels.MessageHeaderSource;
  /**
   * Default constructor for MessageHeader from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageHeader) {
    super(source);
    if ((source['resourceType'] !== "MessageHeader") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MessageHeader'; }
    if (source["author"] !== undefined) {
      this.author = new fhirModels.Reference(source.author);
    }
    if (source["definition"] !== undefined) {
      this.definition = source.definition;
    }
    if (source["_definition"] !== undefined) {
      this._definition = new fhirModels.Element(source._definition);
    }
    if (source["destination"] !== undefined) {
      this.destination = source.destination.map((x) => new fhirModels.MessageHeaderDestination(x));
    }
    if (source["enterer"] !== undefined) {
      this.enterer = new fhirModels.Reference(source.enterer);
    }
    if (source["eventCoding"] !== undefined) {
      this.eventCoding = new fhirModels.Coding(source.eventCoding);
    }
    if (source["eventUri"] !== undefined) {
      this.eventUri = source.eventUri;
    }
    if (source["_eventUri"] !== undefined) {
      this._eventUri = new fhirModels.Element(source._eventUri);
    }
    if (source["focus"] !== undefined) {
      this.focus = source.focus.map((x) => new fhirModels.Reference(x));
    }
    if (source["reason"] !== undefined) {
      this.reason = new fhirModels.CodeableConcept(source.reason);
    }
    if (source["response"] !== undefined) {
      this.response = new fhirModels.MessageHeaderResponse(source.response);
    }
    if (source["responsible"] !== undefined) {
      this.responsible = new fhirModels.Reference(source.responsible);
    }
    if (source["sender"] !== undefined) {
      this.sender = new fhirModels.Reference(source.sender);
    }
    {
      this.source = new fhirModels.MessageHeaderSource(source.source);
    }
  }
}

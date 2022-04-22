// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MessageHeader

import * as fhir from '../fhir.js'

import { ResponseCodeValueSet, ResponseCodeValueSetType, ResponseCodeValueSetEnum } from '../fhirValueSets/ResponseCodeValueSet.js'
import { MessageReasonEncounterValueSet, MessageReasonEncounterValueSetType, MessageReasonEncounterValueSetEnum } from '../fhirValueSets/MessageReasonEncounterValueSet.js'

/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export type IMessageHeaderDestination = fhir.IBackboneElement & { 
  /**
   * Human-readable name for the target system.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.destination.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  target?: fhir.IReference|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string|null;
  /**
   * Extended properties for primitive element: MessageHeader.destination.endpoint
   */
  _endpoint?: fhir.IFhirElement|undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  receiver?: fhir.IReference|undefined;
}

/**
 * The source application from which this message originated.
 */
export type IMessageHeaderSource = fhir.IBackboneElement & { 
  /**
   * Human-readable name for the source system.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  software?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.software
   */
  _software?: fhir.IFhirElement|undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.version
   */
  _version?: fhir.IFhirElement|undefined;
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  contact?: fhir.IContactPoint|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: string|null;
  /**
   * Extended properties for primitive element: MessageHeader.source.endpoint
   */
  _endpoint?: fhir.IFhirElement|undefined;
}

/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export type IMessageHeaderResponse = fhir.IBackboneElement & { 
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  identifier: string|null;
  /**
   * Extended properties for primitive element: MessageHeader.response.identifier
   */
  _identifier?: fhir.IFhirElement|undefined;
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  code: ResponseCodeValueSetEnum|null;
  /**
   * Extended properties for primitive element: MessageHeader.response.code
   */
  _code?: fhir.IFhirElement|undefined;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  details?: fhir.IReference|undefined;
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
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventCoding?: fhir.ICoding|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventUri?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.event[x]
   */
  _eventUri?: fhir.IFhirElement|undefined;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  destination?: fhir.IMessageHeaderDestination[]|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  sender?: fhir.IReference|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  enterer?: fhir.IReference|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  author?: fhir.IReference|undefined;
  /**
   * The source application from which this message originated.
   */
  source: fhir.IMessageHeaderSource|null;
  /**
   * Usually only for the request but can be used in a response.
   */
  responsible?: fhir.IReference|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  reason?: fhir.ICodeableConcept|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  response?: fhir.IMessageHeaderResponse|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  focus?: fhir.IReference[]|undefined;
  /**
   * Permanent link to the MessageDefinition for this message.
   */
  definition?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.definition
   */
  _definition?: fhir.IFhirElement|undefined;
}

/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export class MessageHeaderDestination extends fhir.BackboneElement implements IMessageHeaderDestination {
  /**
   * Human-readable name for the target system.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.destination.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  public target?: fhir.Reference|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  public endpoint: string|null;
  /**
   * Extended properties for primitive element: MessageHeader.destination.endpoint
   */
  public _endpoint?: fhir.FhirElement|undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  public receiver?: fhir.Reference|undefined;
  /**
   * Default constructor for MessageHeaderDestination - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMessageHeaderDestination> = { }) {
    super(source);
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['target']) { this.target = new fhir.Reference(source.target!); }
    if (source['endpoint']) { this.endpoint = source.endpoint; }
    else { this.endpoint = null; }
    if (source['_endpoint']) { this._endpoint = new fhir.FhirElement(source._endpoint!); }
    if (source['receiver']) { this.receiver = new fhir.Reference(source.receiver!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["target"]) { results.push(...this.target.doModelValidation()); }
    if (!this["endpoint"]) { results.push(["endpoint",'Missing required element: MessageHeader.destination.endpoint']); }
    if (this["_endpoint"]) { results.push(...this._endpoint.doModelValidation()); }
    if (this["receiver"]) { results.push(...this.receiver.doModelValidation()); }
    return results;
  }
}

/**
 * The source application from which this message originated.
 */
export class MessageHeaderSource extends fhir.BackboneElement implements IMessageHeaderSource {
  /**
   * Human-readable name for the source system.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  public software?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.software
   */
  public _software?: fhir.FhirElement|undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  public version?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.version
   */
  public _version?: fhir.FhirElement|undefined;
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  public contact?: fhir.ContactPoint|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  public endpoint: string|null;
  /**
   * Extended properties for primitive element: MessageHeader.source.endpoint
   */
  public _endpoint?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MessageHeaderSource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMessageHeaderSource> = { }) {
    super(source);
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['software']) { this.software = source.software; }
    if (source['_software']) { this._software = new fhir.FhirElement(source._software!); }
    if (source['version']) { this.version = source.version; }
    if (source['_version']) { this._version = new fhir.FhirElement(source._version!); }
    if (source['contact']) { this.contact = new fhir.ContactPoint(source.contact!); }
    if (source['endpoint']) { this.endpoint = source.endpoint; }
    else { this.endpoint = null; }
    if (source['_endpoint']) { this._endpoint = new fhir.FhirElement(source._endpoint!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["_software"]) { results.push(...this._software.doModelValidation()); }
    if (this["_version"]) { results.push(...this._version.doModelValidation()); }
    if (this["contact"]) { results.push(...this.contact.doModelValidation()); }
    if (!this["endpoint"]) { results.push(["endpoint",'Missing required element: MessageHeader.source.endpoint']); }
    if (this["_endpoint"]) { results.push(...this._endpoint.doModelValidation()); }
    return results;
  }
}

/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export class MessageHeaderResponse extends fhir.BackboneElement implements IMessageHeaderResponse {
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  public identifier: string|null;
  /**
   * Extended properties for primitive element: MessageHeader.response.identifier
   */
  public _identifier?: fhir.FhirElement|undefined;
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  public code: ResponseCodeValueSetEnum|null;
  /**
   * Extended properties for primitive element: MessageHeader.response.code
   */
  public _code?: fhir.FhirElement|undefined;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  public details?: fhir.Reference|undefined;
  /**
   * Default constructor for MessageHeaderResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMessageHeaderResponse> = { }) {
    super(source);
    if (source['identifier']) { this.identifier = source.identifier; }
    else { this.identifier = null; }
    if (source['_identifier']) { this._identifier = new fhir.FhirElement(source._identifier!); }
    if (source['code']) { this.code = source.code; }
    else { this.code = null; }
    if (source['_code']) { this._code = new fhir.FhirElement(source._code!); }
    if (source['details']) { this.details = new fhir.Reference(source.details!); }
  }
  /**
   * Required-bound Value Set for code
   */
  public static codeRequiredValueSet():ResponseCodeValueSetType {
    return ResponseCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["identifier"]) { results.push(["identifier",'Missing required element: MessageHeader.response.identifier']); }
    if (this["_identifier"]) { results.push(...this._identifier.doModelValidation()); }
    if (!this["code"]) { results.push(["code",'Missing required element: MessageHeader.response.code']); }
    if (this["_code"]) { results.push(...this._code.doModelValidation()); }
    if (this["details"]) { results.push(...this.details.doModelValidation()); }
    return results;
  }
}

/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export class MessageHeader extends fhir.DomainResource implements IMessageHeader {
  /**
   * Resource Type Name
   */
  public resourceType: "MessageHeader";
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  public eventCoding?: fhir.Coding|undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  public eventUri?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.event[x]
   */
  public _eventUri?: fhir.FhirElement|undefined;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  public destination?: fhir.MessageHeaderDestination[]|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  public author?: fhir.Reference|undefined;
  /**
   * The source application from which this message originated.
   */
  public source: fhir.MessageHeaderSource|null;
  /**
   * Usually only for the request but can be used in a response.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  public reason?: fhir.CodeableConcept|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  public response?: fhir.MessageHeaderResponse|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  public focus?: fhir.Reference[]|undefined;
  /**
   * Permanent link to the MessageDefinition for this message.
   */
  public definition?: string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.definition
   */
  public _definition?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMessageHeader> = { }) {
    super(source);
    this.resourceType = 'MessageHeader';
    if (source['eventCoding']) { this.eventCoding = new fhir.Coding(source.eventCoding!); }
    if (source['eventUri']) { this.eventUri = source.eventUri; }
    if (source['_eventUri']) { this._eventUri = new fhir.FhirElement(source._eventUri!); }
    if (source['destination']) { this.destination = source.destination.map((x) => new fhir.MessageHeaderDestination(x)); }
    if (source['sender']) { this.sender = new fhir.Reference(source.sender!); }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer!); }
    if (source['author']) { this.author = new fhir.Reference(source.author!); }
    if (source['source']) { this.source = new fhir.MessageHeaderSource(source.source!); }
    else { this.source = null; }
    if (source['responsible']) { this.responsible = new fhir.Reference(source.responsible!); }
    if (source['reason']) { this.reason = new fhir.CodeableConcept(source.reason!); }
    if (source['response']) { this.response = new fhir.MessageHeaderResponse(source.response!); }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.Reference(x)); }
    if (source['definition']) { this.definition = source.definition; }
    if (source['_definition']) { this._definition = new fhir.FhirElement(source._definition!); }
  }
  /**
   * Example-bound Value Set for reason
   */
  public static reasonExampleValueSet():MessageReasonEncounterValueSetType {
    return MessageReasonEncounterValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: MessageHeader.resourceType']); }
    if (this["eventCoding"]) { results.push(...this.eventCoding.doModelValidation()); }
    if (this["_eventUri"]) { results.push(...this._eventUri.doModelValidation()); }
    if (this["destination"]) { this.destination.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["sender"]) { results.push(...this.sender.doModelValidation()); }
    if (this["enterer"]) { results.push(...this.enterer.doModelValidation()); }
    if (this["author"]) { results.push(...this.author.doModelValidation()); }
    if (!this["source"]) { results.push(["source",'Missing required element: MessageHeader.source']); }
    if (this["source"]) { results.push(...this.source.doModelValidation()); }
    if (this["responsible"]) { results.push(...this.responsible.doModelValidation()); }
    if (this["reason"]) { results.push(...this.reason.doModelValidation()); }
    if (this["response"]) { results.push(...this.response.doModelValidation()); }
    if (this["focus"]) { this.focus.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_definition"]) { results.push(...this._definition.doModelValidation()); }
    return results;
  }
}

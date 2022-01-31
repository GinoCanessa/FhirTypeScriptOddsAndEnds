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
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export class MessageDefinitionFocus extends fhirModels.BackboneElement implements fhirInterfaces.IMessageDefinitionFocus {
  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   */
  code: string;
  _code?: fhirModels.Element|undefined;
  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  max?: string|undefined;
  _max?: fhirModels.Element|undefined;
  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  min: number;
  _min?: fhirModels.Element|undefined;
  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   */
  profile?: string|undefined;
  _profile?: fhirModels.Element|undefined;
  /**
   * Default constructor for MessageDefinitionFocus from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageDefinitionFocus) {
    super(source);
    {
      this.code = source.code;
    }
    if (source["_code"] !== undefined) {
      this._code = new fhirModels.Element(source._code);
    }
    if (source["max"] !== undefined) {
      this.max = source.max;
    }
    if (source["_max"] !== undefined) {
      this._max = new fhirModels.Element(source._max);
    }
    {
      this.min = source.min;
    }
    if (source["_min"] !== undefined) {
      this._min = new fhirModels.Element(source._min);
    }
    if (source["profile"] !== undefined) {
      this.profile = source.profile;
    }
    if (source["_profile"] !== undefined) {
      this._profile = new fhirModels.Element(source._profile);
    }
  }
}
/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export class MessageDefinitionAllowedResponse extends fhirModels.BackboneElement implements fhirInterfaces.IMessageDefinitionAllowedResponse {
  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  message: string;
  _message?: fhirModels.Element|undefined;
  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   */
  situation?: string|undefined;
  _situation?: fhirModels.Element|undefined;
  /**
   * Default constructor for MessageDefinitionAllowedResponse from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageDefinitionAllowedResponse) {
    super(source);
    {
      this.message = source.message;
    }
    if (source["_message"] !== undefined) {
      this._message = new fhirModels.Element(source._message);
    }
    if (source["situation"] !== undefined) {
      this.situation = source.situation;
    }
    if (source["_situation"] !== undefined) {
      this._situation = new fhirModels.Element(source._situation);
    }
  }
}
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export class MessageDefinition extends fhirModels.DomainResource implements fhirInterfaces.IMessageDefinition {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MessageDefinition";
  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   */
  allowedResponse?: fhirModels.MessageDefinitionAllowedResponse[]|undefined;
  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  base?: string|undefined;
  _base?: fhirModels.Element|undefined;
  /**
   * The impact of the content of the message.
   */
  category?: MessageDefinitionCategoryEnum|undefined;
  _category?: fhirModels.Element|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[]|undefined;
  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   */
  copyright?: string|undefined;
  _copyright?: fhirModels.Element|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: string;
  _date?: fhirModels.Element|undefined;
  /**
   * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  eventCoding?: fhirModels.Coding|undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  eventUri?: string|undefined;
  _eventUri?: fhirModels.Element|undefined;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  _experimental?: fhirModels.Element|undefined;
  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   */
  focus?: fhirModels.MessageDefinitionFocus[]|undefined;
  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
   */
  graph?: string[]|undefined;
  _graph?: fhirModels.Element[]|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
   */
  parent?: string[]|undefined;
  _parent?: fhirModels.Element[]|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirModels.Element|undefined;
  /**
   * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   */
  purpose?: string|undefined;
  _purpose?: fhirModels.Element|undefined;
  /**
   * A MessageDefinition that is superseded by this definition.
   */
  replaces?: string[]|undefined;
  _replaces?: fhirModels.Element[]|undefined;
  /**
   * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
   */
  responseRequired?: MessageDefinitionResponseRequiredEnum|undefined;
  _responseRequired?: fhirModels.Element|undefined;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  status: MessageDefinitionStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[]|undefined;
  /**
   * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for MessageDefinition from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMessageDefinition) {
    super(source);
    if ((source['resourceType'] !== "MessageDefinition") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MessageDefinition'; }
    if (source["allowedResponse"] !== undefined) {
      this.allowedResponse = source.allowedResponse.map((x) => new fhirModels.MessageDefinitionAllowedResponse(x));
    }
    if (source["base"] !== undefined) {
      this.base = source.base;
    }
    if (source["_base"] !== undefined) {
      this._base = new fhirModels.Element(source._base);
    }
    if (source["category"] !== undefined) {
      this.category = source.category;
    }
    if (source["_category"] !== undefined) {
      this._category = new fhirModels.Element(source._category);
    }
    if (source["contact"] !== undefined) {
      this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x));
    }
    if (source["copyright"] !== undefined) {
      this.copyright = source.copyright;
    }
    if (source["_copyright"] !== undefined) {
      this._copyright = new fhirModels.Element(source._copyright);
    }
    {
      this.date = source.date;
    }
    if (source["_date"] !== undefined) {
      this._date = new fhirModels.Element(source._date);
    }
    if (source["description"] !== undefined) {
      this.description = source.description;
    }
    if (source["_description"] !== undefined) {
      this._description = new fhirModels.Element(source._description);
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
    if (source["experimental"] !== undefined) {
      this.experimental = source.experimental;
    }
    if (source["_experimental"] !== undefined) {
      this._experimental = new fhirModels.Element(source._experimental);
    }
    if (source["focus"] !== undefined) {
      this.focus = source.focus.map((x) => new fhirModels.MessageDefinitionFocus(x));
    }
    if (source["graph"] !== undefined) {
      this.graph = source.graph.map((x) => (x));
    }
    if (source["_graph"] !== undefined) {
      this._graph = source._graph.map((x) => new fhirModels.Element(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["jurisdiction"] !== undefined) {
      this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["name"] !== undefined) {
      this.name = source.name;
    }
    if (source["_name"] !== undefined) {
      this._name = new fhirModels.Element(source._name);
    }
    if (source["parent"] !== undefined) {
      this.parent = source.parent.map((x) => (x));
    }
    if (source["_parent"] !== undefined) {
      this._parent = source._parent.map((x) => new fhirModels.Element(x));
    }
    if (source["publisher"] !== undefined) {
      this.publisher = source.publisher;
    }
    if (source["_publisher"] !== undefined) {
      this._publisher = new fhirModels.Element(source._publisher);
    }
    if (source["purpose"] !== undefined) {
      this.purpose = source.purpose;
    }
    if (source["_purpose"] !== undefined) {
      this._purpose = new fhirModels.Element(source._purpose);
    }
    if (source["replaces"] !== undefined) {
      this.replaces = source.replaces.map((x) => (x));
    }
    if (source["_replaces"] !== undefined) {
      this._replaces = source._replaces.map((x) => new fhirModels.Element(x));
    }
    if (source["responseRequired"] !== undefined) {
      this.responseRequired = source.responseRequired;
    }
    if (source["_responseRequired"] !== undefined) {
      this._responseRequired = new fhirModels.Element(source._responseRequired);
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    if (source["title"] !== undefined) {
      this.title = source.title;
    }
    if (source["_title"] !== undefined) {
      this._title = new fhirModels.Element(source._title);
    }
    if (source["url"] !== undefined) {
      this.url = source.url;
    }
    if (source["_url"] !== undefined) {
      this._url = new fhirModels.Element(source._url);
    }
    if (source["useContext"] !== undefined) {
      this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x));
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
 * Code Values for the MessageDefinition.category field
 */
export enum MessageDefinitionCategoryEnum {
  CONSEQUENCE = "consequence",
  CURRENCY = "currency",
  NOTIFICATION = "notification",
}
/**
 * Code Values for the MessageDefinition.responseRequired field
 */
export enum MessageDefinitionResponseRequiredEnum {
  ALWAYS = "always",
  ON_ERROR = "on-error",
  NEVER = "never",
  ON_SUCCESS = "on-success",
}
/**
 * Code Values for the MessageDefinition.status field
 */
export enum MessageDefinitionStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}

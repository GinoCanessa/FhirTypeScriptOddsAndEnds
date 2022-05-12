// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MessageDefinition

import * as fhir from '../fhir.js';

import { ResourceTypesValueSet, ResourceTypesValueSetType,} from '../fhirValueSets/ResourceTypesValueSet.js';
import { ResourceTypesValueSetEnum } from '../valueSetEnums.js';
import { PublicationStatusValueSet, PublicationStatusValueSetType,} from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { MessageSignificanceCategoryValueSet, MessageSignificanceCategoryValueSetType,} from '../fhirValueSets/MessageSignificanceCategoryValueSet.js';
import { MessageSignificanceCategoryValueSetEnum } from '../valueSetEnums.js';
import { MessageheaderResponseRequestValueSet, MessageheaderResponseRequestValueSetType,} from '../fhirValueSets/MessageheaderResponseRequestValueSet.js';
import { MessageheaderResponseRequestValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the MessageDefinitionFocus type.
 */
export interface MessageDefinitionFocusArgs extends fhir.BackboneElementArgs {
  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   */
  profile?: fhir.FhirCanonical|string|undefined;
  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  min: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  max?: fhir.FhirString|string|undefined;
}

/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export class MessageDefinitionFocus extends fhir.BackboneElement {
  readonly __dataType:string = 'MessageDefinitionFocus';
  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   */
  public code: fhir.FhirCode|null;
  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   */
  public profile?: fhir.FhirCanonical|undefined;
  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  public min: fhir.FhirUnsignedInt|null;
  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  public max?: fhir.FhirString|undefined;
  /**
   * Default constructor for MessageDefinitionFocus - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageDefinitionFocusArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['profile']) { this.profile = new fhir.FhirCanonical({value: source.profile}); }
    if (source['min']) { this.min = new fhir.FhirUnsignedInt({value: source.min}); }
    else { this.min = null; }
    if (source['max']) { this.max = new fhir.FhirString({value: source.max}); }
  }
  /**
   * Required-bound Value Set for code
   */
  public static codeRequiredValueSet():ResourceTypesValueSetType {
    return ResourceTypesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property code:fhir.FhirCode fhir: MessageDefinition.focus.code:code", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["profile"]) { outcome.issue!.push(...this.profile.doModelValidation().issue!); }
    if (!this['min']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property min:fhir.FhirUnsignedInt fhir: MessageDefinition.focus.min:unsignedInt", }));
    }
    if (this["min"]) { outcome.issue!.push(...this.min.doModelValidation().issue!); }
    if (this["max"]) { outcome.issue!.push(...this.max.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MessageDefinitionAllowedResponse type.
 */
export interface MessageDefinitionAllowedResponseArgs extends fhir.BackboneElementArgs {
  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  message: fhir.FhirCanonical|string|undefined;
  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   */
  situation?: fhir.FhirMarkdown|string|undefined;
}

/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export class MessageDefinitionAllowedResponse extends fhir.BackboneElement {
  readonly __dataType:string = 'MessageDefinitionAllowedResponse';
  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  public message: fhir.FhirCanonical|null;
  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   */
  public situation?: fhir.FhirMarkdown|undefined;
  /**
   * Default constructor for MessageDefinitionAllowedResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageDefinitionAllowedResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['message']) { this.message = new fhir.FhirCanonical({value: source.message}); }
    else { this.message = null; }
    if (source['situation']) { this.situation = new fhir.FhirMarkdown({value: source.situation}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['message']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property message:fhir.FhirCanonical fhir: MessageDefinition.allowedResponse.message:canonical", }));
    }
    if (this["message"]) { outcome.issue!.push(...this.message.doModelValidation().issue!); }
    if (this["situation"]) { outcome.issue!.push(...this.situation.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MessageDefinition type.
 */
export interface MessageDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MessageDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * A MessageDefinition that is superseded by this definition.
   */
  replaces?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: fhir.FhirDateTime|string|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  base?: fhir.FhirCanonical|string|undefined;
  /**
   * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
   */
  parent?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  event?: fhir.Coding|fhir.FhirUri|undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  eventCoding?: fhir.CodingArgs|undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  eventUri?: fhir.FhirUri|string|undefined;
  /**
   * The impact of the content of the message.
   */
  category?: MessageSignificanceCategoryValueSetEnum|undefined;
  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   */
  focus?: fhir.MessageDefinitionFocusArgs[]|undefined;
  /**
   * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
   */
  responseRequired?: MessageheaderResponseRequestValueSetEnum|undefined;
  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   */
  allowedResponse?: fhir.MessageDefinitionAllowedResponseArgs[]|undefined;
  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
   */
  graph?: fhir.FhirCanonical[]|string[]|undefined;
}

/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export class MessageDefinition extends fhir.DomainResource {
  readonly __dataType:string = 'MessageDefinition';
  /**
   * Resource Type Name
   */
  public resourceType: "MessageDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * A MessageDefinition that is superseded by this definition.
   */
  public replaces?: fhir.FhirCanonical[]|undefined = [];
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date: fhir.FhirDateTime|null;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined = [];
  /**
   * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined = [];
  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined = [];
  /**
   * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  public base?: fhir.FhirCanonical|undefined;
  /**
   * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
   */
  public parent?: fhir.FhirCanonical[]|undefined = [];
  /**
   * Event code or link to the EventDefinition.
   */
  public event: (fhir.Coding|fhir.FhirUri)|null;
  readonly __eventIsChoice:true = true;
  /**
   * The impact of the content of the message.
   */
  public category?: MessageSignificanceCategoryValueSetEnum|undefined;
  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   */
  public focus?: fhir.MessageDefinitionFocus[]|undefined = [];
  /**
   * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
   */
  public responseRequired?: MessageheaderResponseRequestValueSetEnum|undefined;
  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   */
  public allowedResponse?: fhir.MessageDefinitionAllowedResponse[]|undefined = [];
  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
   */
  public graph?: fhir.FhirCanonical[]|undefined = [];
  /**
   * Default constructor for MessageDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MessageDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    else { this.date = null; }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    if (source['purpose']) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}); }
    if (source['copyright']) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}); }
    if (source['base']) { this.base = new fhir.FhirCanonical({value: source.base}); }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['event']) { this.event = source.event; }
    else if (source['eventCoding']) { this.event = new fhir.Coding(source.eventCoding); }
    else if (source['eventUri']) { this.event = new fhir.FhirUri({value: source.eventUri}); }
    else { this.event = null; }
    if (source['category']) { this.category = source.category; }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.MessageDefinitionFocus(x)); }
    if (source['responseRequired']) { this.responseRequired = source.responseRequired; }
    if (source['allowedResponse']) { this.allowedResponse = source.allowedResponse.map((x) => new fhir.MessageDefinitionAllowedResponse(x)); }
    if (source['graph']) { this.graph = source.graph.map((x) => new fhir.FhirCanonical({value: x})); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Required-bound Value Set for category
   */
  public static categoryRequiredValueSet():MessageSignificanceCategoryValueSetType {
    return MessageSignificanceCategoryValueSet;
  }
  /**
   * Required-bound Value Set for responseRequired
   */
  public static responseRequiredRequiredValueSet():MessageheaderResponseRequestValueSetType {
    return MessageheaderResponseRequestValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'MessageDefinition' fhir: MessageDefinition.resourceType:'MessageDefinition'", }));
    }
    if (this["url"]) { outcome.issue!.push(...this.url.doModelValidation().issue!); }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["version"]) { outcome.issue!.push(...this.version.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    if (this["replaces"]) { this.replaces.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: MessageDefinition.status:code", }));
    }
    if (this["experimental"]) { outcome.issue!.push(...this.experimental.doModelValidation().issue!); }
    if (!this['date']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property date:fhir.FhirDateTime fhir: MessageDefinition.date:dateTime", }));
    }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["publisher"]) { outcome.issue!.push(...this.publisher.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["useContext"]) { this.useContext.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["purpose"]) { outcome.issue!.push(...this.purpose.doModelValidation().issue!); }
    if (this["copyright"]) { outcome.issue!.push(...this.copyright.doModelValidation().issue!); }
    if (this["base"]) { outcome.issue!.push(...this.base.doModelValidation().issue!); }
    if (this["parent"]) { this.parent.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['event']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property event: fhir: MessageDefinition.event[x]:", }));
    }
    if (this["focus"]) { this.focus.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["allowedResponse"]) { this.allowedResponse.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["graph"]) { this.graph.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}

import * as fhir from '../fhirJson.js';
/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export interface MessageDefinitionFocus extends fhir.BackboneElement {
    /**
     * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.code
     */
    _code?: fhir.FhirElement;
    /**
     * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.profile
     */
    _profile?: fhir.FhirElement;
    /**
     * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    min: number | null;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.min
     */
    _min?: fhir.FhirElement;
    /**
     * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.max
     */
    _max?: fhir.FhirElement;
}
/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export interface MessageDefinitionAllowedResponse extends fhir.BackboneElement {
    /**
     * A reference to the message definition that must be adhered to by this supported response.
     */
    message: string | null;
    /**
     * Extended properties for primitive element: MessageDefinition.allowedResponse.message
     */
    _message?: fhir.FhirElement;
    /**
     * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
     */
    situation?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.allowedResponse.situation
     */
    _situation?: fhir.FhirElement;
}
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export interface MessageDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MessageDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * A MessageDefinition that is superseded by this definition.
     */
    replaces?: string[] | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.replaces
     */
    _replaces?: (fhir.FhirElement | null)[];
    /**
     * Allows filtering of message definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Allows filtering of message definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: MessageDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The MessageDefinition that is the basis for the contents of this resource.
     */
    base?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.base
     */
    _base?: fhir.FhirElement;
    /**
     * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
     */
    parent?: string[] | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.parent
     */
    _parent?: (fhir.FhirElement | null)[];
    /**
     * Event code or link to the EventDefinition.
     */
    eventCoding?: fhir.Coding | undefined;
    /**
     * Event code or link to the EventDefinition.
     */
    eventUri?: string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.event[x]
     */
    _eventUri?: fhir.FhirElement;
    /**
     * The impact of the content of the message.
     */
    category?: 'consequence' | 'currency' | 'notification' | undefined;
    /**
     * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
     */
    focus?: fhir.MessageDefinitionFocus[] | undefined;
    /**
     * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
     */
    responseRequired?: 'always' | 'never' | 'on-error' | 'on-success' | undefined;
    /**
     * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
     */
    allowedResponse?: fhir.MessageDefinitionAllowedResponse[] | undefined;
    /**
     * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
     */
    graph?: string[] | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.graph
     */
    _graph?: (fhir.FhirElement | null)[];
}
//# sourceMappingURL=MessageDefinition.d.ts.map
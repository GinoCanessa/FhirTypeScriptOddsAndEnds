import * as fhir from '../fhirJson.js';
/**
 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 */
export interface CapabilityStatementSoftware extends fhir.BackboneElement {
    /**
     * Name the software is known by.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.name
     */
    _name?: fhir.FhirElement;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.version
     */
    _version?: fhir.FhirElement;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.releaseDate
     */
    _releaseDate?: fhir.FhirElement;
}
/**
 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export interface CapabilityStatementImplementation extends fhir.BackboneElement {
    /**
     * Information about the specific installation that this capability statement relates to.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementation.description
     */
    _description?: fhir.FhirElement;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementation.url
     */
    _url?: fhir.FhirElement;
    /**
     * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
     */
    custodian?: fhir.Reference | undefined;
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export interface CapabilityStatementRestSecurity extends fhir.BackboneElement {
    /**
     * The easiest CORS headers to add are Access-Control-Allow-Origin: * &amp; Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
     */
    cors?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.cors
     */
    _cors?: fhir.FhirElement;
    /**
     * Types of security services that are supported/required by the system.
     */
    service?: fhir.CodeableConcept[] | undefined;
    /**
     * General description of how security works.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.description
     */
    _description?: fhir.FhirElement;
}
/**
 * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
 */
export interface CapabilityStatementRestResourceInteraction extends fhir.BackboneElement {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: 'create' | 'delete' | 'history-instance' | 'history-type' | 'patch' | 'read' | 'search-type' | 'update' | 'vread' | null;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.interaction.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
 */
export interface CapabilityStatementRestResourceSearchParam extends fhir.BackboneElement {
    /**
     * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.name
     */
    _name?: fhir.FhirElement;
    /**
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'special' | 'string' | 'token' | 'uri' | null;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
 * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
 */
export interface CapabilityStatementRestResourceOperation extends fhir.BackboneElement {
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.operation.name
     */
    _name?: fhir.FhirElement;
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.operation.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.operation.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Max of one repetition per resource type.
 */
export interface CapabilityStatementRestResource extends fhir.BackboneElement {
    /**
     * A type of resource exposed via the restful interface.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.type
     */
    _type?: fhir.FhirElement;
    /**
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.profile
     */
    _profile?: fhir.FhirElement;
    /**
     * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
     */
    supportedProfile?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.supportedProfile
     */
    _supportedProfile?: (fhir.FhirElement | null)[];
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
     */
    interaction?: fhir.CapabilityStatementRestResourceInteraction[] | undefined;
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: 'no-version' | 'versioned' | 'versioned-update' | undefined;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.readHistory
     */
    _readHistory?: fhir.FhirElement;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.updateCreate
     */
    _updateCreate?: fhir.FhirElement;
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalCreate
     */
    _conditionalCreate?: fhir.FhirElement;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: 'full-support' | 'modified-since' | 'not-match' | 'not-supported' | undefined;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalUpdate
     */
    _conditionalUpdate?: fhir.FhirElement;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: 'multiple' | 'not-supported' | 'single' | undefined;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: ('enforced' | 'literal' | 'local' | 'logical' | 'resolves')[] | undefined;
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchInclude
     */
    _searchInclude?: (fhir.FhirElement | null)[];
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchRevInclude
     */
    _searchRevInclude?: (fhir.FhirElement | null)[];
    /**
     * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParam[] | undefined;
    /**
     * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
     * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
     */
    operation?: fhir.CapabilityStatementRestResourceOperation[] | undefined;
}
/**
 * A specification of restful operations supported by the system.
 */
export interface CapabilityStatementRestInteraction extends fhir.BackboneElement {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: 'batch' | 'history-system' | 'search-system' | 'transaction' | null;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.interaction.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
 */
export interface CapabilityStatementRest extends fhir.BackboneElement {
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode: 'client' | 'server' | null;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.CapabilityStatementRestSecurity | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource?: fhir.CapabilityStatementRestResource[] | undefined;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: fhir.CapabilityStatementRestInteraction[] | undefined;
    /**
     * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParam[] | undefined;
    /**
     * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
     */
    operation?: fhir.CapabilityStatementRestResourceOperation[] | undefined;
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.compartment
     */
    _compartment?: (fhir.FhirElement | null)[];
}
/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export interface CapabilityStatementMessagingEndpoint extends fhir.BackboneElement {
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhir.Coding | null;
    /**
     * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.endpoint.address
     */
    _address?: fhir.FhirElement;
}
/**
 * This is a proposed alternative to the messaging.event structure.
 */
export interface CapabilityStatementMessagingSupportedMessage extends fhir.BackboneElement {
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: 'receiver' | 'sender' | null;
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.supportedMessage.definition
     */
    _definition?: fhir.FhirElement;
}
/**
 * Multiple repetitions allow the documentation of multiple endpoints per solution.
 */
export interface CapabilityStatementMessaging extends fhir.BackboneElement {
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: fhir.CapabilityStatementMessagingEndpoint[] | undefined;
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: number | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.reliableCache
     */
    _reliableCache?: fhir.FhirElement;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: fhir.CapabilityStatementMessagingSupportedMessage[] | undefined;
}
/**
 * A document definition.
 */
export interface CapabilityStatementDocument extends fhir.BackboneElement {
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode: 'consumer' | 'producer' | null;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.document.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * The profile is actually on the Bundle.
     */
    profile: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.document.profile
     */
    _profile?: fhir.FhirElement;
}
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatement extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CapabilityStatement";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the capability statement. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: 'capability' | 'instance' | 'requirements' | null;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.instantiates
     */
    _instantiates?: (fhir.FhirElement | null)[];
    /**
     * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair.
     * A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
     */
    imports?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.imports
     */
    _imports?: (fhir.FhirElement | null)[];
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.CapabilityStatementSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.CapabilityStatementImplementation | undefined;
    /**
     * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server's default version.
     */
    fhirVersion: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: string[] | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.format
     */
    _format?: (fhir.FhirElement | null)[];
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.patchFormat
     */
    _patchFormat?: (fhir.FhirElement | null)[];
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: string[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementationGuide
     */
    _implementationGuide?: (fhir.FhirElement | null)[];
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest?: fhir.CapabilityStatementRest[] | undefined;
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging?: fhir.CapabilityStatementMessaging[] | undefined;
    /**
     * A document definition.
     */
    document?: fhir.CapabilityStatementDocument[] | undefined;
}
//# sourceMappingURL=CapabilityStatement.d.ts.map
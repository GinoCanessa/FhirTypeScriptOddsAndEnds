import * as fhirInterfaces from '../strictinterfaces';
/**
 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 */
export interface ICapabilityStatementSoftware extends fhirInterfaces.IBackboneElement {
    /**
     * Name the software is known by.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: string | undefined;
    _releaseDate?: fhirInterfaces.IElement | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export interface ICapabilityStatementImplementation extends fhirInterfaces.IBackboneElement {
    /**
     * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
     */
    custodian?: fhirInterfaces.IReference | undefined;
    /**
     * Information about the specific installation that this capability statement relates to.
     */
    description: string;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export interface ICapabilityStatementRestSecurity extends fhirInterfaces.IBackboneElement {
    /**
     * The easiest CORS headers to add are Access-Control-Allow-Origin: * &amp; Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
     */
    cors?: boolean | undefined;
    _cors?: fhirInterfaces.IElement | undefined;
    /**
     * General description of how security works.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Types of security services that are supported/required by the system.
     */
    service?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
 */
export interface ICapabilityStatementRestResourceInteraction extends fhirInterfaces.IBackboneElement {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: CapabilityStatementRestResourceInteractionCodeEnum;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.rest.resource.interaction.code field
 */
export declare enum CapabilityStatementRestResourceInteractionCodeEnum {
    READ = "read",
    VREAD = "vread",
    UPDATE = "update",
    PATCH = "patch",
    DELETE = "delete",
    HISTORY_INSTANCE = "history-instance",
    HISTORY_TYPE = "history-type",
    CREATE = "create",
    SEARCH_TYPE = "search-type"
}
/**
 * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
 */
export interface ICapabilityStatementRestResourceSearchParam extends fhirInterfaces.IBackboneElement {
    /**
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
     */
    definition?: string | undefined;
    _definition?: fhirInterfaces.IElement | undefined;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: CapabilityStatementRestResourceSearchParamTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.rest.resource.searchParam.type field
 */
export declare enum CapabilityStatementRestResourceSearchParamTypeEnum {
    NUMBER = "number",
    DATE = "date",
    STRING = "string",
    TOKEN = "token",
    REFERENCE = "reference",
    COMPOSITE = "composite",
    QUANTITY = "quantity",
    URI = "uri",
    SPECIAL = "special"
}
/**
 * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
 * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
 */
export interface ICapabilityStatementRestResourceOperation extends fhirInterfaces.IBackboneElement {
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition: string;
    _definition?: fhirInterfaces.IElement | undefined;
    /**
     * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
}
/**
 * Max of one repetition per resource type.
 */
export interface ICapabilityStatementRestResource extends fhirInterfaces.IBackboneElement {
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: boolean | undefined;
    _conditionalCreate?: fhirInterfaces.IElement | undefined;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: CapabilityStatementRestResourceConditionalDeleteEnum | undefined;
    _conditionalDelete?: fhirInterfaces.IElement | undefined;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: CapabilityStatementRestResourceConditionalReadEnum | undefined;
    _conditionalRead?: fhirInterfaces.IElement | undefined;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: boolean | undefined;
    _conditionalUpdate?: fhirInterfaces.IElement | undefined;
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
     */
    interaction?: fhirInterfaces.ICapabilityStatementRestResourceInteraction[] | undefined;
    /**
     * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
     * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
     */
    operation?: fhirInterfaces.ICapabilityStatementRestResourceOperation[] | undefined;
    /**
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: string | undefined;
    _profile?: fhirInterfaces.IElement | undefined;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: boolean | undefined;
    _readHistory?: fhirInterfaces.IElement | undefined;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: CapabilityStatementRestResourceReferencePolicyEnum[] | undefined;
    _referencePolicy?: fhirInterfaces.IElement[] | undefined;
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: string[] | undefined;
    _searchInclude?: fhirInterfaces.IElement[] | undefined;
    /**
     * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhirInterfaces.ICapabilityStatementRestResourceSearchParam[] | undefined;
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: string[] | undefined;
    _searchRevInclude?: fhirInterfaces.IElement[] | undefined;
    /**
     * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
     */
    supportedProfile?: string[] | undefined;
    _supportedProfile?: fhirInterfaces.IElement[] | undefined;
    /**
     * A type of resource exposed via the restful interface.
     */
    type: string;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: boolean | undefined;
    _updateCreate?: fhirInterfaces.IElement | undefined;
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: CapabilityStatementRestResourceVersioningEnum | undefined;
    _versioning?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.rest.resource.conditionalDelete field
 */
export declare enum CapabilityStatementRestResourceConditionalDeleteEnum {
    NOT_SUPPORTED = "not-supported",
    SINGLE = "single",
    MULTIPLE = "multiple"
}
/**
 * Code Values for the CapabilityStatement.rest.resource.conditionalRead field
 */
export declare enum CapabilityStatementRestResourceConditionalReadEnum {
    NOT_SUPPORTED = "not-supported",
    MODIFIED_SINCE = "modified-since",
    NOT_MATCH = "not-match",
    FULL_SUPPORT = "full-support"
}
/**
 * Code Values for the CapabilityStatement.rest.resource.referencePolicy field
 */
export declare enum CapabilityStatementRestResourceReferencePolicyEnum {
    LITERAL = "literal",
    LOGICAL = "logical",
    RESOLVES = "resolves",
    ENFORCED = "enforced",
    LOCAL = "local"
}
/**
 * Code Values for the CapabilityStatement.rest.resource.versioning field
 */
export declare enum CapabilityStatementRestResourceVersioningEnum {
    NO_VERSION = "no-version",
    VERSIONED = "versioned",
    VERSIONED_UPDATE = "versioned-update"
}
/**
 * A specification of restful operations supported by the system.
 */
export interface ICapabilityStatementRestInteraction extends fhirInterfaces.IBackboneElement {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: CapabilityStatementRestInteractionCodeEnum;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.rest.interaction.code field
 */
export declare enum CapabilityStatementRestInteractionCodeEnum {
    TRANSACTION = "transaction",
    BATCH = "batch",
    SEARCH_SYSTEM = "search-system",
    HISTORY_SYSTEM = "history-system"
}
/**
 * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
 */
export interface ICapabilityStatementRest extends fhirInterfaces.IBackboneElement {
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: string[] | undefined;
    _compartment?: fhirInterfaces.IElement[] | undefined;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: fhirInterfaces.ICapabilityStatementRestInteraction[] | undefined;
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode: CapabilityStatementRestModeEnum;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
     */
    operation?: fhirInterfaces.ICapabilityStatementRestResourceOperation[] | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource?: fhirInterfaces.ICapabilityStatementRestResource[] | undefined;
    /**
     * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhirInterfaces.ICapabilityStatementRestResourceSearchParam[] | undefined;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhirInterfaces.ICapabilityStatementRestSecurity | undefined;
}
/**
 * Code Values for the CapabilityStatement.rest.mode field
 */
export declare enum CapabilityStatementRestModeEnum {
    CLIENT = "client",
    SERVER = "server"
}
/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export interface ICapabilityStatementMessagingEndpoint extends fhirInterfaces.IBackboneElement {
    /**
     * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: string;
    _address?: fhirInterfaces.IElement | undefined;
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhirInterfaces.ICoding;
}
/**
 * This is a proposed alternative to the messaging.event structure.
 */
export interface ICapabilityStatementMessagingSupportedMessage extends fhirInterfaces.IBackboneElement {
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: string;
    _definition?: fhirInterfaces.IElement | undefined;
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: CapabilityStatementMessagingSupportedMessageModeEnum;
    _mode?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.messaging.supportedMessage.mode field
 */
export declare enum CapabilityStatementMessagingSupportedMessageModeEnum {
    SENDER = "sender",
    RECEIVER = "receiver"
}
/**
 * Multiple repetitions allow the documentation of multiple endpoints per solution.
 */
export interface ICapabilityStatementMessaging extends fhirInterfaces.IBackboneElement {
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: fhirInterfaces.ICapabilityStatementMessagingEndpoint[] | undefined;
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: number | undefined;
    _reliableCache?: fhirInterfaces.IElement | undefined;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: fhirInterfaces.ICapabilityStatementMessagingSupportedMessage[] | undefined;
}
/**
 * A document definition.
 */
export interface ICapabilityStatementDocument extends fhirInterfaces.IBackboneElement {
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode: CapabilityStatementDocumentModeEnum;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * The profile is actually on the Bundle.
     */
    profile: string;
    _profile?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.document.mode field
 */
export declare enum CapabilityStatementDocumentModeEnum {
    PRODUCER = "producer",
    CONSUMER = "consumer"
}
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface ICapabilityStatement extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "CapabilityStatement";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * A document definition.
     */
    document?: fhirInterfaces.ICapabilityStatementDocument[] | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server's default version.
     */
    fhirVersion: string;
    _fhirVersion?: fhirInterfaces.IElement | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: string[];
    _format?: fhirInterfaces.IElement[] | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhirInterfaces.ICapabilityStatementImplementation | undefined;
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: string[] | undefined;
    _implementationGuide?: fhirInterfaces.IElement[] | undefined;
    /**
     * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair.
     * A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
     */
    imports?: string[] | undefined;
    _imports?: fhirInterfaces.IElement[] | undefined;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhirInterfaces.IElement[] | undefined;
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindEnum;
    _kind?: fhirInterfaces.IElement | undefined;
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging?: fhirInterfaces.ICapabilityStatementMessaging[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: string[] | undefined;
    _patchFormat?: fhirInterfaces.IElement[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the capability statement. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest?: fhirInterfaces.ICapabilityStatementRest[] | undefined;
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhirInterfaces.ICapabilityStatementSoftware | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: CapabilityStatementStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CapabilityStatement.format field
 */
export declare enum CapabilityStatementFormatEnum {
    XML = "xml",
    JSON = "json",
    TTL = "ttl",
    MIME = "MIME"
}
/**
 * Code Values for the CapabilityStatement.kind field
 */
export declare enum CapabilityStatementKindEnum {
    INSTANCE = "instance",
    CAPABILITY = "capability",
    REQUIREMENTS = "requirements"
}
/**
 * Code Values for the CapabilityStatement.status field
 */
export declare enum CapabilityStatementStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ICapabilityStatement.d.ts.map
import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class CapabilityStatementSoftware extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementSoftware {
    /**
     * Name the software is known by.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: string | undefined;
    _releaseDate?: fhirModels.Element | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementSoftware from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementSoftware>);
    /**
     * Factory function to create a CapabilityStatementSoftware from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementSoftware): CapabilityStatementSoftware;
    /**
     * Check if the current CapabilityStatementSoftware contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class CapabilityStatementImplementation extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementImplementation {
    /**
     * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
     */
    custodian?: fhirModels.Reference | undefined;
    /**
     * Information about the specific installation that this capability statement relates to.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementImplementation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementImplementation>);
    /**
     * Factory function to create a CapabilityStatementImplementation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementImplementation): CapabilityStatementImplementation;
    /**
     * Check if the current CapabilityStatementImplementation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export declare class CapabilityStatementRestSecurity extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRestSecurity {
    /**
     * The easiest CORS headers to add are Access-Control-Allow-Origin: * &amp; Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
     */
    cors?: boolean | undefined;
    _cors?: fhirModels.Element | undefined;
    /**
     * General description of how security works.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Types of security services that are supported/required by the system.
     */
    service?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for CapabilityStatementRestSecurity from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRestSecurity>);
    /**
     * Factory function to create a CapabilityStatementRestSecurity from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRestSecurity): CapabilityStatementRestSecurity;
    /**
     * Check if the current CapabilityStatementRestSecurity contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
 */
export declare class CapabilityStatementRestResourceInteraction extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRestResourceInteraction {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code?: CapabilityStatementRestResourceInteractionCodeEnum | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceInteraction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRestResourceInteraction>);
    /**
     * Factory function to create a CapabilityStatementRestResourceInteraction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRestResourceInteraction): CapabilityStatementRestResourceInteraction;
    /**
     * Check if the current CapabilityStatementRestResourceInteraction contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatementRestResourceSearchParam extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRestResourceSearchParam {
    /**
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
     */
    definition?: string | undefined;
    _definition?: fhirModels.Element | undefined;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type?: CapabilityStatementRestResourceSearchParamTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceSearchParam from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRestResourceSearchParam>);
    /**
     * Factory function to create a CapabilityStatementRestResourceSearchParam from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRestResourceSearchParam): CapabilityStatementRestResourceSearchParam;
    /**
     * Check if the current CapabilityStatementRestResourceSearchParam contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatementRestResourceOperation extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRestResourceOperation {
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition?: string | undefined;
    _definition?: fhirModels.Element | undefined;
    /**
     * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceOperation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRestResourceOperation>);
    /**
     * Factory function to create a CapabilityStatementRestResourceOperation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRestResourceOperation): CapabilityStatementRestResourceOperation;
    /**
     * Check if the current CapabilityStatementRestResourceOperation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Max of one repetition per resource type.
 */
export declare class CapabilityStatementRestResource extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRestResource {
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: boolean | undefined;
    _conditionalCreate?: fhirModels.Element | undefined;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: CapabilityStatementRestResourceConditionalDeleteEnum | undefined;
    _conditionalDelete?: fhirModels.Element | undefined;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: CapabilityStatementRestResourceConditionalReadEnum | undefined;
    _conditionalRead?: fhirModels.Element | undefined;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: boolean | undefined;
    _conditionalUpdate?: fhirModels.Element | undefined;
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
     */
    interaction?: fhirModels.CapabilityStatementRestResourceInteraction[] | undefined;
    /**
     * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
     * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
     */
    operation?: fhirModels.CapabilityStatementRestResourceOperation[] | undefined;
    /**
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: string | undefined;
    _profile?: fhirModels.Element | undefined;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: boolean | undefined;
    _readHistory?: fhirModels.Element | undefined;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: CapabilityStatementRestResourceReferencePolicyEnum[] | undefined;
    _referencePolicy?: fhirModels.Element[] | undefined;
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: string[] | undefined;
    _searchInclude?: fhirModels.Element[] | undefined;
    /**
     * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhirModels.CapabilityStatementRestResourceSearchParam[] | undefined;
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: string[] | undefined;
    _searchRevInclude?: fhirModels.Element[] | undefined;
    /**
     * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
     */
    supportedProfile?: string[] | undefined;
    _supportedProfile?: fhirModels.Element[] | undefined;
    /**
     * A type of resource exposed via the restful interface.
     */
    type?: string | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: boolean | undefined;
    _updateCreate?: fhirModels.Element | undefined;
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: CapabilityStatementRestResourceVersioningEnum | undefined;
    _versioning?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementRestResource from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRestResource>);
    /**
     * Factory function to create a CapabilityStatementRestResource from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRestResource): CapabilityStatementRestResource;
    /**
     * Check if the current CapabilityStatementRestResource contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatementRestInteraction extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRestInteraction {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code?: CapabilityStatementRestInteractionCodeEnum | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementRestInteraction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRestInteraction>);
    /**
     * Factory function to create a CapabilityStatementRestInteraction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRestInteraction): CapabilityStatementRestInteraction;
    /**
     * Check if the current CapabilityStatementRestInteraction contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatementRest extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementRest {
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: string[] | undefined;
    _compartment?: fhirModels.Element[] | undefined;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: fhirModels.CapabilityStatementRestInteraction[] | undefined;
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode?: CapabilityStatementRestModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
     */
    operation?: fhirModels.CapabilityStatementRestResourceOperation[] | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource?: fhirModels.CapabilityStatementRestResource[] | undefined;
    /**
     * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhirModels.CapabilityStatementRestResourceSearchParam[] | undefined;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhirModels.CapabilityStatementRestSecurity | undefined;
    /**
     * Default constructor for CapabilityStatementRest from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementRest>);
    /**
     * Factory function to create a CapabilityStatementRest from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementRest): CapabilityStatementRest;
    /**
     * Check if the current CapabilityStatementRest contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatementMessagingEndpoint extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementMessagingEndpoint {
    /**
     * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address?: string | undefined;
    _address?: fhirModels.Element | undefined;
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol?: fhirModels.Coding | undefined;
    /**
     * Default constructor for CapabilityStatementMessagingEndpoint from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementMessagingEndpoint>);
    /**
     * Factory function to create a CapabilityStatementMessagingEndpoint from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementMessagingEndpoint): CapabilityStatementMessagingEndpoint;
    /**
     * Check if the current CapabilityStatementMessagingEndpoint contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * This is a proposed alternative to the messaging.event structure.
 */
export declare class CapabilityStatementMessagingSupportedMessage extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementMessagingSupportedMessage {
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition?: string | undefined;
    _definition?: fhirModels.Element | undefined;
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode?: CapabilityStatementMessagingSupportedMessageModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementMessagingSupportedMessage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementMessagingSupportedMessage>);
    /**
     * Factory function to create a CapabilityStatementMessagingSupportedMessage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementMessagingSupportedMessage): CapabilityStatementMessagingSupportedMessage;
    /**
     * Check if the current CapabilityStatementMessagingSupportedMessage contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatementMessaging extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementMessaging {
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: fhirModels.CapabilityStatementMessagingEndpoint[] | undefined;
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: number | undefined;
    _reliableCache?: fhirModels.Element | undefined;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: fhirModels.CapabilityStatementMessagingSupportedMessage[] | undefined;
    /**
     * Default constructor for CapabilityStatementMessaging from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementMessaging>);
    /**
     * Factory function to create a CapabilityStatementMessaging from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementMessaging): CapabilityStatementMessaging;
    /**
     * Check if the current CapabilityStatementMessaging contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A document definition.
 */
export declare class CapabilityStatementDocument extends fhirModels.BackboneElement implements fhirInterfaces.ICapabilityStatementDocument {
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode?: CapabilityStatementDocumentModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * The profile is actually on the Bundle.
     */
    profile?: string | undefined;
    _profile?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatementDocument from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatementDocument>);
    /**
     * Factory function to create a CapabilityStatementDocument from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatementDocument): CapabilityStatementDocument;
    /**
     * Check if the current CapabilityStatementDocument contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class CapabilityStatement extends fhirModels.DomainResource implements fhirInterfaces.ICapabilityStatement {
    /**
     * Resource Type Name
     */
    readonly resourceType = "CapabilityStatement";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * A document definition.
     */
    document?: fhirModels.CapabilityStatementDocument[] | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server's default version.
     */
    fhirVersion?: string | undefined;
    _fhirVersion?: fhirModels.Element | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format?: string[] | undefined;
    _format?: fhirModels.Element[] | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhirModels.CapabilityStatementImplementation | undefined;
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: string[] | undefined;
    _implementationGuide?: fhirModels.Element[] | undefined;
    /**
     * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair.
     * A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
     */
    imports?: string[] | undefined;
    _imports?: fhirModels.Element[] | undefined;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: string[] | undefined;
    _instantiates?: fhirModels.Element[] | undefined;
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind?: CapabilityStatementKindEnum | undefined;
    _kind?: fhirModels.Element | undefined;
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging?: fhirModels.CapabilityStatementMessaging[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: string[] | undefined;
    _patchFormat?: fhirModels.Element[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the capability statement. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest?: fhirModels.CapabilityStatementRest[] | undefined;
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhirModels.CapabilityStatementSoftware | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status?: CapabilityStatementStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for CapabilityStatement from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ICapabilityStatement>);
    /**
     * Factory function to create a CapabilityStatement from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ICapabilityStatement): CapabilityStatement;
    /**
     * Check if the current CapabilityStatement contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=CapabilityStatement.d.ts.map
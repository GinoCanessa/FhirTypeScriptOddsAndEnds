import * as fhirInterfaces from '../strictinterfaces';
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export interface IOperationDefinitionParameterBinding extends fhirInterfaces.IBackboneElement {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: OperationDefinitionParameterBindingStrengthEnum;
    _strength?: fhirInterfaces.IElement | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: string;
    _valueSet?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the OperationDefinition.parameter.binding.strength field
 */
export declare enum OperationDefinitionParameterBindingStrengthEnum {
    REQUIRED = "required",
    EXTENSIBLE = "extensible",
    PREFERRED = "preferred",
    EXAMPLE = "example"
}
/**
 * Resolution applies if the referenced parameter exists.
 */
export interface IOperationDefinitionParameterReferencedFrom extends fhirInterfaces.IBackboneElement {
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: string;
    _source?: fhirInterfaces.IElement | undefined;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: string | undefined;
    _sourceId?: fhirInterfaces.IElement | undefined;
}
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export interface IOperationDefinitionParameter extends fhirInterfaces.IBackboneElement {
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhirInterfaces.IOperationDefinitionParameterBinding | undefined;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: string;
    _max?: fhirInterfaces.IElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: number;
    _min?: fhirInterfaces.IElement | undefined;
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhirInterfaces.IOperationDefinitionParameter[] | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhirInterfaces.IOperationDefinitionParameterReferencedFrom[] | undefined;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: OperationDefinitionParameterSearchTypeEnum | undefined;
    _searchType?: fhirInterfaces.IElement | undefined;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: string[] | undefined;
    _targetProfile?: fhirInterfaces.IElement[] | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: string | undefined;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: OperationDefinitionParameterUseEnum;
    _use?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the OperationDefinition.parameter.searchType field
 */
export declare enum OperationDefinitionParameterSearchTypeEnum {
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
 * Code Values for the OperationDefinition.parameter.use field
 */
export declare enum OperationDefinitionParameterUseEnum {
    IN = "in",
    OUT = "out"
}
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export interface IOperationDefinitionOverload extends fhirInterfaces.IBackboneElement {
    /**
     * Comments to go on overload.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: string[] | undefined;
    _parameterName?: fhirInterfaces.IElement[] | undefined;
}
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export interface IOperationDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "OperationDefinition";
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: boolean | undefined;
    _affectsState?: fhirInterfaces.IElement | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: string | undefined;
    _base?: fhirInterfaces.IElement | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: string;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: string | undefined;
    _inputProfile?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: boolean;
    _instance?: fhirInterfaces.IElement | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: OperationDefinitionKindEnum;
    _kind?: fhirInterfaces.IElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: string | undefined;
    _outputProfile?: fhirInterfaces.IElement | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhirInterfaces.IOperationDefinitionOverload[] | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhirInterfaces.IOperationDefinitionParameter[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: string[] | undefined;
    _resource?: fhirInterfaces.IElement[] | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: OperationDefinitionStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: boolean;
    _system?: fhirInterfaces.IElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: boolean;
    _type?: fhirInterfaces.IElement | undefined;
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
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the OperationDefinition.kind field
 */
export declare enum OperationDefinitionKindEnum {
    OPERATION = "operation",
    QUERY = "query"
}
/**
 * Code Values for the OperationDefinition.status field
 */
export declare enum OperationDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IOperationDefinition.d.ts.map
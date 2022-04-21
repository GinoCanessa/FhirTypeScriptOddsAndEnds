import * as fhir from '../fhir.js';
import { BindingStrengthValueSetType, BindingStrengthValueSetEnum } from '../fhirValueSets/BindingStrengthValueSet.js';
import { OperationParameterUseValueSetType, OperationParameterUseValueSetEnum } from '../fhirValueSets/OperationParameterUseValueSet.js';
import { AllTypesValueSetType } from '../fhirValueSets/AllTypesValueSet.js';
import { SearchParamTypeValueSetType, SearchParamTypeValueSetEnum } from '../fhirValueSets/SearchParamTypeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { OperationKindValueSetType, OperationKindValueSetEnum } from '../fhirValueSets/OperationKindValueSet.js';
import { ResourceTypesValueSetType } from '../fhirValueSets/ResourceTypesValueSet.js';
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export declare type IOperationDefinitionParameterBinding = fhir.IBackboneElement & {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: BindingStrengthValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
     */
    _strength?: fhir.IFhirElement | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.valueSet
     */
    _valueSet?: fhir.IFhirElement | undefined;
};
/**
 * Resolution applies if the referenced parameter exists.
 */
export declare type IOperationDefinitionParameterReferencedFrom = fhir.IBackboneElement & {
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.referencedFrom.source
     */
    _source?: fhir.IFhirElement | undefined;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.referencedFrom.sourceId
     */
    _sourceId?: fhir.IFhirElement | undefined;
};
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export declare type IOperationDefinitionParameter = fhir.IBackboneElement & {
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: OperationParameterUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: number | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.min
     */
    _min?: fhir.IFhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.max
     */
    _max?: fhir.IFhirElement | undefined;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.targetProfile
     */
    _targetProfile?: fhir.IFhirElement[] | undefined;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: SearchParamTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.searchType
     */
    _searchType?: fhir.IFhirElement | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.IOperationDefinitionParameterBinding | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhir.IOperationDefinitionParameterReferencedFrom[] | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.IOperationDefinitionParameter[] | undefined;
};
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export declare type IOperationDefinitionOverload = fhir.IBackboneElement & {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.parameterName
     */
    _parameterName?: fhir.IFhirElement[] | undefined;
    /**
     * Comments to go on overload.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export declare type IOperationDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: OperationKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.kind
     */
    _kind?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.affectsState
     */
    _affectsState?: fhir.IFhirElement | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.base
     */
    _base?: fhir.IFhirElement | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.resource
     */
    _resource?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.instance
     */
    _instance?: fhir.IFhirElement | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.inputProfile
     */
    _inputProfile?: fhir.IFhirElement | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.outputProfile
     */
    _outputProfile?: fhir.IFhirElement | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhir.IOperationDefinitionParameter[] | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhir.IOperationDefinitionOverload[] | undefined;
};
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export declare class OperationDefinitionParameterBinding extends fhir.BackboneElement implements IOperationDefinitionParameterBinding {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: BindingStrengthValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
     */
    _strength?: fhir.FhirElement | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.valueSet
     */
    _valueSet?: fhir.FhirElement | undefined;
    /**
     * Default constructor for OperationDefinitionParameterBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOperationDefinitionParameterBinding>);
    /**
     * Required-bound Value Set for strength
     */
    strengthRequiredValueSet(): BindingStrengthValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Resolution applies if the referenced parameter exists.
 */
export declare class OperationDefinitionParameterReferencedFrom extends fhir.BackboneElement implements IOperationDefinitionParameterReferencedFrom {
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.referencedFrom.source
     */
    _source?: fhir.FhirElement | undefined;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.referencedFrom.sourceId
     */
    _sourceId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for OperationDefinitionParameterReferencedFrom - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOperationDefinitionParameterReferencedFrom>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export declare class OperationDefinitionParameter extends fhir.BackboneElement implements IOperationDefinitionParameter {
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: OperationParameterUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: number | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.min
     */
    _min?: fhir.FhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.max
     */
    _max?: fhir.FhirElement | undefined;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.targetProfile
     */
    _targetProfile?: fhir.FhirElement[] | undefined;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: SearchParamTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.searchType
     */
    _searchType?: fhir.FhirElement | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBinding | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhir.OperationDefinitionParameterReferencedFrom[] | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.OperationDefinitionParameter[] | undefined;
    /**
     * Default constructor for OperationDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOperationDefinitionParameter>);
    /**
     * Required-bound Value Set for use
     */
    useRequiredValueSet(): OperationParameterUseValueSetType;
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): AllTypesValueSetType;
    /**
     * Required-bound Value Set for searchType
     */
    searchTypeRequiredValueSet(): SearchParamTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export declare class OperationDefinitionOverload extends fhir.BackboneElement implements IOperationDefinitionOverload {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.parameterName
     */
    _parameterName?: fhir.FhirElement[] | undefined;
    /**
     * Comments to go on overload.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for OperationDefinitionOverload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOperationDefinitionOverload>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export declare class OperationDefinition extends fhir.DomainResource implements IOperationDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: OperationKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: OperationDefinition.kind
     */
    _kind?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.affectsState
     */
    _affectsState?: fhir.FhirElement | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.base
     */
    _base?: fhir.FhirElement | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.resource
     */
    _resource?: fhir.FhirElement[] | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.instance
     */
    _instance?: fhir.FhirElement | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.inputProfile
     */
    _inputProfile?: fhir.FhirElement | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.outputProfile
     */
    _outputProfile?: fhir.FhirElement | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhir.OperationDefinitionParameter[] | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhir.OperationDefinitionOverload[] | undefined;
    /**
     * Default constructor for OperationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOperationDefinition>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for kind
     */
    kindRequiredValueSet(): OperationKindValueSetType;
    /**
     * Required-bound Value Set for resource
     */
    resourceRequiredValueSet(): ResourceTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=OperationDefinition.d.ts.map
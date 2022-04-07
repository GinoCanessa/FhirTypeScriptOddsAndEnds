import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Used to define the parts of a composite search parameter.
 */
export declare class SearchParameterComponent extends fhirModels.BackboneElement implements fhirInterfaces.ISearchParameterComponent {
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: string;
    _definition?: fhirModels.Element | undefined;
    /**
     * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
     */
    expression: string;
    _expression?: fhirModels.Element | undefined;
    /**
     * Default constructor for SearchParameterComponent from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISearchParameterComponent);
}
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export declare class SearchParameter extends fhirModels.DomainResource implements fhirInterfaces.ISearchParameter {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SearchParameter";
    /**
     * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: string[];
    _base?: fhirModels.Element[] | undefined;
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
     */
    chain?: string[] | undefined;
    _chain?: fhirModels.Element[] | undefined;
    /**
     * For maximum compatibility, use only lowercase ASCII characters.
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * If no comparators are listed, clients should not expect servers to support any comparators.
     */
    comparator?: SearchParameterComparatorEnum[] | undefined;
    _comparator?: fhirModels.Element[] | undefined;
    /**
     * Used to define the parts of a composite search parameter.
     */
    component?: fhirModels.SearchParameterComponent[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: string | undefined;
    _derivedFrom?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
     */
    description: string;
    _description?: fhirModels.Element | undefined;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
     */
    expression?: string | undefined;
    _expression?: fhirModels.Element | undefined;
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: SearchParameterModifierEnum[] | undefined;
    _modifier?: fhirModels.Element[] | undefined;
    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: boolean | undefined;
    _multipleAnd?: fhirModels.Element | undefined;
    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: boolean | undefined;
    _multipleOr?: fhirModels.Element | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    status: SearchParameterStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: string[] | undefined;
    _target?: fhirModels.Element[] | undefined;
    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type: SearchParameterTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string;
    _url?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
     */
    xpath?: string | undefined;
    _xpath?: fhirModels.Element | undefined;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: SearchParameterXpathUsageEnum | undefined;
    _xpathUsage?: fhirModels.Element | undefined;
    /**
     * Default constructor for SearchParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISearchParameter);
}
/**
 * Code Values for the SearchParameter.comparator field
 */
export declare enum SearchParameterComparatorEnum {
    EQ = "eq",
    NE = "ne",
    GT = "gt",
    LT = "lt",
    GE = "ge",
    LE = "le",
    SA = "sa",
    EB = "eb",
    AP = "ap"
}
/**
 * Code Values for the SearchParameter.modifier field
 */
export declare enum SearchParameterModifierEnum {
    MISSING = "missing",
    EXACT = "exact",
    CONTAINS = "contains",
    NOT = "not",
    TEXT = "text",
    IN = "in",
    NOT_IN = "not-in",
    BELOW = "below",
    ABOVE = "above",
    TYPE = "type",
    IDENTIFIER = "identifier",
    OFTYPE = "ofType"
}
/**
 * Code Values for the SearchParameter.status field
 */
export declare enum SearchParameterStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
/**
 * Code Values for the SearchParameter.type field
 */
export declare enum SearchParameterTypeEnum {
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
 * Code Values for the SearchParameter.xpathUsage field
 */
export declare enum SearchParameterXpathUsageEnum {
    NORMAL = "normal",
    PHONETIC = "phonetic",
    NEARBY = "nearby",
    DISTANCE = "distance",
    OTHER = "other"
}
//# sourceMappingURL=SearchParameter.d.ts.map
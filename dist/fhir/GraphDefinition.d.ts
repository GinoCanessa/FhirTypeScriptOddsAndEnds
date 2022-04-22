import * as fhir from '../fhir.js';
import { GraphCompartmentUseValueSetType, GraphCompartmentUseValueSetEnum } from '../fhirValueSets/GraphCompartmentUseValueSet.js';
import { CompartmentTypeValueSetType, CompartmentTypeValueSetEnum } from '../fhirValueSets/CompartmentTypeValueSet.js';
import { GraphCompartmentRuleValueSetType, GraphCompartmentRuleValueSetEnum } from '../fhirValueSets/GraphCompartmentRuleValueSet.js';
import { ResourceTypesValueSetType } from '../fhirValueSets/ResourceTypesValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
/**
 * Compartment Consistency Rules.
 */
export declare type IGraphDefinitionLinkTargetCompartment = fhir.IBackboneElement & {
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: GraphCompartmentUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * Identifies the compartment.
     */
    code: CompartmentTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: GraphCompartmentRuleValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.rule
     */
    _rule?: fhir.IFhirElement | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.expression
     */
    _expression?: fhir.IFhirElement | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.description
     */
    _description?: fhir.IFhirElement | undefined;
};
/**
 * Potential target for the link.
 */
export declare type IGraphDefinitionLinkTarget = fhir.IBackboneElement & {
    /**
     * Type of resource this link refers to.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.params
     */
    _params?: fhir.IFhirElement | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.profile
     */
    _profile?: fhir.IFhirElement | undefined;
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhir.IGraphDefinitionLinkTargetCompartment[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhir.IGraphDefinitionLink[] | undefined;
};
/**
 * Links this graph makes rules about.
 */
export declare type IGraphDefinitionLink = fhir.IBackboneElement & {
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.sliceName
     */
    _sliceName?: fhir.IFhirElement | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.min
     */
    _min?: fhir.IFhirElement | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.max
     */
    _max?: fhir.IFhirElement | undefined;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Potential target for the link.
     */
    target?: fhir.IGraphDefinitionLinkTarget[] | undefined;
};
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export declare type IGraphDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.profile
     */
    _profile?: fhir.IFhirElement | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhir.IGraphDefinitionLink[] | undefined;
};
/**
 * Compartment Consistency Rules.
 */
export declare class GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement implements IGraphDefinitionLinkTargetCompartment {
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: GraphCompartmentUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * Identifies the compartment.
     */
    code: CompartmentTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: GraphCompartmentRuleValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.rule
     */
    _rule?: fhir.FhirElement | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.expression
     */
    _expression?: fhir.FhirElement | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTargetCompartment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IGraphDefinitionLinkTargetCompartment>);
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet(): GraphCompartmentUseValueSetType;
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet(): CompartmentTypeValueSetType;
    /**
     * Required-bound Value Set for rule
     */
    static ruleRequiredValueSet(): GraphCompartmentRuleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Potential target for the link.
 */
export declare class GraphDefinitionLinkTarget extends fhir.BackboneElement implements IGraphDefinitionLinkTarget {
    /**
     * Type of resource this link refers to.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.params
     */
    _params?: fhir.FhirElement | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.profile
     */
    _profile?: fhir.FhirElement | undefined;
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhir.GraphDefinitionLinkTargetCompartment[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhir.GraphDefinitionLink[] | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IGraphDefinitionLinkTarget>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): ResourceTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Links this graph makes rules about.
 */
export declare class GraphDefinitionLink extends fhir.BackboneElement implements IGraphDefinitionLink {
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.sliceName
     */
    _sliceName?: fhir.FhirElement | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.min
     */
    _min?: fhir.FhirElement | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.max
     */
    _max?: fhir.FhirElement | undefined;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Potential target for the link.
     */
    target?: fhir.GraphDefinitionLinkTarget[] | undefined;
    /**
     * Default constructor for GraphDefinitionLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IGraphDefinitionLink>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export declare class GraphDefinition extends fhir.DomainResource implements IGraphDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: GraphDefinition.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.profile
     */
    _profile?: fhir.FhirElement | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhir.GraphDefinitionLink[] | undefined;
    /**
     * Default constructor for GraphDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IGraphDefinition>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for start
     */
    static startRequiredValueSet(): ResourceTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=GraphDefinition.d.ts.map
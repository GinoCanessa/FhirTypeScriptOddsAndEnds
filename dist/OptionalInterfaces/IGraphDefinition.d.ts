import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Compartment Consistency Rules.
 */
export interface IGraphDefinitionLinkTargetCompartment extends fhirInterfaces.IBackboneElement {
    /**
     * Identifies the compartment.
     */
    code?: GraphDefinitionLinkTargetCompartmentCodeEnum | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    _expression?: fhirInterfaces.IElement | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule?: GraphDefinitionLinkTargetCompartmentRuleEnum | undefined;
    _rule?: fhirInterfaces.IElement | undefined;
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use?: GraphDefinitionLinkTargetCompartmentUseEnum | undefined;
    _use?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the GraphDefinition.link.target.compartment.code field
 */
export declare enum GraphDefinitionLinkTargetCompartmentCodeEnum {
    PATIENT = "Patient",
    ENCOUNTER = "Encounter",
    RELATEDPERSON = "RelatedPerson",
    PRACTITIONER = "Practitioner",
    DEVICE = "Device"
}
/**
 * Code Values for the GraphDefinition.link.target.compartment.rule field
 */
export declare enum GraphDefinitionLinkTargetCompartmentRuleEnum {
    IDENTICAL = "identical",
    MATCHING = "matching",
    DIFFERENT = "different",
    CUSTOM = "custom"
}
/**
 * Code Values for the GraphDefinition.link.target.compartment.use field
 */
export declare enum GraphDefinitionLinkTargetCompartmentUseEnum {
    CONDITION = "condition",
    REQUIREMENT = "requirement"
}
/**
 * Potential target for the link.
 */
export interface IGraphDefinitionLinkTarget extends fhirInterfaces.IBackboneElement {
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhirInterfaces.IGraphDefinitionLinkTargetCompartment[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhirInterfaces.IGraphDefinitionLink[] | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: string | undefined;
    _params?: fhirInterfaces.IElement | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    _profile?: fhirInterfaces.IElement | undefined;
    /**
     * Type of resource this link refers to.
     */
    type?: string | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Links this graph makes rules about.
 */
export interface IGraphDefinitionLink extends fhirInterfaces.IBackboneElement {
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    _max?: fhirInterfaces.IElement | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    _min?: fhirInterfaces.IElement | undefined;
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: string | undefined;
    _path?: fhirInterfaces.IElement | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    _sliceName?: fhirInterfaces.IElement | undefined;
    /**
     * Potential target for the link.
     */
    target?: fhirInterfaces.IGraphDefinitionLinkTarget[] | undefined;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export interface IGraphDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "GraphDefinition";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhirInterfaces.IGraphDefinitionLink[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    _profile?: fhirInterfaces.IElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start?: string | undefined;
    _start?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status?: GraphDefinitionStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the GraphDefinition.status field
 */
export declare enum GraphDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IGraphDefinition.d.ts.map
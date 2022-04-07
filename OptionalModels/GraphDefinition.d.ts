import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Compartment Consistency Rules.
 */
export declare class GraphDefinitionLinkTargetCompartment extends fhirModels.BackboneElement implements fhirInterfaces.IGraphDefinitionLinkTargetCompartment {
    /**
     * Identifies the compartment.
     */
    code?: GraphDefinitionLinkTargetCompartmentCodeEnum | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    _expression?: fhirModels.Element | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule?: GraphDefinitionLinkTargetCompartmentRuleEnum | undefined;
    _rule?: fhirModels.Element | undefined;
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use?: GraphDefinitionLinkTargetCompartmentUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTargetCompartment from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IGraphDefinitionLinkTargetCompartment>);
    /**
     * Factory function to create a GraphDefinitionLinkTargetCompartment from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IGraphDefinitionLinkTargetCompartment): GraphDefinitionLinkTargetCompartment;
    /**
     * Check if the current GraphDefinitionLinkTargetCompartment contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class GraphDefinitionLinkTarget extends fhirModels.BackboneElement implements fhirInterfaces.IGraphDefinitionLinkTarget {
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhirModels.GraphDefinitionLinkTargetCompartment[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhirModels.GraphDefinitionLink[] | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: string | undefined;
    _params?: fhirModels.Element | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    _profile?: fhirModels.Element | undefined;
    /**
     * Type of resource this link refers to.
     */
    type?: string | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTarget from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IGraphDefinitionLinkTarget>);
    /**
     * Factory function to create a GraphDefinitionLinkTarget from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IGraphDefinitionLinkTarget): GraphDefinitionLinkTarget;
    /**
     * Check if the current GraphDefinitionLinkTarget contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Links this graph makes rules about.
 */
export declare class GraphDefinitionLink extends fhirModels.BackboneElement implements fhirInterfaces.IGraphDefinitionLink {
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    _max?: fhirModels.Element | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    _min?: fhirModels.Element | undefined;
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: string | undefined;
    _path?: fhirModels.Element | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    _sliceName?: fhirModels.Element | undefined;
    /**
     * Potential target for the link.
     */
    target?: fhirModels.GraphDefinitionLinkTarget[] | undefined;
    /**
     * Default constructor for GraphDefinitionLink from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IGraphDefinitionLink>);
    /**
     * Factory function to create a GraphDefinitionLink from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IGraphDefinitionLink): GraphDefinitionLink;
    /**
     * Check if the current GraphDefinitionLink contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export declare class GraphDefinition extends fhirModels.DomainResource implements fhirInterfaces.IGraphDefinition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "GraphDefinition";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhirModels.GraphDefinitionLink[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    _profile?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start?: string | undefined;
    _start?: fhirModels.Element | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status?: GraphDefinitionStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
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
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for GraphDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IGraphDefinition>);
    /**
     * Factory function to create a GraphDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IGraphDefinition): GraphDefinition;
    /**
     * Check if the current GraphDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=GraphDefinition.d.ts.map
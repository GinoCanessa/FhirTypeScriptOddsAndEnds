import * as fhir from '../fhir';
/**
 * Compartment Consistency Rules.
 */
export declare type IGraphDefinitionLinkTargetCompartment = fhir.IBackboneElement & {
    /**
     * Identifies the compartment.
     */
    code: GraphDefinitionLinkTargetCompartmentCodeEnum | null;
    _code?: fhir.IFhirElement | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    _expression?: fhir.IFhirElement | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: GraphDefinitionLinkTargetCompartmentRuleEnum | null;
    _rule?: fhir.IFhirElement | undefined;
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: GraphDefinitionLinkTargetCompartmentUseEnum | null;
    _use?: fhir.IFhirElement | undefined;
};
/**
 * Potential target for the link.
 */
export declare type IGraphDefinitionLinkTarget = fhir.IBackboneElement & {
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhir.IGraphDefinitionLinkTargetCompartment[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhir.IGraphDefinitionLink[] | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: string | undefined;
    _params?: fhir.IFhirElement | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    _profile?: fhir.IFhirElement | undefined;
    /**
     * Type of resource this link refers to.
     */
    type: string | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Links this graph makes rules about.
 */
export declare type IGraphDefinitionLink = fhir.IBackboneElement & {
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    _max?: fhir.IFhirElement | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    _min?: fhir.IFhirElement | undefined;
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: string | undefined;
    _path?: fhir.IFhirElement | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    _sliceName?: fhir.IFhirElement | undefined;
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
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhir.IGraphDefinitionLink[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    _profile?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: string | null;
    _start?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: GraphDefinitionStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Compartment Consistency Rules.
 */
export declare class GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement implements fhir.IGraphDefinitionLinkTargetCompartment {
    /**
     * Identifies the compartment.
     */
    code: GraphDefinitionLinkTargetCompartmentCodeEnum | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    _expression?: fhir.FhirElement | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: GraphDefinitionLinkTargetCompartmentRuleEnum | null;
    _rule?: fhir.FhirElement | undefined;
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: GraphDefinitionLinkTargetCompartmentUseEnum | null;
    _use?: fhir.FhirElement | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTargetCompartment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGraphDefinitionLinkTargetCompartment>);
    /**
     * Check if the current GraphDefinitionLinkTargetCompartment contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a GraphDefinitionLinkTargetCompartment from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IGraphDefinitionLinkTargetCompartment): GraphDefinitionLinkTargetCompartment;
}
/**
 * Potential target for the link.
 */
export declare class GraphDefinitionLinkTarget extends fhir.BackboneElement implements fhir.IGraphDefinitionLinkTarget {
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhir.GraphDefinitionLinkTargetCompartment[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhir.GraphDefinitionLink[] | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: string | undefined;
    _params?: fhir.FhirElement | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    _profile?: fhir.FhirElement | undefined;
    /**
     * Type of resource this link refers to.
     */
    type: string | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGraphDefinitionLinkTarget>);
    /**
     * Check if the current GraphDefinitionLinkTarget contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a GraphDefinitionLinkTarget from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IGraphDefinitionLinkTarget): GraphDefinitionLinkTarget;
}
/**
 * Links this graph makes rules about.
 */
export declare class GraphDefinitionLink extends fhir.BackboneElement implements fhir.IGraphDefinitionLink {
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    _max?: fhir.FhirElement | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    _min?: fhir.FhirElement | undefined;
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: string | undefined;
    _path?: fhir.FhirElement | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    _sliceName?: fhir.FhirElement | undefined;
    /**
     * Potential target for the link.
     */
    target?: fhir.GraphDefinitionLinkTarget[] | undefined;
    /**
     * Default constructor for GraphDefinitionLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGraphDefinitionLink>);
    /**
     * Check if the current GraphDefinitionLink contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a GraphDefinitionLink from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IGraphDefinitionLink): GraphDefinitionLink;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export declare class GraphDefinition extends fhir.DomainResource implements fhir.IGraphDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhir.GraphDefinitionLink[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    _profile?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: string | null;
    _start?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: GraphDefinitionStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for GraphDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGraphDefinition>);
    /**
     * Check if the current GraphDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a GraphDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IGraphDefinition): GraphDefinition;
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
 * Code Values for the GraphDefinition.status field
 */
export declare enum GraphDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=GraphDefinition.d.ts.map
import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export declare class ValueSetComposeIncludeConceptDesignation extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetComposeIncludeConceptDesignation {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: string | undefined;
    _language?: fhirModels.Element | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhirModels.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value?: string | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetComposeIncludeConceptDesignation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetComposeIncludeConceptDesignation>);
    /**
     * Factory function to create a ValueSetComposeIncludeConceptDesignation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetComposeIncludeConceptDesignation): ValueSetComposeIncludeConceptDesignation;
    /**
     * Check if the current ValueSetComposeIncludeConceptDesignation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 */
export declare class ValueSetComposeIncludeConcept extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetComposeIncludeConcept {
    /**
     * Expressions are allowed if defined by the underlying code system.
     */
    code?: string | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
     */
    designation?: fhirModels.ValueSetComposeIncludeConceptDesignation[] | undefined;
    /**
     * The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
     */
    display?: string | undefined;
    _display?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetComposeIncludeConcept from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetComposeIncludeConcept>);
    /**
     * Factory function to create a ValueSetComposeIncludeConcept from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetComposeIncludeConcept): ValueSetComposeIncludeConcept;
    /**
     * Check if the current ValueSetComposeIncludeConcept contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
 */
export declare class ValueSetComposeIncludeFilter extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetComposeIncludeFilter {
    /**
     * In case filter.property represents a property of the system, the operation applies to the selected property. In case filter.property represents a filter of the system, the operation SHALL match one of the CodeSystem.filter.operator values.
     */
    op?: ValueSetComposeIncludeFilterOpEnum | undefined;
    _op?: fhirModels.Element | undefined;
    /**
     * A code that identifies a property or a filter defined in the code system.
     */
    property?: string | undefined;
    _property?: fhirModels.Element | undefined;
    /**
     * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
     */
    value?: string | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetComposeIncludeFilter from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetComposeIncludeFilter>);
    /**
     * Factory function to create a ValueSetComposeIncludeFilter from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetComposeIncludeFilter): ValueSetComposeIncludeFilter;
    /**
     * Check if the current ValueSetComposeIncludeFilter contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the ValueSet.compose.include.filter.op field
 */
export declare enum ValueSetComposeIncludeFilterOpEnum {
    EQUALS = "=",
    IS_A = "is-a",
    DESCENDENT_OF = "descendent-of",
    IS_NOT_A = "is-not-a",
    REGEX = "regex",
    IN = "in",
    NOT_IN = "not-in",
    GENERALIZES = "generalizes",
    EXISTS = "exists"
}
/**
 * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
 */
export declare class ValueSetComposeInclude extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetComposeInclude {
    /**
     * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
     */
    concept?: fhirModels.ValueSetComposeIncludeConcept[] | undefined;
    /**
     * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
     */
    filter?: fhirModels.ValueSetComposeIncludeFilter[] | undefined;
    /**
     * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See ''Coding.system'' for further documentation about the correct value for the system element.
     */
    system?: string | undefined;
    _system?: fhirModels.Element | undefined;
    /**
     * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set](snomedct.html#implicit), or a direct reference to a value set definition using ValueSet.url. The reference might not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
     */
    valueSet?: string[] | undefined;
    _valueSet?: fhirModels.Element[] | undefined;
    /**
     * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set might not be known until a context of use binds it to a particular version. The special value '*' means all versions; It is at server discretion regarding expansions and which versions must be supported.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetComposeInclude from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetComposeInclude>);
    /**
     * Factory function to create a ValueSetComposeInclude from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetComposeInclude): ValueSetComposeInclude;
    /**
     * Check if the current ValueSetComposeInclude contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
 */
export declare class ValueSetCompose extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetCompose {
    /**
     * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
     */
    exclude?: fhirModels.ValueSetComposeInclude[] | undefined;
    /**
     * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems, e.g. LOINC, "deprecated" does mean inactive. Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active.
     * The Value Set Definition specification defines an ActiveOnly element, which is the reverse of this element e.g. (ValueSet.compose.inactive=FALSE) is the same as (VSD.ActiveOnly=TRUE).
     */
    inactive?: boolean | undefined;
    _inactive?: fhirModels.Element | undefined;
    /**
     * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
     */
    include?: fhirModels.ValueSetComposeInclude[] | undefined;
    /**
     * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
     */
    lockedDate?: string | undefined;
    _lockedDate?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetCompose from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetCompose>);
    /**
     * Factory function to create a ValueSetCompose from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetCompose): ValueSetCompose;
    /**
     * Check if the current ValueSetCompose contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
 */
export declare class ValueSetExpansionParameter extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetExpansionParameter {
    /**
     * The names are assigned at the discretion of the server.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirModels.Element | undefined;
    /**
     * The value of the parameter.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetExpansionParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetExpansionParameter>);
    /**
     * Factory function to create a ValueSetExpansionParameter from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetExpansionParameter): ValueSetExpansionParameter;
    /**
     * Check if the current ValueSetExpansionParameter contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The codes that are contained in the value set expansion.
 */
export declare class ValueSetExpansionContains extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetExpansionContains {
    /**
     * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
     */
    abstract?: boolean | undefined;
    _abstract?: fhirModels.Element | undefined;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
     */
    code?: string | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
     */
    contains?: fhirModels.ValueSetExpansionContains[] | undefined;
    /**
     * The designations provided must be based on the value set and code system definitions.
     */
    designation?: fhirModels.ValueSetComposeIncludeConceptDesignation[] | undefined;
    /**
     * The recommended display for this item in the expansion.
     */
    display?: string | undefined;
    _display?: fhirModels.Element | undefined;
    /**
     * This should only have a value if the concept is inactive.
     */
    inactive?: boolean | undefined;
    _inactive?: fhirModels.Element | undefined;
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */
    system?: string | undefined;
    _system?: fhirModels.Element | undefined;
    /**
     * The exact value of the version string is specified by the system from which the code is derived.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetExpansionContains from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetExpansionContains>);
    /**
     * Factory function to create a ValueSetExpansionContains from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetExpansionContains): ValueSetExpansionContains;
    /**
     * Check if the current ValueSetExpansionContains contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
 * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
 */
export declare class ValueSetExpansion extends fhirModels.BackboneElement implements fhirInterfaces.IValueSetExpansion {
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: fhirModels.ValueSetExpansionContains[] | undefined;
    /**
     * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
     */
    identifier?: string | undefined;
    _identifier?: fhirModels.Element | undefined;
    /**
     * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
     */
    offset?: number | undefined;
    _offset?: fhirModels.Element | undefined;
    /**
     * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
     */
    parameter?: fhirModels.ValueSetExpansionParameter[] | undefined;
    /**
     * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
     */
    timestamp?: string | undefined;
    _timestamp?: fhirModels.Element | undefined;
    /**
     * Paging only applies to flat expansions.
     */
    total?: number | undefined;
    _total?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSetExpansion from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSetExpansion>);
    /**
     * Factory function to create a ValueSetExpansion from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSetExpansion): ValueSetExpansion;
    /**
     * Check if the current ValueSetExpansion contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
 */
export declare class ValueSet extends fhirModels.DomainResource implements fhirInterfaces.IValueSet {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ValueSet";
    /**
     * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
     */
    compose?: fhirModels.ValueSetCompose | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the value set. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the value set was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the value set as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the value set is presumed to be the predominant language in the place the value set was created).The description is not intended to describe the semantics of the Value Set - there are no intrinsic semantics separate from the codes contained in its expansion. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes. A description should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a description.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
     * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
     */
    expansion?: fhirModels.ValueSetExpansion | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this value set outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Normally immutability is set to 'false', which is the default assumption if it is not populated.  Note that the implication is that if this is set to 'true', there may be only one ValueSet version for this definition. Immutability tends to be set to 'true' in one of two cases: - Where the value set, by the nature of its usage, cannot change.  For example "All specializations of ACT in ActClassCode" - Where there's no safe way to express the "Purpose" such that someone else could safely make changes to the value set definition. Source workflow control must guarantee that the same URI always yields the same definition.
     */
    immutable?: boolean | undefined;
    _immutable?: fhirModels.Element | undefined;
    /**
     * It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.A name should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a name.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the value set is the organization or individual primarily responsible for the maintenance and upkeep of the value set. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the value set. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the value set. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this value set.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use versus not.See also the [valueset-workflowStatus](extension-valueset-workflowstatus.html) extension for additional status information related to the editorial process.
     */
    status?: ValueSetStatusEnum | undefined;
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
     * There may be different value set instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the value set with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for ValueSet from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IValueSet>);
    /**
     * Factory function to create a ValueSet from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IValueSet): ValueSet;
    /**
     * Check if the current ValueSet contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the ValueSet.status field
 */
export declare enum ValueSetStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ValueSet.d.ts.map
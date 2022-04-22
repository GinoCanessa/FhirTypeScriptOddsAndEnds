import * as fhir from '../fhir.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
import { DesignationUseValueSetType } from '../fhirValueSets/DesignationUseValueSet.js';
import { FilterOperatorValueSetType, FilterOperatorValueSetEnum } from '../fhirValueSets/FilterOperatorValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export declare type IValueSetComposeIncludeConceptDesignation = fhir.IBackboneElement & {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.designation.language
     */
    _language?: fhir.IFhirElement | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhir.ICoding | undefined;
    /**
     * The text value for this designation.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.designation.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 */
export declare type IValueSetComposeIncludeConcept = fhir.IBackboneElement & {
    /**
     * Expressions are allowed if defined by the underlying code system.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
     */
    designation?: fhir.IValueSetComposeIncludeConceptDesignation[] | undefined;
};
/**
 * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
 */
export declare type IValueSetComposeIncludeFilter = fhir.IBackboneElement & {
    /**
     * A code that identifies a property or a filter defined in the code system.
     */
    property: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.property
     */
    _property?: fhir.IFhirElement | undefined;
    /**
     * In case filter.property represents a property of the system, the operation applies to the selected property. In case filter.property represents a filter of the system, the operation SHALL match one of the CodeSystem.filter.operator values.
     */
    op: FilterOperatorValueSetEnum | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.op
     */
    _op?: fhir.IFhirElement | undefined;
    /**
     * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
 */
export declare type IValueSetComposeInclude = fhir.IBackboneElement & {
    /**
     * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See ''Coding.system'' for further documentation about the correct value for the system element.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set might not be known until a context of use binds it to a particular version. The special value '*' means all versions; It is at server discretion regarding expansions and which versions must be supported.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
     */
    concept?: fhir.IValueSetComposeIncludeConcept[] | undefined;
    /**
     * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
     */
    filter?: fhir.IValueSetComposeIncludeFilter[] | undefined;
    /**
     * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set](snomedct.html#implicit), or a direct reference to a value set definition using ValueSet.url. The reference might not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
     */
    valueSet?: string[] | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.valueSet
     */
    _valueSet?: fhir.IFhirElement[] | undefined;
};
/**
 * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
 */
export declare type IValueSetCompose = fhir.IBackboneElement & {
    /**
     * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
     */
    lockedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.lockedDate
     */
    _lockedDate?: fhir.IFhirElement | undefined;
    /**
     * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems, e.g. LOINC, "deprecated" does mean inactive. Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active.
     * The Value Set Definition specification defines an ActiveOnly element, which is the reverse of this element e.g. (ValueSet.compose.inactive=FALSE) is the same as (VSD.ActiveOnly=TRUE).
     */
    inactive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.inactive
     */
    _inactive?: fhir.IFhirElement | undefined;
    /**
     * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
     */
    include: fhir.IValueSetComposeInclude[] | null;
    /**
     * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
     */
    exclude?: fhir.IValueSetComposeInclude[] | undefined;
};
/**
 * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
 */
export declare type IValueSetExpansionParameter = fhir.IBackboneElement & {
    /**
     * The names are assigned at the discretion of the server.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
};
/**
 * The codes that are contained in the value set expansion.
 */
export declare type IValueSetExpansionContains = fhir.IBackboneElement & {
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
     */
    abstract?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.abstract
     */
    _abstract?: fhir.IFhirElement | undefined;
    /**
     * This should only have a value if the concept is inactive.
     */
    inactive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.inactive
     */
    _inactive?: fhir.IFhirElement | undefined;
    /**
     * The exact value of the version string is specified by the system from which the code is derived.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The recommended display for this item in the expansion.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * The designations provided must be based on the value set and code system definitions.
     */
    designation?: fhir.IValueSetComposeIncludeConceptDesignation[] | undefined;
    /**
     * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
     */
    contains?: fhir.IValueSetExpansionContains[] | undefined;
};
/**
 * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
 * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
 */
export declare type IValueSetExpansion = fhir.IBackboneElement & {
    /**
     * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
     */
    identifier?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.identifier
     */
    _identifier?: fhir.IFhirElement | undefined;
    /**
     * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
     */
    timestamp: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.timestamp
     */
    _timestamp?: fhir.IFhirElement | undefined;
    /**
     * Paging only applies to flat expansions.
     */
    total?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.total
     */
    _total?: fhir.IFhirElement | undefined;
    /**
     * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
     */
    offset?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.offset
     */
    _offset?: fhir.IFhirElement | undefined;
    /**
     * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
     */
    parameter?: fhir.IValueSetExpansionParameter[] | undefined;
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: fhir.IValueSetExpansionContains[] | undefined;
};
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
 */
export declare type IValueSet = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ValueSet";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this value set outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different value set instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the value set with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.A name should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a name.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use versus not.See also the [valueset-workflowStatus](extension-valueset-workflowstatus.html) extension for additional status information related to the editorial process.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ValueSet.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the value set. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the value set is the organization or individual primarily responsible for the maintenance and upkeep of the value set. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the value set. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the value set was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the value set as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the value set is presumed to be the predominant language in the place the value set was created).The description is not intended to describe the semantics of the Value Set - there are no intrinsic semantics separate from the codes contained in its expansion. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes. A description should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a description.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * Normally immutability is set to 'false', which is the default assumption if it is not populated.  Note that the implication is that if this is set to 'true', there may be only one ValueSet version for this definition. Immutability tends to be set to 'true' in one of two cases: - Where the value set, by the nature of its usage, cannot change.  For example "All specializations of ACT in ActClassCode" - Where there's no safe way to express the "Purpose" such that someone else could safely make changes to the value set definition. Source workflow control must guarantee that the same URI always yields the same definition.
     */
    immutable?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.immutable
     */
    _immutable?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the value set. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this value set.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
     */
    compose?: fhir.IValueSetCompose | undefined;
    /**
     * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
     * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
     */
    expansion?: fhir.IValueSetExpansion | undefined;
};
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export declare class ValueSetComposeIncludeConceptDesignation extends fhir.BackboneElement implements IValueSetComposeIncludeConceptDesignation {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.designation.language
     */
    _language?: fhir.FhirElement | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhir.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.designation.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ValueSetComposeIncludeConceptDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetComposeIncludeConceptDesignation>);
    /**
     * Preferred-bound Value Set for language
     */
    static languagePreferredValueSet(): LanguagesValueSetType;
    /**
     * Extensible-bound Value Set for use
     */
    static useExtensibleValueSet(): DesignationUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 */
export declare class ValueSetComposeIncludeConcept extends fhir.BackboneElement implements IValueSetComposeIncludeConcept {
    /**
     * Expressions are allowed if defined by the underlying code system.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
     */
    designation?: fhir.ValueSetComposeIncludeConceptDesignation[] | undefined;
    /**
     * Default constructor for ValueSetComposeIncludeConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetComposeIncludeConcept>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
 */
export declare class ValueSetComposeIncludeFilter extends fhir.BackboneElement implements IValueSetComposeIncludeFilter {
    /**
     * A code that identifies a property or a filter defined in the code system.
     */
    property: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.property
     */
    _property?: fhir.FhirElement | undefined;
    /**
     * In case filter.property represents a property of the system, the operation applies to the selected property. In case filter.property represents a filter of the system, the operation SHALL match one of the CodeSystem.filter.operator values.
     */
    op: FilterOperatorValueSetEnum | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.op
     */
    _op?: fhir.FhirElement | undefined;
    /**
     * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ValueSetComposeIncludeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetComposeIncludeFilter>);
    /**
     * Required-bound Value Set for op
     */
    static opRequiredValueSet(): FilterOperatorValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
 */
export declare class ValueSetComposeInclude extends fhir.BackboneElement implements IValueSetComposeInclude {
    /**
     * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See ''Coding.system'' for further documentation about the correct value for the system element.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set might not be known until a context of use binds it to a particular version. The special value '*' means all versions; It is at server discretion regarding expansions and which versions must be supported.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The list of concepts is considered ordered, though the order might not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
     */
    concept?: fhir.ValueSetComposeIncludeConcept[] | undefined;
    /**
     * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
     */
    filter?: fhir.ValueSetComposeIncludeFilter[] | undefined;
    /**
     * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set](snomedct.html#implicit), or a direct reference to a value set definition using ValueSet.url. The reference might not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
     */
    valueSet?: string[] | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.valueSet
     */
    _valueSet?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ValueSetComposeInclude - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetComposeInclude>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
 */
export declare class ValueSetCompose extends fhir.BackboneElement implements IValueSetCompose {
    /**
     * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
     */
    lockedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.lockedDate
     */
    _lockedDate?: fhir.FhirElement | undefined;
    /**
     * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems, e.g. LOINC, "deprecated" does mean inactive. Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active.
     * The Value Set Definition specification defines an ActiveOnly element, which is the reverse of this element e.g. (ValueSet.compose.inactive=FALSE) is the same as (VSD.ActiveOnly=TRUE).
     */
    inactive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.inactive
     */
    _inactive?: fhir.FhirElement | undefined;
    /**
     * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
     */
    include: fhir.ValueSetComposeInclude[] | null;
    /**
     * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
     */
    exclude?: fhir.ValueSetComposeInclude[] | undefined;
    /**
     * Default constructor for ValueSetCompose - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetCompose>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
 */
export declare class ValueSetExpansionParameter extends fhir.BackboneElement implements IValueSetExpansionParameter {
    /**
     * The names are assigned at the discretion of the server.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The value of the parameter.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ValueSetExpansionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetExpansionParameter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The codes that are contained in the value set expansion.
 */
export declare class ValueSetExpansionContains extends fhir.BackboneElement implements IValueSetExpansionContains {
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
     */
    abstract?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.abstract
     */
    _abstract?: fhir.FhirElement | undefined;
    /**
     * This should only have a value if the concept is inactive.
     */
    inactive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.inactive
     */
    _inactive?: fhir.FhirElement | undefined;
    /**
     * The exact value of the version string is specified by the system from which the code is derived.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The recommended display for this item in the expansion.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * The designations provided must be based on the value set and code system definitions.
     */
    designation?: fhir.ValueSetComposeIncludeConceptDesignation[] | undefined;
    /**
     * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
     */
    contains?: fhir.ValueSetExpansionContains[] | undefined;
    /**
     * Default constructor for ValueSetExpansionContains - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetExpansionContains>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
 * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
 */
export declare class ValueSetExpansion extends fhir.BackboneElement implements IValueSetExpansion {
    /**
     * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
     */
    identifier?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.identifier
     */
    _identifier?: fhir.FhirElement | undefined;
    /**
     * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
     */
    timestamp: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.timestamp
     */
    _timestamp?: fhir.FhirElement | undefined;
    /**
     * Paging only applies to flat expansions.
     */
    total?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.total
     */
    _total?: fhir.FhirElement | undefined;
    /**
     * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
     */
    offset?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.offset
     */
    _offset?: fhir.FhirElement | undefined;
    /**
     * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
     */
    parameter?: fhir.ValueSetExpansionParameter[] | undefined;
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: fhir.ValueSetExpansionContains[] | undefined;
    /**
     * Default constructor for ValueSetExpansion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSetExpansion>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
 */
export declare class ValueSet extends fhir.DomainResource implements IValueSet {
    /**
     * Resource Type Name
     */
    resourceType: "ValueSet";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this value set outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different value set instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the value set with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.A name should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a name.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use versus not.See also the [valueset-workflowStatus](extension-valueset-workflowstatus.html) extension for additional status information related to the editorial process.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ValueSet.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the value set. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the value set is the organization or individual primarily responsible for the maintenance and upkeep of the value set. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the value set. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the value set was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the value set as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the value set is presumed to be the predominant language in the place the value set was created).The description is not intended to describe the semantics of the Value Set - there are no intrinsic semantics separate from the codes contained in its expansion. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes. A description should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a description.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * Normally immutability is set to 'false', which is the default assumption if it is not populated.  Note that the implication is that if this is set to 'true', there may be only one ValueSet version for this definition. Immutability tends to be set to 'true' in one of two cases: - Where the value set, by the nature of its usage, cannot change.  For example "All specializations of ACT in ActClassCode" - Where there's no safe way to express the "Purpose" such that someone else could safely make changes to the value set definition. Source workflow control must guarantee that the same URI always yields the same definition.
     */
    immutable?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.immutable
     */
    _immutable?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the value set. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this value set.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD).
     */
    compose?: fhir.ValueSetCompose | undefined;
    /**
     * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation. Value set expansions are always considered to be stateless - they are a record of the set of codes in the value set at a point in time under a given set of conditions, and are not subject to ongoing maintenance.
     * Expansion.parameter is  a simplified list of parameters - a subset of the features of the [Parameters](parameters.html) resource.
     */
    expansion?: fhir.ValueSetExpansion | undefined;
    /**
     * Default constructor for ValueSet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IValueSet>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ValueSet.d.ts.map
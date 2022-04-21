import * as fhir from '../fhir.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { CapabilityStatementKindValueSetType, CapabilityStatementKindValueSetEnum } from '../fhirValueSets/CapabilityStatementKindValueSet.js';
import { CodeSearchSupportValueSetType, CodeSearchSupportValueSetEnum } from '../fhirValueSets/CodeSearchSupportValueSet.js';
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare type ITerminologyCapabilitiesSoftware = fhir.IBackboneElement & {
    /**
     * Name the software is known by.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.software.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.software.version
     */
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare type ITerminologyCapabilitiesImplementation = fhir.IBackboneElement & {
    /**
     * Information about the specific installation that this terminology capability statement relates to.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.implementation.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * An absolute base URL for the implementation.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.implementation.url
     */
    _url?: fhir.IFhirElement | undefined;
};
/**
 * Filter Properties supported.
 */
export declare type ITerminologyCapabilitiesCodeSystemVersionFilter = fhir.IBackboneElement & {
    /**
     * Code of the property supported.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.filter.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * Operations supported for the property.
     */
    op: string[] | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.filter.op
     */
    _op?: fhir.IFhirElement[] | undefined;
};
/**
 * Language translations might not be available for all codes.
 */
export declare type ITerminologyCapabilitiesCodeSystemVersion = fhir.IBackboneElement & {
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.isDefault
     */
    _isDefault?: fhir.IFhirElement | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.compositional
     */
    _compositional?: fhir.IFhirElement | undefined;
    /**
     * Language Displays supported.
     */
    language?: string[] | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.language
     */
    _language?: fhir.IFhirElement[] | undefined;
    /**
     * Filter Properties supported.
     */
    filter?: fhir.ITerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
    /**
     * Properties supported for $lookup.
     */
    property?: string[] | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.property
     */
    _property?: fhir.IFhirElement[] | undefined;
};
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export declare type ITerminologyCapabilitiesCodeSystem = fhir.IBackboneElement & {
    /**
     * URI for the Code System.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.uri
     */
    _uri?: fhir.IFhirElement | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhir.ITerminologyCapabilitiesCodeSystemVersion[] | undefined;
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.subsumption
     */
    _subsumption?: fhir.IFhirElement | undefined;
};
/**
 * Supported expansion parameter.
 */
export declare type ITerminologyCapabilitiesExpansionParameter = fhir.IBackboneElement & {
    /**
     * Expansion Parameter name.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.parameter.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Description of support for parameter.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.parameter.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
};
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export declare type ITerminologyCapabilitiesExpansion = fhir.IBackboneElement & {
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.hierarchical
     */
    _hierarchical?: fhir.IFhirElement | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.paging
     */
    _paging?: fhir.IFhirElement | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.incomplete
     */
    _incomplete?: fhir.IFhirElement | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhir.ITerminologyCapabilitiesExpansionParameter[] | undefined;
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.textFilter
     */
    _textFilter?: fhir.IFhirElement | undefined;
};
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
export declare type ITerminologyCapabilitiesValidateCode = fhir.IBackboneElement & {
    /**
     * Whether translations are validated.
     */
    translations: boolean | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.validateCode.translations
     */
    _translations?: fhir.IFhirElement | undefined;
};
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
export declare type ITerminologyCapabilitiesTranslation = fhir.IBackboneElement & {
    /**
     * Whether the client must identify the map.
     */
    needsMap: boolean | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.translation.needsMap
     */
    _needsMap?: fhir.IFhirElement | undefined;
};
/**
 * Whether the $closure operation is supported.
 */
export declare type ITerminologyCapabilitiesClosure = fhir.IBackboneElement & {
    /**
     * If cross-system closure is supported.
     */
    translation?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.closure.translation
     */
    _translation?: fhir.IFhirElement | undefined;
};
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare type ITerminologyCapabilities = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "TerminologyCapabilities";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.kind
     */
    _kind?: fhir.IFhirElement | undefined;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.ITerminologyCapabilitiesSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.ITerminologyCapabilitiesImplementation | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.lockedDate
     */
    _lockedDate?: fhir.IFhirElement | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhir.ITerminologyCapabilitiesCodeSystem[] | undefined;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhir.ITerminologyCapabilitiesExpansion | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: CodeSearchSupportValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSearch
     */
    _codeSearch?: fhir.IFhirElement | undefined;
    /**
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhir.ITerminologyCapabilitiesValidateCode | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhir.ITerminologyCapabilitiesTranslation | undefined;
    /**
     * Whether the $closure operation is supported.
     */
    closure?: fhir.ITerminologyCapabilitiesClosure | undefined;
};
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class TerminologyCapabilitiesSoftware extends fhir.BackboneElement implements ITerminologyCapabilitiesSoftware {
    /**
     * Name the software is known by.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.software.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.software.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesSoftware - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesSoftware>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class TerminologyCapabilitiesImplementation extends fhir.BackboneElement implements ITerminologyCapabilitiesImplementation {
    /**
     * Information about the specific installation that this terminology capability statement relates to.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.implementation.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * An absolute base URL for the implementation.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.implementation.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesImplementation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesImplementation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Filter Properties supported.
 */
export declare class TerminologyCapabilitiesCodeSystemVersionFilter extends fhir.BackboneElement implements ITerminologyCapabilitiesCodeSystemVersionFilter {
    /**
     * Code of the property supported.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.filter.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * Operations supported for the property.
     */
    op: string[] | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.filter.op
     */
    _op?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersionFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesCodeSystemVersionFilter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Language translations might not be available for all codes.
 */
export declare class TerminologyCapabilitiesCodeSystemVersion extends fhir.BackboneElement implements ITerminologyCapabilitiesCodeSystemVersion {
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.isDefault
     */
    _isDefault?: fhir.FhirElement | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.compositional
     */
    _compositional?: fhir.FhirElement | undefined;
    /**
     * Language Displays supported.
     */
    language?: string[] | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.language
     */
    _language?: fhir.FhirElement[] | undefined;
    /**
     * Filter Properties supported.
     */
    filter?: fhir.TerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
    /**
     * Properties supported for $lookup.
     */
    property?: string[] | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.version.property
     */
    _property?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesCodeSystemVersion>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export declare class TerminologyCapabilitiesCodeSystem extends fhir.BackboneElement implements ITerminologyCapabilitiesCodeSystem {
    /**
     * URI for the Code System.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.uri
     */
    _uri?: fhir.FhirElement | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhir.TerminologyCapabilitiesCodeSystemVersion[] | undefined;
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSystem.subsumption
     */
    _subsumption?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesCodeSystem>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Supported expansion parameter.
 */
export declare class TerminologyCapabilitiesExpansionParameter extends fhir.BackboneElement implements ITerminologyCapabilitiesExpansionParameter {
    /**
     * Expansion Parameter name.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.parameter.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Description of support for parameter.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.parameter.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesExpansionParameter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export declare class TerminologyCapabilitiesExpansion extends fhir.BackboneElement implements ITerminologyCapabilitiesExpansion {
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.hierarchical
     */
    _hierarchical?: fhir.FhirElement | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.paging
     */
    _paging?: fhir.FhirElement | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.incomplete
     */
    _incomplete?: fhir.FhirElement | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhir.TerminologyCapabilitiesExpansionParameter[] | undefined;
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.expansion.textFilter
     */
    _textFilter?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesExpansion>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
export declare class TerminologyCapabilitiesValidateCode extends fhir.BackboneElement implements ITerminologyCapabilitiesValidateCode {
    /**
     * Whether translations are validated.
     */
    translations: boolean | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.validateCode.translations
     */
    _translations?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesValidateCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesValidateCode>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
export declare class TerminologyCapabilitiesTranslation extends fhir.BackboneElement implements ITerminologyCapabilitiesTranslation {
    /**
     * Whether the client must identify the map.
     */
    needsMap: boolean | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.translation.needsMap
     */
    _needsMap?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesTranslation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesTranslation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Whether the $closure operation is supported.
 */
export declare class TerminologyCapabilitiesClosure extends fhir.BackboneElement implements ITerminologyCapabilitiesClosure {
    /**
     * If cross-system closure is supported.
     */
    translation?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.closure.translation
     */
    _translation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesClosure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilitiesClosure>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare class TerminologyCapabilities extends fhir.DomainResource implements ITerminologyCapabilities {
    /**
     * Resource Type Name
     */
    resourceType: "TerminologyCapabilities";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindValueSetEnum | null;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.kind
     */
    _kind?: fhir.FhirElement | undefined;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.TerminologyCapabilitiesSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.TerminologyCapabilitiesImplementation | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: boolean | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.lockedDate
     */
    _lockedDate?: fhir.FhirElement | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhir.TerminologyCapabilitiesCodeSystem[] | undefined;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhir.TerminologyCapabilitiesExpansion | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: CodeSearchSupportValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: TerminologyCapabilities.codeSearch
     */
    _codeSearch?: fhir.FhirElement | undefined;
    /**
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhir.TerminologyCapabilitiesValidateCode | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhir.TerminologyCapabilitiesTranslation | undefined;
    /**
     * Whether the $closure operation is supported.
     */
    closure?: fhir.TerminologyCapabilitiesClosure | undefined;
    /**
     * Default constructor for TerminologyCapabilities - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ITerminologyCapabilities>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for kind
     */
    kindRequiredValueSet(): CapabilityStatementKindValueSetType;
    /**
     * Required-bound Value Set for codeSearch
     */
    codeSearchRequiredValueSet(): CodeSearchSupportValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=TerminologyCapabilities.d.ts.map
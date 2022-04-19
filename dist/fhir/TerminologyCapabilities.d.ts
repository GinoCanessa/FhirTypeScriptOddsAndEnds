import * as fhir from '../fhir';
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare type ITerminologyCapabilitiesSoftware = fhir.IBackboneElement & {
    /**
     * Name the software is known by.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
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
    _description?: fhir.IFhirElement | undefined;
    /**
     * An absolute base URL for the implementation.
     */
    url?: string | undefined;
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
    _code?: fhir.IFhirElement | undefined;
    /**
     * Operations supported for the property.
     */
    op: string[] | null;
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
    _code?: fhir.IFhirElement | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: boolean | undefined;
    _compositional?: fhir.IFhirElement | undefined;
    /**
     * Filter Properties supported.
     */
    filter?: fhir.ITerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: boolean | undefined;
    _isDefault?: fhir.IFhirElement | undefined;
    /**
     * Language Displays supported.
     */
    language?: string[] | undefined;
    _language?: fhir.IFhirElement[] | undefined;
    /**
     * Properties supported for $lookup.
     */
    property?: string[] | undefined;
    _property?: fhir.IFhirElement[] | undefined;
};
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export declare type ITerminologyCapabilitiesCodeSystem = fhir.IBackboneElement & {
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean | undefined;
    _subsumption?: fhir.IFhirElement | undefined;
    /**
     * URI for the Code System.
     */
    uri?: string | undefined;
    _uri?: fhir.IFhirElement | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhir.ITerminologyCapabilitiesCodeSystemVersion[] | undefined;
};
/**
 * Supported expansion parameter.
 */
export declare type ITerminologyCapabilitiesExpansionParameter = fhir.IBackboneElement & {
    /**
     * Description of support for parameter.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * Expansion Parameter name.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
};
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export declare type ITerminologyCapabilitiesExpansion = fhir.IBackboneElement & {
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: boolean | undefined;
    _hierarchical?: fhir.IFhirElement | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: boolean | undefined;
    _incomplete?: fhir.IFhirElement | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: boolean | undefined;
    _paging?: fhir.IFhirElement | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhir.ITerminologyCapabilitiesExpansionParameter[] | undefined;
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: string | undefined;
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
     * Whether the $closure operation is supported.
     */
    closure?: fhir.ITerminologyCapabilitiesClosure | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: TerminologyCapabilitiesCodeSearchEnum | undefined;
    _codeSearch?: fhir.IFhirElement | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhir.ITerminologyCapabilitiesCodeSystem[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhir.ITerminologyCapabilitiesExpansion | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.ITerminologyCapabilitiesImplementation | undefined;
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: TerminologyCapabilitiesKindEnum | null;
    _kind?: fhir.IFhirElement | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: boolean | undefined;
    _lockedDate?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.ITerminologyCapabilitiesSoftware | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: TerminologyCapabilitiesStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhir.ITerminologyCapabilitiesTranslation | undefined;
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
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhir.ITerminologyCapabilitiesValidateCode | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class TerminologyCapabilitiesSoftware extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesSoftware {
    /**
     * Name the software is known by.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesSoftware - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesSoftware>);
    /**
     * Check if the current TerminologyCapabilitiesSoftware contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesSoftware from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesSoftware): TerminologyCapabilitiesSoftware;
}
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class TerminologyCapabilitiesImplementation extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesImplementation {
    /**
     * Information about the specific installation that this terminology capability statement relates to.
     */
    description: string | null;
    _description?: fhir.FhirElement | undefined;
    /**
     * An absolute base URL for the implementation.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesImplementation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesImplementation>);
    /**
     * Check if the current TerminologyCapabilitiesImplementation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesImplementation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesImplementation): TerminologyCapabilitiesImplementation;
}
/**
 * Filter Properties supported.
 */
export declare class TerminologyCapabilitiesCodeSystemVersionFilter extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesCodeSystemVersionFilter {
    /**
     * Code of the property supported.
     */
    code: string | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * Operations supported for the property.
     */
    op: string[] | null;
    _op?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersionFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesCodeSystemVersionFilter>);
    /**
     * Check if the current TerminologyCapabilitiesCodeSystemVersionFilter contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesCodeSystemVersionFilter from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesCodeSystemVersionFilter): TerminologyCapabilitiesCodeSystemVersionFilter;
}
/**
 * Language translations might not be available for all codes.
 */
export declare class TerminologyCapabilitiesCodeSystemVersion extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesCodeSystemVersion {
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: string | undefined;
    _code?: fhir.FhirElement | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: boolean | undefined;
    _compositional?: fhir.FhirElement | undefined;
    /**
     * Filter Properties supported.
     */
    filter?: fhir.TerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: boolean | undefined;
    _isDefault?: fhir.FhirElement | undefined;
    /**
     * Language Displays supported.
     */
    language?: string[] | undefined;
    _language?: fhir.FhirElement[] | undefined;
    /**
     * Properties supported for $lookup.
     */
    property?: string[] | undefined;
    _property?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesCodeSystemVersion>);
    /**
     * Check if the current TerminologyCapabilitiesCodeSystemVersion contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesCodeSystemVersion from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesCodeSystemVersion): TerminologyCapabilitiesCodeSystemVersion;
}
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export declare class TerminologyCapabilitiesCodeSystem extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesCodeSystem {
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean | undefined;
    _subsumption?: fhir.FhirElement | undefined;
    /**
     * URI for the Code System.
     */
    uri?: string | undefined;
    _uri?: fhir.FhirElement | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhir.TerminologyCapabilitiesCodeSystemVersion[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesCodeSystem>);
    /**
     * Check if the current TerminologyCapabilitiesCodeSystem contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesCodeSystem from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesCodeSystem): TerminologyCapabilitiesCodeSystem;
}
/**
 * Supported expansion parameter.
 */
export declare class TerminologyCapabilitiesExpansionParameter extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesExpansionParameter {
    /**
     * Description of support for parameter.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Expansion Parameter name.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesExpansionParameter>);
    /**
     * Check if the current TerminologyCapabilitiesExpansionParameter contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesExpansionParameter from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesExpansionParameter): TerminologyCapabilitiesExpansionParameter;
}
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export declare class TerminologyCapabilitiesExpansion extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesExpansion {
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: boolean | undefined;
    _hierarchical?: fhir.FhirElement | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: boolean | undefined;
    _incomplete?: fhir.FhirElement | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: boolean | undefined;
    _paging?: fhir.FhirElement | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhir.TerminologyCapabilitiesExpansionParameter[] | undefined;
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: string | undefined;
    _textFilter?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesExpansion>);
    /**
     * Check if the current TerminologyCapabilitiesExpansion contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesExpansion from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesExpansion): TerminologyCapabilitiesExpansion;
}
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
export declare class TerminologyCapabilitiesValidateCode extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesValidateCode {
    /**
     * Whether translations are validated.
     */
    translations: boolean | null;
    _translations?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesValidateCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesValidateCode>);
    /**
     * Check if the current TerminologyCapabilitiesValidateCode contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesValidateCode from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesValidateCode): TerminologyCapabilitiesValidateCode;
}
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
export declare class TerminologyCapabilitiesTranslation extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesTranslation {
    /**
     * Whether the client must identify the map.
     */
    needsMap: boolean | null;
    _needsMap?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesTranslation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesTranslation>);
    /**
     * Check if the current TerminologyCapabilitiesTranslation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesTranslation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesTranslation): TerminologyCapabilitiesTranslation;
}
/**
 * Whether the $closure operation is supported.
 */
export declare class TerminologyCapabilitiesClosure extends fhir.BackboneElement implements fhir.ITerminologyCapabilitiesClosure {
    /**
     * If cross-system closure is supported.
     */
    translation?: boolean | undefined;
    _translation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesClosure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilitiesClosure>);
    /**
     * Check if the current TerminologyCapabilitiesClosure contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilitiesClosure from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilitiesClosure): TerminologyCapabilitiesClosure;
}
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare class TerminologyCapabilities extends fhir.DomainResource implements fhir.ITerminologyCapabilities {
    /**
     * Resource Type Name
     */
    resourceType: "TerminologyCapabilities";
    /**
     * Whether the $closure operation is supported.
     */
    closure?: fhir.TerminologyCapabilitiesClosure | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: TerminologyCapabilitiesCodeSearchEnum | undefined;
    _codeSearch?: fhir.FhirElement | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhir.TerminologyCapabilitiesCodeSystem[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhir.TerminologyCapabilitiesExpansion | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.TerminologyCapabilitiesImplementation | undefined;
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: TerminologyCapabilitiesKindEnum | null;
    _kind?: fhir.FhirElement | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: boolean | undefined;
    _lockedDate?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.TerminologyCapabilitiesSoftware | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: TerminologyCapabilitiesStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhir.TerminologyCapabilitiesTranslation | undefined;
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
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhir.TerminologyCapabilitiesValidateCode | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TerminologyCapabilities - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITerminologyCapabilities>);
    /**
     * Check if the current TerminologyCapabilities contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a TerminologyCapabilities from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ITerminologyCapabilities): TerminologyCapabilities;
}
/**
 * Code Values for the TerminologyCapabilities.codeSearch field
 */
export declare enum TerminologyCapabilitiesCodeSearchEnum {
    EXPLICIT = "explicit",
    ALL = "all"
}
/**
 * Code Values for the TerminologyCapabilities.kind field
 */
export declare enum TerminologyCapabilitiesKindEnum {
    INSTANCE = "instance",
    CAPABILITY = "capability",
    REQUIREMENTS = "requirements"
}
/**
 * Code Values for the TerminologyCapabilities.status field
 */
export declare enum TerminologyCapabilitiesStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=TerminologyCapabilities.d.ts.map
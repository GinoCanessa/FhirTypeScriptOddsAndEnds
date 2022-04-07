import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class TerminologyCapabilitiesSoftware extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesSoftware {
    /**
     * Name the software is known by.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesSoftware from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesSoftware);
}
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class TerminologyCapabilitiesImplementation extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesImplementation {
    /**
     * Information about the specific installation that this terminology capability statement relates to.
     */
    description: string;
    _description?: fhirModels.Element | undefined;
    /**
     * An absolute base URL for the implementation.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesImplementation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesImplementation);
}
/**
 * Filter Properties supported.
 */
export declare class TerminologyCapabilitiesCodeSystemVersionFilter extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesCodeSystemVersionFilter {
    /**
     * Code of the property supported.
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * Operations supported for the property.
     */
    op: string[];
    _op?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersionFilter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesCodeSystemVersionFilter);
}
/**
 * Language translations might not be available for all codes.
 */
export declare class TerminologyCapabilitiesCodeSystemVersion extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesCodeSystemVersion {
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: string | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: boolean | undefined;
    _compositional?: fhirModels.Element | undefined;
    /**
     * Filter Properties supported.
     */
    filter?: fhirModels.TerminologyCapabilitiesCodeSystemVersionFilter[] | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: boolean | undefined;
    _isDefault?: fhirModels.Element | undefined;
    /**
     * Language Displays supported.
     */
    language?: string[] | undefined;
    _language?: fhirModels.Element[] | undefined;
    /**
     * Properties supported for $lookup.
     */
    property?: string[] | undefined;
    _property?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersion from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesCodeSystemVersion);
}
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export declare class TerminologyCapabilitiesCodeSystem extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesCodeSystem {
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: boolean | undefined;
    _subsumption?: fhirModels.Element | undefined;
    /**
     * URI for the Code System.
     */
    uri?: string | undefined;
    _uri?: fhirModels.Element | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhirModels.TerminologyCapabilitiesCodeSystemVersion[] | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystem from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesCodeSystem);
}
/**
 * Supported expansion parameter.
 */
export declare class TerminologyCapabilitiesExpansionParameter extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesExpansionParameter {
    /**
     * Description of support for parameter.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Expansion Parameter name.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansionParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesExpansionParameter);
}
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export declare class TerminologyCapabilitiesExpansion extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesExpansion {
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: boolean | undefined;
    _hierarchical?: fhirModels.Element | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: boolean | undefined;
    _incomplete?: fhirModels.Element | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: boolean | undefined;
    _paging?: fhirModels.Element | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhirModels.TerminologyCapabilitiesExpansionParameter[] | undefined;
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: string | undefined;
    _textFilter?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansion from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesExpansion);
}
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
export declare class TerminologyCapabilitiesValidateCode extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesValidateCode {
    /**
     * Whether translations are validated.
     */
    translations: boolean;
    _translations?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesValidateCode from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesValidateCode);
}
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
export declare class TerminologyCapabilitiesTranslation extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesTranslation {
    /**
     * Whether the client must identify the map.
     */
    needsMap: boolean;
    _needsMap?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesTranslation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesTranslation);
}
/**
 * Whether the $closure operation is supported.
 */
export declare class TerminologyCapabilitiesClosure extends fhirModels.BackboneElement implements fhirInterfaces.ITerminologyCapabilitiesClosure {
    /**
     * If cross-system closure is supported.
     */
    translation?: boolean | undefined;
    _translation?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesClosure from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilitiesClosure);
}
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare class TerminologyCapabilities extends fhirModels.DomainResource implements fhirInterfaces.ITerminologyCapabilities {
    /**
     * Resource Type Name
     */
    readonly resourceType = "TerminologyCapabilities";
    /**
     * Whether the $closure operation is supported.
     */
    closure?: fhirModels.TerminologyCapabilitiesClosure | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: TerminologyCapabilitiesCodeSearchEnum | undefined;
    _codeSearch?: fhirModels.Element | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhirModels.TerminologyCapabilitiesCodeSystem[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhirModels.TerminologyCapabilitiesExpansion | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhirModels.TerminologyCapabilitiesImplementation | undefined;
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: TerminologyCapabilitiesKindEnum;
    _kind?: fhirModels.Element | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: boolean | undefined;
    _lockedDate?: fhirModels.Element | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhirModels.TerminologyCapabilitiesSoftware | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: TerminologyCapabilitiesStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhirModels.TerminologyCapabilitiesTranslation | undefined;
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
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhirModels.TerminologyCapabilitiesValidateCode | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for TerminologyCapabilities from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ITerminologyCapabilities);
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
import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export declare class Library extends fhirModels.DomainResource implements fhirInterfaces.ILibrary {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Library";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhirModels.Element | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhirModels.ContactDetail[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
     */
    content?: fhirModels.Attachment[] | undefined;
    /**
     * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
     */
    dataRequirement?: fhirModels.DataRequirement[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhirModels.ContactDetail[] | undefined;
    /**
     * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhirModels.Period | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhirModels.ContactDetail[] | undefined;
    /**
     * Allows filtering of librarys that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhirModels.Element | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The parameter element defines parameters used by the library.
     */
    parameter?: fhirModels.ParameterDefinition[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhirModels.RelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhirModels.ContactDetail[] | undefined;
    /**
     * Allows filtering of libraries that are appropriate for use vs. not.
     */
    status?: LibraryStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * A code or group definition that describes the intended subject of the contents of the library.
     */
    subjectCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the contents of the library.
     */
    subjectReference?: fhirModels.Reference | undefined;
    /**
     * An explanatory or alternate title for the library giving additional information about its content.
     */
    subtitle?: string | undefined;
    _subtitle?: fhirModels.Element | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
     */
    topic?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * A detailed description of how the library is used from a clinical perspective.
     */
    usage?: string | undefined;
    _usage?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for Library from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ILibrary>);
    /**
     * Factory function to create a Library from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ILibrary): Library;
    /**
     * Check if the current Library contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Library.status field
 */
export declare enum LibraryStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Library.d.ts.map
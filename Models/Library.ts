// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export class Library extends fhirModels.DomainResource implements fhirInterfaces.ILibrary {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Library";
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  _approvalDate?: fhirModels.Element|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhirModels.ContactDetail[]|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[]|undefined;
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  content?: fhirModels.Attachment[]|undefined;
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  copyright?: string|undefined;
  _copyright?: fhirModels.Element|undefined;
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  dataRequirement?: fhirModels.DataRequirement[]|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhirModels.ContactDetail[]|undefined;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirModels.Period|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhirModels.ContactDetail[]|undefined;
  /**
   * Allows filtering of librarys that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  _experimental?: fhirModels.Element|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  _lastReviewDate?: fhirModels.Element|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * The parameter element defines parameters used by the library.
   */
  parameter?: fhirModels.ParameterDefinition[]|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirModels.Element|undefined;
  /**
   * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  purpose?: string|undefined;
  _purpose?: fhirModels.Element|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhirModels.RelatedArtifact[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhirModels.ContactDetail[]|undefined;
  /**
   * Allows filtering of libraries that are appropriate for use vs. not.
   */
  status: LibraryStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subjectCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subjectReference?: fhirModels.Reference|undefined;
  /**
   * An explanatory or alternate title for the library giving additional information about its content.
   */
  subtitle?: string|undefined;
  _subtitle?: fhirModels.Element|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  topic?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  type: fhirModels.CodeableConcept|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  usage?: string|undefined;
  _usage?: fhirModels.Element|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[]|undefined;
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for Library from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ILibrary>) {
    super(source);
    if ((source['resourceType'] !== "Library") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Library'; }
    if (source["approvalDate"] !== undefined) { this.approvalDate = source.approvalDate; }
    if (source["_approvalDate"] !== undefined) { this._approvalDate = new fhirModels.Element(source._approvalDate); }
    if (source["author"] !== undefined) { this.author = source.author.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["contact"] !== undefined) { this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["content"] !== undefined) { this.content = source.content.map((x) => new fhirModels.Attachment(x)); }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = new fhirModels.Element(source._copyright); }
    if (source["dataRequirement"] !== undefined) { this.dataRequirement = source.dataRequirement.map((x) => new fhirModels.DataRequirement(x)); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["editor"] !== undefined) { this.editor = source.editor.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = new fhirModels.Period(source.effectivePeriod); }
    if (source["endorser"] !== undefined) { this.endorser = source.endorser.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["experimental"] !== undefined) { this.experimental = source.experimental; }
    if (source["_experimental"] !== undefined) { this._experimental = new fhirModels.Element(source._experimental); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["lastReviewDate"] !== undefined) { this.lastReviewDate = source.lastReviewDate; }
    if (source["_lastReviewDate"] !== undefined) { this._lastReviewDate = new fhirModels.Element(source._lastReviewDate); }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["parameter"] !== undefined) { this.parameter = source.parameter.map((x) => new fhirModels.ParameterDefinition(x)); }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = new fhirModels.Element(source._publisher); }
    if (source["purpose"] !== undefined) { this.purpose = source.purpose; }
    if (source["_purpose"] !== undefined) { this._purpose = new fhirModels.Element(source._purpose); }
    if (source["relatedArtifact"] !== undefined) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhirModels.RelatedArtifact(x)); }
    if (source["reviewer"] !== undefined) { this.reviewer = source.reviewer.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["subjectCodeableConcept"] !== undefined) { this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept); }
    if (source["subjectReference"] !== undefined) { this.subjectReference = new fhirModels.Reference(source.subjectReference); }
    if (source["subtitle"] !== undefined) { this.subtitle = source.subtitle; }
    if (source["_subtitle"] !== undefined) { this._subtitle = new fhirModels.Element(source._subtitle); }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = new fhirModels.Element(source._title); }
    if (source["topic"] !== undefined) { this.topic = source.topic.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
    if (source["usage"] !== undefined) { this.usage = source.usage; }
    if (source["_usage"] !== undefined) { this._usage = new fhirModels.Element(source._usage); }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x)); }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = new fhirModels.Element(source._version); }
  }
  /**
   * Check if the current Library contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Library from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ILibrary):Library {
    var dest:Library = new Library(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Library is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the Library.status field
 */
export enum LibraryStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}

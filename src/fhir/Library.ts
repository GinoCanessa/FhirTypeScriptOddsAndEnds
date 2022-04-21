// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Library

import * as fhir from '../fhir.js'

import { PublicationStatusValueSet, PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js'
import { LibraryTypeValueSet, LibraryTypeValueSetType, LibraryTypeValueSetEnum } from '../fhirValueSets/LibraryTypeValueSet.js'
import { SubjectTypeValueSet, SubjectTypeValueSetType, SubjectTypeValueSetEnum } from '../fhirValueSets/SubjectTypeValueSet.js'
import { DefinitionTopicValueSet, DefinitionTopicValueSetType, DefinitionTopicValueSetEnum } from '../fhirValueSets/DefinitionTopicValueSet.js'

/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export type ILibrary = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Library";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  /**
   * Extended properties for primitive element: Library.url
   */
  _url?: fhir.IFhirElement|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: Library.version
   */
  _version?: fhir.IFhirElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: Library.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  /**
   * Extended properties for primitive element: Library.title
   */
  _title?: fhir.IFhirElement|undefined;
  /**
   * An explanatory or alternate title for the library giving additional information about its content.
   */
  subtitle?: string|undefined;
  /**
   * Extended properties for primitive element: Library.subtitle
   */
  _subtitle?: fhir.IFhirElement|undefined;
  /**
   * Allows filtering of libraries that are appropriate for use vs. not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Library.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * Allows filtering of librarys that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: Library.experimental
   */
  _experimental?: fhir.IFhirElement|undefined;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  type: fhir.ICodeableConcept|null;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subjectCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subjectReference?: fhir.IReference|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: Library.date
   */
  _date?: fhir.IFhirElement|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  /**
   * Extended properties for primitive element: Library.publisher
   */
  _publisher?: fhir.IFhirElement|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.IContactDetail[]|undefined;
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: Library.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.IUsageContext[]|undefined;
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.ICodeableConcept[]|undefined;
  /**
   * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  purpose?: string|undefined;
  /**
   * Extended properties for primitive element: Library.purpose
   */
  _purpose?: fhir.IFhirElement|undefined;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  usage?: string|undefined;
  /**
   * Extended properties for primitive element: Library.usage
   */
  _usage?: fhir.IFhirElement|undefined;
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  copyright?: string|undefined;
  /**
   * Extended properties for primitive element: Library.copyright
   */
  _copyright?: fhir.IFhirElement|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  /**
   * Extended properties for primitive element: Library.approvalDate
   */
  _approvalDate?: fhir.IFhirElement|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  /**
   * Extended properties for primitive element: Library.lastReviewDate
   */
  _lastReviewDate?: fhir.IFhirElement|undefined;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.IPeriod|undefined;
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  topic?: fhir.ICodeableConcept[]|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhir.IContactDetail[]|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhir.IContactDetail[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhir.IContactDetail[]|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhir.IContactDetail[]|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhir.IRelatedArtifact[]|undefined;
  /**
   * The parameter element defines parameters used by the library.
   */
  parameter?: fhir.IParameterDefinition[]|undefined;
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  dataRequirement?: fhir.IDataRequirement[]|undefined;
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  content?: fhir.IAttachment[]|undefined;
}

/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export class Library extends fhir.DomainResource implements ILibrary {
  /**
   * Resource Type Name
   */
  public resourceType: "Library";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: string|undefined;
  /**
   * Extended properties for primitive element: Library.url
   */
  public _url?: fhir.FhirElement|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
   */
  public version?: string|undefined;
  /**
   * Extended properties for primitive element: Library.version
   */
  public _version?: fhir.FhirElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: Library.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: string|undefined;
  /**
   * Extended properties for primitive element: Library.title
   */
  public _title?: fhir.FhirElement|undefined;
  /**
   * An explanatory or alternate title for the library giving additional information about its content.
   */
  public subtitle?: string|undefined;
  /**
   * Extended properties for primitive element: Library.subtitle
   */
  public _subtitle?: fhir.FhirElement|undefined;
  /**
   * Allows filtering of libraries that are appropriate for use vs. not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Library.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * Allows filtering of librarys that are appropriate for use versus not.
   */
  public experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: Library.experimental
   */
  public _experimental?: fhir.FhirElement|undefined;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  public subjectCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  public subjectReference?: fhir.Reference|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: string|undefined;
  /**
   * Extended properties for primitive element: Library.date
   */
  public _date?: fhir.FhirElement|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: string|undefined;
  /**
   * Extended properties for primitive element: Library.publisher
   */
  public _publisher?: fhir.FhirElement|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined;
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: Library.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined;
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined;
  /**
   * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  public purpose?: string|undefined;
  /**
   * Extended properties for primitive element: Library.purpose
   */
  public _purpose?: fhir.FhirElement|undefined;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  public usage?: string|undefined;
  /**
   * Extended properties for primitive element: Library.usage
   */
  public _usage?: fhir.FhirElement|undefined;
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  public copyright?: string|undefined;
  /**
   * Extended properties for primitive element: Library.copyright
   */
  public _copyright?: fhir.FhirElement|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  public approvalDate?: string|undefined;
  /**
   * Extended properties for primitive element: Library.approvalDate
   */
  public _approvalDate?: fhir.FhirElement|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  public lastReviewDate?: string|undefined;
  /**
   * Extended properties for primitive element: Library.lastReviewDate
   */
  public _lastReviewDate?: fhir.FhirElement|undefined;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  public topic?: fhir.CodeableConcept[]|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  public author?: fhir.ContactDetail[]|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  public editor?: fhir.ContactDetail[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  public reviewer?: fhir.ContactDetail[]|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  public endorser?: fhir.ContactDetail[]|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  public relatedArtifact?: fhir.RelatedArtifact[]|undefined;
  /**
   * The parameter element defines parameters used by the library.
   */
  public parameter?: fhir.ParameterDefinition[]|undefined;
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  public dataRequirement?: fhir.DataRequirement[]|undefined;
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  public content?: fhir.Attachment[]|undefined;
  /**
   * Default constructor for Library - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ILibrary> = { }) {
    super(source);
    this.resourceType = 'Library';
    if (source['url']) { this.url = source.url; }
    if (source['_url']) { this._url = new fhir.FhirElement(source._url!); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['version']) { this.version = source.version; }
    if (source['_version']) { this._version = new fhir.FhirElement(source._version!); }
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['title']) { this.title = source.title; }
    if (source['_title']) { this._title = new fhir.FhirElement(source._title!); }
    if (source['subtitle']) { this.subtitle = source.subtitle; }
    if (source['_subtitle']) { this._subtitle = new fhir.FhirElement(source._subtitle!); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['experimental']) { this.experimental = source.experimental; }
    if (source['_experimental']) { this._experimental = new fhir.FhirElement(source._experimental!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    else { this.type = null; }
    if (source['subjectCodeableConcept']) { this.subjectCodeableConcept = new fhir.CodeableConcept(source.subjectCodeableConcept!); }
    if (source['subjectReference']) { this.subjectReference = new fhir.Reference(source.subjectReference!); }
    if (source['date']) { this.date = source.date; }
    if (source['_date']) { this._date = new fhir.FhirElement(source._date!); }
    if (source['publisher']) { this.publisher = source.publisher; }
    if (source['_publisher']) { this._publisher = new fhir.FhirElement(source._publisher!); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    if (source['purpose']) { this.purpose = source.purpose; }
    if (source['_purpose']) { this._purpose = new fhir.FhirElement(source._purpose!); }
    if (source['usage']) { this.usage = source.usage; }
    if (source['_usage']) { this._usage = new fhir.FhirElement(source._usage!); }
    if (source['copyright']) { this.copyright = source.copyright; }
    if (source['_copyright']) { this._copyright = new fhir.FhirElement(source._copyright!); }
    if (source['approvalDate']) { this.approvalDate = source.approvalDate; }
    if (source['_approvalDate']) { this._approvalDate = new fhir.FhirElement(source._approvalDate!); }
    if (source['lastReviewDate']) { this.lastReviewDate = source.lastReviewDate; }
    if (source['_lastReviewDate']) { this._lastReviewDate = new fhir.FhirElement(source._lastReviewDate!); }
    if (source['effectivePeriod']) { this.effectivePeriod = new fhir.Period(source.effectivePeriod!); }
    if (source['topic']) { this.topic = source.topic.map((x) => new fhir.CodeableConcept(x)); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.ContactDetail(x)); }
    if (source['editor']) { this.editor = source.editor.map((x) => new fhir.ContactDetail(x)); }
    if (source['reviewer']) { this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x)); }
    if (source['endorser']) { this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x)); }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x)); }
    if (source['parameter']) { this.parameter = source.parameter.map((x) => new fhir.ParameterDefinition(x)); }
    if (source['dataRequirement']) { this.dataRequirement = source.dataRequirement.map((x) => new fhir.DataRequirement(x)); }
    if (source['content']) { this.content = source.content.map((x) => new fhir.Attachment(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for type
   */
  public typeExtensibleValueSet():LibraryTypeValueSetType {
    return LibraryTypeValueSet;
  }
  /**
   * Extensible-bound Value Set for subjectCodeableConcept
   */
  public subjectCodeableConceptExtensibleValueSet():SubjectTypeValueSetType {
    return SubjectTypeValueSet;
  }
  /**
   * Extensible-bound Value Set for subjectReference
   */
  public subjectReferenceExtensibleValueSet():SubjectTypeValueSetType {
    return SubjectTypeValueSet;
  }
  /**
   * Example-bound Value Set for topic
   */
  public topicExampleValueSet():DefinitionTopicValueSetType {
    return DefinitionTopicValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Library.resourceType']); }
    if (this["_url"]) { results.push(...this._url.doModelValidation()); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_version"]) { results.push(...this._version.doModelValidation()); }
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["_title"]) { results.push(...this._title.doModelValidation()); }
    if (this["_subtitle"]) { results.push(...this._subtitle.doModelValidation()); }
    if (!this["status"]) { results.push(["status",'Missing required element: Library.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["_experimental"]) { results.push(...this._experimental.doModelValidation()); }
    if (!this["type"]) { results.push(["type",'Missing required element: Library.type']); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["subjectCodeableConcept"]) { results.push(...this.subjectCodeableConcept.doModelValidation()); }
    if (this["subjectReference"]) { results.push(...this.subjectReference.doModelValidation()); }
    if (this["_date"]) { results.push(...this._date.doModelValidation()); }
    if (this["_publisher"]) { results.push(...this._publisher.doModelValidation()); }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["useContext"]) { this.useContext.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_purpose"]) { results.push(...this._purpose.doModelValidation()); }
    if (this["_usage"]) { results.push(...this._usage.doModelValidation()); }
    if (this["_copyright"]) { results.push(...this._copyright.doModelValidation()); }
    if (this["_approvalDate"]) { results.push(...this._approvalDate.doModelValidation()); }
    if (this["_lastReviewDate"]) { results.push(...this._lastReviewDate.doModelValidation()); }
    if (this["effectivePeriod"]) { results.push(...this.effectivePeriod.doModelValidation()); }
    if (this["topic"]) { this.topic.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["author"]) { this.author.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["editor"]) { this.editor.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["reviewer"]) { this.reviewer.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["endorser"]) { this.endorser.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["relatedArtifact"]) { this.relatedArtifact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["parameter"]) { this.parameter.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["dataRequirement"]) { this.dataRequirement.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["content"]) { this.content.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

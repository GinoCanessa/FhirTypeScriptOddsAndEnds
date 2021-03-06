// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Library

import * as fhir from '../fhir.js';

import { PublicationStatusValueSet, PublicationStatusValueSetType,} from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { LibraryTypeValueSet, LibraryTypeValueSetType,} from '../fhirValueSets/LibraryTypeValueSet.js';
import { LibraryTypeValueSetEnum } from '../valueSetEnums.js';
import { DefinitionTopicValueSet, DefinitionTopicValueSetType,} from '../fhirValueSets/DefinitionTopicValueSet.js';
import { DefinitionTopicValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Library type.
 */
export interface LibraryArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Library"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * An explanatory or alternate title for the library giving additional information about its content.
   */
  subtitle?: fhir.FhirString|string|undefined;
  /**
   * Allows filtering of libraries that are appropriate for use vs. not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of librarys that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subject?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subjectCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  subjectReference?: fhir.ReferenceArgs|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  usage?: fhir.FhirString|string|undefined;
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  topic?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhir.ContactDetailArgs[]|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhir.ContactDetailArgs[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhir.ContactDetailArgs[]|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * The parameter element defines parameters used by the library.
   */
  parameter?: fhir.ParameterDefinitionArgs[]|undefined;
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  dataRequirement?: fhir.DataRequirementArgs[]|undefined;
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  content?: fhir.AttachmentArgs[]|undefined;
}

/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export class Library extends fhir.DomainResource {
  readonly __dataType:string = 'Library';
  /**
   * Resource Type Name
   */
  public resourceType: "Library";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * An explanatory or alternate title for the library giving additional information about its content.
   */
  public subtitle?: fhir.FhirString|undefined;
  /**
   * Allows filtering of libraries that are appropriate for use vs. not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of librarys that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * A code or group definition that describes the intended subject of the contents of the library.
   */
  public subject?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  readonly __subjectIsChoice:true = true;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined = [];
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined = [];
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined = [];
  /**
   * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  public usage?: fhir.FhirString|undefined;
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  public approvalDate?: fhir.FhirDate|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  public lastReviewDate?: fhir.FhirDate|undefined;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  public topic?: fhir.CodeableConcept[]|undefined = [];
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  public author?: fhir.ContactDetail[]|undefined = [];
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  public editor?: fhir.ContactDetail[]|undefined = [];
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  public reviewer?: fhir.ContactDetail[]|undefined = [];
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  public endorser?: fhir.ContactDetail[]|undefined = [];
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  public relatedArtifact?: fhir.RelatedArtifact[]|undefined = [];
  /**
   * The parameter element defines parameters used by the library.
   */
  public parameter?: fhir.ParameterDefinition[]|undefined = [];
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  public dataRequirement?: fhir.DataRequirement[]|undefined = [];
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  public content?: fhir.Attachment[]|undefined = [];
  /**
   * Default constructor for Library - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LibraryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Library';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['subtitle']) { this.subtitle = new fhir.FhirString({value: source.subtitle}); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['subject']) { this.subject = source.subject; }
    else if (source['subjectCodeableConcept']) { this.subject = new fhir.CodeableConcept(source.subjectCodeableConcept); }
    else if (source['subjectReference']) { this.subject = new fhir.Reference(source.subjectReference); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    if (source['purpose']) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}); }
    if (source['usage']) { this.usage = new fhir.FhirString({value: source.usage}); }
    if (source['copyright']) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}); }
    if (source['approvalDate']) { this.approvalDate = new fhir.FhirDate({value: source.approvalDate}); }
    if (source['lastReviewDate']) { this.lastReviewDate = new fhir.FhirDate({value: source.lastReviewDate}); }
    if (source['effectivePeriod']) { this.effectivePeriod = new fhir.Period(source.effectivePeriod); }
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
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for type
   */
  public static typeExtensibleValueSet():LibraryTypeValueSetType {
    return LibraryTypeValueSet;
  }
  /**
   * Example-bound Value Set for topic
   */
  public static topicExampleValueSet():DefinitionTopicValueSetType {
    return DefinitionTopicValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Library' fhir: Library.resourceType:'Library'", }));
    }
    if (this["url"]) { outcome.issue!.push(...this.url.doModelValidation().issue!); }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["version"]) { outcome.issue!.push(...this.version.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    if (this["subtitle"]) { outcome.issue!.push(...this.subtitle.doModelValidation().issue!); }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: Library.status:code", }));
    }
    if (this["experimental"]) { outcome.issue!.push(...this.experimental.doModelValidation().issue!); }
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:fhir.CodeableConcept fhir: Library.type:CodeableConcept", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["publisher"]) { outcome.issue!.push(...this.publisher.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["useContext"]) { this.useContext.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["purpose"]) { outcome.issue!.push(...this.purpose.doModelValidation().issue!); }
    if (this["usage"]) { outcome.issue!.push(...this.usage.doModelValidation().issue!); }
    if (this["copyright"]) { outcome.issue!.push(...this.copyright.doModelValidation().issue!); }
    if (this["approvalDate"]) { outcome.issue!.push(...this.approvalDate.doModelValidation().issue!); }
    if (this["lastReviewDate"]) { outcome.issue!.push(...this.lastReviewDate.doModelValidation().issue!); }
    if (this["effectivePeriod"]) { outcome.issue!.push(...this.effectivePeriod.doModelValidation().issue!); }
    if (this["topic"]) { this.topic.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["author"]) { this.author.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["editor"]) { this.editor.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reviewer"]) { this.reviewer.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["endorser"]) { this.endorser.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["relatedArtifact"]) { this.relatedArtifact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["parameter"]) { this.parameter.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["dataRequirement"]) { this.dataRequirement.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["content"]) { this.content.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}

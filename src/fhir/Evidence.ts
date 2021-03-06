// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Evidence

import * as fhir from '../fhir.js';

import { PublicationStatusValueSet, PublicationStatusValueSetType,} from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { DefinitionTopicValueSet, DefinitionTopicValueSetType,} from '../fhirValueSets/DefinitionTopicValueSet.js';
import { DefinitionTopicValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Evidence type.
 */
export interface EvidenceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Evidence"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different evidence instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence with the format [url]|[version].
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
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: fhir.FhirString|string|undefined;
  /**
   * An explanatory or alternate title for the Evidence giving additional information about its content.
   */
  subtitle?: fhir.FhirString|string|undefined;
  /**
   * Allows filtering of evidences that are appropriate for use versus not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the evidence to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A copyright statement relating to the evidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence.
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
   * The effective period for a evidence  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Descriptive topics related to the content of the Evidence. Topics provide a high-level categorization grouping types of Evidences that can be useful for filtering and searching.
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
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  exposureBackground: fhir.ReferenceArgs|null;
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  exposureVariant?: fhir.ReferenceArgs[]|undefined;
  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  outcome?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export class Evidence extends fhir.DomainResource {
  readonly __dataType:string = 'Evidence';
  /**
   * Resource Type Name
   */
  public resourceType: "Evidence";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * There may be different evidence instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence with the format [url]|[version].
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
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  public shortTitle?: fhir.FhirString|undefined;
  /**
   * An explanatory or alternate title for the Evidence giving additional information about its content.
   */
  public subtitle?: fhir.FhirString|undefined;
  /**
   * Allows filtering of evidences that are appropriate for use versus not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined = [];
  /**
   * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined = [];
  /**
   * It may be possible for the evidence to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined = [];
  /**
   * A copyright statement relating to the evidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence.
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
   * The effective period for a evidence  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the content of the Evidence. Topics provide a high-level categorization grouping types of Evidences that can be useful for filtering and searching.
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
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  public exposureBackground: fhir.Reference|null;
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  public exposureVariant?: fhir.Reference[]|undefined = [];
  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  public outcome?: fhir.Reference[]|undefined = [];
  /**
   * Default constructor for Evidence - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EvidenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Evidence';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['shortTitle']) { this.shortTitle = new fhir.FhirString({value: source.shortTitle}); }
    if (source['subtitle']) { this.subtitle = new fhir.FhirString({value: source.subtitle}); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
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
    if (source['exposureBackground']) { this.exposureBackground = new fhir.Reference(source.exposureBackground); }
    else { this.exposureBackground = null; }
    if (source['exposureVariant']) { this.exposureVariant = source.exposureVariant.map((x) => new fhir.Reference(x)); }
    if (source['outcome']) { this.outcome = source.outcome.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
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
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Evidence' fhir: Evidence.resourceType:'Evidence'", }));
    }
    if (this["url"]) { outcome.issue!.push(...this.url.doModelValidation().issue!); }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["version"]) { outcome.issue!.push(...this.version.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    if (this["shortTitle"]) { outcome.issue!.push(...this.shortTitle.doModelValidation().issue!); }
    if (this["subtitle"]) { outcome.issue!.push(...this.subtitle.doModelValidation().issue!); }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: Evidence.status:code", }));
    }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["publisher"]) { outcome.issue!.push(...this.publisher.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["useContext"]) { this.useContext.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
    if (!this['exposureBackground']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property exposureBackground:fhir.Reference fhir: Evidence.exposureBackground:Reference", }));
    }
    if (this["exposureBackground"]) { outcome.issue!.push(...this.exposureBackground.doModelValidation().issue!); }
    if (this["exposureVariant"]) { this.exposureVariant.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["outcome"]) { this.outcome.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchDefinition

import * as fhir from '../fhir.js'

import { PublicationStatusValueSet, PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js'
import { SubjectTypeValueSet, SubjectTypeValueSetType, SubjectTypeValueSetEnum } from '../fhirValueSets/SubjectTypeValueSet.js'
import { DefinitionTopicValueSet, DefinitionTopicValueSetType, DefinitionTopicValueSetEnum } from '../fhirValueSets/DefinitionTopicValueSet.js'

/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export type IResearchDefinition = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "ResearchDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.url
   */
  _url?: fhir.IFhirElement|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * There may be different research definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research definition with the format [url]|[version].
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.version
   */
  _version?: fhir.IFhirElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.title
   */
  _title?: fhir.IFhirElement|undefined;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.shortTitle
   */
  _shortTitle?: fhir.IFhirElement|undefined;
  /**
   * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
   */
  subtitle?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.subtitle
   */
  _subtitle?: fhir.IFhirElement|undefined;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: ResearchDefinition.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.experimental
   */
  _experimental?: fhir.IFhirElement|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: fhir.IReference|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.date
   */
  _date?: fhir.IFhirElement|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the research definition is the organization or individual primarily responsible for the maintenance and upkeep of the research definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.publisher
   */
  _publisher?: fhir.IFhirElement|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.IContactDetail[]|undefined;
  /**
   * This description can be used to capture details such as why the research definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research definition is presumed to be the predominant language in the place the research definition was created).
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  comment?: string[]|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.comment
   */
  _comment?: fhir.IFhirElement[]|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.IUsageContext[]|undefined;
  /**
   * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.ICodeableConcept[]|undefined;
  /**
   * This element does not describe the usage of the research definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research definition.
   */
  purpose?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.purpose
   */
  _purpose?: fhir.IFhirElement|undefined;
  /**
   * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
   */
  usage?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.usage
   */
  _usage?: fhir.IFhirElement|undefined;
  /**
   * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
   */
  copyright?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.copyright
   */
  _copyright?: fhir.IFhirElement|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.approvalDate
   */
  _approvalDate?: fhir.IFhirElement|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.lastReviewDate
   */
  _lastReviewDate?: fhir.IFhirElement|undefined;
  /**
   * The effective period for a research definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.IPeriod|undefined;
  /**
   * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
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
   * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
   */
  library?: string[]|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.library
   */
  _library?: fhir.IFhirElement[]|undefined;
  /**
   * A reference to a ResearchElementDefinition resource that defines the population for the research.
   */
  population: fhir.IReference|null;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
   */
  exposure?: fhir.IReference|undefined;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
   */
  exposureAlternative?: fhir.IReference|undefined;
  /**
   * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
   */
  outcome?: fhir.IReference|undefined;
}

/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export class ResearchDefinition extends fhir.DomainResource implements IResearchDefinition {
  /**
   * Resource Type Name
   */
  public resourceType: "ResearchDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.url
   */
  public _url?: fhir.FhirElement|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * There may be different research definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research definition with the format [url]|[version].
   */
  public version?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.version
   */
  public _version?: fhir.FhirElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.title
   */
  public _title?: fhir.FhirElement|undefined;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  public shortTitle?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.shortTitle
   */
  public _shortTitle?: fhir.FhirElement|undefined;
  /**
   * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
   */
  public subtitle?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.subtitle
   */
  public _subtitle?: fhir.FhirElement|undefined;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: ResearchDefinition.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  public experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.experimental
   */
  public _experimental?: fhir.FhirElement|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subjectCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subjectReference?: fhir.Reference|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.date
   */
  public _date?: fhir.FhirElement|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the research definition is the organization or individual primarily responsible for the maintenance and upkeep of the research definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.publisher
   */
  public _publisher?: fhir.FhirElement|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined;
  /**
   * This description can be used to capture details such as why the research definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research definition is presumed to be the predominant language in the place the research definition was created).
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  public comment?: string[]|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.comment
   */
  public _comment?: fhir.FhirElement[]|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined;
  /**
   * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined;
  /**
   * This element does not describe the usage of the research definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research definition.
   */
  public purpose?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.purpose
   */
  public _purpose?: fhir.FhirElement|undefined;
  /**
   * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
   */
  public usage?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.usage
   */
  public _usage?: fhir.FhirElement|undefined;
  /**
   * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
   */
  public copyright?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.copyright
   */
  public _copyright?: fhir.FhirElement|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  public approvalDate?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.approvalDate
   */
  public _approvalDate?: fhir.FhirElement|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  public lastReviewDate?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.lastReviewDate
   */
  public _lastReviewDate?: fhir.FhirElement|undefined;
  /**
   * The effective period for a research definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
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
   * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
   */
  public library?: string[]|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.library
   */
  public _library?: fhir.FhirElement[]|undefined;
  /**
   * A reference to a ResearchElementDefinition resource that defines the population for the research.
   */
  public population: fhir.Reference|null;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
   */
  public exposure?: fhir.Reference|undefined;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
   */
  public exposureAlternative?: fhir.Reference|undefined;
  /**
   * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
   */
  public outcome?: fhir.Reference|undefined;
  /**
   * Default constructor for ResearchDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IResearchDefinition> = { }) {
    super(source);
    this.resourceType = 'ResearchDefinition';
    if (source['url']) { this.url = source.url; }
    if (source['_url']) { this._url = new fhir.FhirElement(source._url!); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['version']) { this.version = source.version; }
    if (source['_version']) { this._version = new fhir.FhirElement(source._version!); }
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['title']) { this.title = source.title; }
    if (source['_title']) { this._title = new fhir.FhirElement(source._title!); }
    if (source['shortTitle']) { this.shortTitle = source.shortTitle; }
    if (source['_shortTitle']) { this._shortTitle = new fhir.FhirElement(source._shortTitle!); }
    if (source['subtitle']) { this.subtitle = source.subtitle; }
    if (source['_subtitle']) { this._subtitle = new fhir.FhirElement(source._subtitle!); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['experimental']) { this.experimental = source.experimental; }
    if (source['_experimental']) { this._experimental = new fhir.FhirElement(source._experimental!); }
    if (source['subjectCodeableConcept']) { this.subjectCodeableConcept = new fhir.CodeableConcept(source.subjectCodeableConcept!); }
    if (source['subjectReference']) { this.subjectReference = new fhir.Reference(source.subjectReference!); }
    if (source['date']) { this.date = source.date; }
    if (source['_date']) { this._date = new fhir.FhirElement(source._date!); }
    if (source['publisher']) { this.publisher = source.publisher; }
    if (source['_publisher']) { this._publisher = new fhir.FhirElement(source._publisher!); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['comment']) { this.comment = source.comment.map((x) => (x)); }
    if (source['_comment']) { this._comment = source._comment.map((x) => new fhir.FhirElement(x)); }
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
    if (source['library']) { this.library = source.library.map((x) => (x)); }
    if (source['_library']) { this._library = source._library.map((x) => new fhir.FhirElement(x)); }
    if (source['population']) { this.population = new fhir.Reference(source.population!); }
    else { this.population = null; }
    if (source['exposure']) { this.exposure = new fhir.Reference(source.exposure!); }
    if (source['exposureAlternative']) { this.exposureAlternative = new fhir.Reference(source.exposureAlternative!); }
    if (source['outcome']) { this.outcome = new fhir.Reference(source.outcome!); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for subjectCodeableConcept
   */
  public static subjectCodeableConceptExtensibleValueSet():SubjectTypeValueSetType {
    return SubjectTypeValueSet;
  }
  /**
   * Extensible-bound Value Set for subjectReference
   */
  public static subjectReferenceExtensibleValueSet():SubjectTypeValueSetType {
    return SubjectTypeValueSet;
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
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: ResearchDefinition.resourceType']); }
    if (this["_url"]) { results.push(...this._url.doModelValidation()); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_version"]) { results.push(...this._version.doModelValidation()); }
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["_title"]) { results.push(...this._title.doModelValidation()); }
    if (this["_shortTitle"]) { results.push(...this._shortTitle.doModelValidation()); }
    if (this["_subtitle"]) { results.push(...this._subtitle.doModelValidation()); }
    if (!this["status"]) { results.push(["status",'Missing required element: ResearchDefinition.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["_experimental"]) { results.push(...this._experimental.doModelValidation()); }
    if (this["subjectCodeableConcept"]) { results.push(...this.subjectCodeableConcept.doModelValidation()); }
    if (this["subjectReference"]) { results.push(...this.subjectReference.doModelValidation()); }
    if (this["_date"]) { results.push(...this._date.doModelValidation()); }
    if (this["_publisher"]) { results.push(...this._publisher.doModelValidation()); }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["_comment"]) { this._comment.forEach((x) => { results.push(...x.doModelValidation()); }) }
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
    if (this["_library"]) { this._library.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["population"]) { results.push(["population",'Missing required element: ResearchDefinition.population']); }
    if (this["population"]) { results.push(...this.population.doModelValidation()); }
    if (this["exposure"]) { results.push(...this.exposure.doModelValidation()); }
    if (this["exposureAlternative"]) { results.push(...this.exposureAlternative.doModelValidation()); }
    if (this["outcome"]) { results.push(...this.outcome.doModelValidation()); }
    return results;
  }
}

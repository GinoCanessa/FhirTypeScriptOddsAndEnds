// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export class EvidenceVariableCharacteristic extends fhirModels.BackboneElement {
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionReference?: fhirModels.Reference;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string;
  _definitionCanonical?: fhirModels.Element;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: fhirModels.CodeableConcept;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: fhirModels.Expression;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionDataRequirement?: fhirModels.DataRequirement;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionTriggerDefinition?: fhirModels.TriggerDefinition;
  /**
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: boolean;
  _exclude?: fhirModels.Element;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  groupMeasure?: EvidenceVariableCharacteristicGroupMeasureEnum;
  _groupMeasure?: fhirModels.Element;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDateTime?: string;
  _participantEffectiveDateTime?: fhirModels.Element;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectivePeriod?: fhirModels.Period;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDuration?: fhirModels.Duration;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveTiming?: fhirModels.Timing;
  /**
   * Indicates duration from the participant's study entry.
   */
  timeFromStart?: fhirModels.Duration;
  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  usageContext?: fhirModels.UsageContext[];
  /**
   * Default constructor
   */
  constructor(source: EvidenceVariableCharacteristic) {
    super(source);
    if (source["definitionReference"] !== undefined) { this.definitionReference = source.definitionReference; }
    if (source["definitionCanonical"] !== undefined) { this.definitionCanonical = source.definitionCanonical; }
    if (source["_definitionCanonical"] !== undefined) { this._definitionCanonical = source._definitionCanonical; }
    if (source["definitionCodeableConcept"] !== undefined) { this.definitionCodeableConcept = source.definitionCodeableConcept; }
    if (source["definitionExpression"] !== undefined) { this.definitionExpression = source.definitionExpression; }
    if (source["definitionDataRequirement"] !== undefined) { this.definitionDataRequirement = source.definitionDataRequirement; }
    if (source["definitionTriggerDefinition"] !== undefined) { this.definitionTriggerDefinition = source.definitionTriggerDefinition; }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["exclude"] !== undefined) { this.exclude = source.exclude; }
    if (source["_exclude"] !== undefined) { this._exclude = source._exclude; }
    if (source["groupMeasure"] !== undefined) { this.groupMeasure = source.groupMeasure; }
    if (source["_groupMeasure"] !== undefined) { this._groupMeasure = source._groupMeasure; }
    if (source["participantEffectiveDateTime"] !== undefined) { this.participantEffectiveDateTime = source.participantEffectiveDateTime; }
    if (source["_participantEffectiveDateTime"] !== undefined) { this._participantEffectiveDateTime = source._participantEffectiveDateTime; }
    if (source["participantEffectivePeriod"] !== undefined) { this.participantEffectivePeriod = source.participantEffectivePeriod; }
    if (source["participantEffectiveDuration"] !== undefined) { this.participantEffectiveDuration = source.participantEffectiveDuration; }
    if (source["participantEffectiveTiming"] !== undefined) { this.participantEffectiveTiming = source.participantEffectiveTiming; }
    if (source["timeFromStart"] !== undefined) { this.timeFromStart = source.timeFromStart; }
    if (source["usageContext"] !== undefined) { this.usageContext = source.usageContext; }
  }
}
/**
 * Code Values for the EvidenceVariable.characteristic.groupMeasure field
 */
export enum EvidenceVariableCharacteristicGroupMeasureEnum {
  MEAN = "mean",
  MEDIAN = "median",
  MEAN_OF_MEAN = "mean-of-mean",
  MEAN_OF_MEDIAN = "mean-of-median",
  MEDIAN_OF_MEAN = "median-of-mean",
  MEDIAN_OF_MEDIAN = "median-of-median",
}
/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export class EvidenceVariable extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "EvidenceVariable";
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string;
  _approvalDate?: fhirModels.Element;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhirModels.ContactDetail[];
  /**
   * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
   */
  characteristic: fhirModels.EvidenceVariableCharacteristic[];
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[];
  /**
   * A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable.
   */
  copyright?: string;
  _copyright?: fhirModels.Element;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string;
  _date?: fhirModels.Element;
  /**
   * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhirModels.ContactDetail[];
  /**
   * The effective period for a evidence variable  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirModels.Period;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhirModels.ContactDetail[];
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * It may be possible for the evidence variable to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[];
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string;
  _lastReviewDate?: fhirModels.Element;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string;
  _name?: fhirModels.Element;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirModels.Annotation[];
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string;
  _publisher?: fhirModels.Element;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhirModels.RelatedArtifact[];
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhirModels.ContactDetail[];
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: string;
  _shortTitle?: fhirModels.Element;
  /**
   * Allows filtering of evidence variables that are appropriate for use versus not.
   */
  status: EvidenceVariableStatusEnum;
  _status?: fhirModels.Element;
  /**
   * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
   */
  subtitle?: string;
  _subtitle?: fhirModels.Element;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string;
  _title?: fhirModels.Element;
  /**
   * Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching.
   */
  topic?: fhirModels.CodeableConcept[];
  /**
   * The type of evidence element, a population, an exposure, or an outcome.
   */
  type?: EvidenceVariableTypeEnum;
  _type?: fhirModels.Element;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string;
  _url?: fhirModels.Element;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[];
  /**
   * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
   */
  version?: string;
  _version?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: EvidenceVariable) {
    super(source);
    if ((source['resourceType'] !== "EvidenceVariable") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a EvidenceVariable'; }
    if (source["approvalDate"] !== undefined) { this.approvalDate = source.approvalDate; }
    if (source["_approvalDate"] !== undefined) { this._approvalDate = source._approvalDate; }
    if (source["author"] !== undefined) { this.author = source.author; }
    if (source["characteristic"] === undefined) { throw 'Missing required element characteristic';}
    this.characteristic = source.characteristic;
    if (source["contact"] !== undefined) { this.contact = source.contact; }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = source._copyright; }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = source._date; }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["editor"] !== undefined) { this.editor = source.editor; }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = source.effectivePeriod; }
    if (source["endorser"] !== undefined) { this.endorser = source.endorser; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction; }
    if (source["lastReviewDate"] !== undefined) { this.lastReviewDate = source.lastReviewDate; }
    if (source["_lastReviewDate"] !== undefined) { this._lastReviewDate = source._lastReviewDate; }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = source._name; }
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = source._publisher; }
    if (source["relatedArtifact"] !== undefined) { this.relatedArtifact = source.relatedArtifact; }
    if (source["reviewer"] !== undefined) { this.reviewer = source.reviewer; }
    if (source["shortTitle"] !== undefined) { this.shortTitle = source.shortTitle; }
    if (source["_shortTitle"] !== undefined) { this._shortTitle = source._shortTitle; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["subtitle"] !== undefined) { this.subtitle = source.subtitle; }
    if (source["_subtitle"] !== undefined) { this._subtitle = source._subtitle; }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = source._title; }
    if (source["topic"] !== undefined) { this.topic = source.topic; }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = source._type; }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = source._url; }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext; }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = source._version; }
  }
}
/**
 * Code Values for the EvidenceVariable.status field
 */
export enum EvidenceVariableStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}
/**
 * Code Values for the EvidenceVariable.type field
 */
export enum EvidenceVariableTypeEnum {
  DICHOTOMOUS = "dichotomous",
  CONTINUOUS = "continuous",
  DESCRIPTIVE = "descriptive",
}

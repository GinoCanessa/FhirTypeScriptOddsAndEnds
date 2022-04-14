// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export interface IEvidenceVariableCharacteristic extends fhirInterfaces.IBackboneElement {
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionReference?: fhirInterfaces.IReference|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string|undefined;
  _definitionCanonical?: fhirInterfaces.IElement|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: fhirInterfaces.IExpression|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionDataRequirement?: fhirInterfaces.IDataRequirement|undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionTriggerDefinition?: fhirInterfaces.ITriggerDefinition|undefined;
  /**
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: boolean|undefined;
  _exclude?: fhirInterfaces.IElement|undefined;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  groupMeasure?: EvidenceVariableCharacteristicGroupMeasureEnum|undefined;
  _groupMeasure?: fhirInterfaces.IElement|undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDateTime?: string|undefined;
  _participantEffectiveDateTime?: fhirInterfaces.IElement|undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectivePeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDuration?: fhirInterfaces.IDuration|undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveTiming?: fhirInterfaces.ITiming|undefined;
  /**
   * Indicates duration from the participant's study entry.
   */
  timeFromStart?: fhirInterfaces.IDuration|undefined;
  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  usageContext?: fhirInterfaces.IUsageContext[]|undefined;
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
export interface IEvidenceVariable extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "EvidenceVariable";
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  _approvalDate?: fhirInterfaces.IElement|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhirInterfaces.IContactDetail[]|undefined;
  /**
   * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
   */
  characteristic: fhirInterfaces.IEvidenceVariableCharacteristic[];
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirInterfaces.IContactDetail[]|undefined;
  /**
   * A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable.
   */
  copyright?: string|undefined;
  _copyright?: fhirInterfaces.IElement|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence variable. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  _date?: fhirInterfaces.IElement|undefined;
  /**
   * This description can be used to capture details such as why the evidence variable was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence variable as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence variable is presumed to be the predominant language in the place the evidence variable was created).
   */
  description?: string|undefined;
  _description?: fhirInterfaces.IElement|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhirInterfaces.IContactDetail[]|undefined;
  /**
   * The effective period for a evidence variable  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhirInterfaces.IContactDetail[]|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence variable outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * It may be possible for the evidence variable to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  _lastReviewDate?: fhirInterfaces.IElement|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  _name?: fhirInterfaces.IElement|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirInterfaces.IAnnotation[]|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence variable is the organization or individual primarily responsible for the maintenance and upkeep of the evidence variable. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence variable. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirInterfaces.IElement|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhirInterfaces.IRelatedArtifact[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhirInterfaces.IContactDetail[]|undefined;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: string|undefined;
  _shortTitle?: fhirInterfaces.IElement|undefined;
  /**
   * Allows filtering of evidence variables that are appropriate for use versus not.
   */
  status: EvidenceVariableStatusEnum;
  _status?: fhirInterfaces.IElement|undefined;
  /**
   * An explanatory or alternate title for the EvidenceVariable giving additional information about its content.
   */
  subtitle?: string|undefined;
  _subtitle?: fhirInterfaces.IElement|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirInterfaces.IElement|undefined;
  /**
   * Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching.
   */
  topic?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * The type of evidence element, a population, an exposure, or an outcome.
   */
  type?: EvidenceVariableTypeEnum|undefined;
  _type?: fhirInterfaces.IElement|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  _url?: fhirInterfaces.IElement|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirInterfaces.IUsageContext[]|undefined;
  /**
   * There may be different evidence variable instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence variable with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirInterfaces.IElement|undefined;
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

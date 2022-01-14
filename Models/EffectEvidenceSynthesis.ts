// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * A description of the size of the sample involved in the synthesis.
 */
export class EffectEvidenceSynthesisSampleSize extends fhirModels.BackboneElement {
  /**
   * Human-readable summary of sample size.
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * Number of participants included in this evidence synthesis.
   */
  numberOfParticipants?: number;
  _numberOfParticipants?: fhirModels.Element;
  /**
   * Number of studies included in this evidence synthesis.
   */
  numberOfStudies?: number;
  _numberOfStudies?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesisSampleSize) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["numberOfParticipants"] !== undefined) { this.numberOfParticipants = source.numberOfParticipants; }
    if (source["_numberOfParticipants"] !== undefined) { this._numberOfParticipants = source._numberOfParticipants; }
    if (source["numberOfStudies"] !== undefined) { this.numberOfStudies = source.numberOfStudies; }
    if (source["_numberOfStudies"] !== undefined) { this._numberOfStudies = source._numberOfStudies; }
  }
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export class EffectEvidenceSynthesisResultsByExposure extends fhirModels.BackboneElement {
  /**
   * Human-readable summary of results by exposure state.
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * Whether these results are for the exposure state or alternative exposure state.
   */
  exposureState?: EffectEvidenceSynthesisResultsByExposureExposureStateEnum;
  _exposureState?: fhirModels.Element;
  /**
   * Reference to a RiskEvidenceSynthesis resource.
   */
  riskEvidenceSynthesis: fhirModels.Reference;
  /**
   * Used to define variant exposure states such as low-risk state.
   */
  variantState?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesisResultsByExposure) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["exposureState"] !== undefined) { this.exposureState = source.exposureState; }
    if (source["_exposureState"] !== undefined) { this._exposureState = source._exposureState; }
    if (source["riskEvidenceSynthesis"] === undefined) { throw 'Missing required element riskEvidenceSynthesis';}
    this.riskEvidenceSynthesis = source.riskEvidenceSynthesis;
    if (source["variantState"] !== undefined) { this.variantState = source.variantState; }
  }
}
/**
 * Code Values for the EffectEvidenceSynthesis.resultsByExposure.exposureState field
 */
export enum EffectEvidenceSynthesisResultsByExposureExposureStateEnum {
  EXPOSURE = "exposure",
  EXPOSURE_ALTERNATIVE = "exposure-alternative",
}
/**
 * A description of the precision of the estimate for the effect.
 */
export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhirModels.BackboneElement {
  /**
   * Lower bound of confidence interval.
   */
  from?: number;
  _from?: fhirModels.Element;
  /**
   * Use 95 for a 95% confidence interval.
   */
  level?: number;
  _level?: fhirModels.Element;
  /**
   * Upper bound of confidence interval.
   */
  to?: number;
  _to?: fhirModels.Element;
  /**
   * Examples include confidence interval and interquartile range.
   */
  type?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate) {
    super(source);
    if (source["from"] !== undefined) { this.from = source.from; }
    if (source["_from"] !== undefined) { this._from = source._from; }
    if (source["level"] !== undefined) { this.level = source.level; }
    if (source["_level"] !== undefined) { this._level = source._level; }
    if (source["to"] !== undefined) { this.to = source.to; }
    if (source["_to"] !== undefined) { this._to = source._to; }
    if (source["type"] !== undefined) { this.type = source.type; }
  }
}
/**
 * The estimated effect of the exposure variant.
 */
export class EffectEvidenceSynthesisEffectEstimate extends fhirModels.BackboneElement {
  /**
   * Human-readable summary of effect estimate.
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * A description of the precision of the estimate for the effect.
   */
  precisionEstimate?: fhirModels.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];
  /**
   * Examples include relative risk and mean difference.
   */
  type?: fhirModels.CodeableConcept;
  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: fhirModels.CodeableConcept;
  /**
   * The point estimate of the effect estimate.
   */
  value?: number;
  _value?: fhirModels.Element;
  /**
   * Used to define variant exposure states such as low-risk state.
   */
  variantState?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesisEffectEstimate) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["precisionEstimate"] !== undefined) { this.precisionEstimate = source.precisionEstimate; }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["unitOfMeasure"] !== undefined) { this.unitOfMeasure = source.unitOfMeasure; }
    if (source["value"] !== undefined) { this.value = source.value; }
    if (source["_value"] !== undefined) { this._value = source._value; }
    if (source["variantState"] !== undefined) { this.variantState = source.variantState; }
  }
}
/**
 * A description of a component of the overall certainty.
 */
export class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhirModels.BackboneElement {
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirModels.Annotation[];
  /**
   * A rating of a subcomponent of rating certainty.
   */
  rating?: fhirModels.CodeableConcept[];
  /**
   * Type of subcomponent of certainty rating.
   */
  type?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesisCertaintyCertaintySubcomponent) {
    super(source);
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["rating"] !== undefined) { this.rating = source.rating; }
    if (source["type"] !== undefined) { this.type = source.type; }
  }
}
/**
 * A description of the certainty of the effect estimate.
 */
export class EffectEvidenceSynthesisCertainty extends fhirModels.BackboneElement {
  /**
   * A description of a component of the overall certainty.
   */
  certaintySubcomponent?: fhirModels.EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirModels.Annotation[];
  /**
   * A rating of the certainty of the effect estimate.
   */
  rating?: fhirModels.CodeableConcept[];
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesisCertainty) {
    super(source);
    if (source["certaintySubcomponent"] !== undefined) { this.certaintySubcomponent = source.certaintySubcomponent; }
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["rating"] !== undefined) { this.rating = source.rating; }
  }
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export class EffectEvidenceSynthesis extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "EffectEvidenceSynthesis";
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
   * A description of the certainty of the effect estimate.
   */
  certainty?: fhirModels.EffectEvidenceSynthesisCertainty[];
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[];
  /**
   * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
   */
  copyright?: string;
  _copyright?: fhirModels.Element;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string;
  _date?: fhirModels.Element;
  /**
   * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhirModels.ContactDetail[];
  /**
   * The estimated effect of the exposure variant.
   */
  effectEstimate?: fhirModels.EffectEvidenceSynthesisEffectEstimate[];
  /**
   * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirModels.Period;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhirModels.ContactDetail[];
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  exposure: fhirModels.Reference;
  /**
   * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
   */
  exposureAlternative: fhirModels.Reference;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
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
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  outcome: fhirModels.Reference;
  /**
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  population: fhirModels.Reference;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string;
  _publisher?: fhirModels.Element;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhirModels.RelatedArtifact[];
  /**
   * A description of the results for each exposure considered in the effect estimate.
   */
  resultsByExposure?: fhirModels.EffectEvidenceSynthesisResultsByExposure[];
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhirModels.ContactDetail[];
  /**
   * A description of the size of the sample involved in the synthesis.
   */
  sampleSize?: fhirModels.EffectEvidenceSynthesisSampleSize;
  /**
   * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
   */
  status: EffectEvidenceSynthesisStatusEnum;
  _status?: fhirModels.Element;
  /**
   * Type of study eg randomized trial.
   */
  studyType?: fhirModels.CodeableConcept;
  /**
   * Type of synthesis eg meta-analysis.
   */
  synthesisType?: fhirModels.CodeableConcept;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string;
  _title?: fhirModels.Element;
  /**
   * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
   */
  topic?: fhirModels.CodeableConcept[];
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
   * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
   */
  version?: string;
  _version?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: EffectEvidenceSynthesis) {
    super(source);
    if ((source['resourceType'] !== "EffectEvidenceSynthesis") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a EffectEvidenceSynthesis'; }
    if (source["approvalDate"] !== undefined) { this.approvalDate = source.approvalDate; }
    if (source["_approvalDate"] !== undefined) { this._approvalDate = source._approvalDate; }
    if (source["author"] !== undefined) { this.author = source.author; }
    if (source["certainty"] !== undefined) { this.certainty = source.certainty; }
    if (source["contact"] !== undefined) { this.contact = source.contact; }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = source._copyright; }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = source._date; }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["editor"] !== undefined) { this.editor = source.editor; }
    if (source["effectEstimate"] !== undefined) { this.effectEstimate = source.effectEstimate; }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = source.effectivePeriod; }
    if (source["endorser"] !== undefined) { this.endorser = source.endorser; }
    if (source["exposure"] === undefined) { throw 'Missing required element exposure';}
    this.exposure = source.exposure;
    if (source["exposureAlternative"] === undefined) { throw 'Missing required element exposureAlternative';}
    this.exposureAlternative = source.exposureAlternative;
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction; }
    if (source["lastReviewDate"] !== undefined) { this.lastReviewDate = source.lastReviewDate; }
    if (source["_lastReviewDate"] !== undefined) { this._lastReviewDate = source._lastReviewDate; }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = source._name; }
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["outcome"] === undefined) { throw 'Missing required element outcome';}
    this.outcome = source.outcome;
    if (source["population"] === undefined) { throw 'Missing required element population';}
    this.population = source.population;
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = source._publisher; }
    if (source["relatedArtifact"] !== undefined) { this.relatedArtifact = source.relatedArtifact; }
    if (source["resultsByExposure"] !== undefined) { this.resultsByExposure = source.resultsByExposure; }
    if (source["reviewer"] !== undefined) { this.reviewer = source.reviewer; }
    if (source["sampleSize"] !== undefined) { this.sampleSize = source.sampleSize; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["studyType"] !== undefined) { this.studyType = source.studyType; }
    if (source["synthesisType"] !== undefined) { this.synthesisType = source.synthesisType; }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = source._title; }
    if (source["topic"] !== undefined) { this.topic = source.topic; }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = source._url; }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext; }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = source._version; }
  }
}
/**
 * Code Values for the EffectEvidenceSynthesis.status field
 */
export enum EffectEvidenceSynthesisStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}

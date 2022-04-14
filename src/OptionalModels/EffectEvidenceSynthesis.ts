// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A description of the size of the sample involved in the synthesis.
 */
export class EffectEvidenceSynthesisSampleSize extends fhirModels.BackboneElement implements fhirInterfaces.IEffectEvidenceSynthesisSampleSize {
  /**
   * Human-readable summary of sample size.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Number of participants included in this evidence synthesis.
   */
  numberOfParticipants?: number|undefined;
  _numberOfParticipants?: fhirModels.Element|undefined;
  /**
   * Number of studies included in this evidence synthesis.
   */
  numberOfStudies?: number|undefined;
  _numberOfStudies?: fhirModels.Element|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesisSampleSize from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesisSampleSize>) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["numberOfParticipants"] !== undefined) { this.numberOfParticipants = source.numberOfParticipants; }
    if (source["_numberOfParticipants"] !== undefined) { this._numberOfParticipants = new fhirModels.Element(source._numberOfParticipants); }
    if (source["numberOfStudies"] !== undefined) { this.numberOfStudies = source.numberOfStudies; }
    if (source["_numberOfStudies"] !== undefined) { this._numberOfStudies = new fhirModels.Element(source._numberOfStudies); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesisSampleSize from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesisSampleSize):EffectEvidenceSynthesisSampleSize {
    var dest:EffectEvidenceSynthesisSampleSize = new EffectEvidenceSynthesisSampleSize(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesisSampleSize is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesisSampleSize contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export class EffectEvidenceSynthesisResultsByExposure extends fhirModels.BackboneElement implements fhirInterfaces.IEffectEvidenceSynthesisResultsByExposure {
  /**
   * Human-readable summary of results by exposure state.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Whether these results are for the exposure state or alternative exposure state.
   */
  exposureState?: EffectEvidenceSynthesisResultsByExposureExposureStateEnum|undefined;
  _exposureState?: fhirModels.Element|undefined;
  /**
   * Reference to a RiskEvidenceSynthesis resource.
   */
  riskEvidenceSynthesis?: fhirModels.Reference|undefined;
  /**
   * Used to define variant exposure states such as low-risk state.
   */
  variantState?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesisResultsByExposure from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesisResultsByExposure>) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["exposureState"] !== undefined) { this.exposureState = source.exposureState; }
    if (source["_exposureState"] !== undefined) { this._exposureState = new fhirModels.Element(source._exposureState); }
    if (source["riskEvidenceSynthesis"] !== undefined) { this.riskEvidenceSynthesis = new fhirModels.Reference(source.riskEvidenceSynthesis); }
    if (source["variantState"] !== undefined) { this.variantState = new fhirModels.CodeableConcept(source.variantState); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesisResultsByExposure from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesisResultsByExposure):EffectEvidenceSynthesisResultsByExposure {
    var dest:EffectEvidenceSynthesisResultsByExposure = new EffectEvidenceSynthesisResultsByExposure(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesisResultsByExposure is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesisResultsByExposure contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["riskEvidenceSynthesis"] === undefined) { missingElements.push("riskEvidenceSynthesis"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
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
export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhirModels.BackboneElement implements fhirInterfaces.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
  /**
   * Lower bound of confidence interval.
   */
  from?: number|undefined;
  _from?: fhirModels.Element|undefined;
  /**
   * Use 95 for a 95% confidence interval.
   */
  level?: number|undefined;
  _level?: fhirModels.Element|undefined;
  /**
   * Upper bound of confidence interval.
   */
  to?: number|undefined;
  _to?: fhirModels.Element|undefined;
  /**
   * Examples include confidence interval and interquartile range.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesisEffectEstimatePrecisionEstimate from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>) {
    super(source);
    if (source["from"] !== undefined) { this.from = source.from; }
    if (source["_from"] !== undefined) { this._from = new fhirModels.Element(source._from); }
    if (source["level"] !== undefined) { this.level = source.level; }
    if (source["_level"] !== undefined) { this._level = new fhirModels.Element(source._level); }
    if (source["to"] !== undefined) { this.to = source.to; }
    if (source["_to"] !== undefined) { this._to = new fhirModels.Element(source._to); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesisEffectEstimatePrecisionEstimate from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate):EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    var dest:EffectEvidenceSynthesisEffectEstimatePrecisionEstimate = new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesisEffectEstimatePrecisionEstimate is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesisEffectEstimatePrecisionEstimate contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * The estimated effect of the exposure variant.
 */
export class EffectEvidenceSynthesisEffectEstimate extends fhirModels.BackboneElement implements fhirInterfaces.IEffectEvidenceSynthesisEffectEstimate {
  /**
   * Human-readable summary of effect estimate.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * A description of the precision of the estimate for the effect.
   */
  precisionEstimate?: fhirModels.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[]|undefined;
  /**
   * Examples include relative risk and mean difference.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: fhirModels.CodeableConcept|undefined;
  /**
   * The point estimate of the effect estimate.
   */
  value?: number|undefined;
  _value?: fhirModels.Element|undefined;
  /**
   * Used to define variant exposure states such as low-risk state.
   */
  variantState?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesisEffectEstimate from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesisEffectEstimate>) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["precisionEstimate"] !== undefined) { this.precisionEstimate = source.precisionEstimate.map((x) => new fhirModels.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
    if (source["unitOfMeasure"] !== undefined) { this.unitOfMeasure = new fhirModels.CodeableConcept(source.unitOfMeasure); }
    if (source["value"] !== undefined) { this.value = source.value; }
    if (source["_value"] !== undefined) { this._value = new fhirModels.Element(source._value); }
    if (source["variantState"] !== undefined) { this.variantState = new fhirModels.CodeableConcept(source.variantState); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesisEffectEstimate from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesisEffectEstimate):EffectEvidenceSynthesisEffectEstimate {
    var dest:EffectEvidenceSynthesisEffectEstimate = new EffectEvidenceSynthesisEffectEstimate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesisEffectEstimate is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesisEffectEstimate contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A description of a component of the overall certainty.
 */
export class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhirModels.BackboneElement implements fhirInterfaces.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent {
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * A rating of a subcomponent of rating certainty.
   */
  rating?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Type of subcomponent of certainty rating.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>) {
    super(source);
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["rating"] !== undefined) { this.rating = source.rating.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent):EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    var dest:EffectEvidenceSynthesisCertaintyCertaintySubcomponent = new EffectEvidenceSynthesisCertaintyCertaintySubcomponent(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesisCertaintyCertaintySubcomponent is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesisCertaintyCertaintySubcomponent contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A description of the certainty of the effect estimate.
 */
export class EffectEvidenceSynthesisCertainty extends fhirModels.BackboneElement implements fhirInterfaces.IEffectEvidenceSynthesisCertainty {
  /**
   * A description of a component of the overall certainty.
   */
  certaintySubcomponent?: fhirModels.EffectEvidenceSynthesisCertaintyCertaintySubcomponent[]|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * A rating of the certainty of the effect estimate.
   */
  rating?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesisCertainty from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesisCertainty>) {
    super(source);
    if (source["certaintySubcomponent"] !== undefined) { this.certaintySubcomponent = source.certaintySubcomponent.map((x) => new fhirModels.EffectEvidenceSynthesisCertaintyCertaintySubcomponent(x)); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["rating"] !== undefined) { this.rating = source.rating.map((x) => new fhirModels.CodeableConcept(x)); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesisCertainty from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesisCertainty):EffectEvidenceSynthesisCertainty {
    var dest:EffectEvidenceSynthesisCertainty = new EffectEvidenceSynthesisCertainty(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesisCertainty is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesisCertainty contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export class EffectEvidenceSynthesis extends fhirModels.DomainResource implements fhirInterfaces.IEffectEvidenceSynthesis {
  /**
   * Resource Type Name
   */
  readonly resourceType = "EffectEvidenceSynthesis";
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
   * A description of the certainty of the effect estimate.
   */
  certainty?: fhirModels.EffectEvidenceSynthesisCertainty[]|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[]|undefined;
  /**
   * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
   */
  copyright?: string|undefined;
  _copyright?: fhirModels.Element|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhirModels.ContactDetail[]|undefined;
  /**
   * The estimated effect of the exposure variant.
   */
  effectEstimate?: fhirModels.EffectEvidenceSynthesisEffectEstimate[]|undefined;
  /**
   * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirModels.Period|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhirModels.ContactDetail[]|undefined;
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  exposure?: fhirModels.Reference|undefined;
  /**
   * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
   */
  exposureAlternative?: fhirModels.Reference|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
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
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  outcome?: fhirModels.Reference|undefined;
  /**
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  population?: fhirModels.Reference|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirModels.Element|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhirModels.RelatedArtifact[]|undefined;
  /**
   * A description of the results for each exposure considered in the effect estimate.
   */
  resultsByExposure?: fhirModels.EffectEvidenceSynthesisResultsByExposure[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhirModels.ContactDetail[]|undefined;
  /**
   * A description of the size of the sample involved in the synthesis.
   */
  sampleSize?: fhirModels.EffectEvidenceSynthesisSampleSize|undefined;
  /**
   * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
   */
  status?: EffectEvidenceSynthesisStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Type of study eg randomized trial.
   */
  studyType?: fhirModels.CodeableConcept|undefined;
  /**
   * Type of synthesis eg meta-analysis.
   */
  synthesisType?: fhirModels.CodeableConcept|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
   */
  topic?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[]|undefined;
  /**
   * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for EffectEvidenceSynthesis from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IEffectEvidenceSynthesis>) {
    super(source);
    if ((source['resourceType'] !== "EffectEvidenceSynthesis") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a EffectEvidenceSynthesis'; }
    if (source["approvalDate"] !== undefined) { this.approvalDate = source.approvalDate; }
    if (source["_approvalDate"] !== undefined) { this._approvalDate = new fhirModels.Element(source._approvalDate); }
    if (source["author"] !== undefined) { this.author = source.author.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["certainty"] !== undefined) { this.certainty = source.certainty.map((x) => new fhirModels.EffectEvidenceSynthesisCertainty(x)); }
    if (source["contact"] !== undefined) { this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = new fhirModels.Element(source._copyright); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["editor"] !== undefined) { this.editor = source.editor.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["effectEstimate"] !== undefined) { this.effectEstimate = source.effectEstimate.map((x) => new fhirModels.EffectEvidenceSynthesisEffectEstimate(x)); }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = new fhirModels.Period(source.effectivePeriod); }
    if (source["endorser"] !== undefined) { this.endorser = source.endorser.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["exposure"] !== undefined) { this.exposure = new fhirModels.Reference(source.exposure); }
    if (source["exposureAlternative"] !== undefined) { this.exposureAlternative = new fhirModels.Reference(source.exposureAlternative); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["lastReviewDate"] !== undefined) { this.lastReviewDate = source.lastReviewDate; }
    if (source["_lastReviewDate"] !== undefined) { this._lastReviewDate = new fhirModels.Element(source._lastReviewDate); }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["outcome"] !== undefined) { this.outcome = new fhirModels.Reference(source.outcome); }
    if (source["population"] !== undefined) { this.population = new fhirModels.Reference(source.population); }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = new fhirModels.Element(source._publisher); }
    if (source["relatedArtifact"] !== undefined) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhirModels.RelatedArtifact(x)); }
    if (source["resultsByExposure"] !== undefined) { this.resultsByExposure = source.resultsByExposure.map((x) => new fhirModels.EffectEvidenceSynthesisResultsByExposure(x)); }
    if (source["reviewer"] !== undefined) { this.reviewer = source.reviewer.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["sampleSize"] !== undefined) { this.sampleSize = new fhirModels.EffectEvidenceSynthesisSampleSize(source.sampleSize); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["studyType"] !== undefined) { this.studyType = new fhirModels.CodeableConcept(source.studyType); }
    if (source["synthesisType"] !== undefined) { this.synthesisType = new fhirModels.CodeableConcept(source.synthesisType); }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = new fhirModels.Element(source._title); }
    if (source["topic"] !== undefined) { this.topic = source.topic.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x)); }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = new fhirModels.Element(source._version); }
  }
  /**
   * Factory function to create a EffectEvidenceSynthesis from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IEffectEvidenceSynthesis):EffectEvidenceSynthesis {
    var dest:EffectEvidenceSynthesis = new EffectEvidenceSynthesis(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `EffectEvidenceSynthesis is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current EffectEvidenceSynthesis contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["exposure"] === undefined) { missingElements.push("exposure"); }
    if (this["exposureAlternative"] === undefined) { missingElements.push("exposureAlternative"); }
    if (this["outcome"] === undefined) { missingElements.push("outcome"); }
    if (this["population"] === undefined) { missingElements.push("population"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
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

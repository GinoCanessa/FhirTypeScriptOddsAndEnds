import * as fhir from '../fhir.js';
import { ExposureStateValueSetType, ExposureStateValueSetEnum } from '../fhirValueSets/ExposureStateValueSet.js';
import { EvidenceVariantStateValueSetType } from '../fhirValueSets/EvidenceVariantStateValueSet.js';
import { PrecisionEstimateTypeValueSetType } from '../fhirValueSets/PrecisionEstimateTypeValueSet.js';
import { EffectEstimateTypeValueSetType } from '../fhirValueSets/EffectEstimateTypeValueSet.js';
import { UcumUnitsValueSetType } from '../fhirValueSets/UcumUnitsValueSet.js';
import { CertaintySubcomponentTypeValueSetType } from '../fhirValueSets/CertaintySubcomponentTypeValueSet.js';
import { CertaintySubcomponentRatingValueSetType } from '../fhirValueSets/CertaintySubcomponentRatingValueSet.js';
import { EvidenceQualityValueSetType } from '../fhirValueSets/EvidenceQualityValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSetType } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { SynthesisTypeValueSetType } from '../fhirValueSets/SynthesisTypeValueSet.js';
import { StudyTypeValueSetType } from '../fhirValueSets/StudyTypeValueSet.js';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare type IEffectEvidenceSynthesisSampleSize = fhir.IBackboneElement & {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.IFhirElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.IFhirElement | undefined;
};
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export declare type IEffectEvidenceSynthesisResultsByExposure = fhir.IBackboneElement & {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: ExposureStateValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.exposureState
     */
    _exposureState?: fhir.IFhirElement | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.ICodeableConcept | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: fhir.IReference | null;
};
/**
 * A description of the precision of the estimate for the effect.
 */
export declare type IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate = fhir.IBackboneElement & {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.level
     */
    _level?: fhir.IFhirElement | undefined;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.from
     */
    _from?: fhir.IFhirElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.to
     */
    _to?: fhir.IFhirElement | undefined;
};
/**
 * The estimated effect of the exposure variant.
 */
export declare type IEffectEvidenceSynthesisEffectEstimate = fhir.IBackboneElement & {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.ICodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.ICodeableConcept | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined;
};
/**
 * A description of a component of the overall certainty.
 */
export declare type IEffectEvidenceSynthesisCertaintyCertaintySubcomponent = fhir.IBackboneElement & {
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: fhir.ICodeableConcept[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * A description of the certainty of the effect estimate.
 */
export declare type IEffectEvidenceSynthesisCertainty = fhir.IBackboneElement & {
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhir.ICodeableConcept[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
};
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export declare type IEffectEvidenceSynthesis = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "EffectEvidenceSynthesis";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: fhir.ICodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.IContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.IContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.ICodeableConcept | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.ICodeableConcept | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.IReference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: fhir.IReference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative: fhir.IReference | null;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.IReference | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.IEffectEvidenceSynthesisSampleSize | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: fhir.IEffectEvidenceSynthesisResultsByExposure[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: fhir.IEffectEvidenceSynthesisEffectEstimate[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: fhir.IEffectEvidenceSynthesisCertainty[] | undefined;
};
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare class EffectEvidenceSynthesisSampleSize extends fhir.BackboneElement implements IEffectEvidenceSynthesisSampleSize {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesisSampleSize>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export declare class EffectEvidenceSynthesisResultsByExposure extends fhir.BackboneElement implements IEffectEvidenceSynthesisResultsByExposure {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: ExposureStateValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.exposureState
     */
    _exposureState?: fhir.FhirElement | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: fhir.Reference | null;
    /**
     * Default constructor for EffectEvidenceSynthesisResultsByExposure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesisResultsByExposure>);
    /**
     * Required-bound Value Set for exposureState
     */
    exposureStateRequiredValueSet(): ExposureStateValueSetType;
    /**
     * Extensible-bound Value Set for variantState
     */
    variantStateExtensibleValueSet(): EvidenceVariantStateValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of the precision of the estimate for the effect.
 */
export declare class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhir.BackboneElement implements IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.level
     */
    _level?: fhir.FhirElement | undefined;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.from
     */
    _from?: fhir.FhirElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.to
     */
    _to?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisEffectEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): PrecisionEstimateTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The estimated effect of the exposure variant.
 */
export declare class EffectEvidenceSynthesisEffectEstimate extends fhir.BackboneElement implements IEffectEvidenceSynthesisEffectEstimate {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisEffectEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesisEffectEstimate>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): EffectEstimateTypeValueSetType;
    /**
     * Extensible-bound Value Set for variantState
     */
    variantStateExtensibleValueSet(): EvidenceVariantStateValueSetType;
    /**
     * Required-bound Value Set for unitOfMeasure
     */
    unitOfMeasureRequiredValueSet(): UcumUnitsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of a component of the overall certainty.
 */
export declare class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement implements IEffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: fhir.CodeableConcept[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisCertaintyCertaintySubcomponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): CertaintySubcomponentTypeValueSetType;
    /**
     * Extensible-bound Value Set for rating
     */
    ratingExtensibleValueSet(): CertaintySubcomponentRatingValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of the certainty of the effect estimate.
 */
export declare class EffectEvidenceSynthesisCertainty extends fhir.BackboneElement implements IEffectEvidenceSynthesisCertainty {
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhir.CodeableConcept[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.EffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesisCertainty>);
    /**
     * Extensible-bound Value Set for rating
     */
    ratingExtensibleValueSet(): EvidenceQualityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export declare class EffectEvidenceSynthesis extends fhir.DomainResource implements IEffectEvidenceSynthesis {
    /**
     * Resource Type Name
     */
    resourceType: "EffectEvidenceSynthesis";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.CodeableConcept | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.CodeableConcept | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.Reference | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.EffectEvidenceSynthesisSampleSize | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: fhir.EffectEvidenceSynthesisResultsByExposure[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: fhir.EffectEvidenceSynthesisEffectEstimate[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: fhir.EffectEvidenceSynthesisCertainty[] | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IEffectEvidenceSynthesis>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Example-bound Value Set for topic
     */
    topicExampleValueSet(): DefinitionTopicValueSetType;
    /**
     * Extensible-bound Value Set for synthesisType
     */
    synthesisTypeExtensibleValueSet(): SynthesisTypeValueSetType;
    /**
     * Extensible-bound Value Set for studyType
     */
    studyTypeExtensibleValueSet(): StudyTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=EffectEvidenceSynthesis.d.ts.map
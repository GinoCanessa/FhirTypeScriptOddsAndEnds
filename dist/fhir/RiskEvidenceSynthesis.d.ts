import * as fhir from '../fhir.js';
import { PrecisionEstimateTypeValueSetType } from '../fhirValueSets/PrecisionEstimateTypeValueSet.js';
import { RiskEstimateTypeValueSetType } from '../fhirValueSets/RiskEstimateTypeValueSet.js';
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
export declare type IRiskEvidenceSynthesisSampleSize = fhir.IBackboneElement & {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.IFhirElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.IFhirElement | undefined;
};
/**
 * A description of the precision of the estimate for the effect.
 */
export declare type IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate = fhir.IBackboneElement & {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.level
     */
    _level?: fhir.IFhirElement | undefined;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.from
     */
    _from?: fhir.IFhirElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.to
     */
    _to?: fhir.IFhirElement | undefined;
};
/**
 * The estimated risk of the outcome.
 */
export declare type IRiskEvidenceSynthesisRiskEstimate = fhir.IBackboneElement & {
    /**
     * Human-readable summary of risk estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Examples include proportion and mean.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The point estimate of the risk estimate.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.ICodeableConcept | undefined;
    /**
     * The sample size for the group that was measured for this risk estimate.
     */
    denominatorCount?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.denominatorCount
     */
    _denominatorCount?: fhir.IFhirElement | undefined;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.numeratorCount
     */
    _numeratorCount?: fhir.IFhirElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
};
/**
 * A description of a component of the overall certainty.
 */
export declare type IRiskEvidenceSynthesisCertaintyCertaintySubcomponent = fhir.IBackboneElement & {
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
 * A description of the certainty of the risk estimate.
 */
export declare type IRiskEvidenceSynthesisCertainty = fhir.IBackboneElement & {
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
    certaintySubcomponent?: fhir.IRiskEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
};
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export declare type IRiskEvidenceSynthesis = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "RiskEvidenceSynthesis";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.description
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
     * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
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
    exposure?: fhir.IReference | undefined;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.IReference | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.IRiskEvidenceSynthesisSampleSize | undefined;
    /**
     * The estimated risk of the outcome.
     */
    riskEstimate?: fhir.IRiskEvidenceSynthesisRiskEstimate | undefined;
    /**
     * A description of the certainty of the risk estimate.
     */
    certainty?: fhir.IRiskEvidenceSynthesisCertainty[] | undefined;
};
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare class RiskEvidenceSynthesisSampleSize extends fhir.BackboneElement implements IRiskEvidenceSynthesisSampleSize {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskEvidenceSynthesisSampleSize>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of the precision of the estimate for the effect.
 */
export declare class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends fhir.BackboneElement implements IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.level
     */
    _level?: fhir.FhirElement | undefined;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.from
     */
    _from?: fhir.FhirElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.to
     */
    _to?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): PrecisionEstimateTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The estimated risk of the outcome.
 */
export declare class RiskEvidenceSynthesisRiskEstimate extends fhir.BackboneElement implements IRiskEvidenceSynthesisRiskEstimate {
    /**
     * Human-readable summary of risk estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Examples include proportion and mean.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the risk estimate.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * The sample size for the group that was measured for this risk estimate.
     */
    denominatorCount?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.denominatorCount
     */
    _denominatorCount?: fhir.FhirElement | undefined;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.numeratorCount
     */
    _numeratorCount?: fhir.FhirElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskEvidenceSynthesisRiskEstimate>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): RiskEstimateTypeValueSetType;
    /**
     * Required-bound Value Set for unitOfMeasure
     */
    static unitOfMeasureRequiredValueSet(): UcumUnitsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of a component of the overall certainty.
 */
export declare class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement implements IRiskEvidenceSynthesisCertaintyCertaintySubcomponent {
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
     * Default constructor for RiskEvidenceSynthesisCertaintyCertaintySubcomponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskEvidenceSynthesisCertaintyCertaintySubcomponent>);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): CertaintySubcomponentTypeValueSetType;
    /**
     * Extensible-bound Value Set for rating
     */
    static ratingExtensibleValueSet(): CertaintySubcomponentRatingValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A description of the certainty of the risk estimate.
 */
export declare class RiskEvidenceSynthesisCertainty extends fhir.BackboneElement implements IRiskEvidenceSynthesisCertainty {
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
    certaintySubcomponent?: fhir.RiskEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskEvidenceSynthesisCertainty>);
    /**
     * Extensible-bound Value Set for rating
     */
    static ratingExtensibleValueSet(): EvidenceQualityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export declare class RiskEvidenceSynthesis extends fhir.DomainResource implements IRiskEvidenceSynthesis {
    /**
     * Resource Type Name
     */
    resourceType: "RiskEvidenceSynthesis";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.description
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
     * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
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
    exposure?: fhir.Reference | undefined;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.Reference | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.RiskEvidenceSynthesisSampleSize | undefined;
    /**
     * The estimated risk of the outcome.
     */
    riskEstimate?: fhir.RiskEvidenceSynthesisRiskEstimate | undefined;
    /**
     * A description of the certainty of the risk estimate.
     */
    certainty?: fhir.RiskEvidenceSynthesisCertainty[] | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRiskEvidenceSynthesis>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Example-bound Value Set for topic
     */
    static topicExampleValueSet(): DefinitionTopicValueSetType;
    /**
     * Extensible-bound Value Set for synthesisType
     */
    static synthesisTypeExtensibleValueSet(): SynthesisTypeValueSetType;
    /**
     * Extensible-bound Value Set for studyType
     */
    static studyTypeExtensibleValueSet(): StudyTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=RiskEvidenceSynthesis.d.ts.map
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export interface IEffectEvidenceSynthesisSampleSize extends fhirInterfaces.IBackboneElement {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    _numberOfParticipants?: fhirInterfaces.IElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    _numberOfStudies?: fhirInterfaces.IElement | undefined;
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export interface IEffectEvidenceSynthesisResultsByExposure extends fhirInterfaces.IBackboneElement {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: EffectEvidenceSynthesisResultsByExposureExposureStateEnum | undefined;
    _exposureState?: fhirInterfaces.IElement | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis?: fhirInterfaces.IReference | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the EffectEvidenceSynthesis.resultsByExposure.exposureState field
 */
export declare enum EffectEvidenceSynthesisResultsByExposureExposureStateEnum {
    EXPOSURE = "exposure",
    EXPOSURE_ALTERNATIVE = "exposure-alternative"
}
/**
 * A description of the precision of the estimate for the effect.
 */
export interface IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhirInterfaces.IBackboneElement {
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    _from?: fhirInterfaces.IElement | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    _level?: fhirInterfaces.IElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    _to?: fhirInterfaces.IElement | undefined;
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The estimated effect of the exposure variant.
 */
export interface IEffectEvidenceSynthesisEffectEstimate extends fhirInterfaces.IBackboneElement {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhirInterfaces.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    _value?: fhirInterfaces.IElement | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A description of a component of the overall certainty.
 */
export interface IEffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhirInterfaces.IBackboneElement {
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A description of the certainty of the effect estimate.
 */
export interface IEffectEvidenceSynthesisCertainty extends fhirInterfaces.IBackboneElement {
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhirInterfaces.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export interface IEffectEvidenceSynthesis extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "EffectEvidenceSynthesis";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhirInterfaces.IElement | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: fhirInterfaces.IEffectEvidenceSynthesisCertainty[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: fhirInterfaces.IEffectEvidenceSynthesisEffectEstimate[] | undefined;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure?: fhirInterfaces.IReference | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative?: fhirInterfaces.IReference | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhirInterfaces.IElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome?: fhirInterfaces.IReference | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population?: fhirInterfaces.IReference | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhirInterfaces.IRelatedArtifact[] | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: fhirInterfaces.IEffectEvidenceSynthesisResultsByExposure[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhirInterfaces.IEffectEvidenceSynthesisSampleSize | undefined;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status?: EffectEvidenceSynthesisStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the EffectEvidenceSynthesis.status field
 */
export declare enum EffectEvidenceSynthesisStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IEffectEvidenceSynthesis.d.ts.map
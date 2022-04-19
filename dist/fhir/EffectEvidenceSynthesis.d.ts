import * as fhir from '../fhir';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare type IEffectEvidenceSynthesisSampleSize = fhir.IBackboneElement & {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    _numberOfParticipants?: fhir.IFhirElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    _numberOfStudies?: fhir.IFhirElement | undefined;
};
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export declare type IEffectEvidenceSynthesisResultsByExposure = fhir.IBackboneElement & {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: EffectEvidenceSynthesisResultsByExposureExposureStateEnum | undefined;
    _exposureState?: fhir.IFhirElement | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: fhir.IReference | null;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.ICodeableConcept | undefined;
};
/**
 * A description of the precision of the estimate for the effect.
 */
export declare type IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate = fhir.IBackboneElement & {
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    _from?: fhir.IFhirElement | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    _level?: fhir.IFhirElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    _to?: fhir.IFhirElement | undefined;
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * The estimated effect of the exposure variant.
 */
export declare type IEffectEvidenceSynthesisEffectEstimate = fhir.IBackboneElement & {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.ICodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    _value?: fhir.IFhirElement | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.ICodeableConcept | undefined;
};
/**
 * A description of a component of the overall certainty.
 */
export declare type IEffectEvidenceSynthesisCertaintyCertaintySubcomponent = fhir.IBackboneElement & {
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: fhir.ICodeableConcept[] | undefined;
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A description of the certainty of the effect estimate.
 */
export declare type IEffectEvidenceSynthesisCertainty = fhir.IBackboneElement & {
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhir.ICodeableConcept[] | undefined;
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
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhir.IFhirElement | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.IContactDetail[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: fhir.IEffectEvidenceSynthesisCertainty[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.IContactDetail[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: fhir.IEffectEvidenceSynthesisEffectEstimate[] | undefined;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.IContactDetail[] | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: fhir.IReference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative: fhir.IReference | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.IReference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.IReference | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: fhir.IEffectEvidenceSynthesisResultsByExposure[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.IContactDetail[] | undefined;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.IEffectEvidenceSynthesisSampleSize | undefined;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status: EffectEvidenceSynthesisStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.ICodeableConcept | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.ICodeableConcept | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: fhir.ICodeableConcept[] | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare class EffectEvidenceSynthesisSampleSize extends fhir.BackboneElement implements fhir.IEffectEvidenceSynthesisSampleSize {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    _numberOfParticipants?: fhir.FhirElement | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    _numberOfStudies?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesisSampleSize>);
    /**
     * Check if the current EffectEvidenceSynthesisSampleSize contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesisSampleSize from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesisSampleSize): EffectEvidenceSynthesisSampleSize;
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export declare class EffectEvidenceSynthesisResultsByExposure extends fhir.BackboneElement implements fhir.IEffectEvidenceSynthesisResultsByExposure {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: EffectEvidenceSynthesisResultsByExposureExposureStateEnum | undefined;
    _exposureState?: fhir.FhirElement | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: fhir.Reference | null;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisResultsByExposure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesisResultsByExposure>);
    /**
     * Check if the current EffectEvidenceSynthesisResultsByExposure contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesisResultsByExposure from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesisResultsByExposure): EffectEvidenceSynthesisResultsByExposure;
}
/**
 * A description of the precision of the estimate for the effect.
 */
export declare class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhir.BackboneElement implements fhir.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    _from?: fhir.FhirElement | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    _level?: fhir.FhirElement | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    _to?: fhir.FhirElement | undefined;
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisEffectEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>);
    /**
     * Check if the current EffectEvidenceSynthesisEffectEstimatePrecisionEstimate contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesisEffectEstimatePrecisionEstimate from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
}
/**
 * The estimated effect of the exposure variant.
 */
export declare class EffectEvidenceSynthesisEffectEstimate extends fhir.BackboneElement implements fhir.IEffectEvidenceSynthesisEffectEstimate {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[] | undefined;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisEffectEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesisEffectEstimate>);
    /**
     * Check if the current EffectEvidenceSynthesisEffectEstimate contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesisEffectEstimate from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesisEffectEstimate): EffectEvidenceSynthesisEffectEstimate;
}
/**
 * A description of a component of the overall certainty.
 */
export declare class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement implements fhir.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: fhir.CodeableConcept[] | undefined;
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisCertaintyCertaintySubcomponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>);
    /**
     * Check if the current EffectEvidenceSynthesisCertaintyCertaintySubcomponent contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesisCertaintyCertaintySubcomponent): EffectEvidenceSynthesisCertaintyCertaintySubcomponent;
}
/**
 * A description of the certainty of the effect estimate.
 */
export declare class EffectEvidenceSynthesisCertainty extends fhir.BackboneElement implements fhir.IEffectEvidenceSynthesisCertainty {
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.EffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesisCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesisCertainty>);
    /**
     * Check if the current EffectEvidenceSynthesisCertainty contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesisCertainty from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesisCertainty): EffectEvidenceSynthesisCertainty;
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export declare class EffectEvidenceSynthesis extends fhir.DomainResource implements fhir.IEffectEvidenceSynthesis {
    /**
     * Resource Type Name
     */
    resourceType: "EffectEvidenceSynthesis";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhir.FhirElement | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetail[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: fhir.EffectEvidenceSynthesisCertainty[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: fhir.EffectEvidenceSynthesisEffectEstimate[] | undefined;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative: fhir.Reference | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.Reference | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: fhir.EffectEvidenceSynthesisResultsByExposure[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.EffectEvidenceSynthesisSampleSize | undefined;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status: EffectEvidenceSynthesisStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.CodeableConcept | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.CodeableConcept | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConcept[] | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EffectEvidenceSynthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEffectEvidenceSynthesis>);
    /**
     * Check if the current EffectEvidenceSynthesis contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EffectEvidenceSynthesis from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEffectEvidenceSynthesis): EffectEvidenceSynthesis;
}
/**
 * Code Values for the EffectEvidenceSynthesis.resultsByExposure.exposureState field
 */
export declare enum EffectEvidenceSynthesisResultsByExposureExposureStateEnum {
    EXPOSURE = "exposure",
    EXPOSURE_ALTERNATIVE = "exposure-alternative"
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
//# sourceMappingURL=EffectEvidenceSynthesis.d.ts.map
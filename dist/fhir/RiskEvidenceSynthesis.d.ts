import * as fhir from '../fhir';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare type IRiskEvidenceSynthesisSampleSize = fhir.IBackboneElement & {
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
 * A description of the precision of the estimate for the effect.
 */
export declare type IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate = fhir.IBackboneElement & {
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
 * The estimated risk of the outcome.
 */
export declare type IRiskEvidenceSynthesisRiskEstimate = fhir.IBackboneElement & {
    /**
     * The sample size for the group that was measured for this risk estimate.
     */
    denominatorCount?: number | undefined;
    _denominatorCount?: fhir.IFhirElement | undefined;
    /**
     * Human-readable summary of risk estimate.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: number | undefined;
    _numeratorCount?: fhir.IFhirElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
    /**
     * Examples include proportion and mean.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.ICodeableConcept | undefined;
    /**
     * The point estimate of the risk estimate.
     */
    value?: number | undefined;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A description of a component of the overall certainty.
 */
export declare type IRiskEvidenceSynthesisCertaintyCertaintySubcomponent = fhir.IBackboneElement & {
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
 * A description of the certainty of the risk estimate.
 */
export declare type IRiskEvidenceSynthesisCertainty = fhir.IBackboneElement & {
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.IRiskEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
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
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export declare type IRiskEvidenceSynthesis = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "RiskEvidenceSynthesis";
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
     * A description of the certainty of the risk estimate.
     */
    certainty?: fhir.IRiskEvidenceSynthesisCertainty[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.IContactDetail[] | undefined;
    /**
     * The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.IContactDetail[] | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure?: fhir.IReference | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
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
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.IRelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.IContactDetail[] | undefined;
    /**
     * The estimated risk of the outcome.
     */
    riskEstimate?: fhir.IRiskEvidenceSynthesisRiskEstimate | undefined;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.IRiskEvidenceSynthesisSampleSize | undefined;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: RiskEvidenceSynthesisStatusEnum | null;
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
     * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
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
     * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare class RiskEvidenceSynthesisSampleSize extends fhir.BackboneElement implements fhir.IRiskEvidenceSynthesisSampleSize {
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
     * Default constructor for RiskEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskEvidenceSynthesisSampleSize>);
    /**
     * Check if the current RiskEvidenceSynthesisSampleSize contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskEvidenceSynthesisSampleSize from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskEvidenceSynthesisSampleSize): RiskEvidenceSynthesisSampleSize;
}
/**
 * A description of the precision of the estimate for the effect.
 */
export declare class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends fhir.BackboneElement implements fhir.IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
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
     * Default constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate>);
    /**
     * Check if the current RiskEvidenceSynthesisRiskEstimatePrecisionEstimate contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskEvidenceSynthesisRiskEstimatePrecisionEstimate from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate;
}
/**
 * The estimated risk of the outcome.
 */
export declare class RiskEvidenceSynthesisRiskEstimate extends fhir.BackboneElement implements fhir.IRiskEvidenceSynthesisRiskEstimate {
    /**
     * The sample size for the group that was measured for this risk estimate.
     */
    denominatorCount?: number | undefined;
    _denominatorCount?: fhir.FhirElement | undefined;
    /**
     * Human-readable summary of risk estimate.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: number | undefined;
    _numeratorCount?: fhir.FhirElement | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
    /**
     * Examples include proportion and mean.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the risk estimate.
     */
    value?: number | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskEvidenceSynthesisRiskEstimate>);
    /**
     * Check if the current RiskEvidenceSynthesisRiskEstimate contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskEvidenceSynthesisRiskEstimate from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskEvidenceSynthesisRiskEstimate): RiskEvidenceSynthesisRiskEstimate;
}
/**
 * A description of a component of the overall certainty.
 */
export declare class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement implements fhir.IRiskEvidenceSynthesisCertaintyCertaintySubcomponent {
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
     * Default constructor for RiskEvidenceSynthesisCertaintyCertaintySubcomponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskEvidenceSynthesisCertaintyCertaintySubcomponent>);
    /**
     * Check if the current RiskEvidenceSynthesisCertaintyCertaintySubcomponent contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskEvidenceSynthesisCertaintyCertaintySubcomponent from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskEvidenceSynthesisCertaintyCertaintySubcomponent): RiskEvidenceSynthesisCertaintyCertaintySubcomponent;
}
/**
 * A description of the certainty of the risk estimate.
 */
export declare class RiskEvidenceSynthesisCertainty extends fhir.BackboneElement implements fhir.IRiskEvidenceSynthesisCertainty {
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.RiskEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskEvidenceSynthesisCertainty>);
    /**
     * Check if the current RiskEvidenceSynthesisCertainty contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskEvidenceSynthesisCertainty from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskEvidenceSynthesisCertainty): RiskEvidenceSynthesisCertainty;
}
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export declare class RiskEvidenceSynthesis extends fhir.DomainResource implements fhir.IRiskEvidenceSynthesis {
    /**
     * Resource Type Name
     */
    resourceType: "RiskEvidenceSynthesis";
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
     * A description of the certainty of the risk estimate.
     */
    certainty?: fhir.RiskEvidenceSynthesisCertainty[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure?: fhir.Reference | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
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
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * The estimated risk of the outcome.
     */
    riskEstimate?: fhir.RiskEvidenceSynthesisRiskEstimate | undefined;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.RiskEvidenceSynthesisSampleSize | undefined;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: RiskEvidenceSynthesisStatusEnum | null;
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
     * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
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
     * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRiskEvidenceSynthesis>);
    /**
     * Check if the current RiskEvidenceSynthesis contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a RiskEvidenceSynthesis from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IRiskEvidenceSynthesis): RiskEvidenceSynthesis;
}
/**
 * Code Values for the RiskEvidenceSynthesis.status field
 */
export declare enum RiskEvidenceSynthesisStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=RiskEvidenceSynthesis.d.ts.map
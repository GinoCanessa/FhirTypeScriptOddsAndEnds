import * as fhir from '../fhirJson.js';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export interface RiskEvidenceSynthesisSampleSize extends fhir.BackboneElement {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.FhirElement;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElement;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElement;
}
/**
 * A description of the precision of the estimate for the effect.
 */
export interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends fhir.BackboneElement {
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
    _level?: fhir.FhirElement;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.from
     */
    _from?: fhir.FhirElement;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.precisionEstimate.to
     */
    _to?: fhir.FhirElement;
}
/**
 * The estimated risk of the outcome.
 */
export interface RiskEvidenceSynthesisRiskEstimate extends fhir.BackboneElement {
    /**
     * Human-readable summary of risk estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.description
     */
    _description?: fhir.FhirElement;
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
    _value?: fhir.FhirElement;
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
    _denominatorCount?: fhir.FhirElement;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: number | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.riskEstimate.numeratorCount
     */
    _numeratorCount?: fhir.FhirElement;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
}
/**
 * A description of a component of the overall certainty.
 */
export interface RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement {
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
}
/**
 * A description of the certainty of the risk estimate.
 */
export interface RiskEvidenceSynthesisCertainty extends fhir.BackboneElement {
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
}
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export interface RiskEvidenceSynthesis extends fhir.DomainResource {
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
    _url?: fhir.FhirElement;
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
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.publisher
     */
    _publisher?: fhir.FhirElement;
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
    _description?: fhir.FhirElement;
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
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: RiskEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
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
}
//# sourceMappingURL=RiskEvidenceSynthesis.d.ts.map
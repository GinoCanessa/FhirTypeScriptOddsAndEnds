import * as fhir from '../fhir.js';
import { PrecisionEstimateTypeValueSetType } from '../fhirValueSets/PrecisionEstimateTypeValueSet.js';
import { RiskEstimateTypeValueSetType } from '../fhirValueSets/RiskEstimateTypeValueSet.js';
import { UcumUnitsValueSetType } from '../fhirValueSets/UcumUnitsValueSet.js';
import { CertaintySubcomponentTypeValueSetType } from '../fhirValueSets/CertaintySubcomponentTypeValueSet.js';
import { CertaintySubcomponentRatingValueSetType } from '../fhirValueSets/CertaintySubcomponentRatingValueSet.js';
import { EvidenceQualityValueSetType } from '../fhirValueSets/EvidenceQualityValueSet.js';
import { PublicationStatusValueSetType } from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { DefinitionTopicValueSetType } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { SynthesisTypeValueSetType } from '../fhirValueSets/SynthesisTypeValueSet.js';
import { StudyTypeValueSetType } from '../fhirValueSets/StudyTypeValueSet.js';
/**
 * Valid arguments for the RiskEvidenceSynthesisSampleSize type.
 */
export interface RiskEvidenceSynthesisSampleSizeArgs extends fhir.BackboneElementArgs {
    /**
     * Human-readable summary of sample size.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: fhir.FhirInteger | number | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: fhir.FhirInteger | number | undefined;
}
/**
 * A description of the size of the sample involved in the synthesis.
 */
export declare class RiskEvidenceSynthesisSampleSize extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Human-readable summary of sample size.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: fhir.FhirInteger | undefined;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: fhir.FhirInteger | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RiskEvidenceSynthesisSampleSizeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RiskEvidenceSynthesisRiskEstimatePrecisionEstimate type.
 */
export interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimateArgs extends fhir.BackboneElementArgs {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: fhir.FhirDecimal | number | undefined;
    /**
     * Lower bound of confidence interval.
     */
    from?: fhir.FhirDecimal | number | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: fhir.FhirDecimal | number | undefined;
}
/**
 * A description of the precision of the estimate for the effect.
 */
export declare class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: fhir.FhirDecimal | undefined;
    /**
     * Lower bound of confidence interval.
     */
    from?: fhir.FhirDecimal | undefined;
    /**
     * Upper bound of confidence interval.
     */
    to?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): PrecisionEstimateTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RiskEvidenceSynthesisRiskEstimate type.
 */
export interface RiskEvidenceSynthesisRiskEstimateArgs extends fhir.BackboneElementArgs {
    /**
     * Human-readable summary of risk estimate.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Examples include proportion and mean.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The point estimate of the risk estimate.
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConceptArgs | undefined;
    /**
     * The sample size for the group that was measured for this risk estimate.
     */
    denominatorCount?: fhir.FhirInteger | number | undefined;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: fhir.FhirInteger | number | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimateArgs[] | undefined;
}
/**
 * The estimated risk of the outcome.
 */
export declare class RiskEvidenceSynthesisRiskEstimate extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Human-readable summary of risk estimate.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Examples include proportion and mean.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the risk estimate.
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * The sample size for the group that was measured for this risk estimate.
     */
    denominatorCount?: fhir.FhirInteger | undefined;
    /**
     * The number of group members with the outcome of interest.
     */
    numeratorCount?: fhir.FhirInteger | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[] | undefined;
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RiskEvidenceSynthesisRiskEstimateArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RiskEvidenceSynthesisCertaintyCertaintySubcomponent type.
 */
export interface RiskEvidenceSynthesisCertaintyCertaintySubcomponentArgs extends fhir.BackboneElementArgs {
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A description of a component of the overall certainty.
 */
export declare class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<RiskEvidenceSynthesisCertaintyCertaintySubcomponentArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RiskEvidenceSynthesisCertainty type.
 */
export interface RiskEvidenceSynthesisCertaintyArgs extends fhir.BackboneElementArgs {
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: fhir.RiskEvidenceSynthesisCertaintyCertaintySubcomponentArgs[] | undefined;
}
/**
 * A description of the certainty of the risk estimate.
 */
export declare class RiskEvidenceSynthesisCertainty extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<RiskEvidenceSynthesisCertaintyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for rating
     */
    static ratingExtensibleValueSet(): EvidenceQualityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RiskEvidenceSynthesis type.
 */
export interface RiskEvidenceSynthesisArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RiskEvidenceSynthesis" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.CodeableConceptArgs | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.ReferenceArgs | null;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure?: fhir.ReferenceArgs | undefined;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.ReferenceArgs | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.RiskEvidenceSynthesisSampleSizeArgs | undefined;
    /**
     * The estimated risk of the outcome.
     */
    riskEstimate?: fhir.RiskEvidenceSynthesisRiskEstimateArgs | undefined;
    /**
     * A description of the certainty of the risk estimate.
     */
    certainty?: fhir.RiskEvidenceSynthesisCertaintyArgs[] | undefined;
}
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export declare class RiskEvidenceSynthesis extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "RiskEvidenceSynthesis";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
     */
    description?: fhir.FhirMarkdown | undefined;
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
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
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
    constructor(source?: Partial<RiskEvidenceSynthesisArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=RiskEvidenceSynthesis.d.ts.map
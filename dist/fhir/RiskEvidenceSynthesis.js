// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: RiskEvidenceSynthesis
import * as fhir from '../fhir.js';
import { PrecisionEstimateTypeValueSet, } from '../fhirValueSets/PrecisionEstimateTypeValueSet.js';
import { RiskEstimateTypeValueSet, } from '../fhirValueSets/RiskEstimateTypeValueSet.js';
import { UcumUnitsValueSet, } from '../fhirValueSets/UcumUnitsValueSet.js';
import { CertaintySubcomponentTypeValueSet, } from '../fhirValueSets/CertaintySubcomponentTypeValueSet.js';
import { CertaintySubcomponentRatingValueSet, } from '../fhirValueSets/CertaintySubcomponentRatingValueSet.js';
import { EvidenceQualityValueSet, } from '../fhirValueSets/EvidenceQualityValueSet.js';
import { PublicationStatusValueSet, } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSet, } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { SynthesisTypeValueSet, } from '../fhirValueSets/SynthesisTypeValueSet.js';
import { StudyTypeValueSet, } from '../fhirValueSets/StudyTypeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export class RiskEvidenceSynthesisSampleSize extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisSampleSize - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RiskEvidenceSynthesisSampleSize';
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['numberOfStudies']) {
            this.numberOfStudies = new fhir.FhirInteger({ value: source.numberOfStudies });
        }
        if (source['numberOfParticipants']) {
            this.numberOfParticipants = new fhir.FhirInteger({ value: source.numberOfParticipants });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["numberOfStudies"]) {
            outcome.issue.push(...this.numberOfStudies.doModelValidation().issue);
        }
        if (this["numberOfParticipants"]) {
            outcome.issue.push(...this.numberOfParticipants.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A description of the precision of the estimate for the effect.
 */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['level']) {
            this.level = new fhir.FhirDecimal({ value: source.level });
        }
        if (source['from']) {
            this.from = new fhir.FhirDecimal({ value: source.from });
        }
        if (source['to']) {
            this.to = new fhir.FhirDecimal({ value: source.to });
        }
    }
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet() {
        return PrecisionEstimateTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["level"]) {
            outcome.issue.push(...this.level.doModelValidation().issue);
        }
        if (this["from"]) {
            outcome.issue.push(...this.from.doModelValidation().issue);
        }
        if (this["to"]) {
            outcome.issue.push(...this.to.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The estimated risk of the outcome.
 */
export class RiskEvidenceSynthesisRiskEstimate extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisRiskEstimate - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RiskEvidenceSynthesisRiskEstimate';
        /**
         * A description of the precision of the estimate for the effect.
         */
        this.precisionEstimate = [];
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['value']) {
            this.value = new fhir.FhirDecimal({ value: source.value });
        }
        if (source['unitOfMeasure']) {
            this.unitOfMeasure = new fhir.CodeableConcept(source.unitOfMeasure);
        }
        if (source['denominatorCount']) {
            this.denominatorCount = new fhir.FhirInteger({ value: source.denominatorCount });
        }
        if (source['numeratorCount']) {
            this.numeratorCount = new fhir.FhirInteger({ value: source.numeratorCount });
        }
        if (source['precisionEstimate']) {
            this.precisionEstimate = source.precisionEstimate.map((x) => new fhir.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(x));
        }
    }
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet() {
        return RiskEstimateTypeValueSet;
    }
    /**
     * Required-bound Value Set for unitOfMeasure
     */
    static unitOfMeasureRequiredValueSet() {
        return UcumUnitsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["value"]) {
            outcome.issue.push(...this.value.doModelValidation().issue);
        }
        if (this["unitOfMeasure"]) {
            outcome.issue.push(...this.unitOfMeasure.doModelValidation().issue);
        }
        if (this["denominatorCount"]) {
            outcome.issue.push(...this.denominatorCount.doModelValidation().issue);
        }
        if (this["numeratorCount"]) {
            outcome.issue.push(...this.numeratorCount.doModelValidation().issue);
        }
        if (this["precisionEstimate"]) {
            this.precisionEstimate.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A description of a component of the overall certainty.
 */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisCertaintyCertaintySubcomponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RiskEvidenceSynthesisCertaintyCertaintySubcomponent';
        /**
         * A rating of a subcomponent of rating certainty.
         */
        this.rating = [];
        /**
         * A human-readable string to clarify or explain concepts about the resource.
         */
        this.note = [];
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['rating']) {
            this.rating = source.rating.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
    }
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet() {
        return CertaintySubcomponentTypeValueSet;
    }
    /**
     * Extensible-bound Value Set for rating
     */
    static ratingExtensibleValueSet() {
        return CertaintySubcomponentRatingValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["rating"]) {
            this.rating.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A description of the certainty of the risk estimate.
 */
export class RiskEvidenceSynthesisCertainty extends fhir.BackboneElement {
    /**
     * Default constructor for RiskEvidenceSynthesisCertainty - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RiskEvidenceSynthesisCertainty';
        /**
         * A rating of the certainty of the effect estimate.
         */
        this.rating = [];
        /**
         * A human-readable string to clarify or explain concepts about the resource.
         */
        this.note = [];
        /**
         * A description of a component of the overall certainty.
         */
        this.certaintySubcomponent = [];
        if (source['rating']) {
            this.rating = source.rating.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['certaintySubcomponent']) {
            this.certaintySubcomponent = source.certaintySubcomponent.map((x) => new fhir.RiskEvidenceSynthesisCertaintyCertaintySubcomponent(x));
        }
    }
    /**
     * Extensible-bound Value Set for rating
     */
    static ratingExtensibleValueSet() {
        return EvidenceQualityValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["rating"]) {
            this.rating.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["certaintySubcomponent"]) {
            this.certaintySubcomponent.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export class RiskEvidenceSynthesis extends fhir.DomainResource {
    /**
     * Default constructor for RiskEvidenceSynthesis - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'RiskEvidenceSynthesis';
        /**
         * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
         */
        this.identifier = [];
        /**
         * May be a web site, an email address, a telephone number, etc.
         */
        this.contact = [];
        /**
         * A human-readable string to clarify or explain concepts about the resource.
         */
        this.note = [];
        /**
         * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
         */
        this.useContext = [];
        /**
         * It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        this.jurisdiction = [];
        /**
         * Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
         */
        this.topic = [];
        /**
         * An individiual or organization primarily involved in the creation and maintenance of the content.
         */
        this.author = [];
        /**
         * An individual or organization primarily responsible for internal coherence of the content.
         */
        this.editor = [];
        /**
         * An individual or organization primarily responsible for review of some aspect of the content.
         */
        this.reviewer = [];
        /**
         * An individual or organization responsible for officially endorsing the content for use in some setting.
         */
        this.endorser = [];
        /**
         * Each related artifact is either an attachment, or a reference to another resource, but not both.
         */
        this.relatedArtifact = [];
        /**
         * A description of the certainty of the risk estimate.
         */
        this.certainty = [];
        this.resourceType = 'RiskEvidenceSynthesis';
        if (source['url']) {
            this.url = new fhir.FhirUri({ value: source.url });
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['version']) {
            this.version = new fhir.FhirString({ value: source.version });
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['publisher']) {
            this.publisher = new fhir.FhirString({ value: source.publisher });
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source['description']) {
            this.description = new fhir.FhirMarkdown({ value: source.description });
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['useContext']) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['jurisdiction']) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['copyright']) {
            this.copyright = new fhir.FhirMarkdown({ value: source.copyright });
        }
        if (source['approvalDate']) {
            this.approvalDate = new fhir.FhirDate({ value: source.approvalDate });
        }
        if (source['lastReviewDate']) {
            this.lastReviewDate = new fhir.FhirDate({ value: source.lastReviewDate });
        }
        if (source['effectivePeriod']) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source['topic']) {
            this.topic = source.topic.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['author']) {
            this.author = source.author.map((x) => new fhir.ContactDetail(x));
        }
        if (source['editor']) {
            this.editor = source.editor.map((x) => new fhir.ContactDetail(x));
        }
        if (source['reviewer']) {
            this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x));
        }
        if (source['endorser']) {
            this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x));
        }
        if (source['relatedArtifact']) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source['synthesisType']) {
            this.synthesisType = new fhir.CodeableConcept(source.synthesisType);
        }
        if (source['studyType']) {
            this.studyType = new fhir.CodeableConcept(source.studyType);
        }
        if (source['population']) {
            this.population = new fhir.Reference(source.population);
        }
        else {
            this.population = null;
        }
        if (source['exposure']) {
            this.exposure = new fhir.Reference(source.exposure);
        }
        if (source['outcome']) {
            this.outcome = new fhir.Reference(source.outcome);
        }
        else {
            this.outcome = null;
        }
        if (source['sampleSize']) {
            this.sampleSize = new fhir.RiskEvidenceSynthesisSampleSize(source.sampleSize);
        }
        if (source['riskEstimate']) {
            this.riskEstimate = new fhir.RiskEvidenceSynthesisRiskEstimate(source.riskEstimate);
        }
        if (source['certainty']) {
            this.certainty = source.certainty.map((x) => new fhir.RiskEvidenceSynthesisCertainty(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return PublicationStatusValueSet;
    }
    /**
     * Example-bound Value Set for topic
     */
    static topicExampleValueSet() {
        return DefinitionTopicValueSet;
    }
    /**
     * Extensible-bound Value Set for synthesisType
     */
    static synthesisTypeExtensibleValueSet() {
        return SynthesisTypeValueSet;
    }
    /**
     * Extensible-bound Value Set for studyType
     */
    static studyTypeExtensibleValueSet() {
        return StudyTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'RiskEvidenceSynthesis' fhir: RiskEvidenceSynthesis.resourceType:'RiskEvidenceSynthesis'", }));
        }
        if (this["url"]) {
            outcome.issue.push(...this.url.doModelValidation().issue);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["version"]) {
            outcome.issue.push(...this.version.doModelValidation().issue);
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: RiskEvidenceSynthesis.status:code", }));
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["publisher"]) {
            outcome.issue.push(...this.publisher.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["note"]) {
            this.note.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["useContext"]) {
            this.useContext.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["copyright"]) {
            outcome.issue.push(...this.copyright.doModelValidation().issue);
        }
        if (this["approvalDate"]) {
            outcome.issue.push(...this.approvalDate.doModelValidation().issue);
        }
        if (this["lastReviewDate"]) {
            outcome.issue.push(...this.lastReviewDate.doModelValidation().issue);
        }
        if (this["effectivePeriod"]) {
            outcome.issue.push(...this.effectivePeriod.doModelValidation().issue);
        }
        if (this["topic"]) {
            this.topic.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["author"]) {
            this.author.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["editor"]) {
            this.editor.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["reviewer"]) {
            this.reviewer.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["endorser"]) {
            this.endorser.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["relatedArtifact"]) {
            this.relatedArtifact.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["synthesisType"]) {
            outcome.issue.push(...this.synthesisType.doModelValidation().issue);
        }
        if (this["studyType"]) {
            outcome.issue.push(...this.studyType.doModelValidation().issue);
        }
        if (!this['population']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property population:fhir.Reference fhir: RiskEvidenceSynthesis.population:Reference", }));
        }
        if (this["population"]) {
            outcome.issue.push(...this.population.doModelValidation().issue);
        }
        if (this["exposure"]) {
            outcome.issue.push(...this.exposure.doModelValidation().issue);
        }
        if (!this['outcome']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property outcome:fhir.Reference fhir: RiskEvidenceSynthesis.outcome:Reference", }));
        }
        if (this["outcome"]) {
            outcome.issue.push(...this.outcome.doModelValidation().issue);
        }
        if (this["sampleSize"]) {
            outcome.issue.push(...this.sampleSize.doModelValidation().issue);
        }
        if (this["riskEstimate"]) {
            outcome.issue.push(...this.riskEstimate.doModelValidation().issue);
        }
        if (this["certainty"]) {
            this.certainty.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=RiskEvidenceSynthesis.js.map
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Measure
import * as fhir from '../fhir.js';
import { MeasurePopulationValueSet, } from '../fhirValueSets/MeasurePopulationValueSet.js';
import { MeasureDataUsageValueSet, } from '../fhirValueSets/MeasureDataUsageValueSet.js';
import { PublicationStatusValueSet, } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSet, } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { MeasureScoringValueSet, } from '../fhirValueSets/MeasureScoringValueSet.js';
import { CompositeMeasureScoringValueSet, } from '../fhirValueSets/CompositeMeasureScoringValueSet.js';
import { MeasureTypeValueSet, } from '../fhirValueSets/MeasureTypeValueSet.js';
import { MeasureImprovementNotationValueSet, } from '../fhirValueSets/MeasureImprovementNotationValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A population criteria for the measure.
 */
export class MeasureGroupPopulation extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureGroupPopulation';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['criteria']) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        else {
            this.criteria = null;
        }
    }
    /**
     * Extensible-bound Value Set for code
     */
    static codeExtensibleValueSet() {
        return MeasurePopulationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (!this['criteria']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property criteria:fhir.Expression fhir: Measure.group.population.criteria:Expression", }));
        }
        if (this["criteria"]) {
            outcome.issue.push(...this.criteria.doModelValidation().issue);
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
 * Stratifiers are defined either as a single criteria, or as a set of component criteria.
 */
export class MeasureGroupStratifierComponent extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroupStratifierComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureGroupStratifierComponent';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['criteria']) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        else {
            this.criteria = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (!this['criteria']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property criteria:fhir.Expression fhir: Measure.group.stratifier.component.criteria:Expression", }));
        }
        if (this["criteria"]) {
            outcome.issue.push(...this.criteria.doModelValidation().issue);
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
 * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
 */
export class MeasureGroupStratifier extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroupStratifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureGroupStratifier';
        /**
         * Stratifiers are defined either as a single criteria, or as a set of component criteria.
         */
        this.component = [];
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['criteria']) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        if (source['component']) {
            this.component = source.component.map((x) => new fhir.MeasureGroupStratifierComponent(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["criteria"]) {
            outcome.issue.push(...this.criteria.doModelValidation().issue);
        }
        if (this["component"]) {
            this.component.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * A group of population criteria for the measure.
 */
export class MeasureGroup extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureGroup';
        /**
         * A population criteria for the measure.
         */
        this.population = [];
        /**
         * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
         */
        this.stratifier = [];
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['population']) {
            this.population = source.population.map((x) => new fhir.MeasureGroupPopulation(x));
        }
        if (source['stratifier']) {
            this.stratifier = source.stratifier.map((x) => new fhir.MeasureGroupStratifier(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["population"]) {
            this.population.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["stratifier"]) {
            this.stratifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * Note that supplemental data are reported as observations for each patient and included in the evaluatedResources bundle. See the MeasureReport resource or the Quality Reporting topic for more information.
 */
export class MeasureSupplementalData extends fhir.BackboneElement {
    /**
     * Default constructor for MeasureSupplementalData - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'MeasureSupplementalData';
        /**
         * An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation.
         */
        this.usage = [];
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['usage']) {
            this.usage = source.usage.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['criteria']) {
            this.criteria = new fhir.Expression(source.criteria);
        }
        else {
            this.criteria = null;
        }
    }
    /**
     * Extensible-bound Value Set for usage
     */
    static usageExtensibleValueSet() {
        return MeasureDataUsageValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["usage"]) {
            this.usage.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (!this['criteria']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property criteria:fhir.Expression fhir: Measure.supplementalData.criteria:Expression", }));
        }
        if (this["criteria"]) {
            outcome.issue.push(...this.criteria.doModelValidation().issue);
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
 * The Measure resource provides the definition of a quality measure.
 */
export class Measure extends fhir.DomainResource {
    /**
     * Default constructor for Measure - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Measure';
        /**
         * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this measure outside of FHIR, where it is not possible to use the logical URI.
         */
        this.identifier = [];
        this.__subjectIsChoice = true;
        /**
         * May be a web site, an email address, a telephone number, etc.
         */
        this.contact = [];
        /**
         * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
         */
        this.useContext = [];
        /**
         * It may be possible for the measure to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        this.jurisdiction = [];
        /**
         * Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching.
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
         * A reference to a Library resource containing the formal logic used by the measure.
         */
        this.library = [];
        /**
         * Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
         */
        this.type = [];
        /**
         * Provides a description of an individual term used within the measure.
         */
        this.definition = [];
        /**
         * A group of population criteria for the measure.
         */
        this.group = [];
        /**
         * Note that supplemental data are reported as observations for each patient and included in the evaluatedResources bundle. See the MeasureReport resource or the Quality Reporting topic for more information.
         */
        this.supplementalData = [];
        this.resourceType = 'Measure';
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
        if (source['subtitle']) {
            this.subtitle = new fhir.FhirString({ value: source.subtitle });
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['experimental']) {
            this.experimental = new fhir.FhirBoolean({ value: source.experimental });
        }
        if (source['subject']) {
            this.subject = source.subject;
        }
        else if (source['subjectCodeableConcept']) {
            this.subject = new fhir.CodeableConcept(source.subjectCodeableConcept);
        }
        else if (source['subjectReference']) {
            this.subject = new fhir.Reference(source.subjectReference);
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
        if (source['useContext']) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['jurisdiction']) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['purpose']) {
            this.purpose = new fhir.FhirMarkdown({ value: source.purpose });
        }
        if (source['usage']) {
            this.usage = new fhir.FhirString({ value: source.usage });
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
        if (source['library']) {
            this.library = source.library.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        if (source['disclaimer']) {
            this.disclaimer = new fhir.FhirMarkdown({ value: source.disclaimer });
        }
        if (source['scoring']) {
            this.scoring = new fhir.CodeableConcept(source.scoring);
        }
        if (source['compositeScoring']) {
            this.compositeScoring = new fhir.CodeableConcept(source.compositeScoring);
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['riskAdjustment']) {
            this.riskAdjustment = new fhir.FhirString({ value: source.riskAdjustment });
        }
        if (source['rateAggregation']) {
            this.rateAggregation = new fhir.FhirString({ value: source.rateAggregation });
        }
        if (source['rationale']) {
            this.rationale = new fhir.FhirMarkdown({ value: source.rationale });
        }
        if (source['clinicalRecommendationStatement']) {
            this.clinicalRecommendationStatement = new fhir.FhirMarkdown({ value: source.clinicalRecommendationStatement });
        }
        if (source['improvementNotation']) {
            this.improvementNotation = new fhir.CodeableConcept(source.improvementNotation);
        }
        if (source['definition']) {
            this.definition = source.definition.map((x) => new fhir.FhirMarkdown({ value: x }));
        }
        if (source['guidance']) {
            this.guidance = new fhir.FhirMarkdown({ value: source.guidance });
        }
        if (source['group']) {
            this.group = source.group.map((x) => new fhir.MeasureGroup(x));
        }
        if (source['supplementalData']) {
            this.supplementalData = source.supplementalData.map((x) => new fhir.MeasureSupplementalData(x));
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
     * Extensible-bound Value Set for scoring
     */
    static scoringExtensibleValueSet() {
        return MeasureScoringValueSet;
    }
    /**
     * Extensible-bound Value Set for compositeScoring
     */
    static compositeScoringExtensibleValueSet() {
        return CompositeMeasureScoringValueSet;
    }
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet() {
        return MeasureTypeValueSet;
    }
    /**
     * Required-bound Value Set for improvementNotation
     */
    static improvementNotationRequiredValueSet() {
        return MeasureImprovementNotationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'Measure' fhir: Measure.resourceType:'Measure'", }));
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
        if (this["subtitle"]) {
            outcome.issue.push(...this.subtitle.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: Measure.status:code", }));
        }
        if (this["experimental"]) {
            outcome.issue.push(...this.experimental.doModelValidation().issue);
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
        if (this["useContext"]) {
            this.useContext.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["purpose"]) {
            outcome.issue.push(...this.purpose.doModelValidation().issue);
        }
        if (this["usage"]) {
            outcome.issue.push(...this.usage.doModelValidation().issue);
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
        if (this["library"]) {
            this.library.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["disclaimer"]) {
            outcome.issue.push(...this.disclaimer.doModelValidation().issue);
        }
        if (this["scoring"]) {
            outcome.issue.push(...this.scoring.doModelValidation().issue);
        }
        if (this["compositeScoring"]) {
            outcome.issue.push(...this.compositeScoring.doModelValidation().issue);
        }
        if (this["type"]) {
            this.type.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["riskAdjustment"]) {
            outcome.issue.push(...this.riskAdjustment.doModelValidation().issue);
        }
        if (this["rateAggregation"]) {
            outcome.issue.push(...this.rateAggregation.doModelValidation().issue);
        }
        if (this["rationale"]) {
            outcome.issue.push(...this.rationale.doModelValidation().issue);
        }
        if (this["clinicalRecommendationStatement"]) {
            outcome.issue.push(...this.clinicalRecommendationStatement.doModelValidation().issue);
        }
        if (this["improvementNotation"]) {
            outcome.issue.push(...this.improvementNotation.doModelValidation().issue);
        }
        if (this["definition"]) {
            this.definition.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["guidance"]) {
            outcome.issue.push(...this.guidance.doModelValidation().issue);
        }
        if (this["group"]) {
            this.group.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["supplementalData"]) {
            this.supplementalData.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=Measure.js.map
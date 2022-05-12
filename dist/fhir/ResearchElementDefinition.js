// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchElementDefinition
import * as fhir from '../fhir.js';
import { UcumUnitsValueSet, } from '../fhirValueSets/UcumUnitsValueSet.js';
import { GroupMeasureValueSet, } from '../fhirValueSets/GroupMeasureValueSet.js';
import { PublicationStatusValueSet, } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSet, } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { ResearchElementTypeValueSet, } from '../fhirValueSets/ResearchElementTypeValueSet.js';
import { VariableTypeValueSet, } from '../fhirValueSets/VariableTypeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export class ResearchElementDefinitionCharacteristic extends fhir.BackboneElement {
    /**
     * Default constructor for ResearchElementDefinitionCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ResearchElementDefinitionCharacteristic';
        this.__definitionIsChoice = true;
        /**
         * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
         */
        this.usageContext = [];
        this.__studyEffectiveIsChoice = true;
        this.__participantEffectiveIsChoice = true;
        if (source['definition']) {
            this.definition = source.definition;
        }
        else if (source['definitionCodeableConcept']) {
            this.definition = new fhir.CodeableConcept(source.definitionCodeableConcept);
        }
        else if (source['definitionCanonical']) {
            this.definition = new fhir.FhirCanonical({ value: source.definitionCanonical });
        }
        else if (source['definitionExpression']) {
            this.definition = new fhir.Expression(source.definitionExpression);
        }
        else if (source['definitionDataRequirement']) {
            this.definition = new fhir.DataRequirement(source.definitionDataRequirement);
        }
        else {
            this.definition = null;
        }
        if (source['usageContext']) {
            this.usageContext = source.usageContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['exclude']) {
            this.exclude = new fhir.FhirBoolean({ value: source.exclude });
        }
        if (source['unitOfMeasure']) {
            this.unitOfMeasure = new fhir.CodeableConcept(source.unitOfMeasure);
        }
        if (source['studyEffectiveDescription']) {
            this.studyEffectiveDescription = new fhir.FhirString({ value: source.studyEffectiveDescription });
        }
        if (source['studyEffective']) {
            this.studyEffective = source.studyEffective;
        }
        else if (source['studyEffectiveDateTime']) {
            this.studyEffective = new fhir.FhirDateTime({ value: source.studyEffectiveDateTime });
        }
        else if (source['studyEffectivePeriod']) {
            this.studyEffective = new fhir.Period(source.studyEffectivePeriod);
        }
        else if (source['studyEffectiveDuration']) {
            this.studyEffective = new fhir.Duration(source.studyEffectiveDuration);
        }
        else if (source['studyEffectiveTiming']) {
            this.studyEffective = new fhir.Timing(source.studyEffectiveTiming);
        }
        if (source['studyEffectiveTimeFromStart']) {
            this.studyEffectiveTimeFromStart = new fhir.Duration(source.studyEffectiveTimeFromStart);
        }
        if (source['studyEffectiveGroupMeasure']) {
            this.studyEffectiveGroupMeasure = source.studyEffectiveGroupMeasure;
        }
        if (source['participantEffectiveDescription']) {
            this.participantEffectiveDescription = new fhir.FhirString({ value: source.participantEffectiveDescription });
        }
        if (source['participantEffective']) {
            this.participantEffective = source.participantEffective;
        }
        else if (source['participantEffectiveDateTime']) {
            this.participantEffective = new fhir.FhirDateTime({ value: source.participantEffectiveDateTime });
        }
        else if (source['participantEffectivePeriod']) {
            this.participantEffective = new fhir.Period(source.participantEffectivePeriod);
        }
        else if (source['participantEffectiveDuration']) {
            this.participantEffective = new fhir.Duration(source.participantEffectiveDuration);
        }
        else if (source['participantEffectiveTiming']) {
            this.participantEffective = new fhir.Timing(source.participantEffectiveTiming);
        }
        if (source['participantEffectiveTimeFromStart']) {
            this.participantEffectiveTimeFromStart = new fhir.Duration(source.participantEffectiveTimeFromStart);
        }
        if (source['participantEffectiveGroupMeasure']) {
            this.participantEffectiveGroupMeasure = source.participantEffectiveGroupMeasure;
        }
    }
    /**
     * Required-bound Value Set for unitOfMeasure
     */
    static unitOfMeasureRequiredValueSet() {
        return UcumUnitsValueSet;
    }
    /**
     * Required-bound Value Set for studyEffectiveGroupMeasure
     */
    static studyEffectiveGroupMeasureRequiredValueSet() {
        return GroupMeasureValueSet;
    }
    /**
     * Required-bound Value Set for participantEffectiveGroupMeasure
     */
    static participantEffectiveGroupMeasureRequiredValueSet() {
        return GroupMeasureValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['definition']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property definition: fhir: ResearchElementDefinition.characteristic.definition[x]:", }));
        }
        if (this["usageContext"]) {
            this.usageContext.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["exclude"]) {
            outcome.issue.push(...this.exclude.doModelValidation().issue);
        }
        if (this["unitOfMeasure"]) {
            outcome.issue.push(...this.unitOfMeasure.doModelValidation().issue);
        }
        if (this["studyEffectiveDescription"]) {
            outcome.issue.push(...this.studyEffectiveDescription.doModelValidation().issue);
        }
        if (this["studyEffectiveTimeFromStart"]) {
            outcome.issue.push(...this.studyEffectiveTimeFromStart.doModelValidation().issue);
        }
        if (this["participantEffectiveDescription"]) {
            outcome.issue.push(...this.participantEffectiveDescription.doModelValidation().issue);
        }
        if (this["participantEffectiveTimeFromStart"]) {
            outcome.issue.push(...this.participantEffectiveTimeFromStart.doModelValidation().issue);
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
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export class ResearchElementDefinition extends fhir.DomainResource {
    /**
     * Default constructor for ResearchElementDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ResearchElementDefinition';
        /**
         * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
         */
        this.identifier = [];
        this.__subjectIsChoice = true;
        /**
         * May be a web site, an email address, a telephone number, etc.
         */
        this.contact = [];
        /**
         * A human-readable string to clarify or explain concepts about the resource.
         */
        this.comment = [];
        /**
         * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
         */
        this.useContext = [];
        /**
         * It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        this.jurisdiction = [];
        /**
         * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
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
         * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
         */
        this.library = [];
        /**
         * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
         */
        this.characteristic = [];
        this.resourceType = 'ResearchElementDefinition';
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
        if (source['shortTitle']) {
            this.shortTitle = new fhir.FhirString({ value: source.shortTitle });
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
        if (source['comment']) {
            this.comment = source.comment.map((x) => new fhir.FhirString({ value: x }));
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
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['variableType']) {
            this.variableType = source.variableType;
        }
        if (source['characteristic']) {
            this.characteristic = source.characteristic.map((x) => new fhir.ResearchElementDefinitionCharacteristic(x));
        }
        else {
            this.characteristic = null;
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
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return ResearchElementTypeValueSet;
    }
    /**
     * Required-bound Value Set for variableType
     */
    static variableTypeRequiredValueSet() {
        return VariableTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'ResearchElementDefinition' fhir: ResearchElementDefinition.resourceType:'ResearchElementDefinition'", }));
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
        if (this["shortTitle"]) {
            outcome.issue.push(...this.shortTitle.doModelValidation().issue);
        }
        if (this["subtitle"]) {
            outcome.issue.push(...this.subtitle.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: ResearchElementDefinition.status:code", }));
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
        if (this["comment"]) {
            this.comment.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:ResearchElementTypeValueSetEnum fhir: ResearchElementDefinition.type:code", }));
        }
        if (!this['characteristic']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property characteristic:fhir.ResearchElementDefinitionCharacteristic[] fhir: ResearchElementDefinition.characteristic:characteristic", }));
        }
        else if (!Array.isArray(this.characteristic)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property characteristic:fhir.ResearchElementDefinitionCharacteristic[] fhir: ResearchElementDefinition.characteristic:characteristic", }));
        }
        else if (this.characteristic.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property characteristic:fhir.ResearchElementDefinitionCharacteristic[] fhir: ResearchElementDefinition.characteristic:characteristic", }));
        }
        if (this["characteristic"]) {
            this.characteristic.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=ResearchElementDefinition.js.map
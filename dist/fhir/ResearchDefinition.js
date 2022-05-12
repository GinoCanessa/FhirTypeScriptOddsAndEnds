// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchDefinition
import * as fhir from '../fhir.js';
import { PublicationStatusValueSet, } from '../fhirValueSets/PublicationStatusValueSet.js';
import { DefinitionTopicValueSet, } from '../fhirValueSets/DefinitionTopicValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export class ResearchDefinition extends fhir.DomainResource {
    /**
     * Default constructor for ResearchDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ResearchDefinition';
        /**
         * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
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
         * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        this.jurisdiction = [];
        /**
         * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
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
         * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
         */
        this.library = [];
        this.resourceType = 'ResearchDefinition';
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
        if (source['population']) {
            this.population = new fhir.Reference(source.population);
        }
        else {
            this.population = null;
        }
        if (source['exposure']) {
            this.exposure = new fhir.Reference(source.exposure);
        }
        if (source['exposureAlternative']) {
            this.exposureAlternative = new fhir.Reference(source.exposureAlternative);
        }
        if (source['outcome']) {
            this.outcome = new fhir.Reference(source.outcome);
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'ResearchDefinition' fhir: ResearchDefinition.resourceType:'ResearchDefinition'", }));
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
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: ResearchDefinition.status:code", }));
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
        if (!this['population']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property population:fhir.Reference fhir: ResearchDefinition.population:Reference", }));
        }
        if (this["population"]) {
            outcome.issue.push(...this.population.doModelValidation().issue);
        }
        if (this["exposure"]) {
            outcome.issue.push(...this.exposure.doModelValidation().issue);
        }
        if (this["exposureAlternative"]) {
            outcome.issue.push(...this.exposureAlternative.doModelValidation().issue);
        }
        if (this["outcome"]) {
            outcome.issue.push(...this.outcome.doModelValidation().issue);
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
//# sourceMappingURL=ResearchDefinition.js.map
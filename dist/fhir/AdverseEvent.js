// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: AdverseEvent
import * as fhir from '../fhir.js';
import { AdverseEventCausalityAssessValueSet, } from '../fhirValueSets/AdverseEventCausalityAssessValueSet.js';
import { AdverseEventCausalityMethodValueSet, } from '../fhirValueSets/AdverseEventCausalityMethodValueSet.js';
import { AdverseEventActualityValueSet, } from '../fhirValueSets/AdverseEventActualityValueSet.js';
import { AdverseEventCategoryValueSet, } from '../fhirValueSets/AdverseEventCategoryValueSet.js';
import { AdverseEventTypeValueSet, } from '../fhirValueSets/AdverseEventTypeValueSet.js';
import { AdverseEventSeriousnessValueSet, } from '../fhirValueSets/AdverseEventSeriousnessValueSet.js';
import { AdverseEventSeverityValueSet, } from '../fhirValueSets/AdverseEventSeverityValueSet.js';
import { AdverseEventOutcomeValueSet, } from '../fhirValueSets/AdverseEventOutcomeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Information on the possible cause of the event.
 */
export class AdverseEventSuspectEntityCausality extends fhir.BackboneElement {
    /**
     * Default constructor for AdverseEventSuspectEntityCausality - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'AdverseEventSuspectEntityCausality';
        if (source['assessment']) {
            this.assessment = new fhir.CodeableConcept(source.assessment);
        }
        if (source['productRelatedness']) {
            this.productRelatedness = new fhir.FhirString({ value: source.productRelatedness });
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
        if (source['method']) {
            this.method = new fhir.CodeableConcept(source.method);
        }
    }
    /**
     * Example-bound Value Set for assessment
     */
    static assessmentExampleValueSet() {
        return AdverseEventCausalityAssessValueSet;
    }
    /**
     * Example-bound Value Set for method
     */
    static methodExampleValueSet() {
        return AdverseEventCausalityMethodValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["assessment"]) {
            outcome.issue.push(...this.assessment.doModelValidation().issue);
        }
        if (this["productRelatedness"]) {
            outcome.issue.push(...this.productRelatedness.doModelValidation().issue);
        }
        if (this["author"]) {
            outcome.issue.push(...this.author.doModelValidation().issue);
        }
        if (this["method"]) {
            outcome.issue.push(...this.method.doModelValidation().issue);
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
 * Describes the entity that is suspected to have caused the adverse event.
 */
export class AdverseEventSuspectEntity extends fhir.BackboneElement {
    /**
     * Default constructor for AdverseEventSuspectEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'AdverseEventSuspectEntity';
        /**
         * Information on the possible cause of the event.
         */
        this.causality = [];
        if (source['instance']) {
            this.instance = new fhir.Reference(source.instance);
        }
        else {
            this.instance = null;
        }
        if (source['causality']) {
            this.causality = source.causality.map((x) => new fhir.AdverseEventSuspectEntityCausality(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['instance']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property instance:fhir.Reference fhir: AdverseEvent.suspectEntity.instance:Reference", }));
        }
        if (this["instance"]) {
            outcome.issue.push(...this.instance.doModelValidation().issue);
        }
        if (this["causality"]) {
            this.causality.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export class AdverseEvent extends fhir.DomainResource {
    /**
     * Default constructor for AdverseEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'AdverseEvent';
        /**
         * The overall type of event, intended for search and filtering purposes.
         */
        this.category = [];
        /**
         * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
         */
        this.resultingCondition = [];
        /**
         * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
         */
        this.contributor = [];
        /**
         * Describes the entity that is suspected to have caused the adverse event.
         */
        this.suspectEntity = [];
        /**
         * AdverseEvent.subjectMedicalHistory.
         */
        this.subjectMedicalHistory = [];
        /**
         * AdverseEvent.referenceDocument.
         */
        this.referenceDocument = [];
        /**
         * AdverseEvent.study.
         */
        this.study = [];
        this.resourceType = 'AdverseEvent';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['actuality']) {
            this.actuality = source.actuality;
        }
        else {
            this.actuality = null;
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['event']) {
            this.event = new fhir.CodeableConcept(source.event);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['detected']) {
            this.detected = new fhir.FhirDateTime({ value: source.detected });
        }
        if (source['recordedDate']) {
            this.recordedDate = new fhir.FhirDateTime({ value: source.recordedDate });
        }
        if (source['resultingCondition']) {
            this.resultingCondition = source.resultingCondition.map((x) => new fhir.Reference(x));
        }
        if (source['location']) {
            this.location = new fhir.Reference(source.location);
        }
        if (source['seriousness']) {
            this.seriousness = new fhir.CodeableConcept(source.seriousness);
        }
        if (source['severity']) {
            this.severity = new fhir.CodeableConcept(source.severity);
        }
        if (source['outcome']) {
            this.outcome = new fhir.CodeableConcept(source.outcome);
        }
        if (source['recorder']) {
            this.recorder = new fhir.Reference(source.recorder);
        }
        if (source['contributor']) {
            this.contributor = source.contributor.map((x) => new fhir.Reference(x));
        }
        if (source['suspectEntity']) {
            this.suspectEntity = source.suspectEntity.map((x) => new fhir.AdverseEventSuspectEntity(x));
        }
        if (source['subjectMedicalHistory']) {
            this.subjectMedicalHistory = source.subjectMedicalHistory.map((x) => new fhir.Reference(x));
        }
        if (source['referenceDocument']) {
            this.referenceDocument = source.referenceDocument.map((x) => new fhir.Reference(x));
        }
        if (source['study']) {
            this.study = source.study.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Required-bound Value Set for actuality
     */
    static actualityRequiredValueSet() {
        return AdverseEventActualityValueSet;
    }
    /**
     * Extensible-bound Value Set for category
     */
    static categoryExtensibleValueSet() {
        return AdverseEventCategoryValueSet;
    }
    /**
     * Example-bound Value Set for event
     */
    static eventExampleValueSet() {
        return AdverseEventTypeValueSet;
    }
    /**
     * Example-bound Value Set for seriousness
     */
    static seriousnessExampleValueSet() {
        return AdverseEventSeriousnessValueSet;
    }
    /**
     * Required-bound Value Set for severity
     */
    static severityRequiredValueSet() {
        return AdverseEventSeverityValueSet;
    }
    /**
     * Required-bound Value Set for outcome
     */
    static outcomeRequiredValueSet() {
        return AdverseEventOutcomeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'AdverseEvent' fhir: AdverseEvent.resourceType:'AdverseEvent'", }));
        }
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (!this['actuality']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property actuality:AdverseEventActualityValueSetEnum fhir: AdverseEvent.actuality:code", }));
        }
        if (this["category"]) {
            this.category.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["event"]) {
            outcome.issue.push(...this.event.doModelValidation().issue);
        }
        if (!this['subject']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property subject:fhir.Reference fhir: AdverseEvent.subject:Reference", }));
        }
        if (this["subject"]) {
            outcome.issue.push(...this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            outcome.issue.push(...this.encounter.doModelValidation().issue);
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["detected"]) {
            outcome.issue.push(...this.detected.doModelValidation().issue);
        }
        if (this["recordedDate"]) {
            outcome.issue.push(...this.recordedDate.doModelValidation().issue);
        }
        if (this["resultingCondition"]) {
            this.resultingCondition.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["location"]) {
            outcome.issue.push(...this.location.doModelValidation().issue);
        }
        if (this["seriousness"]) {
            outcome.issue.push(...this.seriousness.doModelValidation().issue);
        }
        if (this["severity"]) {
            outcome.issue.push(...this.severity.doModelValidation().issue);
        }
        if (this["outcome"]) {
            outcome.issue.push(...this.outcome.doModelValidation().issue);
        }
        if (this["recorder"]) {
            outcome.issue.push(...this.recorder.doModelValidation().issue);
        }
        if (this["contributor"]) {
            this.contributor.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["suspectEntity"]) {
            this.suspectEntity.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["subjectMedicalHistory"]) {
            this.subjectMedicalHistory.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["referenceDocument"]) {
            this.referenceDocument.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["study"]) {
            this.study.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=AdverseEvent.js.map
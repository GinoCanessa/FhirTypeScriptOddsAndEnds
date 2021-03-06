// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CarePlan
import * as fhir from '../fhir.js';
import { CarePlanActivityKindValueSet, } from '../fhirValueSets/CarePlanActivityKindValueSet.js';
import { ProcedureCodeValueSet, } from '../fhirValueSets/ProcedureCodeValueSet.js';
import { ClinicalFindingsValueSet, } from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { CarePlanActivityStatusValueSet, } from '../fhirValueSets/CarePlanActivityStatusValueSet.js';
import { CarePlanActivityOutcomeValueSet, } from '../fhirValueSets/CarePlanActivityOutcomeValueSet.js';
import { RequestStatusValueSet, } from '../fhirValueSets/RequestStatusValueSet.js';
import { CarePlanIntentValueSet, } from '../fhirValueSets/CarePlanIntentValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export class CarePlanActivityDetail extends fhir.BackboneElement {
    /**
     * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CarePlanActivityDetail';
        /**
         * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
         */
        this.instantiatesCanonical = [];
        /**
         * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
         */
        this.instantiatesUri = [];
        /**
         * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
         */
        this.reasonCode = [];
        /**
         * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
         */
        this.reasonReference = [];
        /**
         * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
         */
        this.goal = [];
        this.__scheduledIsChoice = true;
        /**
         * A performer MAY also be a participant in the care plan.
         */
        this.performer = [];
        this.__productIsChoice = true;
        if (source['kind']) {
            this.kind = source.kind;
        }
        if (source['instantiatesCanonical']) {
            this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        if (source['instantiatesUri']) {
            this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({ value: x }));
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['reasonCode']) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['reasonReference']) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source['goal']) {
            this.goal = source.goal.map((x) => new fhir.Reference(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['statusReason']) {
            this.statusReason = new fhir.CodeableConcept(source.statusReason);
        }
        if (source['doNotPerform']) {
            this.doNotPerform = new fhir.FhirBoolean({ value: source.doNotPerform });
        }
        if (source['scheduled']) {
            this.scheduled = source.scheduled;
        }
        else if (source['scheduledTiming']) {
            this.scheduled = new fhir.Timing(source.scheduledTiming);
        }
        else if (source['scheduledPeriod']) {
            this.scheduled = new fhir.Period(source.scheduledPeriod);
        }
        else if (source['scheduledString']) {
            this.scheduled = new fhir.FhirString({ value: source.scheduledString });
        }
        if (source['location']) {
            this.location = new fhir.Reference(source.location);
        }
        if (source['performer']) {
            this.performer = source.performer.map((x) => new fhir.Reference(x));
        }
        if (source['product']) {
            this.product = source.product;
        }
        else if (source['productCodeableConcept']) {
            this.product = new fhir.CodeableConcept(source.productCodeableConcept);
        }
        else if (source['productReference']) {
            this.product = new fhir.Reference(source.productReference);
        }
        if (source['dailyAmount']) {
            this.dailyAmount = new fhir.Quantity(source.dailyAmount);
        }
        if (source['quantity']) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
    }
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet() {
        return CarePlanActivityKindValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return ProcedureCodeValueSet;
    }
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet() {
        return ClinicalFindingsValueSet;
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return CarePlanActivityStatusValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["instantiatesCanonical"]) {
            this.instantiatesCanonical.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["instantiatesUri"]) {
            this.instantiatesUri.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["goal"]) {
            this.goal.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:CarePlanActivityStatusValueSetEnum fhir: CarePlan.activity.detail.status:code", }));
        }
        if (this["statusReason"]) {
            outcome.issue.push(...this.statusReason.doModelValidation().issue);
        }
        if (this["doNotPerform"]) {
            outcome.issue.push(...this.doNotPerform.doModelValidation().issue);
        }
        if (this["location"]) {
            outcome.issue.push(...this.location.doModelValidation().issue);
        }
        if (this["performer"]) {
            this.performer.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["dailyAmount"]) {
            outcome.issue.push(...this.dailyAmount.doModelValidation().issue);
        }
        if (this["quantity"]) {
            outcome.issue.push(...this.quantity.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
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
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export class CarePlanActivity extends fhir.BackboneElement {
    /**
     * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CarePlanActivity';
        /**
         * Note that this should not duplicate the activity status (e.g. completed or in progress).
         */
        this.outcomeCodeableConcept = [];
        /**
         * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
         */
        this.outcomeReference = [];
        /**
         * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
         */
        this.progress = [];
        if (source['outcomeCodeableConcept']) {
            this.outcomeCodeableConcept = source.outcomeCodeableConcept.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['outcomeReference']) {
            this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x));
        }
        if (source['progress']) {
            this.progress = source.progress.map((x) => new fhir.Annotation(x));
        }
        if (source['reference']) {
            this.reference = new fhir.Reference(source.reference);
        }
        if (source['detail']) {
            this.detail = new fhir.CarePlanActivityDetail(source.detail);
        }
    }
    /**
     * Example-bound Value Set for outcomeCodeableConcept
     */
    static outcomeCodeableConceptExampleValueSet() {
        return CarePlanActivityOutcomeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["outcomeCodeableConcept"]) {
            this.outcomeCodeableConcept.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["outcomeReference"]) {
            this.outcomeReference.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["progress"]) {
            this.progress.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["reference"]) {
            outcome.issue.push(...this.reference.doModelValidation().issue);
        }
        if (this["detail"]) {
            outcome.issue.push(...this.detail.doModelValidation().issue);
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
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends fhir.DomainResource {
    /**
     * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CarePlan';
        /**
         * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
         */
        this.identifier = [];
        /**
         * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
         */
        this.instantiatesCanonical = [];
        /**
         * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
         */
        this.instantiatesUri = [];
        /**
         * A care plan that is fulfilled in whole or in part by this care plan.
         */
        this.basedOn = [];
        /**
         * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
         */
        this.replaces = [];
        /**
         * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
         */
        this.partOf = [];
        /**
         * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
         */
        this.category = [];
        /**
         * Collaborative care plans may have multiple contributors.
         */
        this.contributor = [];
        /**
         * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
         */
        this.careTeam = [];
        /**
         * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
         */
        this.addresses = [];
        /**
         * Use "concern" to identify specific conditions addressed by the care plan.
         */
        this.supportingInfo = [];
        /**
         * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
         */
        this.goal = [];
        /**
         * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
         */
        this.activity = [];
        /**
         * General notes about the care plan not covered elsewhere.
         */
        this.note = [];
        this.resourceType = 'CarePlan';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['instantiatesCanonical']) {
            this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        if (source['instantiatesUri']) {
            this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({ value: x }));
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source['replaces']) {
            this.replaces = source.replaces.map((x) => new fhir.Reference(x));
        }
        if (source['partOf']) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['intent']) {
            this.intent = source.intent;
        }
        else {
            this.intent = null;
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
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
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['created']) {
            this.created = new fhir.FhirDateTime({ value: source.created });
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
        if (source['contributor']) {
            this.contributor = source.contributor.map((x) => new fhir.Reference(x));
        }
        if (source['careTeam']) {
            this.careTeam = source.careTeam.map((x) => new fhir.Reference(x));
        }
        if (source['addresses']) {
            this.addresses = source.addresses.map((x) => new fhir.Reference(x));
        }
        if (source['supportingInfo']) {
            this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x));
        }
        if (source['goal']) {
            this.goal = source.goal.map((x) => new fhir.Reference(x));
        }
        if (source['activity']) {
            this.activity = source.activity.map((x) => new fhir.CarePlanActivity(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return RequestStatusValueSet;
    }
    /**
     * Required-bound Value Set for intent
     */
    static intentRequiredValueSet() {
        return CarePlanIntentValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'CarePlan' fhir: CarePlan.resourceType:'CarePlan'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["instantiatesCanonical"]) {
            this.instantiatesCanonical.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["instantiatesUri"]) {
            this.instantiatesUri.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["replaces"]) {
            this.replaces.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["partOf"]) {
            this.partOf.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:RequestStatusValueSetEnum fhir: CarePlan.status:code", }));
        }
        if (!this['intent']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property intent:CarePlanIntentValueSetEnum fhir: CarePlan.intent:code", }));
        }
        if (this["category"]) {
            this.category.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (!this['subject']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property subject:fhir.Reference fhir: CarePlan.subject:Reference", }));
        }
        if (this["subject"]) {
            outcome.issue.push(...this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            outcome.issue.push(...this.encounter.doModelValidation().issue);
        }
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["created"]) {
            outcome.issue.push(...this.created.doModelValidation().issue);
        }
        if (this["author"]) {
            outcome.issue.push(...this.author.doModelValidation().issue);
        }
        if (this["contributor"]) {
            this.contributor.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["careTeam"]) {
            this.careTeam.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["addresses"]) {
            this.addresses.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["supportingInfo"]) {
            this.supportingInfo.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["goal"]) {
            this.goal.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["activity"]) {
            this.activity.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=CarePlan.js.map
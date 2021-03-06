// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Task
import * as fhir from '../fhir.js';
import { TaskStatusValueSet, } from '../fhirValueSets/TaskStatusValueSet.js';
import { TaskIntentValueSet, } from '../fhirValueSets/TaskIntentValueSet.js';
import { RequestPriorityValueSet, } from '../fhirValueSets/RequestPriorityValueSet.js';
import { TaskCodeValueSet, } from '../fhirValueSets/TaskCodeValueSet.js';
import { PerformerRoleValueSet, } from '../fhirValueSets/PerformerRoleValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export class TaskRestriction extends fhir.BackboneElement {
    /**
     * Default constructor for TaskRestriction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TaskRestriction';
        /**
         * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
         */
        this.recipient = [];
        if (source['repetitions']) {
            this.repetitions = new fhir.FhirPositiveInt({ value: source.repetitions });
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['recipient']) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["repetitions"]) {
            outcome.issue.push(...this.repetitions.doModelValidation().issue);
        }
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["recipient"]) {
            this.recipient.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * Additional information that may be needed in the execution of the task.
 */
export class TaskInput extends fhir.BackboneElement {
    /**
     * Default constructor for TaskInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TaskInput';
        this.__valueIsChoice = true;
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        else {
            this.type = null;
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueBase64Binary']) {
            this.value = new fhir.FhirBase64Binary({ value: source.valueBase64Binary });
        }
        else if (source['valueBoolean']) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueCanonical']) {
            this.value = new fhir.FhirCanonical({ value: source.valueCanonical });
        }
        else if (source['valueCode']) {
            this.value = new fhir.FhirCode({ value: source.valueCode });
        }
        else if (source['valueDate']) {
            this.value = new fhir.FhirDate({ value: source.valueDate });
        }
        else if (source['valueDateTime']) {
            this.value = new fhir.FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valueDecimal']) {
            this.value = new fhir.FhirDecimal({ value: source.valueDecimal });
        }
        else if (source['valueId']) {
            this.value = new fhir.FhirId({ value: source.valueId });
        }
        else if (source['valueInstant']) {
            this.value = new fhir.FhirInstant({ value: source.valueInstant });
        }
        else if (source['valueInteger']) {
            this.value = new fhir.FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueMarkdown']) {
            this.value = new fhir.FhirMarkdown({ value: source.valueMarkdown });
        }
        else if (source['valueOid']) {
            this.value = new fhir.FhirOid({ value: source.valueOid });
        }
        else if (source['valuePositiveInt']) {
            this.value = new fhir.FhirPositiveInt({ value: source.valuePositiveInt });
        }
        else if (source['valueString']) {
            this.value = new fhir.FhirString({ value: source.valueString });
        }
        else if (source['valueTime']) {
            this.value = new fhir.FhirTime({ value: source.valueTime });
        }
        else if (source['valueUnsignedInt']) {
            this.value = new fhir.FhirUnsignedInt({ value: source.valueUnsignedInt });
        }
        else if (source['valueUri']) {
            this.value = new fhir.FhirUri({ value: source.valueUri });
        }
        else if (source['valueUrl']) {
            this.value = new fhir.FhirUrl({ value: source.valueUrl });
        }
        else if (source['valueUuid']) {
            this.value = new fhir.FhirUuid({ value: source.valueUuid });
        }
        else if (source['valueAddress']) {
            this.value = new fhir.Address(source.valueAddress);
        }
        else if (source['valueAge']) {
            this.value = new fhir.Age(source.valueAge);
        }
        else if (source['valueAnnotation']) {
            this.value = new fhir.Annotation(source.valueAnnotation);
        }
        else if (source['valueAttachment']) {
            this.value = new fhir.Attachment(source.valueAttachment);
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueCoding']) {
            this.value = new fhir.Coding(source.valueCoding);
        }
        else if (source['valueContactPoint']) {
            this.value = new fhir.ContactPoint(source.valueContactPoint);
        }
        else if (source['valueCount']) {
            this.value = new fhir.Count(source.valueCount);
        }
        else if (source['valueDistance']) {
            this.value = new fhir.Distance(source.valueDistance);
        }
        else if (source['valueDuration']) {
            this.value = new fhir.Duration(source.valueDuration);
        }
        else if (source['valueHumanName']) {
            this.value = new fhir.HumanName(source.valueHumanName);
        }
        else if (source['valueIdentifier']) {
            this.value = new fhir.Identifier(source.valueIdentifier);
        }
        else if (source['valueMoney']) {
            this.value = new fhir.Money(source.valueMoney);
        }
        else if (source['valuePeriod']) {
            this.value = new fhir.Period(source.valuePeriod);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange);
        }
        else if (source['valueRatio']) {
            this.value = new fhir.Ratio(source.valueRatio);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference);
        }
        else if (source['valueSampledData']) {
            this.value = new fhir.SampledData(source.valueSampledData);
        }
        else if (source['valueSignature']) {
            this.value = new fhir.Signature(source.valueSignature);
        }
        else if (source['valueTiming']) {
            this.value = new fhir.Timing(source.valueTiming);
        }
        else if (source['valueContactDetail']) {
            this.value = new fhir.ContactDetail(source.valueContactDetail);
        }
        else if (source['valueContributor']) {
            this.value = new fhir.Contributor(source.valueContributor);
        }
        else if (source['valueDataRequirement']) {
            this.value = new fhir.DataRequirement(source.valueDataRequirement);
        }
        else if (source['valueExpression']) {
            this.value = new fhir.Expression(source.valueExpression);
        }
        else if (source['valueParameterDefinition']) {
            this.value = new fhir.ParameterDefinition(source.valueParameterDefinition);
        }
        else if (source['valueRelatedArtifact']) {
            this.value = new fhir.RelatedArtifact(source.valueRelatedArtifact);
        }
        else if (source['valueTriggerDefinition']) {
            this.value = new fhir.TriggerDefinition(source.valueTriggerDefinition);
        }
        else if (source['valueUsageContext']) {
            this.value = new fhir.UsageContext(source.valueUsageContext);
        }
        else if (source['valueDosage']) {
            this.value = new fhir.Dosage(source.valueDosage);
        }
        else if (source['valueMeta']) {
            this.value = new fhir.Meta(source.valueMeta);
        }
        else {
            this.value = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:fhir.CodeableConcept fhir: Task.input.type:CodeableConcept", }));
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (!this['value']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property value: fhir: Task.input.value[x]:", }));
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
 * Outputs produced by the Task.
 */
export class TaskOutput extends fhir.BackboneElement {
    /**
     * Default constructor for TaskOutput - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'TaskOutput';
        this.__valueIsChoice = true;
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        else {
            this.type = null;
        }
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueBase64Binary']) {
            this.value = new fhir.FhirBase64Binary({ value: source.valueBase64Binary });
        }
        else if (source['valueBoolean']) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueCanonical']) {
            this.value = new fhir.FhirCanonical({ value: source.valueCanonical });
        }
        else if (source['valueCode']) {
            this.value = new fhir.FhirCode({ value: source.valueCode });
        }
        else if (source['valueDate']) {
            this.value = new fhir.FhirDate({ value: source.valueDate });
        }
        else if (source['valueDateTime']) {
            this.value = new fhir.FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valueDecimal']) {
            this.value = new fhir.FhirDecimal({ value: source.valueDecimal });
        }
        else if (source['valueId']) {
            this.value = new fhir.FhirId({ value: source.valueId });
        }
        else if (source['valueInstant']) {
            this.value = new fhir.FhirInstant({ value: source.valueInstant });
        }
        else if (source['valueInteger']) {
            this.value = new fhir.FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueMarkdown']) {
            this.value = new fhir.FhirMarkdown({ value: source.valueMarkdown });
        }
        else if (source['valueOid']) {
            this.value = new fhir.FhirOid({ value: source.valueOid });
        }
        else if (source['valuePositiveInt']) {
            this.value = new fhir.FhirPositiveInt({ value: source.valuePositiveInt });
        }
        else if (source['valueString']) {
            this.value = new fhir.FhirString({ value: source.valueString });
        }
        else if (source['valueTime']) {
            this.value = new fhir.FhirTime({ value: source.valueTime });
        }
        else if (source['valueUnsignedInt']) {
            this.value = new fhir.FhirUnsignedInt({ value: source.valueUnsignedInt });
        }
        else if (source['valueUri']) {
            this.value = new fhir.FhirUri({ value: source.valueUri });
        }
        else if (source['valueUrl']) {
            this.value = new fhir.FhirUrl({ value: source.valueUrl });
        }
        else if (source['valueUuid']) {
            this.value = new fhir.FhirUuid({ value: source.valueUuid });
        }
        else if (source['valueAddress']) {
            this.value = new fhir.Address(source.valueAddress);
        }
        else if (source['valueAge']) {
            this.value = new fhir.Age(source.valueAge);
        }
        else if (source['valueAnnotation']) {
            this.value = new fhir.Annotation(source.valueAnnotation);
        }
        else if (source['valueAttachment']) {
            this.value = new fhir.Attachment(source.valueAttachment);
        }
        else if (source['valueCodeableConcept']) {
            this.value = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        else if (source['valueCoding']) {
            this.value = new fhir.Coding(source.valueCoding);
        }
        else if (source['valueContactPoint']) {
            this.value = new fhir.ContactPoint(source.valueContactPoint);
        }
        else if (source['valueCount']) {
            this.value = new fhir.Count(source.valueCount);
        }
        else if (source['valueDistance']) {
            this.value = new fhir.Distance(source.valueDistance);
        }
        else if (source['valueDuration']) {
            this.value = new fhir.Duration(source.valueDuration);
        }
        else if (source['valueHumanName']) {
            this.value = new fhir.HumanName(source.valueHumanName);
        }
        else if (source['valueIdentifier']) {
            this.value = new fhir.Identifier(source.valueIdentifier);
        }
        else if (source['valueMoney']) {
            this.value = new fhir.Money(source.valueMoney);
        }
        else if (source['valuePeriod']) {
            this.value = new fhir.Period(source.valuePeriod);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity);
        }
        else if (source['valueRange']) {
            this.value = new fhir.Range(source.valueRange);
        }
        else if (source['valueRatio']) {
            this.value = new fhir.Ratio(source.valueRatio);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference);
        }
        else if (source['valueSampledData']) {
            this.value = new fhir.SampledData(source.valueSampledData);
        }
        else if (source['valueSignature']) {
            this.value = new fhir.Signature(source.valueSignature);
        }
        else if (source['valueTiming']) {
            this.value = new fhir.Timing(source.valueTiming);
        }
        else if (source['valueContactDetail']) {
            this.value = new fhir.ContactDetail(source.valueContactDetail);
        }
        else if (source['valueContributor']) {
            this.value = new fhir.Contributor(source.valueContributor);
        }
        else if (source['valueDataRequirement']) {
            this.value = new fhir.DataRequirement(source.valueDataRequirement);
        }
        else if (source['valueExpression']) {
            this.value = new fhir.Expression(source.valueExpression);
        }
        else if (source['valueParameterDefinition']) {
            this.value = new fhir.ParameterDefinition(source.valueParameterDefinition);
        }
        else if (source['valueRelatedArtifact']) {
            this.value = new fhir.RelatedArtifact(source.valueRelatedArtifact);
        }
        else if (source['valueTriggerDefinition']) {
            this.value = new fhir.TriggerDefinition(source.valueTriggerDefinition);
        }
        else if (source['valueUsageContext']) {
            this.value = new fhir.UsageContext(source.valueUsageContext);
        }
        else if (source['valueDosage']) {
            this.value = new fhir.Dosage(source.valueDosage);
        }
        else if (source['valueMeta']) {
            this.value = new fhir.Meta(source.valueMeta);
        }
        else {
            this.value = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:fhir.CodeableConcept fhir: Task.output.type:CodeableConcept", }));
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (!this['value']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property value: fhir: Task.output.value[x]:", }));
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
 * A task to be performed.
 */
export class Task extends fhir.DomainResource {
    /**
     * Default constructor for Task - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Task';
        /**
         * The business identifier for this task.
         */
        this.identifier = [];
        /**
         * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
         */
        this.basedOn = [];
        /**
         * This should usually be 0..1.
         */
        this.partOf = [];
        /**
         * The kind of participant that should perform the task.
         */
        this.performerType = [];
        /**
         * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
         */
        this.insurance = [];
        /**
         * Free-text information captured about the task as it progresses.
         */
        this.note = [];
        /**
         * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
         */
        this.relevantHistory = [];
        /**
         * Additional information that may be needed in the execution of the task.
         */
        this.input = [];
        /**
         * Outputs produced by the Task.
         */
        this.output = [];
        this.resourceType = 'Task';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['instantiatesCanonical']) {
            this.instantiatesCanonical = new fhir.FhirCanonical({ value: source.instantiatesCanonical });
        }
        if (source['instantiatesUri']) {
            this.instantiatesUri = new fhir.FhirUri({ value: source.instantiatesUri });
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source['groupIdentifier']) {
            this.groupIdentifier = new fhir.Identifier(source.groupIdentifier);
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
        if (source['statusReason']) {
            this.statusReason = new fhir.CodeableConcept(source.statusReason);
        }
        if (source['businessStatus']) {
            this.businessStatus = new fhir.CodeableConcept(source.businessStatus);
        }
        if (source['intent']) {
            this.intent = source.intent;
        }
        else {
            this.intent = null;
        }
        if (source['priority']) {
            this.priority = source.priority;
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['focus']) {
            this.focus = new fhir.Reference(source.focus);
        }
        if (source['for']) {
            this.for = new fhir.Reference(source.for);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['executionPeriod']) {
            this.executionPeriod = new fhir.Period(source.executionPeriod);
        }
        if (source['authoredOn']) {
            this.authoredOn = new fhir.FhirDateTime({ value: source.authoredOn });
        }
        if (source['lastModified']) {
            this.lastModified = new fhir.FhirDateTime({ value: source.lastModified });
        }
        if (source['requester']) {
            this.requester = new fhir.Reference(source.requester);
        }
        if (source['performerType']) {
            this.performerType = source.performerType.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['owner']) {
            this.owner = new fhir.Reference(source.owner);
        }
        if (source['location']) {
            this.location = new fhir.Reference(source.location);
        }
        if (source['reasonCode']) {
            this.reasonCode = new fhir.CodeableConcept(source.reasonCode);
        }
        if (source['reasonReference']) {
            this.reasonReference = new fhir.Reference(source.reasonReference);
        }
        if (source['insurance']) {
            this.insurance = source.insurance.map((x) => new fhir.Reference(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['relevantHistory']) {
            this.relevantHistory = source.relevantHistory.map((x) => new fhir.Reference(x));
        }
        if (source['restriction']) {
            this.restriction = new fhir.TaskRestriction(source.restriction);
        }
        if (source['input']) {
            this.input = source.input.map((x) => new fhir.TaskInput(x));
        }
        if (source['output']) {
            this.output = source.output.map((x) => new fhir.TaskOutput(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return TaskStatusValueSet;
    }
    /**
     * Required-bound Value Set for intent
     */
    static intentRequiredValueSet() {
        return TaskIntentValueSet;
    }
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet() {
        return RequestPriorityValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return TaskCodeValueSet;
    }
    /**
     * Preferred-bound Value Set for performerType
     */
    static performerTypePreferredValueSet() {
        return PerformerRoleValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'Task' fhir: Task.resourceType:'Task'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["instantiatesCanonical"]) {
            outcome.issue.push(...this.instantiatesCanonical.doModelValidation().issue);
        }
        if (this["instantiatesUri"]) {
            outcome.issue.push(...this.instantiatesUri.doModelValidation().issue);
        }
        if (this["basedOn"]) {
            this.basedOn.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["groupIdentifier"]) {
            outcome.issue.push(...this.groupIdentifier.doModelValidation().issue);
        }
        if (this["partOf"]) {
            this.partOf.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:TaskStatusValueSetEnum fhir: Task.status:code", }));
        }
        if (this["statusReason"]) {
            outcome.issue.push(...this.statusReason.doModelValidation().issue);
        }
        if (this["businessStatus"]) {
            outcome.issue.push(...this.businessStatus.doModelValidation().issue);
        }
        if (!this['intent']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property intent:TaskIntentValueSetEnum fhir: Task.intent:code", }));
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["focus"]) {
            outcome.issue.push(...this.focus.doModelValidation().issue);
        }
        if (this["for"]) {
            outcome.issue.push(...this.for.doModelValidation().issue);
        }
        if (this["encounter"]) {
            outcome.issue.push(...this.encounter.doModelValidation().issue);
        }
        if (this["executionPeriod"]) {
            outcome.issue.push(...this.executionPeriod.doModelValidation().issue);
        }
        if (this["authoredOn"]) {
            outcome.issue.push(...this.authoredOn.doModelValidation().issue);
        }
        if (this["lastModified"]) {
            outcome.issue.push(...this.lastModified.doModelValidation().issue);
        }
        if (this["requester"]) {
            outcome.issue.push(...this.requester.doModelValidation().issue);
        }
        if (this["performerType"]) {
            this.performerType.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["owner"]) {
            outcome.issue.push(...this.owner.doModelValidation().issue);
        }
        if (this["location"]) {
            outcome.issue.push(...this.location.doModelValidation().issue);
        }
        if (this["reasonCode"]) {
            outcome.issue.push(...this.reasonCode.doModelValidation().issue);
        }
        if (this["reasonReference"]) {
            outcome.issue.push(...this.reasonReference.doModelValidation().issue);
        }
        if (this["insurance"]) {
            this.insurance.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["relevantHistory"]) {
            this.relevantHistory.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["restriction"]) {
            outcome.issue.push(...this.restriction.doModelValidation().issue);
        }
        if (this["input"]) {
            this.input.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["output"]) {
            this.output.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=Task.js.map
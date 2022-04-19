// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export class TaskRestriction extends fhir.BackboneElement {
    /**
     * Default constructor for TaskRestriction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["recipient"]) {
            this.recipient = source.recipient.map((x) => new fhir.Reference(x));
        }
        if (source["repetitions"]) {
            this.repetitions = source.repetitions;
        }
        if (source["_repetitions"]) {
            this._repetitions = new fhir.FhirElement(source._repetitions);
        }
    }
    /**
     * Check if the current TaskRestriction contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a TaskRestriction from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new TaskRestriction(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TaskRestriction is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Additional information that may be needed in the execution of the task.
 */
export class TaskInput extends fhir.BackboneElement {
    /**
     * Default constructor for TaskInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["valueBase64Binary"]) {
            this.valueBase64Binary = source.valueBase64Binary;
        }
        if (source["_valueBase64Binary"]) {
            this._valueBase64Binary = new fhir.FhirElement(source._valueBase64Binary);
        }
        if (source["valueBoolean"]) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"]) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source["valueCanonical"]) {
            this.valueCanonical = source.valueCanonical;
        }
        if (source["_valueCanonical"]) {
            this._valueCanonical = new fhir.FhirElement(source._valueCanonical);
        }
        if (source["valueCode"]) {
            this.valueCode = source.valueCode;
        }
        if (source["_valueCode"]) {
            this._valueCode = new fhir.FhirElement(source._valueCode);
        }
        if (source["valueDate"]) {
            this.valueDate = source.valueDate;
        }
        if (source["_valueDate"]) {
            this._valueDate = new fhir.FhirElement(source._valueDate);
        }
        if (source["valueDateTime"]) {
            this.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"]) {
            this._valueDateTime = new fhir.FhirElement(source._valueDateTime);
        }
        if (source["valueDecimal"]) {
            this.valueDecimal = source.valueDecimal;
        }
        if (source["_valueDecimal"]) {
            this._valueDecimal = new fhir.FhirElement(source._valueDecimal);
        }
        if (source["valueId"]) {
            this.valueId = source.valueId;
        }
        if (source["_valueId"]) {
            this._valueId = new fhir.FhirElement(source._valueId);
        }
        if (source["valueInstant"]) {
            this.valueInstant = source.valueInstant;
        }
        if (source["_valueInstant"]) {
            this._valueInstant = new fhir.FhirElement(source._valueInstant);
        }
        if (source["valueInteger"]) {
            this.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"]) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source["valueMarkdown"]) {
            this.valueMarkdown = source.valueMarkdown;
        }
        if (source["_valueMarkdown"]) {
            this._valueMarkdown = new fhir.FhirElement(source._valueMarkdown);
        }
        if (source["valueOid"]) {
            this.valueOid = source.valueOid;
        }
        if (source["_valueOid"]) {
            this._valueOid = new fhir.FhirElement(source._valueOid);
        }
        if (source["valuePositiveInt"]) {
            this.valuePositiveInt = source.valuePositiveInt;
        }
        if (source["_valuePositiveInt"]) {
            this._valuePositiveInt = new fhir.FhirElement(source._valuePositiveInt);
        }
        if (source["valueString"]) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"]) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source["valueTime"]) {
            this.valueTime = source.valueTime;
        }
        if (source["_valueTime"]) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source["valueUnsignedInt"]) {
            this.valueUnsignedInt = source.valueUnsignedInt;
        }
        if (source["_valueUnsignedInt"]) {
            this._valueUnsignedInt = new fhir.FhirElement(source._valueUnsignedInt);
        }
        if (source["valueUri"]) {
            this.valueUri = source.valueUri;
        }
        if (source["_valueUri"]) {
            this._valueUri = new fhir.FhirElement(source._valueUri);
        }
        if (source["valueUrl"]) {
            this.valueUrl = source.valueUrl;
        }
        if (source["_valueUrl"]) {
            this._valueUrl = new fhir.FhirElement(source._valueUrl);
        }
        if (source["valueUuid"]) {
            this.valueUuid = source.valueUuid;
        }
        if (source["_valueUuid"]) {
            this._valueUuid = new fhir.FhirElement(source._valueUuid);
        }
        if (source["valueAddress"]) {
            this.valueAddress = new fhir.Address(source.valueAddress);
        }
        if (source["valueAge"]) {
            this.valueAge = new fhir.Age(source.valueAge);
        }
        if (source["valueAnnotation"]) {
            this.valueAnnotation = new fhir.Annotation(source.valueAnnotation);
        }
        if (source["valueAttachment"]) {
            this.valueAttachment = new fhir.Attachment(source.valueAttachment);
        }
        if (source["valueCodeableConcept"]) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source["valueCoding"]) {
            this.valueCoding = new fhir.Coding(source.valueCoding);
        }
        if (source["valueContactPoint"]) {
            this.valueContactPoint = new fhir.ContactPoint(source.valueContactPoint);
        }
        if (source["valueCount"]) {
            this.valueCount = new fhir.Count(source.valueCount);
        }
        if (source["valueDistance"]) {
            this.valueDistance = new fhir.Distance(source.valueDistance);
        }
        if (source["valueDuration"]) {
            this.valueDuration = new fhir.Duration(source.valueDuration);
        }
        if (source["valueHumanName"]) {
            this.valueHumanName = new fhir.HumanName(source.valueHumanName);
        }
        if (source["valueIdentifier"]) {
            this.valueIdentifier = new fhir.Identifier(source.valueIdentifier);
        }
        if (source["valueMoney"]) {
            this.valueMoney = new fhir.Money(source.valueMoney);
        }
        if (source["valuePeriod"]) {
            this.valuePeriod = new fhir.Period(source.valuePeriod);
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueRange"]) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source["valueRatio"]) {
            this.valueRatio = new fhir.Ratio(source.valueRatio);
        }
        if (source["valueReference"]) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
        if (source["valueSampledData"]) {
            this.valueSampledData = new fhir.SampledData(source.valueSampledData);
        }
        if (source["valueSignature"]) {
            this.valueSignature = new fhir.Signature(source.valueSignature);
        }
        if (source["valueTiming"]) {
            this.valueTiming = new fhir.Timing(source.valueTiming);
        }
        if (source["valueContactDetail"]) {
            this.valueContactDetail = new fhir.ContactDetail(source.valueContactDetail);
        }
        if (source["valueContributor"]) {
            this.valueContributor = new fhir.Contributor(source.valueContributor);
        }
        if (source["valueDataRequirement"]) {
            this.valueDataRequirement = new fhir.DataRequirement(source.valueDataRequirement);
        }
        if (source["valueExpression"]) {
            this.valueExpression = new fhir.Expression(source.valueExpression);
        }
        if (source["valueParameterDefinition"]) {
            this.valueParameterDefinition = new fhir.ParameterDefinition(source.valueParameterDefinition);
        }
        if (source["valueRelatedArtifact"]) {
            this.valueRelatedArtifact = new fhir.RelatedArtifact(source.valueRelatedArtifact);
        }
        if (source["valueTriggerDefinition"]) {
            this.valueTriggerDefinition = new fhir.TriggerDefinition(source.valueTriggerDefinition);
        }
        if (source["valueUsageContext"]) {
            this.valueUsageContext = new fhir.UsageContext(source.valueUsageContext);
        }
        if (source["valueDosage"]) {
            this.valueDosage = new fhir.Dosage(source.valueDosage);
        }
        if (source["valueMeta"]) {
            this.valueMeta = new fhir.Meta(source.valueMeta);
        }
    }
    /**
     * Check if the current TaskInput contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a TaskInput from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new TaskInput(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TaskInput is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Outputs produced by the Task.
 */
export class TaskOutput extends fhir.BackboneElement {
    /**
     * Default constructor for TaskOutput - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["valueBase64Binary"]) {
            this.valueBase64Binary = source.valueBase64Binary;
        }
        if (source["_valueBase64Binary"]) {
            this._valueBase64Binary = new fhir.FhirElement(source._valueBase64Binary);
        }
        if (source["valueBoolean"]) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"]) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source["valueCanonical"]) {
            this.valueCanonical = source.valueCanonical;
        }
        if (source["_valueCanonical"]) {
            this._valueCanonical = new fhir.FhirElement(source._valueCanonical);
        }
        if (source["valueCode"]) {
            this.valueCode = source.valueCode;
        }
        if (source["_valueCode"]) {
            this._valueCode = new fhir.FhirElement(source._valueCode);
        }
        if (source["valueDate"]) {
            this.valueDate = source.valueDate;
        }
        if (source["_valueDate"]) {
            this._valueDate = new fhir.FhirElement(source._valueDate);
        }
        if (source["valueDateTime"]) {
            this.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"]) {
            this._valueDateTime = new fhir.FhirElement(source._valueDateTime);
        }
        if (source["valueDecimal"]) {
            this.valueDecimal = source.valueDecimal;
        }
        if (source["_valueDecimal"]) {
            this._valueDecimal = new fhir.FhirElement(source._valueDecimal);
        }
        if (source["valueId"]) {
            this.valueId = source.valueId;
        }
        if (source["_valueId"]) {
            this._valueId = new fhir.FhirElement(source._valueId);
        }
        if (source["valueInstant"]) {
            this.valueInstant = source.valueInstant;
        }
        if (source["_valueInstant"]) {
            this._valueInstant = new fhir.FhirElement(source._valueInstant);
        }
        if (source["valueInteger"]) {
            this.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"]) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source["valueMarkdown"]) {
            this.valueMarkdown = source.valueMarkdown;
        }
        if (source["_valueMarkdown"]) {
            this._valueMarkdown = new fhir.FhirElement(source._valueMarkdown);
        }
        if (source["valueOid"]) {
            this.valueOid = source.valueOid;
        }
        if (source["_valueOid"]) {
            this._valueOid = new fhir.FhirElement(source._valueOid);
        }
        if (source["valuePositiveInt"]) {
            this.valuePositiveInt = source.valuePositiveInt;
        }
        if (source["_valuePositiveInt"]) {
            this._valuePositiveInt = new fhir.FhirElement(source._valuePositiveInt);
        }
        if (source["valueString"]) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"]) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source["valueTime"]) {
            this.valueTime = source.valueTime;
        }
        if (source["_valueTime"]) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source["valueUnsignedInt"]) {
            this.valueUnsignedInt = source.valueUnsignedInt;
        }
        if (source["_valueUnsignedInt"]) {
            this._valueUnsignedInt = new fhir.FhirElement(source._valueUnsignedInt);
        }
        if (source["valueUri"]) {
            this.valueUri = source.valueUri;
        }
        if (source["_valueUri"]) {
            this._valueUri = new fhir.FhirElement(source._valueUri);
        }
        if (source["valueUrl"]) {
            this.valueUrl = source.valueUrl;
        }
        if (source["_valueUrl"]) {
            this._valueUrl = new fhir.FhirElement(source._valueUrl);
        }
        if (source["valueUuid"]) {
            this.valueUuid = source.valueUuid;
        }
        if (source["_valueUuid"]) {
            this._valueUuid = new fhir.FhirElement(source._valueUuid);
        }
        if (source["valueAddress"]) {
            this.valueAddress = new fhir.Address(source.valueAddress);
        }
        if (source["valueAge"]) {
            this.valueAge = new fhir.Age(source.valueAge);
        }
        if (source["valueAnnotation"]) {
            this.valueAnnotation = new fhir.Annotation(source.valueAnnotation);
        }
        if (source["valueAttachment"]) {
            this.valueAttachment = new fhir.Attachment(source.valueAttachment);
        }
        if (source["valueCodeableConcept"]) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source["valueCoding"]) {
            this.valueCoding = new fhir.Coding(source.valueCoding);
        }
        if (source["valueContactPoint"]) {
            this.valueContactPoint = new fhir.ContactPoint(source.valueContactPoint);
        }
        if (source["valueCount"]) {
            this.valueCount = new fhir.Count(source.valueCount);
        }
        if (source["valueDistance"]) {
            this.valueDistance = new fhir.Distance(source.valueDistance);
        }
        if (source["valueDuration"]) {
            this.valueDuration = new fhir.Duration(source.valueDuration);
        }
        if (source["valueHumanName"]) {
            this.valueHumanName = new fhir.HumanName(source.valueHumanName);
        }
        if (source["valueIdentifier"]) {
            this.valueIdentifier = new fhir.Identifier(source.valueIdentifier);
        }
        if (source["valueMoney"]) {
            this.valueMoney = new fhir.Money(source.valueMoney);
        }
        if (source["valuePeriod"]) {
            this.valuePeriod = new fhir.Period(source.valuePeriod);
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueRange"]) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source["valueRatio"]) {
            this.valueRatio = new fhir.Ratio(source.valueRatio);
        }
        if (source["valueReference"]) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
        if (source["valueSampledData"]) {
            this.valueSampledData = new fhir.SampledData(source.valueSampledData);
        }
        if (source["valueSignature"]) {
            this.valueSignature = new fhir.Signature(source.valueSignature);
        }
        if (source["valueTiming"]) {
            this.valueTiming = new fhir.Timing(source.valueTiming);
        }
        if (source["valueContactDetail"]) {
            this.valueContactDetail = new fhir.ContactDetail(source.valueContactDetail);
        }
        if (source["valueContributor"]) {
            this.valueContributor = new fhir.Contributor(source.valueContributor);
        }
        if (source["valueDataRequirement"]) {
            this.valueDataRequirement = new fhir.DataRequirement(source.valueDataRequirement);
        }
        if (source["valueExpression"]) {
            this.valueExpression = new fhir.Expression(source.valueExpression);
        }
        if (source["valueParameterDefinition"]) {
            this.valueParameterDefinition = new fhir.ParameterDefinition(source.valueParameterDefinition);
        }
        if (source["valueRelatedArtifact"]) {
            this.valueRelatedArtifact = new fhir.RelatedArtifact(source.valueRelatedArtifact);
        }
        if (source["valueTriggerDefinition"]) {
            this.valueTriggerDefinition = new fhir.TriggerDefinition(source.valueTriggerDefinition);
        }
        if (source["valueUsageContext"]) {
            this.valueUsageContext = new fhir.UsageContext(source.valueUsageContext);
        }
        if (source["valueDosage"]) {
            this.valueDosage = new fhir.Dosage(source.valueDosage);
        }
        if (source["valueMeta"]) {
            this.valueMeta = new fhir.Meta(source.valueMeta);
        }
    }
    /**
     * Check if the current TaskOutput contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a TaskOutput from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new TaskOutput(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TaskOutput is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A task to be performed.
 */
export class Task extends fhir.DomainResource {
    /**
     * Default constructor for Task - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Task';
        if (source["authoredOn"]) {
            this.authoredOn = source.authoredOn;
        }
        if (source["_authoredOn"]) {
            this._authoredOn = new fhir.FhirElement(source._authoredOn);
        }
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["businessStatus"]) {
            this.businessStatus = new fhir.CodeableConcept(source.businessStatus);
        }
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["executionPeriod"]) {
            this.executionPeriod = new fhir.Period(source.executionPeriod);
        }
        if (source["focus"]) {
            this.focus = new fhir.Reference(source.focus);
        }
        if (source["for"]) {
            this.for = new fhir.Reference(source.for);
        }
        if (source["groupIdentifier"]) {
            this.groupIdentifier = new fhir.Identifier(source.groupIdentifier);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["input"]) {
            this.input = source.input.map((x) => new fhir.TaskInput(x));
        }
        if (source["instantiatesCanonical"]) {
            this.instantiatesCanonical = source.instantiatesCanonical;
        }
        if (source["_instantiatesCanonical"]) {
            this._instantiatesCanonical = new fhir.FhirElement(source._instantiatesCanonical);
        }
        if (source["instantiatesUri"]) {
            this.instantiatesUri = source.instantiatesUri;
        }
        if (source["_instantiatesUri"]) {
            this._instantiatesUri = new fhir.FhirElement(source._instantiatesUri);
        }
        if (source["insurance"]) {
            this.insurance = source.insurance.map((x) => new fhir.Reference(x));
        }
        this.intent = null;
        if (source["intent"]) {
            this.intent = source.intent;
        }
        if (this.intent === undefined) {
            this.intent = null;
        }
        if (source["_intent"]) {
            this._intent = new fhir.FhirElement(source._intent);
        }
        if (source["lastModified"]) {
            this.lastModified = source.lastModified;
        }
        if (source["_lastModified"]) {
            this._lastModified = new fhir.FhirElement(source._lastModified);
        }
        if (source["location"]) {
            this.location = new fhir.Reference(source.location);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["output"]) {
            this.output = source.output.map((x) => new fhir.TaskOutput(x));
        }
        if (source["owner"]) {
            this.owner = new fhir.Reference(source.owner);
        }
        if (source["partOf"]) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x));
        }
        if (source["performerType"]) {
            this.performerType = source.performerType.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["priority"]) {
            this.priority = source.priority;
        }
        if (source["_priority"]) {
            this._priority = new fhir.FhirElement(source._priority);
        }
        if (source["reasonCode"]) {
            this.reasonCode = new fhir.CodeableConcept(source.reasonCode);
        }
        if (source["reasonReference"]) {
            this.reasonReference = new fhir.Reference(source.reasonReference);
        }
        if (source["relevantHistory"]) {
            this.relevantHistory = source.relevantHistory.map((x) => new fhir.Reference(x));
        }
        if (source["requester"]) {
            this.requester = new fhir.Reference(source.requester);
        }
        if (source["restriction"]) {
            this.restriction = new fhir.TaskRestriction(source.restriction);
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source["statusReason"]) {
            this.statusReason = new fhir.CodeableConcept(source.statusReason);
        }
    }
    /**
     * Check if the current Task contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["intent"] === undefined) {
            missingElements.push("intent");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Task from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new Task(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Task is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Task.intent field
 */
export var TaskIntentEnum;
(function (TaskIntentEnum) {
    TaskIntentEnum["UNKNOWN"] = "unknown";
    TaskIntentEnum["PROPOSAL"] = "proposal";
    TaskIntentEnum["PLAN"] = "plan";
    TaskIntentEnum["ORDER"] = "order";
    TaskIntentEnum["ORIGINAL_ORDER"] = "original-order";
    TaskIntentEnum["REFLEX_ORDER"] = "reflex-order";
    TaskIntentEnum["FILLER_ORDER"] = "filler-order";
    TaskIntentEnum["INSTANCE_ORDER"] = "instance-order";
    TaskIntentEnum["OPTION"] = "option";
})(TaskIntentEnum || (TaskIntentEnum = {}));
/**
 * Code Values for the Task.priority field
 */
export var TaskPriorityEnum;
(function (TaskPriorityEnum) {
    TaskPriorityEnum["ROUTINE"] = "routine";
    TaskPriorityEnum["URGENT"] = "urgent";
    TaskPriorityEnum["ASAP"] = "asap";
    TaskPriorityEnum["STAT"] = "stat";
})(TaskPriorityEnum || (TaskPriorityEnum = {}));
/**
 * Code Values for the Task.status field
 */
export var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["DRAFT"] = "draft";
    TaskStatusEnum["REQUESTED"] = "requested";
    TaskStatusEnum["RECEIVED"] = "received";
    TaskStatusEnum["ACCEPTED"] = "accepted";
    TaskStatusEnum["REJECTED"] = "rejected";
    TaskStatusEnum["READY"] = "ready";
    TaskStatusEnum["CANCELLED"] = "cancelled";
    TaskStatusEnum["IN_PROGRESS"] = "in-progress";
    TaskStatusEnum["ON_HOLD"] = "on-hold";
    TaskStatusEnum["FAILED"] = "failed";
    TaskStatusEnum["COMPLETED"] = "completed";
    TaskStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(TaskStatusEnum || (TaskStatusEnum = {}));
//# sourceMappingURL=Task.js.map
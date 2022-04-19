// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Indicates who should participate in performing the action described.
 */
export class ActivityDefinitionParticipant extends fhir.BackboneElement {
    /**
     * Default constructor for ActivityDefinitionParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["role"]) {
            this.role = new fhir.CodeableConcept(source.role);
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
    }
    /**
     * Check if the current ActivityDefinitionParticipant contains all required elements.
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
     * Factory function to create a ActivityDefinitionParticipant from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ActivityDefinitionParticipant(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ActivityDefinitionParticipant is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export class ActivityDefinitionDynamicValue extends fhir.BackboneElement {
    /**
     * Default constructor for ActivityDefinitionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.expression = null;
        if (source["expression"]) {
            this.expression = new fhir.Expression(source.expression);
        }
        if (this.expression === undefined) {
            this.expression = null;
        }
        this.path = null;
        if (source["path"]) {
            this.path = source.path;
        }
        if (this.path === undefined) {
            this.path = null;
        }
        if (source["_path"]) {
            this._path = new fhir.FhirElement(source._path);
        }
    }
    /**
     * Check if the current ActivityDefinitionDynamicValue contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["expression"] === undefined) {
            missingElements.push("expression");
        }
        if (this["path"] === undefined) {
            missingElements.push("path");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ActivityDefinitionDynamicValue from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ActivityDefinitionDynamicValue(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ActivityDefinitionDynamicValue is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export class ActivityDefinition extends fhir.DomainResource {
    /**
     * Default constructor for ActivityDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ActivityDefinition';
        if (source["approvalDate"]) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"]) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source["author"]) {
            this.author = source.author.map((x) => new fhir.ContactDetail(x));
        }
        if (source["bodySite"]) {
            this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["copyright"]) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"]) {
            this._copyright = new fhir.FhirElement(source._copyright);
        }
        if (source["date"]) {
            this.date = source.date;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["doNotPerform"]) {
            this.doNotPerform = source.doNotPerform;
        }
        if (source["_doNotPerform"]) {
            this._doNotPerform = new fhir.FhirElement(source._doNotPerform);
        }
        if (source["dosage"]) {
            this.dosage = source.dosage.map((x) => new fhir.Dosage(x));
        }
        if (source["dynamicValue"]) {
            this.dynamicValue = source.dynamicValue.map((x) => new fhir.ActivityDefinitionDynamicValue(x));
        }
        if (source["editor"]) {
            this.editor = source.editor.map((x) => new fhir.ContactDetail(x));
        }
        if (source["effectivePeriod"]) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source["endorser"]) {
            this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x));
        }
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["intent"]) {
            this.intent = source.intent;
        }
        if (source["_intent"]) {
            this._intent = new fhir.FhirElement(source._intent);
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["kind"]) {
            this.kind = source.kind;
        }
        if (source["_kind"]) {
            this._kind = new fhir.FhirElement(source._kind);
        }
        if (source["lastReviewDate"]) {
            this.lastReviewDate = source.lastReviewDate;
        }
        if (source["_lastReviewDate"]) {
            this._lastReviewDate = new fhir.FhirElement(source._lastReviewDate);
        }
        if (source["library"]) {
            this.library = source.library.map((x) => (x));
        }
        if (source["_library"]) {
            this._library = source._library.map((x) => new fhir.FhirElement(x));
        }
        if (source["location"]) {
            this.location = new fhir.Reference(source.location);
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["observationRequirement"]) {
            this.observationRequirement = source.observationRequirement.map((x) => new fhir.Reference(x));
        }
        if (source["observationResultRequirement"]) {
            this.observationResultRequirement = source.observationResultRequirement.map((x) => new fhir.Reference(x));
        }
        if (source["participant"]) {
            this.participant = source.participant.map((x) => new fhir.ActivityDefinitionParticipant(x));
        }
        if (source["priority"]) {
            this.priority = source.priority;
        }
        if (source["_priority"]) {
            this._priority = new fhir.FhirElement(source._priority);
        }
        if (source["productReference"]) {
            this.productReference = new fhir.Reference(source.productReference);
        }
        if (source["productCodeableConcept"]) {
            this.productCodeableConcept = new fhir.CodeableConcept(source.productCodeableConcept);
        }
        if (source["profile"]) {
            this.profile = source.profile;
        }
        if (source["_profile"]) {
            this._profile = new fhir.FhirElement(source._profile);
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source["purpose"]) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"]) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source["relatedArtifact"]) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source["reviewer"]) {
            this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x));
        }
        if (source["specimenRequirement"]) {
            this.specimenRequirement = source.specimenRequirement.map((x) => new fhir.Reference(x));
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
        if (source["subjectCodeableConcept"]) {
            this.subjectCodeableConcept = new fhir.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"]) {
            this.subjectReference = new fhir.Reference(source.subjectReference);
        }
        if (source["subtitle"]) {
            this.subtitle = source.subtitle;
        }
        if (source["_subtitle"]) {
            this._subtitle = new fhir.FhirElement(source._subtitle);
        }
        if (source["timingTiming"]) {
            this.timingTiming = new fhir.Timing(source.timingTiming);
        }
        if (source["timingDateTime"]) {
            this.timingDateTime = source.timingDateTime;
        }
        if (source["_timingDateTime"]) {
            this._timingDateTime = new fhir.FhirElement(source._timingDateTime);
        }
        if (source["timingAge"]) {
            this.timingAge = new fhir.Age(source.timingAge);
        }
        if (source["timingPeriod"]) {
            this.timingPeriod = new fhir.Period(source.timingPeriod);
        }
        if (source["timingRange"]) {
            this.timingRange = new fhir.Range(source.timingRange);
        }
        if (source["timingDuration"]) {
            this.timingDuration = new fhir.Duration(source.timingDuration);
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source["topic"]) {
            this.topic = source.topic.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["transform"]) {
            this.transform = source.transform;
        }
        if (source["_transform"]) {
            this._transform = new fhir.FhirElement(source._transform);
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["usage"]) {
            this.usage = source.usage;
        }
        if (source["_usage"]) {
            this._usage = new fhir.FhirElement(source._usage);
        }
        if (source["useContext"]) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current ActivityDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ActivityDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ActivityDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ActivityDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the ActivityDefinition.participant.type field
 */
export var ActivityDefinitionParticipantTypeEnum;
(function (ActivityDefinitionParticipantTypeEnum) {
    ActivityDefinitionParticipantTypeEnum["PATIENT"] = "patient";
    ActivityDefinitionParticipantTypeEnum["PRACTITIONER"] = "practitioner";
    ActivityDefinitionParticipantTypeEnum["RELATED_PERSON"] = "related-person";
    ActivityDefinitionParticipantTypeEnum["DEVICE"] = "device";
})(ActivityDefinitionParticipantTypeEnum || (ActivityDefinitionParticipantTypeEnum = {}));
/**
 * Code Values for the ActivityDefinition.intent field
 */
export var ActivityDefinitionIntentEnum;
(function (ActivityDefinitionIntentEnum) {
    ActivityDefinitionIntentEnum["PROPOSAL"] = "proposal";
    ActivityDefinitionIntentEnum["PLAN"] = "plan";
    ActivityDefinitionIntentEnum["DIRECTIVE"] = "directive";
    ActivityDefinitionIntentEnum["ORDER"] = "order";
    ActivityDefinitionIntentEnum["ORIGINAL_ORDER"] = "original-order";
    ActivityDefinitionIntentEnum["REFLEX_ORDER"] = "reflex-order";
    ActivityDefinitionIntentEnum["FILLER_ORDER"] = "filler-order";
    ActivityDefinitionIntentEnum["INSTANCE_ORDER"] = "instance-order";
    ActivityDefinitionIntentEnum["OPTION"] = "option";
})(ActivityDefinitionIntentEnum || (ActivityDefinitionIntentEnum = {}));
/**
 * Code Values for the ActivityDefinition.priority field
 */
export var ActivityDefinitionPriorityEnum;
(function (ActivityDefinitionPriorityEnum) {
    ActivityDefinitionPriorityEnum["ROUTINE"] = "routine";
    ActivityDefinitionPriorityEnum["URGENT"] = "urgent";
    ActivityDefinitionPriorityEnum["ASAP"] = "asap";
    ActivityDefinitionPriorityEnum["STAT"] = "stat";
})(ActivityDefinitionPriorityEnum || (ActivityDefinitionPriorityEnum = {}));
/**
 * Code Values for the ActivityDefinition.status field
 */
export var ActivityDefinitionStatusEnum;
(function (ActivityDefinitionStatusEnum) {
    ActivityDefinitionStatusEnum["DRAFT"] = "draft";
    ActivityDefinitionStatusEnum["ACTIVE"] = "active";
    ActivityDefinitionStatusEnum["RETIRED"] = "retired";
    ActivityDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(ActivityDefinitionStatusEnum || (ActivityDefinitionStatusEnum = {}));
//# sourceMappingURL=ActivityDefinition.js.map
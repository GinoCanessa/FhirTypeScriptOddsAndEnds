// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export class CarePlanActivityDetail extends fhir.BackboneElement {
    /**
     * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["dailyAmount"]) {
            this.dailyAmount = new fhir.Quantity(source.dailyAmount);
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
        if (source["goal"]) {
            this.goal = source.goal.map((x) => new fhir.Reference(x));
        }
        if (source["instantiatesCanonical"]) {
            this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x));
        }
        if (source["_instantiatesCanonical"]) {
            this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhir.FhirElement(x));
        }
        if (source["instantiatesUri"]) {
            this.instantiatesUri = source.instantiatesUri.map((x) => (x));
        }
        if (source["_instantiatesUri"]) {
            this._instantiatesUri = source._instantiatesUri.map((x) => new fhir.FhirElement(x));
        }
        if (source["kind"]) {
            this.kind = source.kind;
        }
        if (source["_kind"]) {
            this._kind = new fhir.FhirElement(source._kind);
        }
        if (source["location"]) {
            this.location = new fhir.Reference(source.location);
        }
        if (source["performer"]) {
            this.performer = source.performer.map((x) => new fhir.Reference(x));
        }
        if (source["productCodeableConcept"]) {
            this.productCodeableConcept = new fhir.CodeableConcept(source.productCodeableConcept);
        }
        if (source["productReference"]) {
            this.productReference = new fhir.Reference(source.productReference);
        }
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["scheduledTiming"]) {
            this.scheduledTiming = new fhir.Timing(source.scheduledTiming);
        }
        if (source["scheduledPeriod"]) {
            this.scheduledPeriod = new fhir.Period(source.scheduledPeriod);
        }
        if (source["scheduledString"]) {
            this.scheduledString = source.scheduledString;
        }
        if (source["_scheduledString"]) {
            this._scheduledString = new fhir.FhirElement(source._scheduledString);
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
     * Check if the current CarePlanActivityDetail contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CarePlanActivityDetail from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new CarePlanActivityDetail(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `CarePlanActivityDetail is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export class CarePlanActivity extends fhir.BackboneElement {
    /**
     * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["detail"]) {
            this.detail = new fhir.CarePlanActivityDetail(source.detail);
        }
        if (source["outcomeCodeableConcept"]) {
            this.outcomeCodeableConcept = source.outcomeCodeableConcept.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["outcomeReference"]) {
            this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x));
        }
        if (source["progress"]) {
            this.progress = source.progress.map((x) => new fhir.Annotation(x));
        }
        if (source["reference"]) {
            this.reference = new fhir.Reference(source.reference);
        }
    }
    /**
     * Check if the current CarePlanActivity contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CarePlanActivity from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new CarePlanActivity(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `CarePlanActivity is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends fhir.DomainResource {
    /**
     * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'CarePlan';
        if (source["activity"]) {
            this.activity = source.activity.map((x) => new fhir.CarePlanActivity(x));
        }
        if (source["addresses"]) {
            this.addresses = source.addresses.map((x) => new fhir.Reference(x));
        }
        if (source["author"]) {
            this.author = new fhir.Reference(source.author);
        }
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["careTeam"]) {
            this.careTeam = source.careTeam.map((x) => new fhir.Reference(x));
        }
        if (source["category"]) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["contributor"]) {
            this.contributor = source.contributor.map((x) => new fhir.Reference(x));
        }
        if (source["created"]) {
            this.created = source.created;
        }
        if (source["_created"]) {
            this._created = new fhir.FhirElement(source._created);
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
        if (source["goal"]) {
            this.goal = source.goal.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["instantiatesCanonical"]) {
            this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x));
        }
        if (source["_instantiatesCanonical"]) {
            this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhir.FhirElement(x));
        }
        if (source["instantiatesUri"]) {
            this.instantiatesUri = source.instantiatesUri.map((x) => (x));
        }
        if (source["_instantiatesUri"]) {
            this._instantiatesUri = source._instantiatesUri.map((x) => new fhir.FhirElement(x));
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
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["partOf"]) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x));
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["replaces"]) {
            this.replaces = source.replaces.map((x) => new fhir.Reference(x));
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
        this.subject = null;
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (this.subject === undefined) {
            this.subject = null;
        }
        if (source["supportingInfo"]) {
            this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x));
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
    }
    /**
     * Check if the current CarePlan contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["intent"] === undefined) {
            missingElements.push("intent");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["subject"] === undefined) {
            missingElements.push("subject");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CarePlan from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new CarePlan(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `CarePlan is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the CarePlan.activity.detail.kind field
 */
export var CarePlanActivityDetailKindEnum;
(function (CarePlanActivityDetailKindEnum) {
    CarePlanActivityDetailKindEnum["APPOINTMENT"] = "Appointment";
    CarePlanActivityDetailKindEnum["COMMUNICATIONREQUEST"] = "CommunicationRequest";
    CarePlanActivityDetailKindEnum["DEVICEREQUEST"] = "DeviceRequest";
    CarePlanActivityDetailKindEnum["MEDICATIONREQUEST"] = "MedicationRequest";
    CarePlanActivityDetailKindEnum["NUTRITIONORDER"] = "NutritionOrder";
    CarePlanActivityDetailKindEnum["TASK"] = "Task";
    CarePlanActivityDetailKindEnum["SERVICEREQUEST"] = "ServiceRequest";
    CarePlanActivityDetailKindEnum["VISIONPRESCRIPTION"] = "VisionPrescription";
})(CarePlanActivityDetailKindEnum || (CarePlanActivityDetailKindEnum = {}));
/**
 * Code Values for the CarePlan.activity.detail.status field
 */
export var CarePlanActivityDetailStatusEnum;
(function (CarePlanActivityDetailStatusEnum) {
    CarePlanActivityDetailStatusEnum["NOT_STARTED"] = "not-started";
    CarePlanActivityDetailStatusEnum["SCHEDULED"] = "scheduled";
    CarePlanActivityDetailStatusEnum["IN_PROGRESS"] = "in-progress";
    CarePlanActivityDetailStatusEnum["ON_HOLD"] = "on-hold";
    CarePlanActivityDetailStatusEnum["COMPLETED"] = "completed";
    CarePlanActivityDetailStatusEnum["CANCELLED"] = "cancelled";
    CarePlanActivityDetailStatusEnum["STOPPED"] = "stopped";
    CarePlanActivityDetailStatusEnum["UNKNOWN"] = "unknown";
    CarePlanActivityDetailStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CarePlanActivityDetailStatusEnum || (CarePlanActivityDetailStatusEnum = {}));
/**
 * Code Values for the CarePlan.intent field
 */
export var CarePlanIntentEnum;
(function (CarePlanIntentEnum) {
    CarePlanIntentEnum["PROPOSAL"] = "proposal";
    CarePlanIntentEnum["PLAN"] = "plan";
    CarePlanIntentEnum["ORDER"] = "order";
    CarePlanIntentEnum["OPTION"] = "option";
})(CarePlanIntentEnum || (CarePlanIntentEnum = {}));
/**
 * Code Values for the CarePlan.status field
 */
export var CarePlanStatusEnum;
(function (CarePlanStatusEnum) {
    CarePlanStatusEnum["DRAFT"] = "draft";
    CarePlanStatusEnum["ACTIVE"] = "active";
    CarePlanStatusEnum["ON_HOLD"] = "on-hold";
    CarePlanStatusEnum["REVOKED"] = "revoked";
    CarePlanStatusEnum["COMPLETED"] = "completed";
    CarePlanStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    CarePlanStatusEnum["UNKNOWN"] = "unknown";
})(CarePlanStatusEnum || (CarePlanStatusEnum = {}));
//# sourceMappingURL=CarePlan.js.map
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 */
export class ServiceRequest extends fhir.DomainResource {
    /**
     * Default constructor for ServiceRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ServiceRequest';
        if (source["asNeededBoolean"]) {
            this.asNeededBoolean = source.asNeededBoolean;
        }
        if (source["_asNeededBoolean"]) {
            this._asNeededBoolean = new fhir.FhirElement(source._asNeededBoolean);
        }
        if (source["asNeededCodeableConcept"]) {
            this.asNeededCodeableConcept = new fhir.CodeableConcept(source.asNeededCodeableConcept);
        }
        if (source["authoredOn"]) {
            this.authoredOn = source.authoredOn;
        }
        if (source["_authoredOn"]) {
            this._authoredOn = new fhir.FhirElement(source._authoredOn);
        }
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["bodySite"]) {
            this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["category"]) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["doNotPerform"]) {
            this.doNotPerform = source.doNotPerform;
        }
        if (source["_doNotPerform"]) {
            this._doNotPerform = new fhir.FhirElement(source._doNotPerform);
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
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
        if (source["locationCode"]) {
            this.locationCode = source.locationCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["locationReference"]) {
            this.locationReference = source.locationReference.map((x) => new fhir.Reference(x));
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["occurrenceDateTime"]) {
            this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source["_occurrenceDateTime"]) {
            this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime);
        }
        if (source["occurrencePeriod"]) {
            this.occurrencePeriod = new fhir.Period(source.occurrencePeriod);
        }
        if (source["occurrenceTiming"]) {
            this.occurrenceTiming = new fhir.Timing(source.occurrenceTiming);
        }
        if (source["orderDetail"]) {
            this.orderDetail = source.orderDetail.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["patientInstruction"]) {
            this.patientInstruction = source.patientInstruction;
        }
        if (source["_patientInstruction"]) {
            this._patientInstruction = new fhir.FhirElement(source._patientInstruction);
        }
        if (source["performer"]) {
            this.performer = source.performer.map((x) => new fhir.Reference(x));
        }
        if (source["performerType"]) {
            this.performerType = new fhir.CodeableConcept(source.performerType);
        }
        if (source["priority"]) {
            this.priority = source.priority;
        }
        if (source["_priority"]) {
            this._priority = new fhir.FhirElement(source._priority);
        }
        if (source["quantityQuantity"]) {
            this.quantityQuantity = new fhir.Quantity(source.quantityQuantity);
        }
        if (source["quantityRatio"]) {
            this.quantityRatio = new fhir.Ratio(source.quantityRatio);
        }
        if (source["quantityRange"]) {
            this.quantityRange = new fhir.Range(source.quantityRange);
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["relevantHistory"]) {
            this.relevantHistory = source.relevantHistory.map((x) => new fhir.Reference(x));
        }
        if (source["replaces"]) {
            this.replaces = source.replaces.map((x) => new fhir.Reference(x));
        }
        if (source["requester"]) {
            this.requester = new fhir.Reference(source.requester);
        }
        if (source["requisition"]) {
            this.requisition = new fhir.Identifier(source.requisition);
        }
        if (source["specimen"]) {
            this.specimen = source.specimen.map((x) => new fhir.Reference(x));
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
    }
    /**
     * Check if the current ServiceRequest contains all required elements.
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
     * Factory function to create a ServiceRequest from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ServiceRequest(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ServiceRequest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the ServiceRequest.intent field
 */
export var ServiceRequestIntentEnum;
(function (ServiceRequestIntentEnum) {
    ServiceRequestIntentEnum["PROPOSAL"] = "proposal";
    ServiceRequestIntentEnum["PLAN"] = "plan";
    ServiceRequestIntentEnum["DIRECTIVE"] = "directive";
    ServiceRequestIntentEnum["ORDER"] = "order";
    ServiceRequestIntentEnum["ORIGINAL_ORDER"] = "original-order";
    ServiceRequestIntentEnum["REFLEX_ORDER"] = "reflex-order";
    ServiceRequestIntentEnum["FILLER_ORDER"] = "filler-order";
    ServiceRequestIntentEnum["INSTANCE_ORDER"] = "instance-order";
    ServiceRequestIntentEnum["OPTION"] = "option";
})(ServiceRequestIntentEnum || (ServiceRequestIntentEnum = {}));
/**
 * Code Values for the ServiceRequest.priority field
 */
export var ServiceRequestPriorityEnum;
(function (ServiceRequestPriorityEnum) {
    ServiceRequestPriorityEnum["ROUTINE"] = "routine";
    ServiceRequestPriorityEnum["URGENT"] = "urgent";
    ServiceRequestPriorityEnum["ASAP"] = "asap";
    ServiceRequestPriorityEnum["STAT"] = "stat";
})(ServiceRequestPriorityEnum || (ServiceRequestPriorityEnum = {}));
/**
 * Code Values for the ServiceRequest.status field
 */
export var ServiceRequestStatusEnum;
(function (ServiceRequestStatusEnum) {
    ServiceRequestStatusEnum["DRAFT"] = "draft";
    ServiceRequestStatusEnum["ACTIVE"] = "active";
    ServiceRequestStatusEnum["ON_HOLD"] = "on-hold";
    ServiceRequestStatusEnum["REVOKED"] = "revoked";
    ServiceRequestStatusEnum["COMPLETED"] = "completed";
    ServiceRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    ServiceRequestStatusEnum["UNKNOWN"] = "unknown";
})(ServiceRequestStatusEnum || (ServiceRequestStatusEnum = {}));
//# sourceMappingURL=ServiceRequest.js.map
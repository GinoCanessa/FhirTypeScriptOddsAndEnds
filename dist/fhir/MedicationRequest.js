// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * If populating this element, either the quantity or the duration must be included.
 */
export class MedicationRequestDispenseRequestInitialFill extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationRequestDispenseRequestInitialFill - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["duration"]) {
            this.duration = new fhir.Duration(source.duration);
        }
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
    }
    /**
     * Check if the current MedicationRequestDispenseRequestInitialFill contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicationRequestDispenseRequestInitialFill from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationRequestDispenseRequestInitialFill(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationRequestDispenseRequestInitialFill is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export class MedicationRequestDispenseRequest extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationRequestDispenseRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["dispenseInterval"]) {
            this.dispenseInterval = new fhir.Duration(source.dispenseInterval);
        }
        if (source["expectedSupplyDuration"]) {
            this.expectedSupplyDuration = new fhir.Duration(source.expectedSupplyDuration);
        }
        if (source["initialFill"]) {
            this.initialFill = new fhir.MedicationRequestDispenseRequestInitialFill(source.initialFill);
        }
        if (source["numberOfRepeatsAllowed"]) {
            this.numberOfRepeatsAllowed = source.numberOfRepeatsAllowed;
        }
        if (source["_numberOfRepeatsAllowed"]) {
            this._numberOfRepeatsAllowed = new fhir.FhirElement(source._numberOfRepeatsAllowed);
        }
        if (source["performer"]) {
            this.performer = new fhir.Reference(source.performer);
        }
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source["validityPeriod"]) {
            this.validityPeriod = new fhir.Period(source.validityPeriod);
        }
    }
    /**
     * Check if the current MedicationRequestDispenseRequest contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicationRequestDispenseRequest from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationRequestDispenseRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationRequestDispenseRequest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export class MedicationRequestSubstitution extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationRequestSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["allowedBoolean"]) {
            this.allowedBoolean = source.allowedBoolean;
        }
        if (source["_allowedBoolean"]) {
            this._allowedBoolean = new fhir.FhirElement(source._allowedBoolean);
        }
        if (source["allowedCodeableConcept"]) {
            this.allowedCodeableConcept = new fhir.CodeableConcept(source.allowedCodeableConcept);
        }
        if (source["reason"]) {
            this.reason = new fhir.CodeableConcept(source.reason);
        }
    }
    /**
     * Check if the current MedicationRequestSubstitution contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicationRequestSubstitution from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationRequestSubstitution(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationRequestSubstitution is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export class MedicationRequest extends fhir.DomainResource {
    /**
     * Default constructor for MedicationRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MedicationRequest';
        if (source["authoredOn"]) {
            this.authoredOn = source.authoredOn;
        }
        if (source["_authoredOn"]) {
            this._authoredOn = new fhir.FhirElement(source._authoredOn);
        }
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["category"]) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["courseOfTherapyType"]) {
            this.courseOfTherapyType = new fhir.CodeableConcept(source.courseOfTherapyType);
        }
        if (source["detectedIssue"]) {
            this.detectedIssue = source.detectedIssue.map((x) => new fhir.Reference(x));
        }
        if (source["dispenseRequest"]) {
            this.dispenseRequest = new fhir.MedicationRequestDispenseRequest(source.dispenseRequest);
        }
        if (source["doNotPerform"]) {
            this.doNotPerform = source.doNotPerform;
        }
        if (source["_doNotPerform"]) {
            this._doNotPerform = new fhir.FhirElement(source._doNotPerform);
        }
        if (source["dosageInstruction"]) {
            this.dosageInstruction = source.dosageInstruction.map((x) => new fhir.Dosage(x));
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["eventHistory"]) {
            this.eventHistory = source.eventHistory.map((x) => new fhir.Reference(x));
        }
        if (source["groupIdentifier"]) {
            this.groupIdentifier = new fhir.Identifier(source.groupIdentifier);
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
        if (source["medicationCodeableConcept"]) {
            this.medicationCodeableConcept = new fhir.CodeableConcept(source.medicationCodeableConcept);
        }
        if (source["medicationReference"]) {
            this.medicationReference = new fhir.Reference(source.medicationReference);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["performer"]) {
            this.performer = new fhir.Reference(source.performer);
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
        if (source["priorPrescription"]) {
            this.priorPrescription = new fhir.Reference(source.priorPrescription);
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["recorder"]) {
            this.recorder = new fhir.Reference(source.recorder);
        }
        if (source["reportedBoolean"]) {
            this.reportedBoolean = source.reportedBoolean;
        }
        if (source["_reportedBoolean"]) {
            this._reportedBoolean = new fhir.FhirElement(source._reportedBoolean);
        }
        if (source["reportedReference"]) {
            this.reportedReference = new fhir.Reference(source.reportedReference);
        }
        if (source["requester"]) {
            this.requester = new fhir.Reference(source.requester);
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
        this.subject = null;
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (this.subject === undefined) {
            this.subject = null;
        }
        if (source["substitution"]) {
            this.substitution = new fhir.MedicationRequestSubstitution(source.substitution);
        }
        if (source["supportingInformation"]) {
            this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Check if the current MedicationRequest contains all required elements.
     */
    checkRequiredElements() {
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
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicationRequest from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationRequest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the MedicationRequest.intent field
 */
export var MedicationRequestIntentEnum;
(function (MedicationRequestIntentEnum) {
    MedicationRequestIntentEnum["PROPOSAL"] = "proposal";
    MedicationRequestIntentEnum["PLAN"] = "plan";
    MedicationRequestIntentEnum["ORDER"] = "order";
    MedicationRequestIntentEnum["ORIGINAL_ORDER"] = "original-order";
    MedicationRequestIntentEnum["REFLEX_ORDER"] = "reflex-order";
    MedicationRequestIntentEnum["FILLER_ORDER"] = "filler-order";
    MedicationRequestIntentEnum["INSTANCE_ORDER"] = "instance-order";
    MedicationRequestIntentEnum["OPTION"] = "option";
})(MedicationRequestIntentEnum || (MedicationRequestIntentEnum = {}));
/**
 * Code Values for the MedicationRequest.priority field
 */
export var MedicationRequestPriorityEnum;
(function (MedicationRequestPriorityEnum) {
    MedicationRequestPriorityEnum["ROUTINE"] = "routine";
    MedicationRequestPriorityEnum["URGENT"] = "urgent";
    MedicationRequestPriorityEnum["ASAP"] = "asap";
    MedicationRequestPriorityEnum["STAT"] = "stat";
})(MedicationRequestPriorityEnum || (MedicationRequestPriorityEnum = {}));
/**
 * Code Values for the MedicationRequest.status field
 */
export var MedicationRequestStatusEnum;
(function (MedicationRequestStatusEnum) {
    MedicationRequestStatusEnum["ACTIVE"] = "active";
    MedicationRequestStatusEnum["ON_HOLD"] = "on-hold";
    MedicationRequestStatusEnum["CANCELLED"] = "cancelled";
    MedicationRequestStatusEnum["COMPLETED"] = "completed";
    MedicationRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationRequestStatusEnum["STOPPED"] = "stopped";
    MedicationRequestStatusEnum["DRAFT"] = "draft";
    MedicationRequestStatusEnum["UNKNOWN"] = "unknown";
})(MedicationRequestStatusEnum || (MedicationRequestStatusEnum = {}));
//# sourceMappingURL=MedicationRequest.js.map
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Indicates who or what performed the event.
 */
export class MedicationDispensePerformer extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationDispensePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.actor = null;
        if (source["actor"]) {
            this.actor = new fhir.Reference(source.actor);
        }
        if (this.actor === undefined) {
            this.actor = null;
        }
        if (source["function"]) {
            this.function = new fhir.CodeableConcept(source.function);
        }
    }
    /**
     * Check if the current MedicationDispensePerformer contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["actor"] === undefined) {
            missingElements.push("actor");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicationDispensePerformer from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationDispensePerformer(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationDispensePerformer is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
 */
export class MedicationDispenseSubstitution extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationDispenseSubstitution - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["reason"]) {
            this.reason = source.reason.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["responsibleParty"]) {
            this.responsibleParty = source.responsibleParty.map((x) => new fhir.Reference(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        this.wasSubstituted = null;
        if (source["wasSubstituted"]) {
            this.wasSubstituted = source.wasSubstituted;
        }
        if (this.wasSubstituted === undefined) {
            this.wasSubstituted = null;
        }
        if (source["_wasSubstituted"]) {
            this._wasSubstituted = new fhir.FhirElement(source._wasSubstituted);
        }
    }
    /**
     * Check if the current MedicationDispenseSubstitution contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["wasSubstituted"] === undefined) {
            missingElements.push("wasSubstituted");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a MedicationDispenseSubstitution from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationDispenseSubstitution(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationDispenseSubstitution is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 */
export class MedicationDispense extends fhir.DomainResource {
    /**
     * Default constructor for MedicationDispense - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MedicationDispense';
        if (source["authorizingPrescription"]) {
            this.authorizingPrescription = source.authorizingPrescription.map((x) => new fhir.Reference(x));
        }
        if (source["category"]) {
            this.category = new fhir.CodeableConcept(source.category);
        }
        if (source["context"]) {
            this.context = new fhir.Reference(source.context);
        }
        if (source["daysSupply"]) {
            this.daysSupply = new fhir.Quantity(source.daysSupply);
        }
        if (source["destination"]) {
            this.destination = new fhir.Reference(source.destination);
        }
        if (source["detectedIssue"]) {
            this.detectedIssue = source.detectedIssue.map((x) => new fhir.Reference(x));
        }
        if (source["dosageInstruction"]) {
            this.dosageInstruction = source.dosageInstruction.map((x) => new fhir.Dosage(x));
        }
        if (source["eventHistory"]) {
            this.eventHistory = source.eventHistory.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["location"]) {
            this.location = new fhir.Reference(source.location);
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
        if (source["partOf"]) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x));
        }
        if (source["performer"]) {
            this.performer = source.performer.map((x) => new fhir.MedicationDispensePerformer(x));
        }
        if (source["quantity"]) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source["receiver"]) {
            this.receiver = source.receiver.map((x) => new fhir.Reference(x));
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
        if (source["statusReasonCodeableConcept"]) {
            this.statusReasonCodeableConcept = new fhir.CodeableConcept(source.statusReasonCodeableConcept);
        }
        if (source["statusReasonReference"]) {
            this.statusReasonReference = new fhir.Reference(source.statusReasonReference);
        }
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source["substitution"]) {
            this.substitution = new fhir.MedicationDispenseSubstitution(source.substitution);
        }
        if (source["supportingInformation"]) {
            this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source["whenHandedOver"]) {
            this.whenHandedOver = source.whenHandedOver;
        }
        if (source["_whenHandedOver"]) {
            this._whenHandedOver = new fhir.FhirElement(source._whenHandedOver);
        }
        if (source["whenPrepared"]) {
            this.whenPrepared = source.whenPrepared;
        }
        if (source["_whenPrepared"]) {
            this._whenPrepared = new fhir.FhirElement(source._whenPrepared);
        }
    }
    /**
     * Check if the current MedicationDispense contains all required elements.
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
     * Factory function to create a MedicationDispense from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new MedicationDispense(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `MedicationDispense is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the MedicationDispense.status field
 */
export var MedicationDispenseStatusEnum;
(function (MedicationDispenseStatusEnum) {
    MedicationDispenseStatusEnum["PREPARATION"] = "preparation";
    MedicationDispenseStatusEnum["IN_PROGRESS"] = "in-progress";
    MedicationDispenseStatusEnum["CANCELLED"] = "cancelled";
    MedicationDispenseStatusEnum["ON_HOLD"] = "on-hold";
    MedicationDispenseStatusEnum["COMPLETED"] = "completed";
    MedicationDispenseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationDispenseStatusEnum["STOPPED"] = "stopped";
    MedicationDispenseStatusEnum["DECLINED"] = "declined";
    MedicationDispenseStatusEnum["UNKNOWN"] = "unknown";
})(MedicationDispenseStatusEnum || (MedicationDispenseStatusEnum = {}));
//# sourceMappingURL=MedicationDispense.js.map
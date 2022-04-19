// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * List of participants involved in the appointment.
 */
export class AppointmentParticipant extends fhir.BackboneElement {
    /**
     * Default constructor for AppointmentParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["actor"]) {
            this.actor = new fhir.Reference(source.actor);
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["required"]) {
            this.required = source.required;
        }
        if (source["_required"]) {
            this._required = new fhir.FhirElement(source._required);
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
        if (source["type"]) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Check if the current AppointmentParticipant contains all required elements.
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
     * Factory function to create a AppointmentParticipant from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new AppointmentParticipant(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `AppointmentParticipant is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export class Appointment extends fhir.DomainResource {
    /**
     * Default constructor for Appointment - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Appointment';
        if (source["appointmentType"]) {
            this.appointmentType = new fhir.CodeableConcept(source.appointmentType);
        }
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["cancelationReason"]) {
            this.cancelationReason = new fhir.CodeableConcept(source.cancelationReason);
        }
        if (source["comment"]) {
            this.comment = source.comment;
        }
        if (source["_comment"]) {
            this._comment = new fhir.FhirElement(source._comment);
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
        if (source["end"]) {
            this.end = source.end;
        }
        if (source["_end"]) {
            this._end = new fhir.FhirElement(source._end);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["minutesDuration"]) {
            this.minutesDuration = source.minutesDuration;
        }
        if (source["_minutesDuration"]) {
            this._minutesDuration = new fhir.FhirElement(source._minutesDuration);
        }
        this.participant = null;
        if (source["participant"]) {
            this.participant = source.participant.map((x) => new fhir.AppointmentParticipant(x));
        }
        if (this.participant === undefined) {
            this.participant = null;
        }
        if (source["patientInstruction"]) {
            this.patientInstruction = source.patientInstruction;
        }
        if (source["_patientInstruction"]) {
            this._patientInstruction = new fhir.FhirElement(source._patientInstruction);
        }
        if (source["priority"]) {
            this.priority = source.priority;
        }
        if (source["_priority"]) {
            this._priority = new fhir.FhirElement(source._priority);
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["requestedPeriod"]) {
            this.requestedPeriod = source.requestedPeriod.map((x) => new fhir.Period(x));
        }
        if (source["serviceCategory"]) {
            this.serviceCategory = source.serviceCategory.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["serviceType"]) {
            this.serviceType = source.serviceType.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["slot"]) {
            this.slot = source.slot.map((x) => new fhir.Reference(x));
        }
        if (source["specialty"]) {
            this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["start"]) {
            this.start = source.start;
        }
        if (source["_start"]) {
            this._start = new fhir.FhirElement(source._start);
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
        if (source["supportingInformation"]) {
            this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Check if the current Appointment contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if ((!this["participant"]) || (this["participant"].length === 0)) {
            missingElements.push("participant");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Appointment from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Appointment(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Appointment is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Appointment.participant.required field
 */
export var AppointmentParticipantRequiredEnum;
(function (AppointmentParticipantRequiredEnum) {
    AppointmentParticipantRequiredEnum["REQUIRED"] = "required";
    AppointmentParticipantRequiredEnum["OPTIONAL"] = "optional";
    AppointmentParticipantRequiredEnum["INFORMATION_ONLY"] = "information-only";
})(AppointmentParticipantRequiredEnum || (AppointmentParticipantRequiredEnum = {}));
/**
 * Code Values for the Appointment.participant.status field
 */
export var AppointmentParticipantStatusEnum;
(function (AppointmentParticipantStatusEnum) {
    AppointmentParticipantStatusEnum["ACCEPTED"] = "accepted";
    AppointmentParticipantStatusEnum["DECLINED"] = "declined";
    AppointmentParticipantStatusEnum["TENTATIVE"] = "tentative";
    AppointmentParticipantStatusEnum["NEEDS_ACTION"] = "needs-action";
})(AppointmentParticipantStatusEnum || (AppointmentParticipantStatusEnum = {}));
/**
 * Code Values for the Appointment.status field
 */
export var AppointmentStatusEnum;
(function (AppointmentStatusEnum) {
    AppointmentStatusEnum["PROPOSED"] = "proposed";
    AppointmentStatusEnum["PENDING"] = "pending";
    AppointmentStatusEnum["BOOKED"] = "booked";
    AppointmentStatusEnum["ARRIVED"] = "arrived";
    AppointmentStatusEnum["FULFILLED"] = "fulfilled";
    AppointmentStatusEnum["CANCELLED"] = "cancelled";
    AppointmentStatusEnum["NOSHOW"] = "noshow";
    AppointmentStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    AppointmentStatusEnum["CHECKED_IN"] = "checked-in";
    AppointmentStatusEnum["WAITLIST"] = "waitlist";
})(AppointmentStatusEnum || (AppointmentStatusEnum = {}));
//# sourceMappingURL=Appointment.js.map
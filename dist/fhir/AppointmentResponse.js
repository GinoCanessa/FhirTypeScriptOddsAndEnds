// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: AppointmentResponse
import * as fhir from '../fhir.js';
import { EncounterParticipantTypeValueSet, } from '../fhirValueSets/EncounterParticipantTypeValueSet.js';
import { ParticipationstatusValueSet, } from '../fhirValueSets/ParticipationstatusValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export class AppointmentResponse extends fhir.DomainResource {
    /**
     * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'AppointmentResponse';
        /**
         * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
         */
        this.identifier = [];
        /**
         * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
         * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
         * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
         */
        this.participantType = [];
        this.resourceType = 'AppointmentResponse';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['appointment']) {
            this.appointment = new fhir.Reference(source.appointment);
        }
        else {
            this.appointment = null;
        }
        if (source['start']) {
            this.start = new fhir.FhirInstant({ value: source.start });
        }
        if (source['end']) {
            this.end = new fhir.FhirInstant({ value: source.end });
        }
        if (source['participantType']) {
            this.participantType = source.participantType.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['actor']) {
            this.actor = new fhir.Reference(source.actor);
        }
        if (source['participantStatus']) {
            this.participantStatus = source.participantStatus;
        }
        else {
            this.participantStatus = null;
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
    }
    /**
     * Extensible-bound Value Set for participantType
     */
    static participantTypeExtensibleValueSet() {
        return EncounterParticipantTypeValueSet;
    }
    /**
     * Required-bound Value Set for participantStatus
     */
    static participantStatusRequiredValueSet() {
        return ParticipationstatusValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'AppointmentResponse' fhir: AppointmentResponse.resourceType:'AppointmentResponse'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['appointment']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property appointment:fhir.Reference fhir: AppointmentResponse.appointment:Reference", }));
        }
        if (this["appointment"]) {
            outcome.issue.push(...this.appointment.doModelValidation().issue);
        }
        if (this["start"]) {
            outcome.issue.push(...this.start.doModelValidation().issue);
        }
        if (this["end"]) {
            outcome.issue.push(...this.end.doModelValidation().issue);
        }
        if (this["participantType"]) {
            this.participantType.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["actor"]) {
            outcome.issue.push(...this.actor.doModelValidation().issue);
        }
        if (!this['participantStatus']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property participantStatus:ParticipationstatusValueSetEnum fhir: AppointmentResponse.participantStatus:code", }));
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
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
//# sourceMappingURL=AppointmentResponse.js.map
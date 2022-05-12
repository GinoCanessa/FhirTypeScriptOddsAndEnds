import * as fhir from '../fhir.js';
import { EncounterParticipantTypeValueSetType } from '../fhirValueSets/EncounterParticipantTypeValueSet.js';
import { ParticipationstatusValueSetType } from '../fhirValueSets/ParticipationstatusValueSet.js';
import { ParticipationstatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the AppointmentResponse type.
 */
export interface AppointmentResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AppointmentResponse" | undefined;
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhir.ReferenceArgs | null;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
     */
    start?: fhir.FhirInstant | string | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: fhir.FhirInstant | string | undefined;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
     */
    participantType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A Person, Location, HealthcareService, or Device that is participating in the appointment.
     */
    actor?: fhir.ReferenceArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
     */
    participantStatus: ParticipationstatusValueSetEnum | null;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export declare class AppointmentResponse extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AppointmentResponse";
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhir.Reference | null;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
     */
    start?: fhir.FhirInstant | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: fhir.FhirInstant | undefined;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
     */
    participantType?: fhir.CodeableConcept[] | undefined;
    /**
     * A Person, Location, HealthcareService, or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
     */
    participantStatus: ParticipationstatusValueSetEnum | null;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AppointmentResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for participantType
     */
    static participantTypeExtensibleValueSet(): EncounterParticipantTypeValueSetType;
    /**
     * Required-bound Value Set for participantStatus
     */
    static participantStatusRequiredValueSet(): ParticipationstatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=AppointmentResponse.d.ts.map
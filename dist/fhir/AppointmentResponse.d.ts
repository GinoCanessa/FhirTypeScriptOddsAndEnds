import * as fhir from '../fhir.js';
import { EncounterParticipantTypeValueSetType } from '../fhirValueSets/EncounterParticipantTypeValueSet.js';
import { ParticipationstatusValueSetType, ParticipationstatusValueSetEnum } from '../fhirValueSets/ParticipationstatusValueSet.js';
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export declare type IAppointmentResponse = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "AppointmentResponse";
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhir.IReference | null;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.end
     */
    _end?: fhir.IFhirElement | undefined;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
     */
    participantType?: fhir.ICodeableConcept[] | undefined;
    /**
     * A Person, Location, HealthcareService, or Device that is participating in the appointment.
     */
    actor?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
     */
    participantStatus: ParticipationstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: AppointmentResponse.participantStatus
     */
    _participantStatus?: fhir.IFhirElement | undefined;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export declare class AppointmentResponse extends fhir.DomainResource implements IAppointmentResponse {
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
    start?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.end
     */
    _end?: fhir.FhirElement | undefined;
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
     * Extended properties for primitive element: AppointmentResponse.participantStatus
     */
    _participantStatus?: fhir.FhirElement | undefined;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAppointmentResponse>);
    /**
     * Extensible-bound Value Set for participantType
     */
    participantTypeExtensibleValueSet(): EncounterParticipantTypeValueSetType;
    /**
     * Required-bound Value Set for participantStatus
     */
    participantStatusRequiredValueSet(): ParticipationstatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=AppointmentResponse.d.ts.map
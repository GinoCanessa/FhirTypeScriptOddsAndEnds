import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export declare class AppointmentResponse extends fhirModels.DomainResource implements fhirInterfaces.IAppointmentResponse {
    /**
     * Resource Type Name
     */
    readonly resourceType = "AppointmentResponse";
    /**
     * A Person, Location, HealthcareService, or Device that is participating in the appointment.
     */
    actor?: fhirModels.Reference | undefined;
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhirModels.Reference;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: string | undefined;
    _end?: fhirModels.Element | undefined;
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
     */
    participantStatus: AppointmentResponseParticipantStatusEnum;
    _participantStatus?: fhirModels.Element | undefined;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
     */
    participantType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
     */
    start?: string | undefined;
    _start?: fhirModels.Element | undefined;
    /**
     * Default constructor for AppointmentResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IAppointmentResponse);
}
/**
 * Code Values for the AppointmentResponse.participantStatus field
 */
export declare enum AppointmentResponseParticipantStatusEnum {
    ACCEPTED = "accepted",
    DECLINED = "declined",
    TENTATIVE = "tentative",
    NEEDS_ACTION = "needs-action"
}
//# sourceMappingURL=AppointmentResponse.d.ts.map
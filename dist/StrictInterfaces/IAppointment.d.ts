import * as fhirInterfaces from '../strictinterfaces';
/**
 * List of participants involved in the appointment.
 */
export interface IAppointmentParticipant extends fhirInterfaces.IBackboneElement {
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhirInterfaces.IReference | undefined;
    /**
     * Participation period of the actor.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: AppointmentParticipantRequiredEnum | undefined;
    _required?: fhirInterfaces.IElement | undefined;
    /**
     * Participation status of the actor.
     */
    status: AppointmentParticipantStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * Code Values for the Appointment.participant.required field
 */
export declare enum AppointmentParticipantRequiredEnum {
    REQUIRED = "required",
    OPTIONAL = "optional",
    INFORMATION_ONLY = "information-only"
}
/**
 * Code Values for the Appointment.participant.status field
 */
export declare enum AppointmentParticipantStatusEnum {
    ACCEPTED = "accepted",
    DECLINED = "declined",
    TENTATIVE = "tentative",
    NEEDS_ACTION = "needs-action"
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export interface IAppointment extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Appointment";
    /**
     * The style of appointment or patient that has been booked in the slot (not service type).
     */
    appointmentType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
     */
    cancelationReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
     * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: string | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
     */
    minutesDuration?: number | undefined;
    _minutesDuration?: fhirInterfaces.IElement | undefined;
    /**
     * List of participants involved in the appointment.
     */
    participant: fhirInterfaces.IAppointmentParticipant[];
    /**
     * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
     */
    patientInstruction?: string | undefined;
    _patientInstruction?: fhirInterfaces.IElement | undefined;
    /**
     * Seeking implementer feedback on this property and how interoperable it is.
     * Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
     */
    priority?: number | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * This does not introduce a capacity for recurring appointments.
     */
    requestedPeriod?: fhirInterfaces.IPeriod[] | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
     */
    serviceType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The slots from the participants' schedules that will be filled by the appointment.
     */
    slot?: fhirInterfaces.IReference[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: string | undefined;
    _start?: fhirInterfaces.IElement | undefined;
    /**
     * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
     * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
     */
    status: AppointmentStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Additional information to support the appointment provided when making the appointment.
     */
    supportingInformation?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Code Values for the Appointment.status field
 */
export declare enum AppointmentStatusEnum {
    PROPOSED = "proposed",
    PENDING = "pending",
    BOOKED = "booked",
    ARRIVED = "arrived",
    FULFILLED = "fulfilled",
    CANCELLED = "cancelled",
    NOSHOW = "noshow",
    ENTERED_IN_ERROR = "entered-in-error",
    CHECKED_IN = "checked-in",
    WAITLIST = "waitlist"
}
//# sourceMappingURL=IAppointment.d.ts.map
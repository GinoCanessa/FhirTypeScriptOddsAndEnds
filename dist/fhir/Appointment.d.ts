import * as fhir from '../fhir.js';
import { EncounterParticipantTypeValueSetType } from '../fhirValueSets/EncounterParticipantTypeValueSet.js';
import { ParticipantrequiredValueSetType, ParticipantrequiredValueSetEnum } from '../fhirValueSets/ParticipantrequiredValueSet.js';
import { ParticipationstatusValueSetType, ParticipationstatusValueSetEnum } from '../fhirValueSets/ParticipationstatusValueSet.js';
import { AppointmentstatusValueSetType, AppointmentstatusValueSetEnum } from '../fhirValueSets/AppointmentstatusValueSet.js';
import { AppointmentCancellationReasonValueSetType } from '../fhirValueSets/AppointmentCancellationReasonValueSet.js';
import { ServiceCategoryValueSetType } from '../fhirValueSets/ServiceCategoryValueSet.js';
import { ServiceTypeValueSetType } from '../fhirValueSets/ServiceTypeValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { V20276ValueSetType } from '../fhirValueSets/V20276ValueSet.js';
import { EncounterReasonValueSetType } from '../fhirValueSets/EncounterReasonValueSet.js';
/**
 * List of participants involved in the appointment.
 */
export declare type IAppointmentParticipant = fhir.IBackboneElement & {
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.IReference | undefined;
    /**
     * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: ParticipantrequiredValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Appointment.participant.required
     */
    _required?: fhir.IFhirElement | undefined;
    /**
     * Participation status of the actor.
     */
    status: ParticipationstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Appointment.participant.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Participation period of the actor.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export declare type IAppointment = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Appointment";
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
     * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
     */
    status: AppointmentstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Appointment.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
     */
    cancelationReason?: fhir.ICodeableConcept | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.ICodeableConcept[] | undefined;
    /**
     * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
     */
    serviceType?: fhir.ICodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * The style of appointment or patient that has been booked in the slot (not service type).
     */
    appointmentType?: fhir.ICodeableConcept | undefined;
    /**
     * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Seeking implementer feedback on this property and how interoperable it is.
     * Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
     */
    priority?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Additional information to support the appointment provided when making the appointment.
     */
    supportingInformation?: fhir.IReference[] | undefined;
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.end
     */
    _end?: fhir.IFhirElement | undefined;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
     */
    minutesDuration?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.minutesDuration
     */
    _minutesDuration?: fhir.IFhirElement | undefined;
    /**
     * The slots from the participants' schedules that will be filled by the appointment.
     */
    slot?: fhir.IReference[] | undefined;
    /**
     * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
     * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
     */
    patientInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.patientInstruction
     */
    _patientInstruction?: fhir.IFhirElement | undefined;
    /**
     * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * List of participants involved in the appointment.
     */
    participant: fhir.IAppointmentParticipant[] | null;
    /**
     * This does not introduce a capacity for recurring appointments.
     */
    requestedPeriod?: fhir.IPeriod[] | undefined;
};
/**
 * List of participants involved in the appointment.
 */
export declare class AppointmentParticipant extends fhir.BackboneElement implements IAppointmentParticipant {
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: ParticipantrequiredValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Appointment.participant.required
     */
    _required?: fhir.FhirElement | undefined;
    /**
     * Participation status of the actor.
     */
    status: ParticipationstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Appointment.participant.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Participation period of the actor.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for AppointmentParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAppointmentParticipant>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): EncounterParticipantTypeValueSetType;
    /**
     * Required-bound Value Set for required
     */
    requiredRequiredValueSet(): ParticipantrequiredValueSetType;
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ParticipationstatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export declare class Appointment extends fhir.DomainResource implements IAppointment {
    /**
     * Resource Type Name
     */
    resourceType: "Appointment";
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
     * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
     */
    status: AppointmentstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Appointment.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
     */
    cancelationReason?: fhir.CodeableConcept | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept[] | undefined;
    /**
     * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
     */
    serviceType?: fhir.CodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The style of appointment or patient that has been booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConcept | undefined;
    /**
     * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Seeking implementer feedback on this property and how interoperable it is.
     * Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
     */
    priority?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Additional information to support the appointment provided when making the appointment.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
     */
    minutesDuration?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.minutesDuration
     */
    _minutesDuration?: fhir.FhirElement | undefined;
    /**
     * The slots from the participants' schedules that will be filled by the appointment.
     */
    slot?: fhir.Reference[] | undefined;
    /**
     * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
     * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
     */
    patientInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.patientInstruction
     */
    _patientInstruction?: fhir.FhirElement | undefined;
    /**
     * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * List of participants involved in the appointment.
     */
    participant: fhir.AppointmentParticipant[] | null;
    /**
     * This does not introduce a capacity for recurring appointments.
     */
    requestedPeriod?: fhir.Period[] | undefined;
    /**
     * Default constructor for Appointment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAppointment>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): AppointmentstatusValueSetType;
    /**
     * Example-bound Value Set for cancelationReason
     */
    cancelationReasonExampleValueSet(): AppointmentCancellationReasonValueSetType;
    /**
     * Example-bound Value Set for serviceCategory
     */
    serviceCategoryExampleValueSet(): ServiceCategoryValueSetType;
    /**
     * Example-bound Value Set for serviceType
     */
    serviceTypeExampleValueSet(): ServiceTypeValueSetType;
    /**
     * Preferred-bound Value Set for specialty
     */
    specialtyPreferredValueSet(): C80PracticeCodesValueSetType;
    /**
     * Preferred-bound Value Set for appointmentType
     */
    appointmentTypePreferredValueSet(): V20276ValueSetType;
    /**
     * Preferred-bound Value Set for reasonCode
     */
    reasonCodePreferredValueSet(): EncounterReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Appointment.d.ts.map
import { Coding } from '../fhir';
/**
 * Is the Participant required to attend the appointment.
 */
export declare const ParticipantrequiredValueSet: {
    /**
     * The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).
     */
    participantrequired_InformationOnly: Coding;
    /**
     * The participant may optionally attend the appointment.
     */
    participantrequired_Optional: Coding;
    /**
     * The participant is required to attend the appointment.
     */
    participantrequired_Required: Coding;
};
//# sourceMappingURL=ParticipantrequiredValueSet.d.ts.map
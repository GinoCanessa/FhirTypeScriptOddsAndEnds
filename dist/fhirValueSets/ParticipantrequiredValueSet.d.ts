import { Coding } from '../fhir.js';
/**
 * Is the Participant required to attend the appointment.
 */
export declare const ParticipantrequiredValueSet: {
    /**
     * information-only: The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).
     */
    readonly InformationOnly: Coding;
    /**
     * optional: The participant may optionally attend the appointment.
     */
    readonly Optional: Coding;
    /**
     * required: The participant is required to attend the appointment.
     */
    readonly Required: Coding;
};
/**
 * Is the Participant required to attend the appointment.
 */
export declare type ParticipantrequiredValueSetType = typeof ParticipantrequiredValueSet;
/**
 * Is the Participant required to attend the appointment.
 */
//# sourceMappingURL=ParticipantrequiredValueSet.d.ts.map
import { Coding } from '../fhir.js';
/**
 * The Participation status of an appointment.
 */
export declare const ParticipationstatusValueSet: {
    /**
     * accepted: The participant has accepted the appointment.
     */
    readonly Accepted: Coding;
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    readonly Declined: Coding;
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    readonly NeedsAction: Coding;
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    readonly Tentative: Coding;
};
/**
 * The Participation status of an appointment.
 */
export declare type ParticipationstatusValueSetType = typeof ParticipationstatusValueSet;
/**
 * The Participation status of an appointment.
 */
export declare enum ParticipationstatusValueSetEnum {
    /**
     * accepted: The participant has accepted the appointment.
     */
    Accepted = "accepted",
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    Declined = "declined",
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    NeedsAction = "needs-action",
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    Tentative = "tentative"
}
//# sourceMappingURL=ParticipationstatusValueSet.d.ts.map
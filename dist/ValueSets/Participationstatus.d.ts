import { Coding } from '../strictmodels';
/**
 * The Participation status of an appointment.
 */
export declare const Participationstatus: {
    /**
     * The participant has accepted the appointment.
     */
    participationstatus_Accepted: Coding;
    /**
     * The participant has declined the appointment and will not participate in the appointment.
     */
    participationstatus_Declined: Coding;
    /**
     * The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    participationstatus_NeedsAction: Coding;
    /**
     * The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    participationstatus_Tentative: Coding;
};
//# sourceMappingURL=Participationstatus.d.ts.map
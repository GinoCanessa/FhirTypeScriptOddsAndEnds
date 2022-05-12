// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/participationstatus|4.0.1
/**
 * The Participation status of an appointment.
 */
export var ParticipationstatusValueSetEnum;
(function (ParticipationstatusValueSetEnum) {
    /**
     * accepted: The participant has accepted the appointment.
     */
    ParticipationstatusValueSetEnum["Accepted"] = "accepted";
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    ParticipationstatusValueSetEnum["Declined"] = "declined";
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    ParticipationstatusValueSetEnum["NeedsAction"] = "needs-action";
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    ParticipationstatusValueSetEnum["Tentative"] = "tentative";
})(ParticipationstatusValueSetEnum || (ParticipationstatusValueSetEnum = {}));
//# sourceMappingURL=ParticipationstatusValueSetEnum.js.map
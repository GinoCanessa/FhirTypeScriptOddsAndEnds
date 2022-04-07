/**
 * The Participation status of an appointment.
 */
export var Participationstatus = {
    /**
     * The participant has accepted the appointment.
     */
    participationstatus_Accepted: {
        code: "accepted",
        display: "Accepted",
        system: "http://hl7.org/fhir/participationstatus"
    },
    /**
     * The participant has declined the appointment and will not participate in the appointment.
     */
    participationstatus_Declined: {
        code: "declined",
        display: "Declined",
        system: "http://hl7.org/fhir/participationstatus"
    },
    /**
     * The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    participationstatus_NeedsAction: {
        code: "needs-action",
        display: "Needs Action",
        system: "http://hl7.org/fhir/participationstatus"
    },
    /**
     * The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    participationstatus_Tentative: {
        code: "tentative",
        display: "Tentative",
        system: "http://hl7.org/fhir/participationstatus"
    }
};
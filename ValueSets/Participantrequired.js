/**
 * Is the Participant required to attend the appointment.
 */
export var Participantrequired = {
    /**
     * The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).
     */
    participantrequired_InformationOnly: {
        code: "information-only",
        display: "Information Only",
        system: "http://hl7.org/fhir/participantrequired"
    },
    /**
     * The participant may optionally attend the appointment.
     */
    participantrequired_Optional: {
        code: "optional",
        display: "Optional",
        system: "http://hl7.org/fhir/participantrequired"
    },
    /**
     * The participant is required to attend the appointment.
     */
    participantrequired_Required: {
        code: "required",
        display: "Required",
        system: "http://hl7.org/fhir/participantrequired"
    }
};

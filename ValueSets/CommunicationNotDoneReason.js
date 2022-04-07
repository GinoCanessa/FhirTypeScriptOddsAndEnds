/**
 * Codes for the reason why a communication did not happen.
 */
export var CommunicationNotDoneReason = {
    /**
     * The communication was not done due to a family objection.
     */
    communication_not_done_reason_FamilyObjection: {
        code: "family-objection",
        display: "Family Objection",
        system: "http://terminology.hl7.org/CodeSystem/communication-not-done-reason"
    },
    /**
     * The communication was not done due to an invalid phone number.
     */
    communication_not_done_reason_InvalidPhoneNumber: {
        code: "invalid-phone-number",
        display: "Invalid Phone Number",
        system: "http://terminology.hl7.org/CodeSystem/communication-not-done-reason"
    },
    /**
     * The communication was not done due to a patient objection.
     */
    communication_not_done_reason_PatientObjection: {
        code: "patient-objection",
        display: "Patient Objection",
        system: "http://terminology.hl7.org/CodeSystem/communication-not-done-reason"
    },
    /**
     * The communication was not done due to the recipient being unavailable.
     */
    communication_not_done_reason_RecipientUnavailable: {
        code: "recipient-unavailable",
        display: "Recipient Unavailable",
        system: "http://terminology.hl7.org/CodeSystem/communication-not-done-reason"
    },
    /**
     * The communication was not done due to a system error.
     */
    communication_not_done_reason_SystemError: {
        code: "system-error",
        display: "System Error",
        system: "http://terminology.hl7.org/CodeSystem/communication-not-done-reason"
    },
    /**
     * The communication was not done due to an unknown reason.
     */
    communication_not_done_reason_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://terminology.hl7.org/CodeSystem/communication-not-done-reason"
    }
};

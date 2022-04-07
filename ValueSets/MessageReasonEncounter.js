/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export var MessageReasonEncounter = {
    /**
     * The patient has temporarily left the institution.
     */
    message_reason_encounter_Absent: {
        code: "absent",
        display: "Absent",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    },
    /**
     * The patient has been admitted.
     */
    message_reason_encounter_Admit: {
        code: "admit",
        display: "Admit",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    },
    /**
     * The patient has been discharged.
     */
    message_reason_encounter_Discharge: {
        code: "discharge",
        display: "Discharge",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    },
    /**
     * Encounter details have been updated (e.g. to correct a coding error).
     */
    message_reason_encounter_Edit: {
        code: "edit",
        display: "Edit",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    },
    /**
     * The patient has been moved to a new location.
     */
    message_reason_encounter_Moved: {
        code: "moved",
        display: "Moved",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    },
    /**
     * The patient has returned from a temporary absence.
     */
    message_reason_encounter_Returned: {
        code: "return",
        display: "Returned",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }
};

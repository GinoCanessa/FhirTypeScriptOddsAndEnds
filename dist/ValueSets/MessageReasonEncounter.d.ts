import { Coding } from '../strictmodels';
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare const MessageReasonEncounter: {
    /**
     * The patient has temporarily left the institution.
     */
    message_reason_encounter_Absent: Coding;
    /**
     * The patient has been admitted.
     */
    message_reason_encounter_Admit: Coding;
    /**
     * The patient has been discharged.
     */
    message_reason_encounter_Discharge: Coding;
    /**
     * Encounter details have been updated (e.g. to correct a coding error).
     */
    message_reason_encounter_Edit: Coding;
    /**
     * The patient has been moved to a new location.
     */
    message_reason_encounter_Moved: Coding;
    /**
     * The patient has returned from a temporary absence.
     */
    message_reason_encounter_Returned: Coding;
};
//# sourceMappingURL=MessageReasonEncounter.d.ts.map
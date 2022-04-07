import { Coding } from '../strictmodels';
/**
 * Current state of the encounter.
 */
export declare const EncounterStatus: {
    /**
     * The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    encounter_status_Arrived: Coding;
    /**
     * The Encounter has ended before it has begun.
     */
    encounter_status_Cancelled: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    encounter_status_EnteredInError: Coding;
    /**
     * The Encounter has ended.
     */
    encounter_status_Finished: Coding;
    /**
     * The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    encounter_status_InProgress: Coding;
    /**
     * The Encounter has begun, but the patient is temporarily on leave.
     */
    encounter_status_OnLeave: Coding;
    /**
     * The Encounter has not yet started.
     */
    encounter_status_Planned: Coding;
    /**
     * The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    encounter_status_Triaged: Coding;
    /**
     * The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    encounter_status_Unknown: Coding;
};
//# sourceMappingURL=EncounterStatus.d.ts.map
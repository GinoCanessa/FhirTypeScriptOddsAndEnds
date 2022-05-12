/**
 * Current state of the encounter.
 */
export declare enum EncounterStatusValueSetEnum {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    Arrived = "arrived",
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    Cancelled = "cancelled",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError = "entered-in-error",
    /**
     * finished: The Encounter has ended.
     */
    Finished = "finished",
    /**
     * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    InProgress = "in-progress",
    /**
     * onleave: The Encounter has begun, but the patient is temporarily on leave.
     */
    OnLeave = "onleave",
    /**
     * planned: The Encounter has not yet started.
     */
    Planned = "planned",
    /**
     * triaged: The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    Triaged = "triaged",
    /**
     * unknown: The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    Unknown = "unknown"
}
//# sourceMappingURL=EncounterStatusValueSetEnum.d.ts.map
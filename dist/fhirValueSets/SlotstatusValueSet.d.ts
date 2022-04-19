import { Coding } from '../fhir';
/**
 * The free/busy status of the slot.
 */
export declare const SlotstatusValueSet: {
    /**
     * Indicates that the time interval is busy because one  or more events have been scheduled for that interval.
     */
    slotstatus_Busy: Coding;
    /**
     * Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.
     */
    slotstatus_BusyTentative: Coding;
    /**
     * Indicates that the time interval is busy and that the interval cannot be scheduled.
     */
    slotstatus_BusyUnavailable: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    slotstatus_EnteredInError: Coding;
    /**
     * Indicates that the time interval is free for scheduling.
     */
    slotstatus_Free: Coding;
};
//# sourceMappingURL=SlotstatusValueSet.d.ts.map
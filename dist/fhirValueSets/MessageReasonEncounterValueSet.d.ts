import { Coding } from '../fhir.js';
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare const MessageReasonEncounterValueSet: {
    /**
     * absent: The patient has temporarily left the institution.
     */
    readonly Absent: Coding;
    /**
     * admit: The patient has been admitted.
     */
    readonly Admit: Coding;
    /**
     * discharge: The patient has been discharged.
     */
    readonly Discharge: Coding;
    /**
     * edit: Encounter details have been updated (e.g. to correct a coding error).
     */
    readonly Edit: Coding;
    /**
     * moved: The patient has been moved to a new location.
     */
    readonly Moved: Coding;
    /**
     * return: The patient has returned from a temporary absence.
     */
    readonly Returned: Coding;
};
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare type MessageReasonEncounterValueSetType = typeof MessageReasonEncounterValueSet;
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
//# sourceMappingURL=MessageReasonEncounterValueSet.d.ts.map
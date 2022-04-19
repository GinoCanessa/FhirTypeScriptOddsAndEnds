import { Coding } from '../fhir';
/**
 * A code that identifies the status of the family history record.
 */
export declare const HistoryStatusValueSet: {
    /**
     * All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    history_status_Completed: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    history_status_EnteredInError: Coding;
    /**
     * Health information for this family member is unavailable/unknown.
     */
    history_status_HealthUnknown: Coding;
    /**
     * Some health information is known and captured, but not complete - see notes for details.
     */
    history_status_Partial: Coding;
};
//# sourceMappingURL=HistoryStatusValueSet.d.ts.map
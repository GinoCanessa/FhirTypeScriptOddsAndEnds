import { Coding } from '../strictmodels';
/**
 * The current state of the list.
 */
export declare const ListStatus: {
    /**
     * The list is considered to be an active part of the patient's record.
     */
    list_status_Current: Coding;
    /**
     * The list was never accurate.  It is retained for medico-legal purposes only.
     */
    list_status_EnteredInError: Coding;
    /**
     * The list is "old" and should no longer be considered accurate or relevant.
     */
    list_status_Retired: Coding;
};
//# sourceMappingURL=ListStatus.d.ts.map
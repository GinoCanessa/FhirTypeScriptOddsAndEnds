import { Coding } from '../fhir';
/**
 * The processing mode that applies to this list.
 */
export declare const ListModeValueSet: {
    /**
     * A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.
     */
    list_mode_ChangeList: Coding;
    /**
     * This list was prepared as a snapshot. It should not be assumed to be current.
     */
    list_mode_SnapshotList: Coding;
    /**
     * This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.
     */
    list_mode_WorkingList: Coding;
};
//# sourceMappingURL=ListModeValueSet.d.ts.map
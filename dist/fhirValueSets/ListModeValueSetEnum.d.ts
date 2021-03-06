/**
 * The processing mode that applies to this list.
 */
export declare enum ListModeValueSetEnum {
    /**
     * changes: A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.
     */
    ChangeList = "changes",
    /**
     * snapshot: This list was prepared as a snapshot. It should not be assumed to be current.
     */
    SnapshotList = "snapshot",
    /**
     * working: This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.
     */
    WorkingList = "working"
}
//# sourceMappingURL=ListModeValueSetEnum.d.ts.map
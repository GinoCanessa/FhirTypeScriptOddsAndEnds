"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMode = void 0;
/**
 * The processing mode that applies to this list.
 */
exports.ListMode = {
    /**
     * A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.
     */
    list_mode_ChangeList: {
        code: "changes",
        display: "Change List",
        system: "http://hl7.org/fhir/list-mode"
    },
    /**
     * This list was prepared as a snapshot. It should not be assumed to be current.
     */
    list_mode_SnapshotList: {
        code: "snapshot",
        display: "Snapshot List",
        system: "http://hl7.org/fhir/list-mode"
    },
    /**
     * This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.
     */
    list_mode_WorkingList: {
        code: "working",
        display: "Working List",
        system: "http://hl7.org/fhir/list-mode"
    },
};
//# sourceMappingURL=ListMode.js.map
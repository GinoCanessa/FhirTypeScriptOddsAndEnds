"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterStatusEnum = exports.EncounterLocationStatusEnum = exports.EncounterStatusHistoryStatusEnum = void 0;
/**
 * Code Values for the Encounter.statusHistory.status field
 */
var EncounterStatusHistoryStatusEnum;
(function (EncounterStatusHistoryStatusEnum) {
    EncounterStatusHistoryStatusEnum["PLANNED"] = "planned";
    EncounterStatusHistoryStatusEnum["ARRIVED"] = "arrived";
    EncounterStatusHistoryStatusEnum["TRIAGED"] = "triaged";
    EncounterStatusHistoryStatusEnum["IN_PROGRESS"] = "in-progress";
    EncounterStatusHistoryStatusEnum["ONLEAVE"] = "onleave";
    EncounterStatusHistoryStatusEnum["FINISHED"] = "finished";
    EncounterStatusHistoryStatusEnum["CANCELLED"] = "cancelled";
    EncounterStatusHistoryStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterStatusHistoryStatusEnum["UNKNOWN"] = "unknown";
})(EncounterStatusHistoryStatusEnum = exports.EncounterStatusHistoryStatusEnum || (exports.EncounterStatusHistoryStatusEnum = {}));
/**
 * Code Values for the Encounter.location.status field
 */
var EncounterLocationStatusEnum;
(function (EncounterLocationStatusEnum) {
    EncounterLocationStatusEnum["PLANNED"] = "planned";
    EncounterLocationStatusEnum["ACTIVE"] = "active";
    EncounterLocationStatusEnum["RESERVED"] = "reserved";
    EncounterLocationStatusEnum["COMPLETED"] = "completed";
})(EncounterLocationStatusEnum = exports.EncounterLocationStatusEnum || (exports.EncounterLocationStatusEnum = {}));
/**
 * Code Values for the Encounter.status field
 */
var EncounterStatusEnum;
(function (EncounterStatusEnum) {
    EncounterStatusEnum["PLANNED"] = "planned";
    EncounterStatusEnum["ARRIVED"] = "arrived";
    EncounterStatusEnum["TRIAGED"] = "triaged";
    EncounterStatusEnum["IN_PROGRESS"] = "in-progress";
    EncounterStatusEnum["ONLEAVE"] = "onleave";
    EncounterStatusEnum["FINISHED"] = "finished";
    EncounterStatusEnum["CANCELLED"] = "cancelled";
    EncounterStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterStatusEnum["UNKNOWN"] = "unknown";
})(EncounterStatusEnum = exports.EncounterStatusEnum || (exports.EncounterStatusEnum = {}));
//# sourceMappingURL=IEncounter.js.map
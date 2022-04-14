"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStatusEnum = exports.ListModeEnum = void 0;
/**
 * Code Values for the List.mode field
 */
var ListModeEnum;
(function (ListModeEnum) {
    ListModeEnum["WORKING"] = "working";
    ListModeEnum["SNAPSHOT"] = "snapshot";
    ListModeEnum["CHANGES"] = "changes";
})(ListModeEnum = exports.ListModeEnum || (exports.ListModeEnum = {}));
/**
 * Code Values for the List.status field
 */
var ListStatusEnum;
(function (ListStatusEnum) {
    ListStatusEnum["CURRENT"] = "current";
    ListStatusEnum["RETIRED"] = "retired";
    ListStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ListStatusEnum = exports.ListStatusEnum || (exports.ListStatusEnum = {}));
//# sourceMappingURL=IList.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStatus = void 0;
/**
 * The current state of the list.
 */
exports.ListStatus = {
    /**
     * The list is considered to be an active part of the patient's record.
     */
    list_status_Current: {
        code: "current",
        display: "Current",
        system: "http://hl7.org/fhir/list-status"
    },
    /**
     * The list was never accurate.  It is retained for medico-legal purposes only.
     */
    list_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered In Error",
        system: "http://hl7.org/fhir/list-status"
    },
    /**
     * The list is "old" and should no longer be considered accurate or relevant.
     */
    list_status_Retired: {
        code: "retired",
        display: "Retired",
        system: "http://hl7.org/fhir/list-status"
    },
};
//# sourceMappingURL=ListStatus.js.map
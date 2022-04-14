"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceStatementStatus = void 0;
/**
 * A coded concept indicating the current status of the Device Usage.
 */
exports.DeviceStatementStatus = {
    /**
     * The device is still being used.
     */
    device_statement_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/device-statement-status"
    },
    /**
     * The device is no longer being used.
     */
    device_statement_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/device-statement-status"
    },
    /**
     * The statement was recorded incorrectly.
     */
    device_statement_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/device-statement-status"
    },
    /**
     * The device may be used at some time in the future.
     */
    device_statement_status_Intended: {
        code: "intended",
        display: "Intended",
        system: "http://hl7.org/fhir/device-statement-status"
    },
    /**
     * Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    device_statement_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/device-statement-status"
    },
    /**
     * Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    device_statement_status_Stopped: {
        code: "stopped",
        display: "Stopped",
        system: "http://hl7.org/fhir/device-statement-status"
    },
};
//# sourceMappingURL=DeviceStatementStatus.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicalimpressionStatus = void 0;
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
exports.ClinicalimpressionStatus = {
    /**
     * The event has now concluded.
     */
    event_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/event-status"
    },
    /**
     * This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    event_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/event-status"
    },
    /**
     * The event is currently occurring.
     */
    event_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/event-status"
    },
};
//# sourceMappingURL=ClinicalimpressionStatus.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCapabilityMode = void 0;
/**
 * The mode of a message capability statement.
 */
exports.EventCapabilityMode = {
    /**
     * The application receives requests and sends responses.
     */
    event_capability_mode_Receiver: {
        code: "receiver",
        display: "Receiver",
        system: "http://hl7.org/fhir/event-capability-mode"
    },
    /**
     * The application sends requests and receives responses.
     */
    event_capability_mode_Sender: {
        code: "sender",
        display: "Sender",
        system: "http://hl7.org/fhir/event-capability-mode"
    },
};
//# sourceMappingURL=EventCapabilityMode.js.map
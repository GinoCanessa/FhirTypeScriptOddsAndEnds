"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionEventSeverity = void 0;
/**
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 */
exports.ReactionEventSeverity = {
    /**
     * Causes mild physiological effects.
     */
    reaction_event_severity_Mild: {
        code: "mild",
        display: "Mild",
        system: "http://hl7.org/fhir/reaction-event-severity"
    },
    /**
     * Causes moderate physiological effects.
     */
    reaction_event_severity_Moderate: {
        code: "moderate",
        display: "Moderate",
        system: "http://hl7.org/fhir/reaction-event-severity"
    },
    /**
     * Causes severe physiological effects.
     */
    reaction_event_severity_Severe: {
        code: "severe",
        display: "Severe",
        system: "http://hl7.org/fhir/reaction-event-severity"
    },
};
//# sourceMappingURL=ReactionEventSeverity.js.map
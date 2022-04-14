"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdverseEventActuality = void 0;
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
exports.AdverseEventActuality = {
    /**
     * The adverse event actually happened regardless of whether anyone was affected or harmed.
     */
    adverse_event_actuality_AdverseEvent: {
        code: "actual",
        display: "Adverse Event",
        system: "http://hl7.org/fhir/adverse-event-actuality"
    },
    /**
     * A potential adverse event.
     */
    adverse_event_actuality_PotentialAdverseEvent: {
        code: "potential",
        display: "Potential Adverse Event",
        system: "http://hl7.org/fhir/adverse-event-actuality"
    },
};
//# sourceMappingURL=AdverseEventActuality.js.map
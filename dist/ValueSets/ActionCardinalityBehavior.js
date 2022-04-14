"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCardinalityBehavior = void 0;
/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 */
exports.ActionCardinalityBehavior = {
    /**
     * The action may be selected multiple times.
     */
    action_cardinality_behavior_Multiple: {
        code: "multiple",
        display: "Multiple",
        system: "http://hl7.org/fhir/action-cardinality-behavior"
    },
    /**
     * The action may only be selected one time.
     */
    action_cardinality_behavior_Single: {
        code: "single",
        display: "Single",
        system: "http://hl7.org/fhir/action-cardinality-behavior"
    },
};
//# sourceMappingURL=ActionCardinalityBehavior.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphCompartmentUse = void 0;
/**
 * Defines how a compartment rule is used.
 */
exports.GraphCompartmentUse = {
    /**
     * This compartment rule is a condition for whether the rule applies.
     */
    graph_compartment_use_Condition: {
        code: "condition",
        display: "Condition",
        system: "http://hl7.org/fhir/graph-compartment-use"
    },
    /**
     * This compartment rule is enforced on any relationships that meet the conditions.
     */
    graph_compartment_use_Requirement: {
        code: "requirement",
        display: "Requirement",
        system: "http://hl7.org/fhir/graph-compartment-use"
    },
};
//# sourceMappingURL=GraphCompartmentUse.js.map
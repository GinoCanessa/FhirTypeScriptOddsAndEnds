"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintSeverity = void 0;
/**
 * SHALL applications comply with this constraint?
 */
exports.ConstraintSeverity = {
    /**
     * If the constraint is violated, the resource is not conformant.
     */
    constraint_severity_Error: {
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/constraint-severity"
    },
    /**
     * If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
     */
    constraint_severity_Warning: {
        code: "warning",
        display: "Warning",
        system: "http://hl7.org/fhir/constraint-severity"
    },
};
//# sourceMappingURL=ConstraintSeverity.js.map
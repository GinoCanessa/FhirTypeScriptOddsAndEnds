/**
 * SHALL applications comply with this constraint?
 */
export var ConstraintSeverity = {
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
    }
};

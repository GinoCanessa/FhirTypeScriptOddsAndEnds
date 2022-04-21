import { Coding } from '../fhir.js';
/**
 * SHALL applications comply with this constraint?
 */
export declare const ConstraintSeverityValueSet: {
    /**
     * error: If the constraint is violated, the resource is not conformant.
     */
    readonly Error: Coding;
    /**
     * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
     */
    readonly Warning: Coding;
};
/**
 * SHALL applications comply with this constraint?
 */
export declare type ConstraintSeverityValueSetType = typeof ConstraintSeverityValueSet;
/**
 * SHALL applications comply with this constraint?
 */
export declare enum ConstraintSeverityValueSetEnum {
    /**
     * error: If the constraint is violated, the resource is not conformant.
     */
    Error = "error",
    /**
     * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
     */
    Warning = "warning"
}
//# sourceMappingURL=ConstraintSeverityValueSet.d.ts.map
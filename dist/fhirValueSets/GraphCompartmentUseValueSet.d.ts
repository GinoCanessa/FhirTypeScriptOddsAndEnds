import { Coding } from '../fhir.js';
/**
 * Defines how a compartment rule is used.
 */
export declare const GraphCompartmentUseValueSet: {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    readonly Condition: Coding;
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    readonly Requirement: Coding;
};
/**
 * Defines how a compartment rule is used.
 */
export declare type GraphCompartmentUseValueSetType = typeof GraphCompartmentUseValueSet;
/**
 * Defines how a compartment rule is used.
 */
export declare enum GraphCompartmentUseValueSetEnum {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    Condition = "condition",
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    Requirement = "requirement"
}
//# sourceMappingURL=GraphCompartmentUseValueSet.d.ts.map
import { Coding } from '../fhir.js';
/**
 * How a type relates to its baseDefinition.
 */
export declare const TypeDerivationRuleValueSet: {
    /**
     * constraint: This definition adds additional rules to an existing concrete type.
     */
    readonly Constraint: Coding;
    /**
     * specialization: This definition defines a new type that adds additional elements to the base type.
     */
    readonly Specialization: Coding;
};
/**
 * How a type relates to its baseDefinition.
 */
export declare type TypeDerivationRuleValueSetType = typeof TypeDerivationRuleValueSet;
/**
 * How a type relates to its baseDefinition.
 */
export declare enum TypeDerivationRuleValueSetEnum {
    /**
     * constraint: This definition adds additional rules to an existing concrete type.
     */
    Constraint = "constraint",
    /**
     * specialization: This definition defines a new type that adds additional elements to the base type.
     */
    Specialization = "specialization"
}
//# sourceMappingURL=TypeDerivationRuleValueSet.d.ts.map
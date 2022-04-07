/**
 * How a type relates to its baseDefinition.
 */
export var TypeDerivationRule = {
    /**
     * This definition adds additional rules to an existing concrete type.
     */
    type_derivation_rule_Constraint: {
        code: "constraint",
        display: "Constraint",
        system: "http://hl7.org/fhir/type-derivation-rule"
    },
    /**
     * This definition defines a new type that adds additional elements to the base type.
     */
    type_derivation_rule_Specialization: {
        code: "specialization",
        display: "Specialization",
        system: "http://hl7.org/fhir/type-derivation-rule"
    }
};

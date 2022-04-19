import { Coding } from '../fhir';
/**
 * How a compartment must be linked.
 */
export declare const GraphCompartmentRuleValueSet: {
    /**
     * The compartment rule is defined in the accompanying FHIRPath expression.
     */
    graph_compartment_rule_Custom: Coding;
    /**
     * The compartment must be different.
     */
    graph_compartment_rule_Different: Coding;
    /**
     * The compartment must be identical (the same literal reference).
     */
    graph_compartment_rule_Identical: Coding;
    /**
     * The compartment must be the same - the record must be about the same patient, but the reference may be different.
     */
    graph_compartment_rule_Matching: Coding;
};
//# sourceMappingURL=GraphCompartmentRuleValueSet.d.ts.map
import { Coding } from '../strictmodels';
/**
 * How a compartment must be linked.
 */
export declare const GraphCompartmentRule: {
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
//# sourceMappingURL=GraphCompartmentRule.d.ts.map
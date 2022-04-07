/**
 * How a compartment must be linked.
 */
export var GraphCompartmentRule = {
    /**
     * The compartment rule is defined in the accompanying FHIRPath expression.
     */
    graph_compartment_rule_Custom: {
        code: "custom",
        display: "Custom",
        system: "http://hl7.org/fhir/graph-compartment-rule"
    },
    /**
     * The compartment must be different.
     */
    graph_compartment_rule_Different: {
        code: "different",
        display: "Different",
        system: "http://hl7.org/fhir/graph-compartment-rule"
    },
    /**
     * The compartment must be identical (the same literal reference).
     */
    graph_compartment_rule_Identical: {
        code: "identical",
        display: "Identical",
        system: "http://hl7.org/fhir/graph-compartment-rule"
    },
    /**
     * The compartment must be the same - the record must be about the same patient, but the reference may be different.
     */
    graph_compartment_rule_Matching: {
        code: "matching",
        display: "Matching",
        system: "http://hl7.org/fhir/graph-compartment-rule"
    }
};

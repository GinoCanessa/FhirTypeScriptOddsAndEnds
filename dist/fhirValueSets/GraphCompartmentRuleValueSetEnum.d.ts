/**
 * How a compartment must be linked.
 */
export declare enum GraphCompartmentRuleValueSetEnum {
    /**
     * custom: The compartment rule is defined in the accompanying FHIRPath expression.
     */
    Custom = "custom",
    /**
     * different: The compartment must be different.
     */
    Different = "different",
    /**
     * identical: The compartment must be identical (the same literal reference).
     */
    Identical = "identical",
    /**
     * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different.
     */
    Matching = "matching"
}
//# sourceMappingURL=GraphCompartmentRuleValueSetEnum.d.ts.map
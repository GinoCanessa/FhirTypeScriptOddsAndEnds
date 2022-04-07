/**
 * How resource references can be aggregated.
 */
export var ResourceAggregationMode = {
    /**
     * The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    resource_aggregation_mode_Bundled: {
        code: "bundled",
        display: "Bundled",
        system: "http://hl7.org/fhir/resource-aggregation-mode"
    },
    /**
     * The reference is a local reference to a contained resource.
     */
    resource_aggregation_mode_Contained: {
        code: "contained",
        display: "Contained",
        system: "http://hl7.org/fhir/resource-aggregation-mode"
    },
    /**
     * The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    resource_aggregation_mode_Referenced: {
        code: "referenced",
        display: "Referenced",
        system: "http://hl7.org/fhir/resource-aggregation-mode"
    }
};

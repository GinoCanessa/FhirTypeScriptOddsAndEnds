/**
 * How resource references can be aggregated.
 */
export declare enum ResourceAggregationModeValueSetEnum {
    /**
     * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    Bundled = "bundled",
    /**
     * contained: The reference is a local reference to a contained resource.
     */
    Contained = "contained",
    /**
     * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    Referenced = "referenced"
}
//# sourceMappingURL=ResourceAggregationModeValueSetEnum.d.ts.map
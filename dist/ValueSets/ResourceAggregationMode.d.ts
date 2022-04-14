import { Coding } from '../strictmodels';
/**
 * How resource references can be aggregated.
 */
export declare const ResourceAggregationMode: {
    /**
     * The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    resource_aggregation_mode_Bundled: Coding;
    /**
     * The reference is a local reference to a contained resource.
     */
    resource_aggregation_mode_Contained: Coding;
    /**
     * The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    resource_aggregation_mode_Referenced: Coding;
};
//# sourceMappingURL=ResourceAggregationMode.d.ts.map
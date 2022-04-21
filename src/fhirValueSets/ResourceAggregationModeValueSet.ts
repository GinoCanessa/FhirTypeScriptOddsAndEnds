// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/resource-aggregation-mode|4.0.1

import { Coding } from '../fhir.js'

/**
 * How resource references can be aggregated.
 */
export const ResourceAggregationModeValueSet = {
  /**
   * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
   */
  Bundled: new Coding({
    display: "Bundled",
    code: "bundled",
    system: "http://hl7.org/fhir/resource-aggregation-mode",
  }),
  /**
   * contained: The reference is a local reference to a contained resource.
   */
  Contained: new Coding({
    display: "Contained",
    code: "contained",
    system: "http://hl7.org/fhir/resource-aggregation-mode",
  }),
  /**
   * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
   */
  Referenced: new Coding({
    display: "Referenced",
    code: "referenced",
    system: "http://hl7.org/fhir/resource-aggregation-mode",
  }),
} as const;

/**
 * How resource references can be aggregated.
 */
export type ResourceAggregationModeValueSetType = typeof ResourceAggregationModeValueSet;

/**
 * How resource references can be aggregated.
 */
export enum ResourceAggregationModeValueSetEnum {
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
  Referenced = "referenced",
}

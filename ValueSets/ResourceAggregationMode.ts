// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * How resource references can be aggregated.
 */
export const ResourceAggregationMode = {
  /**
   * The resource the reference points to will be found in the same bundle as the resource that includes the reference.
   */
  resource_aggregation_mode_Bundled: {
    code: "bundled",
    display: "Bundled",
    system: "http://hl7.org/fhir/resource-aggregation-mode"
  } as Coding,
  /**
   * The reference is a local reference to a contained resource.
   */
  resource_aggregation_mode_Contained: {
    code: "contained",
    display: "Contained",
    system: "http://hl7.org/fhir/resource-aggregation-mode"
  } as Coding,
  /**
   * The reference to a resource that has to be resolved externally to the resource that includes the reference.
   */
  resource_aggregation_mode_Referenced: {
    code: "referenced",
    display: "Referenced",
    system: "http://hl7.org/fhir/resource-aggregation-mode"
  } as Coding,
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * How resource references can be aggregated.
 */
export const ResourceAggregationModeValueSet = {
  /**
   * The resource the reference points to will be found in the same bundle as the resource that includes the reference.
   */
  resource_aggregation_mode_Bundled: new Coding({
    code: "bundled",
    display: "Bundled",
    system: "http://hl7.org/fhir/resource-aggregation-mode"
  }),
  /**
   * The reference is a local reference to a contained resource.
   */
  resource_aggregation_mode_Contained: new Coding({
    code: "contained",
    display: "Contained",
    system: "http://hl7.org/fhir/resource-aggregation-mode"
  }),
  /**
   * The reference to a resource that has to be resolved externally to the resource that includes the reference.
   */
  resource_aggregation_mode_Referenced: new Coding({
    code: "referenced",
    display: "Referenced",
    system: "http://hl7.org/fhir/resource-aggregation-mode"
  }),
};

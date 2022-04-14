// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface IRange extends fhirInterfaces.IElement {
  /**
   * If the high element is missing, the high boundary is not known.
   */
  high?: fhirInterfaces.IQuantity|undefined;
  /**
   * If the low element is missing, the low boundary is not known.
   */
  low?: fhirInterfaces.IQuantity|undefined;
}

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Biologically Derived Product Status.
 */
export const ProductStatus = {
  /**
   * Product is currently available for use.
   */
  product_status_Available: {
    code: "available",
    display: "Available",
    system: "http://hl7.org/fhir/product-status"
  } as Coding,
  /**
   * Product is not currently available for use.
   */
  product_status_Unavailable: {
    code: "unavailable",
    display: "Unavailable",
    system: "http://hl7.org/fhir/product-status"
  } as Coding,
};

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * This value set includes a smattering of Prescription Product codes.
 */
export const VisionProduct = {
  /**
   * A lens to be fitted for wearing directly on an eye.
   */
  vision_product_ContactLens: {
    code: "contact",
    display: "Contact Lens",
    system: "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct"
  } as Coding,
  /**
   * A lens to be fitted to a frame to comprise a pair of glasses.
   */
  vision_product_Lens: {
    code: "lens",
    display: "Lens",
    system: "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct"
  } as Coding,
};

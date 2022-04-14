// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * BiologicallyDerived Product Storage Scale.
 */
export const ProductStorageScale = {
  /**
   * Celsius or centigrade temperature scale.
   */
  product_storage_scale_Celsius: {
    code: "celsius",
    display: "Celsius",
    system: "http://hl7.org/fhir/product-storage-scale"
  } as Coding,
  /**
   * Fahrenheit temperature scale.
   */
  product_storage_scale_Fahrenheit: {
    code: "farenheit",
    display: "Fahrenheit",
    system: "http://hl7.org/fhir/product-storage-scale"
  } as Coding,
  /**
   * Kelvin absolute thermodynamic temperature scale.
   */
  product_storage_scale_Kelvin: {
    code: "kelvin",
    display: "Kelvin",
    system: "http://hl7.org/fhir/product-storage-scale"
  } as Coding,
};

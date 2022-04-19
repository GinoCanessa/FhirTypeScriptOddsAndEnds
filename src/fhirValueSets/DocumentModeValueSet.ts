// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Whether the application produces or consumes documents.
 */
export const DocumentModeValueSet = {
  /**
   * The application consumes documents of the specified type.
   */
  document_mode_Consumer: Coding.FromStrict({
    code: "consumer",
    display: "Consumer",
    system: "http://hl7.org/fhir/document-mode"
  }),
  /**
   * The application produces documents of the specified type.
   */
  document_mode_Producer: Coding.FromStrict({
    code: "producer",
    display: "Producer",
    system: "http://hl7.org/fhir/document-mode"
  }),
};

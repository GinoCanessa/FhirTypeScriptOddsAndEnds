// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * A code that indicates how the server supports conditional delete.
 */
export const ConditionalDeleteStatus = {
  /**
   * Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
   */
  conditional_delete_status_MultipleDeletesSupported: {
    code: "multiple",
    display: "Multiple Deletes Supported",
    system: "http://hl7.org/fhir/conditional-delete-status"
  } as Coding,
  /**
   * No support for conditional deletes.
   */
  conditional_delete_status_NotSupported: {
    code: "not-supported",
    display: "Not Supported",
    system: "http://hl7.org/fhir/conditional-delete-status"
  } as Coding,
  /**
   * Conditional deletes are supported, but only single resources at a time.
   */
  conditional_delete_status_SingleDeletesSupported: {
    code: "single",
    display: "Single Deletes Supported",
    system: "http://hl7.org/fhir/conditional-delete-status"
  } as Coding,
};

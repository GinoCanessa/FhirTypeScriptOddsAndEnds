// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * This value set includes Status codes.
 */
export const FmStatus = {
  /**
   * The instance is currently in-force.
   */
  fm_status_Active: {
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/fm-status"
  } as Coding,
  /**
   * The instance is withdrawn, rescinded or reversed.
   */
  fm_status_Cancelled: {
    code: "cancelled",
    display: "Cancelled",
    system: "http://hl7.org/fhir/fm-status"
  } as Coding,
  /**
   * A new instance the contents of which is not complete.
   */
  fm_status_Draft: {
    code: "draft",
    display: "Draft",
    system: "http://hl7.org/fhir/fm-status"
  } as Coding,
  /**
   * The instance was entered in error.
   */
  fm_status_EnteredInError: {
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/fm-status"
  } as Coding,
};

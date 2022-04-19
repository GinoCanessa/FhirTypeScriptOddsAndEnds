// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * SHALL applications comply with this constraint?
 */
export const ConstraintSeverityValueSet = {
  /**
   * If the constraint is violated, the resource is not conformant.
   */
  constraint_severity_Error: new Coding({
    code: "error",
    display: "Error",
    system: "http://hl7.org/fhir/constraint-severity"
  }),
  /**
   * If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
   */
  constraint_severity_Warning: new Coding({
    code: "warning",
    display: "Warning",
    system: "http://hl7.org/fhir/constraint-severity"
  }),
};

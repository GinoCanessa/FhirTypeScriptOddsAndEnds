// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Defines how a compartment rule is used.
 */
export const GraphCompartmentUse = {
  /**
   * This compartment rule is a condition for whether the rule applies.
   */
  graph_compartment_use_Condition: {
    code: "condition",
    display: "Condition",
    system: "http://hl7.org/fhir/graph-compartment-use"
  } as Coding,
  /**
   * This compartment rule is enforced on any relationships that meet the conditions.
   */
  graph_compartment_use_Requirement: {
    code: "requirement",
    display: "Requirement",
    system: "http://hl7.org/fhir/graph-compartment-use"
  } as Coding,
};

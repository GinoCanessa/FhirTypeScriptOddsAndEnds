// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Identifies the purpose of the naming system.
 */
export const NamingsystemTypeValueSet = {
  /**
   * The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
   */
  namingsystem_type_CodeSystem: Coding.FromStrict({
    code: "codesystem",
    display: "Code System",
    system: "http://hl7.org/fhir/namingsystem-type"
  }),
  /**
   * The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
   */
  namingsystem_type_Identifier: Coding.FromStrict({
    code: "identifier",
    display: "Identifier",
    system: "http://hl7.org/fhir/namingsystem-type"
  }),
  /**
   * The naming system is used as the root for other identifiers and naming systems.
   */
  namingsystem_type_Root: Coding.FromStrict({
    code: "root",
    display: "Root",
    system: "http://hl7.org/fhir/namingsystem-type"
  }),
};

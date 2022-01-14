// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
export const CodeSearchSupport = {
  /**
   * The search for code on ValueSet only includes all codes based on the expansion of the value set.
   */
  code_search_support_ImplicitCodes: {
    code: "all",
    display: "Implicit Codes",
    system: "http://hl7.org/fhir/code-search-support"
  } as Coding,
  /**
   * The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.
   */
  code_search_support_ExplicitCodes: {
    code: "explicit",
    display: "Explicit Codes",
    system: "http://hl7.org/fhir/code-search-support"
  } as Coding,
};

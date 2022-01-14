// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * How an extension context is interpreted.
 */
export const ExtensionContextType = {
  /**
   * The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
   */
  extension_context_type_ElementID: {
    code: "element",
    display: "Element ID",
    system: "http://hl7.org/fhir/extension-context-type"
  } as Coding,
  /**
   * The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
   */
  extension_context_type_ExtensionURL: {
    code: "extension",
    display: "Extension URL",
    system: "http://hl7.org/fhir/extension-context-type"
  } as Coding,
  /**
   * The context is all elements that match the FHIRPath query found in the expression.
   */
  extension_context_type_FHIRPath: {
    code: "fhirpath",
    display: "FHIRPath",
    system: "http://hl7.org/fhir/extension-context-type"
  } as Coding,
};

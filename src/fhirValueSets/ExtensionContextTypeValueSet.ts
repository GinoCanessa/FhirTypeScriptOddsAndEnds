// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/extension-context-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * How an extension context is interpreted.
 */
export const ExtensionContextTypeValueSet = {
  /**
   * element: The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
   */
  ElementID: new Coding({
    display: "Element ID",
    code: "element",
    system: "http://hl7.org/fhir/extension-context-type",
  }),
  /**
   * extension: The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
   */
  ExtensionURL: new Coding({
    display: "Extension URL",
    code: "extension",
    system: "http://hl7.org/fhir/extension-context-type",
  }),
  /**
   * fhirpath: The context is all elements that match the FHIRPath query found in the expression.
   */
  FHIRPath: new Coding({
    display: "FHIRPath",
    code: "fhirpath",
    system: "http://hl7.org/fhir/extension-context-type",
  }),
} as const;

/**
 * How an extension context is interpreted.
 */
export type ExtensionContextTypeValueSetType = typeof ExtensionContextTypeValueSet;

/**
 * How an extension context is interpreted.
 */
export enum ExtensionContextTypeValueSetEnum {
  /**
   * element: The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
   */
  ElementID = "element",
  /**
   * extension: The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
   */
  ExtensionURL = "extension",
  /**
   * fhirpath: The context is all elements that match the FHIRPath query found in the expression.
   */
  FHIRPath = "fhirpath",
}

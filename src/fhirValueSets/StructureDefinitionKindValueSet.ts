// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/structure-definition-kind|4.0.1

import { Coding } from '../fhir.js'

/**
 * Defines the type of structure that a definition is describing.
 */
export const StructureDefinitionKindValueSet = {
  /**
   * complex-type: A  complex structure that defines a set of data elements that is suitable for use in 'resources'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.
   */
  ComplexDataType: new Coding({
    display: "Complex Data Type",
    code: "complex-type",
    system: "http://hl7.org/fhir/structure-definition-kind",
  }),
  /**
   * logical: A pattern or a template that is not intended to be a real resource or complex type.
   */
  Logical: new Coding({
    display: "Logical",
    code: "logical",
    system: "http://hl7.org/fhir/structure-definition-kind",
  }),
  /**
   * primitive-type: A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.
   */
  PrimitiveDataType: new Coding({
    display: "Primitive Data Type",
    code: "primitive-type",
    system: "http://hl7.org/fhir/structure-definition-kind",
  }),
  /**
   * resource: A 'resource' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other 'resources' can be defined in additional specifications (though these will not be recognised as 'resources' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).
   */
  Resource: new Coding({
    display: "Resource",
    code: "resource",
    system: "http://hl7.org/fhir/structure-definition-kind",
  }),
} as const;

/**
 * Defines the type of structure that a definition is describing.
 */
export type StructureDefinitionKindValueSetType = typeof StructureDefinitionKindValueSet;

/**
 * Defines the type of structure that a definition is describing.
 */

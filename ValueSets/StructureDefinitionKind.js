/**
 * Defines the type of structure that a definition is describing.
 */
export var StructureDefinitionKind = {
    /**
     * A  complex structure that defines a set of data elements that is suitable for use in 'resources'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.
     */
    structure_definition_kind_ComplexDataType: {
        code: "complex-type",
        display: "Complex Data Type",
        system: "http://hl7.org/fhir/structure-definition-kind"
    },
    /**
     * A pattern or a template that is not intended to be a real resource or complex type.
     */
    structure_definition_kind_Logical: {
        code: "logical",
        display: "Logical",
        system: "http://hl7.org/fhir/structure-definition-kind"
    },
    /**
     * A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.
     */
    structure_definition_kind_PrimitiveDataType: {
        code: "primitive-type",
        display: "Primitive Data Type",
        system: "http://hl7.org/fhir/structure-definition-kind"
    },
    /**
     * A 'resource' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other 'resources' can be defined in additional specifications (though these will not be recognised as 'resources' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).
     */
    structure_definition_kind_Resource: {
        code: "resource",
        display: "Resource",
        system: "http://hl7.org/fhir/structure-definition-kind"
    }
};
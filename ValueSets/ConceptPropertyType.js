/**
 * The type of a property value.
 */
export var ConceptPropertyType = {
    /**
     * The property value is a boolean true | false.
     */
    concept_property_type_Boolean: {
        code: "boolean",
        display: "boolean",
        system: "http://hl7.org/fhir/concept-property-type"
    },
    /**
     * The property value is a code that identifies a concept defined in the code system.
     */
    concept_property_type_CodeInternalReference: {
        code: "code",
        display: "code (internal reference)",
        system: "http://hl7.org/fhir/concept-property-type"
    },
    /**
     * The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
     */
    concept_property_type_CodingExternalReference: {
        code: "Coding",
        display: "Coding (external reference)",
        system: "http://hl7.org/fhir/concept-property-type"
    },
    /**
     * The property is a date or a date + time.
     */
    concept_property_type_DateTime: {
        code: "dateTime",
        display: "dateTime",
        system: "http://hl7.org/fhir/concept-property-type"
    },
    /**
     * The property value is a decimal number.
     */
    concept_property_type_Decimal: {
        code: "decimal",
        display: "decimal",
        system: "http://hl7.org/fhir/concept-property-type"
    },
    /**
     * The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
     */
    concept_property_type_Integer: {
        code: "integer",
        display: "integer",
        system: "http://hl7.org/fhir/concept-property-type"
    },
    /**
     * The property value is a string.
     */
    concept_property_type_String: {
        code: "string",
        display: "string",
        system: "http://hl7.org/fhir/concept-property-type"
    }
};

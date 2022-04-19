import { Coding } from '../fhir';
/**
 * The type of a property value.
 */
export declare const ConceptPropertyTypeValueSet: {
    /**
     * The property value is a boolean true | false.
     */
    concept_property_type_Boolean: Coding;
    /**
     * The property value is a code that identifies a concept defined in the code system.
     */
    concept_property_type_CodeInternalReference: Coding;
    /**
     * The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
     */
    concept_property_type_CodingExternalReference: Coding;
    /**
     * The property is a date or a date + time.
     */
    concept_property_type_DateTime: Coding;
    /**
     * The property value is a decimal number.
     */
    concept_property_type_Decimal: Coding;
    /**
     * The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
     */
    concept_property_type_Integer: Coding;
    /**
     * The property value is a string.
     */
    concept_property_type_String: Coding;
};
//# sourceMappingURL=ConceptPropertyTypeValueSet.d.ts.map
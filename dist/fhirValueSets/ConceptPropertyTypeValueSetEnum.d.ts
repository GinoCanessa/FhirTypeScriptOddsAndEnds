/**
 * The type of a property value.
 */
export declare enum ConceptPropertyTypeValueSetEnum {
    /**
     * boolean: The property value is a boolean true | false.
     */
    VALBoolean = "boolean",
    /**
     * code: The property value is a code that identifies a concept defined in the code system.
     */
    CodeInternalReference = "code",
    /**
     * Coding: The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
     */
    CodingExternalReference = "Coding",
    /**
     * dateTime: The property is a date or a date + time.
     */
    DateTime = "dateTime",
    /**
     * decimal: The property value is a decimal number.
     */
    Decimal = "decimal",
    /**
     * integer: The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
     */
    Integer = "integer",
    /**
     * string: The property value is a string.
     */
    VALString = "string"
}
//# sourceMappingURL=ConceptPropertyTypeValueSetEnum.d.ts.map
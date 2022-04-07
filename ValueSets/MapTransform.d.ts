import { Coding } from '../strictmodels';
/**
 * How data is copied/created.
 */
export declare const MapTransform: {
    /**
     * append(source...) - source is element or string.
     */
    map_transform_Append: Coding;
    /**
     * Create a Coding. Parameters = (system. Code[, display]).
     */
    map_transform_C: Coding;
    /**
     * cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
     */
    map_transform_Cast: Coding;
    /**
     * Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
     */
    map_transform_Cc: Coding;
    /**
     * copy(source).
     */
    map_transform_Copy: Coding;
    /**
     * Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
     */
    map_transform_Cp: Coding;
    /**
     * create(type : string) - type is passed through to the application on the standard API, and must be known by it.
     */
    map_transform_Create: Coding;
    /**
     * Perform a date operation. *Parameters to be documented*.
     */
    map_transform_DateOp: Coding;
    /**
     * escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
     */
    map_transform_Escape: Coding;
    /**
     * Execute the supplied FHIRPath expression and use the value returned by that.
     */
    map_transform_Evaluate: Coding;
    /**
     * Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
     */
    map_transform_Id: Coding;
    /**
     * Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
     */
    map_transform_Pointer: Coding;
    /**
     * Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
     */
    map_transform_Qty: Coding;
    /**
     * reference(source : object) - return a string that references the provided tree properly.
     */
    map_transform_Reference: Coding;
    /**
     * translate(source, uri_of_map) - use the translate operation.
     */
    map_transform_Translate: Coding;
    /**
     * truncate(source, length) - source must be stringy type.
     */
    map_transform_Truncate: Coding;
    /**
     * Generate a random UUID (in lowercase). No Parameters.
     */
    map_transform_Uuid: Coding;
};
//# sourceMappingURL=MapTransform.d.ts.map
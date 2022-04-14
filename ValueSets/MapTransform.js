"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapTransform = void 0;
/**
 * How data is copied/created.
 */
exports.MapTransform = {
    /**
     * append(source...) - source is element or string.
     */
    map_transform_Append: {
        code: "append",
        display: "append",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Create a Coding. Parameters = (system. Code[, display]).
     */
    map_transform_C: {
        code: "c",
        display: "c",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
     */
    map_transform_Cast: {
        code: "cast",
        display: "cast",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
     */
    map_transform_Cc: {
        code: "cc",
        display: "cc",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * copy(source).
     */
    map_transform_Copy: {
        code: "copy",
        display: "copy",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
     */
    map_transform_Cp: {
        code: "cp",
        display: "cp",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * create(type : string) - type is passed through to the application on the standard API, and must be known by it.
     */
    map_transform_Create: {
        code: "create",
        display: "create",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Perform a date operation. *Parameters to be documented*.
     */
    map_transform_DateOp: {
        code: "dateOp",
        display: "dateOp",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
     */
    map_transform_Escape: {
        code: "escape",
        display: "escape",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Execute the supplied FHIRPath expression and use the value returned by that.
     */
    map_transform_Evaluate: {
        code: "evaluate",
        display: "evaluate",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
     */
    map_transform_Id: {
        code: "id",
        display: "id",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
     */
    map_transform_Pointer: {
        code: "pointer",
        display: "pointer",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
     */
    map_transform_Qty: {
        code: "qty",
        display: "qty",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * reference(source : object) - return a string that references the provided tree properly.
     */
    map_transform_Reference: {
        code: "reference",
        display: "reference",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * translate(source, uri_of_map) - use the translate operation.
     */
    map_transform_Translate: {
        code: "translate",
        display: "translate",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * truncate(source, length) - source must be stringy type.
     */
    map_transform_Truncate: {
        code: "truncate",
        display: "truncate",
        system: "http://hl7.org/fhir/map-transform"
    },
    /**
     * Generate a random UUID (in lowercase). No Parameters.
     */
    map_transform_Uuid: {
        code: "uuid",
        display: "uuid",
        system: "http://hl7.org/fhir/map-transform"
    },
};
//# sourceMappingURL=MapTransform.js.map
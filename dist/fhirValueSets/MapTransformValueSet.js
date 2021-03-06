// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-transform|4.0.1
import { Coding } from '../fhir.js';
/**
 * How data is copied/created.
 */
export const MapTransformValueSet = {
    /**
     * append: append(source...) - source is element or string.
     */
    Append: new Coding({
        display: "append",
        code: "append",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * c: Create a Coding. Parameters = (system. Code[, display]).
     */
    C: new Coding({
        display: "c",
        code: "c",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * cast: cast(source, type?) - case source from one type to another. target type can be left as implicit if there is one and only one target type known.
     */
    Cast: new Coding({
        display: "cast",
        code: "cast",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * cc: Create a CodeableConcept. Parameters = (text) or (system. Code[, display]).
     */
    Cc: new Coding({
        display: "cc",
        code: "cc",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * copy: copy(source).
     */
    Copy: new Coding({
        display: "copy",
        code: "copy",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * cp: Create a contact details. Parameters = (value) or (system, value). If no system is provided, the system should be inferred from the content of the value.
     */
    Cp: new Coding({
        display: "cp",
        code: "cp",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * create: create(type : string) - type is passed through to the application on the standard API, and must be known by it.
     */
    Create: new Coding({
        display: "create",
        code: "create",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * dateOp: Perform a date operation. *Parameters to be documented*.
     */
    DateOp: new Coding({
        display: "dateOp",
        code: "dateOp",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * escape: escape(source, fmt1, fmt2) - change source from one kind of escaping to another (plain, java, xml, json). note that this is for when the string itself is escaped.
     */
    Escape: new Coding({
        display: "escape",
        code: "escape",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * evaluate: Execute the supplied FHIRPath expression and use the value returned by that.
     */
    Evaluate: new Coding({
        display: "evaluate",
        code: "evaluate",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * id: Create an identifier. Parameters = (system, value[, type]) where type is a code from the identifier type value set.
     */
    Id: new Coding({
        display: "id",
        code: "id",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * pointer: Return the appropriate string to put in a reference that refers to the resource provided as a parameter.
     */
    Pointer: new Coding({
        display: "pointer",
        code: "pointer",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * qty: Create a quantity. Parameters = (text) or (value, unit, [system, code]) where text is the natural representation e.g. [comparator]value[space]unit.
     */
    Qty: new Coding({
        display: "qty",
        code: "qty",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * reference: reference(source : object) - return a string that references the provided tree properly.
     */
    Reference: new Coding({
        display: "reference",
        code: "reference",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * translate: translate(source, uri_of_map) - use the translate operation.
     */
    Translate: new Coding({
        display: "translate",
        code: "translate",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * truncate: truncate(source, length) - source must be stringy type.
     */
    Truncate: new Coding({
        display: "truncate",
        code: "truncate",
        system: "http://hl7.org/fhir/map-transform",
    }),
    /**
     * uuid: Generate a random UUID (in lowercase). No Parameters.
     */
    Uuid: new Coding({
        display: "uuid",
        code: "uuid",
        system: "http://hl7.org/fhir/map-transform",
    }),
};
/**
 * How data is copied/created.
 */
//# sourceMappingURL=MapTransformValueSet.js.map
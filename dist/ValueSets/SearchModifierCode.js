"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModifierCode = void 0;
/**
 * A supported modifier for a search parameter.
 */
exports.SearchModifierCode = {
    /**
     * The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
     */
    search_modifier_code_Above: {
        code: "above",
        display: "Above",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
     */
    search_modifier_code_Below: {
        code: "below",
        display: "Below",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
     */
    search_modifier_code_Contains: {
        code: "contains",
        display: "Contains",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
     */
    search_modifier_code_Exact: {
        code: "exact",
        display: "Exact",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter applies to the identifier on the resource, not the reference.
     */
    search_modifier_code_Identifier: {
        code: "identifier",
        display: "Identifier",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
     */
    search_modifier_code_In: {
        code: "in",
        display: "In",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter returns resources that have a value or not.
     */
    search_modifier_code_Missing: {
        code: "missing",
        display: "Missing",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter returns resources that do not contain a match.
     */
    search_modifier_code_Not: {
        code: "not",
        display: "Not",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
     */
    search_modifier_code_NotIn: {
        code: "not-in",
        display: "Not In",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    search_modifier_code_OfType: {
        code: "ofType",
        display: "Of Type",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
     */
    search_modifier_code_Text: {
        code: "text",
        display: "Text",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
    /**
     * The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
     */
    search_modifier_code_Type: {
        code: "type",
        display: "Type",
        system: "http://hl7.org/fhir/search-modifier-code"
    },
};
//# sourceMappingURL=SearchModifierCode.js.map
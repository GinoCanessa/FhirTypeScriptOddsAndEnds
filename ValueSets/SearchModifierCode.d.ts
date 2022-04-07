import { Coding } from '../strictmodels';
/**
 * A supported modifier for a search parameter.
 */
export declare const SearchModifierCode: {
    /**
     * The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
     */
    search_modifier_code_Above: Coding;
    /**
     * The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
     */
    search_modifier_code_Below: Coding;
    /**
     * The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
     */
    search_modifier_code_Contains: Coding;
    /**
     * The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
     */
    search_modifier_code_Exact: Coding;
    /**
     * The search parameter applies to the identifier on the resource, not the reference.
     */
    search_modifier_code_Identifier: Coding;
    /**
     * The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
     */
    search_modifier_code_In: Coding;
    /**
     * The search parameter returns resources that have a value or not.
     */
    search_modifier_code_Missing: Coding;
    /**
     * The search parameter returns resources that do not contain a match.
     */
    search_modifier_code_Not: Coding;
    /**
     * The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
     */
    search_modifier_code_NotIn: Coding;
    /**
     * The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    search_modifier_code_OfType: Coding;
    /**
     * The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
     */
    search_modifier_code_Text: Coding;
    /**
     * The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
     */
    search_modifier_code_Type: Coding;
};
//# sourceMappingURL=SearchModifierCode.d.ts.map
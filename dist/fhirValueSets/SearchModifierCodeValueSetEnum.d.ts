/**
 * A supported modifier for a search parameter.
 */
export declare enum SearchModifierCodeValueSetEnum {
    /**
     * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
     */
    Above = "above",
    /**
     * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
     */
    Below = "below",
    /**
     * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
     */
    Contains = "contains",
    /**
     * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
     */
    Exact = "exact",
    /**
     * identifier: The search parameter applies to the identifier on the resource, not the reference.
     */
    Identifier = "identifier",
    /**
     * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
     */
    In = "in",
    /**
     * missing: The search parameter returns resources that have a value or not.
     */
    Missing = "missing",
    /**
     * not: The search parameter returns resources that do not contain a match.
     */
    Not = "not",
    /**
     * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
     */
    NotIn = "not-in",
    /**
     * ofType: The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    OfType = "ofType",
    /**
     * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
     */
    Text = "text",
    /**
     * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
     */
    Type = "type"
}
//# sourceMappingURL=SearchModifierCodeValueSetEnum.d.ts.map
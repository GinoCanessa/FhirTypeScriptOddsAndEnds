// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * A supported modifier for a search parameter.
 */
export const SearchModifierCodeValueSet = {
  /**
   * The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
   */
  search_modifier_code_Above: Coding.FromStrict({
    code: "above",
    display: "Above",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
   */
  search_modifier_code_Below: Coding.FromStrict({
    code: "below",
    display: "Below",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
   */
  search_modifier_code_Contains: Coding.FromStrict({
    code: "contains",
    display: "Contains",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
   */
  search_modifier_code_Exact: Coding.FromStrict({
    code: "exact",
    display: "Exact",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter applies to the identifier on the resource, not the reference.
   */
  search_modifier_code_Identifier: Coding.FromStrict({
    code: "identifier",
    display: "Identifier",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
   */
  search_modifier_code_In: Coding.FromStrict({
    code: "in",
    display: "In",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter returns resources that have a value or not.
   */
  search_modifier_code_Missing: Coding.FromStrict({
    code: "missing",
    display: "Missing",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter returns resources that do not contain a match.
   */
  search_modifier_code_Not: Coding.FromStrict({
    code: "not",
    display: "Not",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
   */
  search_modifier_code_NotIn: Coding.FromStrict({
    code: "not-in",
    display: "Not In",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
   */
  search_modifier_code_OfType: Coding.FromStrict({
    code: "ofType",
    display: "Of Type",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
   */
  search_modifier_code_Text: Coding.FromStrict({
    code: "text",
    display: "Text",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
  /**
   * The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
   */
  search_modifier_code_Type: Coding.FromStrict({
    code: "type",
    display: "Type",
    system: "http://hl7.org/fhir/search-modifier-code"
  }),
};

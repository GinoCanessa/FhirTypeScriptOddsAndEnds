// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-modifier-code|4.0.1

import { Coding } from '../fhir.js'

/**
 * A supported modifier for a search parameter.
 */
export const SearchModifierCodeValueSet = {
  /**
   * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
   */
  Above: new Coding({
    display: "Above",
    code: "above",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
   */
  Below: new Coding({
    display: "Below",
    code: "below",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
   */
  Contains: new Coding({
    display: "Contains",
    code: "contains",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
   */
  Exact: new Coding({
    display: "Exact",
    code: "exact",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * identifier: The search parameter applies to the identifier on the resource, not the reference.
   */
  Identifier: new Coding({
    display: "Identifier",
    code: "identifier",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
   */
  In: new Coding({
    display: "In",
    code: "in",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * missing: The search parameter returns resources that have a value or not.
   */
  Missing: new Coding({
    display: "Missing",
    code: "missing",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * not: The search parameter returns resources that do not contain a match.
   */
  Not: new Coding({
    display: "Not",
    code: "not",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
   */
  NotIn: new Coding({
    display: "Not In",
    code: "not-in",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * ofType: The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
   */
  OfType: new Coding({
    display: "Of Type",
    code: "ofType",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
   */
  Text: new Coding({
    display: "Text",
    code: "text",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
  /**
   * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
   */
  Type: new Coding({
    display: "Type",
    code: "type",
    system: "http://hl7.org/fhir/search-modifier-code",
  }),
} as const;

/**
 * A supported modifier for a search parameter.
 */
export type SearchModifierCodeValueSetType = typeof SearchModifierCodeValueSet;

/**
 * A supported modifier for a search parameter.
 */

// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-xpath-usage|4.0.1

import { Coding } from '../fhir.js'

/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export const SearchXpathUsageValueSet = {
  /**
   * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
   */
  Distance: new Coding({
    display: "Distance",
    code: "distance",
    system: "http://hl7.org/fhir/search-xpath-usage",
  }),
  /**
   * nearby: The search parameter is based on a spatial transform of the selected nodes.
   */
  Nearby: new Coding({
    display: "Nearby",
    code: "nearby",
    system: "http://hl7.org/fhir/search-xpath-usage",
  }),
  /**
   * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
   */
  Normal: new Coding({
    display: "Normal",
    code: "normal",
    system: "http://hl7.org/fhir/search-xpath-usage",
  }),
  /**
   * other: The interpretation of the xpath statement is unknown (and can't be automated).
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://hl7.org/fhir/search-xpath-usage",
  }),
  /**
   * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
   */
  Phonetic: new Coding({
    display: "Phonetic",
    code: "phonetic",
    system: "http://hl7.org/fhir/search-xpath-usage",
  }),
} as const;

/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export type SearchXpathUsageValueSetType = typeof SearchXpathUsageValueSet;

/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */

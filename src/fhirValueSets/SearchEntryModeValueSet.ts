// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-entry-mode|4.0.1

import { Coding } from '../fhir.js'

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export const SearchEntryModeValueSet = {
  /**
   * include: This resource is returned because it is referred to from another resource in the search set.
   */
  Include: new Coding({
    display: "Include",
    code: "include",
    system: "http://hl7.org/fhir/search-entry-mode",
  }),
  /**
   * match: This resource matched the search specification.
   */
  Match: new Coding({
    display: "Match",
    code: "match",
    system: "http://hl7.org/fhir/search-entry-mode",
  }),
  /**
   * outcome: An OperationOutcome that provides additional information about the processing of a search.
   */
  Outcome: new Coding({
    display: "Outcome",
    code: "outcome",
    system: "http://hl7.org/fhir/search-entry-mode",
  }),
} as const;

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export type SearchEntryModeValueSetType = typeof SearchEntryModeValueSet;

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */

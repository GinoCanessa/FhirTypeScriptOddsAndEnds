// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-comparator|4.0.1

import { Coding } from '../fhir.js'

/**
 * What Search Comparator Codes are supported in search.
 */
export const SearchComparatorValueSet = {
  /**
   * ap: the value for the parameter in the resource is approximately the same to the provided value.
   */
  Approximately: new Coding({
    display: "Approximately",
    code: "ap",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * eb: the value for the parameter in the resource ends before the provided value.
   */
  EndsBefore: new Coding({
    display: "Ends Before",
    code: "eb",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * eq: the value for the parameter in the resource is equal to the provided value.
   */
  Equals: new Coding({
    display: "Equals",
    code: "eq",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * ge: the value for the parameter in the resource is greater or equal to the provided value.
   */
  GreaterOrEquals: new Coding({
    display: "Greater or Equals",
    code: "ge",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * gt: the value for the parameter in the resource is greater than the provided value.
   */
  GreaterThan: new Coding({
    display: "Greater Than",
    code: "gt",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * le: the value for the parameter in the resource is less or equal to the provided value.
   */
  LessOfEqual: new Coding({
    display: "Less of Equal",
    code: "le",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * lt: the value for the parameter in the resource is less than the provided value.
   */
  LessThan: new Coding({
    display: "Less Than",
    code: "lt",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * ne: the value for the parameter in the resource is not equal to the provided value.
   */
  NotEquals: new Coding({
    display: "Not Equals",
    code: "ne",
    system: "http://hl7.org/fhir/search-comparator",
  }),
  /**
   * sa: the value for the parameter in the resource starts after the provided value.
   */
  StartsAfter: new Coding({
    display: "Starts After",
    code: "sa",
    system: "http://hl7.org/fhir/search-comparator",
  }),
} as const;

/**
 * What Search Comparator Codes are supported in search.
 */
export type SearchComparatorValueSetType = typeof SearchComparatorValueSet;

/**
 * What Search Comparator Codes are supported in search.
 */

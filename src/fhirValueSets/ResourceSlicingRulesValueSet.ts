// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/resource-slicing-rules|4.0.1

import { Coding } from '../fhir.js'

/**
 * How slices are interpreted when evaluating an instance.
 */
export const ResourceSlicingRulesValueSet = {
  /**
   * closed: No additional content is allowed other than that described by the slices in this profile.
   */
  Closed: new Coding({
    display: "Closed",
    code: "closed",
    system: "http://hl7.org/fhir/resource-slicing-rules",
  }),
  /**
   * open: Additional content is allowed anywhere in the list.
   */
  Open: new Coding({
    display: "Open",
    code: "open",
    system: "http://hl7.org/fhir/resource-slicing-rules",
  }),
  /**
   * openAtEnd: Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
   */
  OpenAtEnd: new Coding({
    display: "Open at End",
    code: "openAtEnd",
    system: "http://hl7.org/fhir/resource-slicing-rules",
  }),
} as const;

/**
 * How slices are interpreted when evaluating an instance.
 */
export type ResourceSlicingRulesValueSetType = typeof ResourceSlicingRulesValueSet;

/**
 * How slices are interpreted when evaluating an instance.
 */
export enum ResourceSlicingRulesValueSetEnum {
  /**
   * closed: No additional content is allowed other than that described by the slices in this profile.
   */
  Closed = "closed",
  /**
   * open: Additional content is allowed anywhere in the list.
   */
  Open = "open",
  /**
   * openAtEnd: Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
   */
  OpenAtEnd = "openAtEnd",
}

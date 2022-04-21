// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-delete-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * A code that indicates how the server supports conditional delete.
 */
export const ConditionalDeleteStatusValueSet = {
  /**
   * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
   */
  MultipleDeletesSupported: new Coding({
    display: "Multiple Deletes Supported",
    code: "multiple",
    system: "http://hl7.org/fhir/conditional-delete-status",
  }),
  /**
   * not-supported: No support for conditional deletes.
   */
  NotSupported: new Coding({
    display: "Not Supported",
    code: "not-supported",
    system: "http://hl7.org/fhir/conditional-delete-status",
  }),
  /**
   * single: Conditional deletes are supported, but only single resources at a time.
   */
  SingleDeletesSupported: new Coding({
    display: "Single Deletes Supported",
    code: "single",
    system: "http://hl7.org/fhir/conditional-delete-status",
  }),
} as const;

/**
 * A code that indicates how the server supports conditional delete.
 */
export type ConditionalDeleteStatusValueSetType = typeof ConditionalDeleteStatusValueSet;

/**
 * A code that indicates how the server supports conditional delete.
 */
export enum ConditionalDeleteStatusValueSetEnum {
  /**
   * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
   */
  MultipleDeletesSupported = "multiple",
  /**
   * not-supported: No support for conditional deletes.
   */
  NotSupported = "not-supported",
  /**
   * single: Conditional deletes are supported, but only single resources at a time.
   */
  SingleDeletesSupported = "single",
}

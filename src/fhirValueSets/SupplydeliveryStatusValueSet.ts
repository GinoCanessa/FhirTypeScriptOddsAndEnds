// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplydelivery-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * Status of the supply delivery.
 */
export const SupplydeliveryStatusValueSet = {
  /**
   * abandoned: Delivery was not completed.
   */
  Abandoned: new Coding({
    display: "Abandoned",
    code: "abandoned",
    system: "http://hl7.org/fhir/supplydelivery-status",
  }),
  /**
   * completed: Supply has been delivered ("completed").
   */
  Delivered: new Coding({
    display: "Delivered",
    code: "completed",
    system: "http://hl7.org/fhir/supplydelivery-status",
  }),
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
   */
  EnteredInError: new Coding({
    display: "Entered In Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/supplydelivery-status",
  }),
  /**
   * in-progress: Supply has been requested, but not delivered.
   */
  InProgress: new Coding({
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/supplydelivery-status",
  }),
} as const;

/**
 * Status of the supply delivery.
 */
export type SupplydeliveryStatusValueSetType = typeof SupplydeliveryStatusValueSet;

/**
 * Status of the supply delivery.
 */

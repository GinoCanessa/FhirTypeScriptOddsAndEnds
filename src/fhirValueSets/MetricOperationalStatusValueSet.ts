// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-operational-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * Describes the operational status of the DeviceMetric.
 */
export const MetricOperationalStatusValueSet = {
  /**
   * entered-in-error: The DeviceMetric was entered in error.
   */
  EnteredInError: new Coding({
    display: "Entered In Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/metric-operational-status",
  }),
  /**
   * off: The DeviceMetric is not operating.
   */
  Off: new Coding({
    display: "Off",
    code: "off",
    system: "http://hl7.org/fhir/metric-operational-status",
  }),
  /**
   * on: The DeviceMetric is operating and will generate DeviceObservations.
   */
  On: new Coding({
    display: "On",
    code: "on",
    system: "http://hl7.org/fhir/metric-operational-status",
  }),
  /**
   * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
   */
  Standby: new Coding({
    display: "Standby",
    code: "standby",
    system: "http://hl7.org/fhir/metric-operational-status",
  }),
} as const;

/**
 * Describes the operational status of the DeviceMetric.
 */
export type MetricOperationalStatusValueSetType = typeof MetricOperationalStatusValueSet;

/**
 * Describes the operational status of the DeviceMetric.
 */

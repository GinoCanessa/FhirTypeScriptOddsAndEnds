// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/endpoint-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * The status of the endpoint.
 */
export const EndpointStatusValueSet = {
  /**
   * active: This endpoint is expected to be active and can be used.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/endpoint-status",
  }),
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: new Coding({
    display: "Entered in error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/endpoint-status",
  }),
  /**
   * error: This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken.
   */
  Error: new Coding({
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/endpoint-status",
  }),
  /**
   * off: This endpoint is no longer to be used.
   */
  Off: new Coding({
    display: "Off",
    code: "off",
    system: "http://hl7.org/fhir/endpoint-status",
  }),
  /**
   * suspended: This endpoint is temporarily unavailable.
   */
  Suspended: new Coding({
    display: "Suspended",
    code: "suspended",
    system: "http://hl7.org/fhir/endpoint-status",
  }),
  /**
   * test: This endpoint is not intended for production usage.
   */
  Test: new Coding({
    display: "Test",
    code: "test",
    system: "http://hl7.org/fhir/endpoint-status",
  }),
} as const;

/**
 * The status of the endpoint.
 */
export type EndpointStatusValueSetType = typeof EndpointStatusValueSet;

/**
 * The status of the endpoint.
 */

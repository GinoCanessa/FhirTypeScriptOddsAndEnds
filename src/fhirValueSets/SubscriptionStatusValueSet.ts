// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * The status of a subscription.
 */
export const SubscriptionStatusValueSet = {
  /**
   * active: The subscription is active.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/subscription-status",
  }),
  /**
   * error: The server has an error executing the notification.
   */
  Error: new Coding({
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/subscription-status",
  }),
  /**
   * off: Too many errors have occurred or the subscription has expired.
   */
  Off: new Coding({
    display: "Off",
    code: "off",
    system: "http://hl7.org/fhir/subscription-status",
  }),
  /**
   * requested: The client has requested the subscription, and the server has not yet set it up.
   */
  Requested: new Coding({
    display: "Requested",
    code: "requested",
    system: "http://hl7.org/fhir/subscription-status",
  }),
} as const;

/**
 * The status of a subscription.
 */
export type SubscriptionStatusValueSetType = typeof SubscriptionStatusValueSet;

/**
 * The status of a subscription.
 */

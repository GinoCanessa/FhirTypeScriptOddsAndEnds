// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The status of a subscription.
 */
export const SubscriptionStatus = {
  /**
   * The subscription is active.
   */
  subscription_status_Active: {
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/subscription-status"
  } as Coding,
  /**
   * The server has an error executing the notification.
   */
  subscription_status_Error: {
    code: "error",
    display: "Error",
    system: "http://hl7.org/fhir/subscription-status"
  } as Coding,
  /**
   * Too many errors have occurred or the subscription has expired.
   */
  subscription_status_Off: {
    code: "off",
    display: "Off",
    system: "http://hl7.org/fhir/subscription-status"
  } as Coding,
  /**
   * The client has requested the subscription, and the server has not yet set it up.
   */
  subscription_status_Requested: {
    code: "requested",
    display: "Requested",
    system: "http://hl7.org/fhir/subscription-status"
  } as Coding,
};

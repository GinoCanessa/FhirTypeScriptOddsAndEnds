// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-channel-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * The type of method used to execute a subscription.
 */
export const SubscriptionChannelTypeValueSet = {
  /**
   * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
   */
  Email: new Coding({
    display: "Email",
    code: "email",
    system: "http://hl7.org/fhir/subscription-channel-type",
  }),
  /**
   * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
   */
  Message: new Coding({
    display: "Message",
    code: "message",
    system: "http://hl7.org/fhir/subscription-channel-type",
  }),
  /**
   * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
   */
  RestHook: new Coding({
    display: "Rest Hook",
    code: "rest-hook",
    system: "http://hl7.org/fhir/subscription-channel-type",
  }),
  /**
   * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
   */
  SMS: new Coding({
    display: "SMS",
    code: "sms",
    system: "http://hl7.org/fhir/subscription-channel-type",
  }),
  /**
   * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
   */
  Websocket: new Coding({
    display: "Websocket",
    code: "websocket",
    system: "http://hl7.org/fhir/subscription-channel-type",
  }),
} as const;

/**
 * The type of method used to execute a subscription.
 */
export type SubscriptionChannelTypeValueSetType = typeof SubscriptionChannelTypeValueSet;

/**
 * The type of method used to execute a subscription.
 */

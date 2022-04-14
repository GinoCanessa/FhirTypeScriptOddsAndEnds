"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatus = void 0;
/**
 * The status of a subscription.
 */
exports.SubscriptionStatus = {
    /**
     * The subscription is active.
     */
    subscription_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/subscription-status"
    },
    /**
     * The server has an error executing the notification.
     */
    subscription_status_Error: {
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/subscription-status"
    },
    /**
     * Too many errors have occurred or the subscription has expired.
     */
    subscription_status_Off: {
        code: "off",
        display: "Off",
        system: "http://hl7.org/fhir/subscription-status"
    },
    /**
     * The client has requested the subscription, and the server has not yet set it up.
     */
    subscription_status_Requested: {
        code: "requested",
        display: "Requested",
        system: "http://hl7.org/fhir/subscription-status"
    },
};
//# sourceMappingURL=SubscriptionStatus.js.map
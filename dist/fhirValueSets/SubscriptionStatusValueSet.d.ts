import { Coding } from '../fhir.js';
/**
 * The status of a subscription.
 */
export declare const SubscriptionStatusValueSet: {
    /**
     * active: The subscription is active.
     */
    readonly Active: Coding;
    /**
     * error: The server has an error executing the notification.
     */
    readonly Error: Coding;
    /**
     * off: Too many errors have occurred or the subscription has expired.
     */
    readonly Off: Coding;
    /**
     * requested: The client has requested the subscription, and the server has not yet set it up.
     */
    readonly Requested: Coding;
};
/**
 * The status of a subscription.
 */
export declare type SubscriptionStatusValueSetType = typeof SubscriptionStatusValueSet;
/**
 * The status of a subscription.
 */
export declare enum SubscriptionStatusValueSetEnum {
    /**
     * active: The subscription is active.
     */
    Active = "active",
    /**
     * error: The server has an error executing the notification.
     */
    Error = "error",
    /**
     * off: Too many errors have occurred or the subscription has expired.
     */
    Off = "off",
    /**
     * requested: The client has requested the subscription, and the server has not yet set it up.
     */
    Requested = "requested"
}
//# sourceMappingURL=SubscriptionStatusValueSet.d.ts.map
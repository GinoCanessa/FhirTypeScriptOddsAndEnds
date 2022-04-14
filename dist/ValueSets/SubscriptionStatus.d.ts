import { Coding } from '../strictmodels';
/**
 * The status of a subscription.
 */
export declare const SubscriptionStatus: {
    /**
     * The subscription is active.
     */
    subscription_status_Active: Coding;
    /**
     * The server has an error executing the notification.
     */
    subscription_status_Error: Coding;
    /**
     * Too many errors have occurred or the subscription has expired.
     */
    subscription_status_Off: Coding;
    /**
     * The client has requested the subscription, and the server has not yet set it up.
     */
    subscription_status_Requested: Coding;
};
//# sourceMappingURL=SubscriptionStatus.d.ts.map
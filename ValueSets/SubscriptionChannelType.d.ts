import { Coding } from '../strictmodels';
/**
 * The type of method used to execute a subscription.
 */
export declare const SubscriptionChannelType: {
    /**
     * The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
     */
    subscription_channel_type_Email: Coding;
    /**
     * The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
     */
    subscription_channel_type_Message: Coding;
    /**
     * The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
     */
    subscription_channel_type_RestHook: Coding;
    /**
     * The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
     */
    subscription_channel_type_SMS: Coding;
    /**
     * The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
     */
    subscription_channel_type_Websocket: Coding;
};
//# sourceMappingURL=SubscriptionChannelType.d.ts.map
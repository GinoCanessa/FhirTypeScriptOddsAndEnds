/**
 * The type of method used to execute a subscription.
 */
export declare enum SubscriptionChannelTypeValueSetEnum {
    /**
     * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
     */
    Email = "email",
    /**
     * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
     */
    Message = "message",
    /**
     * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
     */
    RestHook = "rest-hook",
    /**
     * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
     */
    SMS = "sms",
    /**
     * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
     */
    Websocket = "websocket"
}
//# sourceMappingURL=SubscriptionChannelTypeValueSetEnum.d.ts.map
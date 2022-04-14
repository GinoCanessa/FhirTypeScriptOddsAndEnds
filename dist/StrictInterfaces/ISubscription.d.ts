import * as fhirInterfaces from '../strictinterfaces';
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export interface ISubscriptionChannel extends fhirInterfaces.IBackboneElement {
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: string | undefined;
    _endpoint?: fhirInterfaces.IElement | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: string[] | undefined;
    _header?: fhirInterfaces.IElement[] | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: string | undefined;
    _payload?: fhirInterfaces.IElement | undefined;
    /**
     * The type of channel to send notifications on.
     */
    type: SubscriptionChannelTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Subscription.channel.type field
 */
export declare enum SubscriptionChannelTypeEnum {
    REST_HOOK = "rest-hook",
    WEBSOCKET = "websocket",
    EMAIL = "email",
    SMS = "sms",
    MESSAGE = "message"
}
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
export interface ISubscription extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Subscription";
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhirInterfaces.ISubscriptionChannel;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhirInterfaces.IContactPoint[] | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: string;
    _criteria?: fhirInterfaces.IElement | undefined;
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: string | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string | undefined;
    _error?: fhirInterfaces.IElement | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: string;
    _reason?: fhirInterfaces.IElement | undefined;
    /**
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Subscription.status field
 */
export declare enum SubscriptionStatusEnum {
    REQUESTED = "requested",
    ACTIVE = "active",
    ERROR = "error",
    OFF = "off"
}
//# sourceMappingURL=ISubscription.d.ts.map
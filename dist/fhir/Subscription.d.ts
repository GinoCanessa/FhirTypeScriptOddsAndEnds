import * as fhir from '../fhir';
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export declare type ISubscriptionChannel = fhir.IBackboneElement & {
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: string | undefined;
    _endpoint?: fhir.IFhirElement | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: string[] | undefined;
    _header?: fhir.IFhirElement[] | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: string | undefined;
    _payload?: fhir.IFhirElement | undefined;
    /**
     * The type of channel to send notifications on.
     */
    type: SubscriptionChannelTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
export declare type ISubscription = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Subscription";
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.ISubscriptionChannel | null;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.IContactPoint[] | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: string | null;
    _criteria?: fhir.IFhirElement | undefined;
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: string | undefined;
    _end?: fhir.IFhirElement | undefined;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string | undefined;
    _error?: fhir.IFhirElement | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: string | null;
    _reason?: fhir.IFhirElement | undefined;
    /**
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export declare class SubscriptionChannel extends fhir.BackboneElement implements fhir.ISubscriptionChannel {
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: string | undefined;
    _endpoint?: fhir.FhirElement | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: string[] | undefined;
    _header?: fhir.FhirElement[] | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: string | undefined;
    _payload?: fhir.FhirElement | undefined;
    /**
     * The type of channel to send notifications on.
     */
    type: SubscriptionChannelTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubscriptionChannel>);
    /**
     * Check if the current SubscriptionChannel contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SubscriptionChannel from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubscriptionChannel): SubscriptionChannel;
}
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
export declare class Subscription extends fhir.DomainResource implements fhir.ISubscription {
    /**
     * Resource Type Name
     */
    resourceType: "Subscription";
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannel | null;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: string | null;
    _criteria?: fhir.FhirElement | undefined;
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: string | undefined;
    _end?: fhir.FhirElement | undefined;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string | undefined;
    _error?: fhir.FhirElement | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: string | null;
    _reason?: fhir.FhirElement | undefined;
    /**
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubscription>);
    /**
     * Check if the current Subscription contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Subscription from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISubscription): Subscription;
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
 * Code Values for the Subscription.status field
 */
export declare enum SubscriptionStatusEnum {
    REQUESTED = "requested",
    ACTIVE = "active",
    ERROR = "error",
    OFF = "off"
}
//# sourceMappingURL=Subscription.d.ts.map
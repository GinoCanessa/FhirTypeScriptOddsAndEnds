import * as fhir from '../fhir.js';
import { SubscriptionChannelTypeValueSetType, SubscriptionChannelTypeValueSetEnum } from '../fhirValueSets/SubscriptionChannelTypeValueSet.js';
import { SubscriptionStatusValueSetType, SubscriptionStatusValueSetEnum } from '../fhirValueSets/SubscriptionStatusValueSet.js';
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export declare type ISubscriptionChannel = fhir.IBackboneElement & {
    /**
     * The type of channel to send notifications on.
     */
    type: SubscriptionChannelTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Subscription.channel.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.endpoint
     */
    _endpoint?: fhir.IFhirElement | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.payload
     */
    _payload?: fhir.IFhirElement | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: string[] | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.header
     */
    _header?: fhir.IFhirElement[] | undefined;
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
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Subscription.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.IContactPoint[] | undefined;
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.end
     */
    _end?: fhir.IFhirElement | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: string | null;
    /**
     * Extended properties for primitive element: Subscription.reason
     */
    _reason?: fhir.IFhirElement | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: string | null;
    /**
     * Extended properties for primitive element: Subscription.criteria
     */
    _criteria?: fhir.IFhirElement | undefined;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.error
     */
    _error?: fhir.IFhirElement | undefined;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.ISubscriptionChannel | null;
};
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export declare class SubscriptionChannel extends fhir.BackboneElement implements ISubscriptionChannel {
    /**
     * The type of channel to send notifications on.
     */
    type: SubscriptionChannelTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Subscription.channel.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.endpoint
     */
    _endpoint?: fhir.FhirElement | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.payload
     */
    _payload?: fhir.FhirElement | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: string[] | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.header
     */
    _header?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubscriptionChannel>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): SubscriptionChannelTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
export declare class Subscription extends fhir.DomainResource implements ISubscription {
    /**
     * Resource Type Name
     */
    resourceType: "Subscription";
    /**
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Subscription.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: string | null;
    /**
     * Extended properties for primitive element: Subscription.reason
     */
    _reason?: fhir.FhirElement | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: string | null;
    /**
     * Extended properties for primitive element: Subscription.criteria
     */
    _criteria?: fhir.FhirElement | undefined;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.error
     */
    _error?: fhir.FhirElement | undefined;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannel | null;
    /**
     * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISubscription>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): SubscriptionStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Subscription.d.ts.map
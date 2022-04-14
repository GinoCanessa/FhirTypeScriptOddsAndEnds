import * as fhirInterfaces from '../optionalinterfaces';
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export interface IMessageHeaderDestination extends fhirInterfaces.IBackboneElement {
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint?: string | undefined;
    _endpoint?: fhirInterfaces.IElement | undefined;
    /**
     * Human-readable name for the target system.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhirInterfaces.IReference | undefined;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhirInterfaces.IReference | undefined;
}
/**
 * The source application from which this message originated.
 */
export interface IMessageHeaderSource extends fhirInterfaces.IBackboneElement {
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhirInterfaces.IContactPoint | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint?: string | undefined;
    _endpoint?: fhirInterfaces.IElement | undefined;
    /**
     * Human-readable name for the source system.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: string | undefined;
    _software?: fhirInterfaces.IElement | undefined;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export interface IMessageHeaderResponse extends fhirInterfaces.IBackboneElement {
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code?: MessageHeaderResponseCodeEnum | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
     */
    details?: fhirInterfaces.IReference | undefined;
    /**
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier?: string | undefined;
    _identifier?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the MessageHeader.response.code field
 */
export declare enum MessageHeaderResponseCodeEnum {
    OK = "ok",
    TRANSIENT_ERROR = "transient-error",
    FATAL_ERROR = "fatal-error"
}
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export interface IMessageHeader extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MessageHeader";
    /**
     * Usually only for the request but can be used in a response.
     */
    author?: fhirInterfaces.IReference | undefined;
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: string | undefined;
    _definition?: fhirInterfaces.IElement | undefined;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination?: fhirInterfaces.IMessageHeaderDestination[] | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    enterer?: fhirInterfaces.IReference | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventUri?: string | undefined;
    _eventUri?: fhirInterfaces.IElement | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus?: fhirInterfaces.IReference[] | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhirInterfaces.IMessageHeaderResponse | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    responsible?: fhirInterfaces.IReference | undefined;
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhirInterfaces.IReference | undefined;
    /**
     * The source application from which this message originated.
     */
    source?: fhirInterfaces.IMessageHeaderSource | undefined;
}
//# sourceMappingURL=IMessageHeader.d.ts.map
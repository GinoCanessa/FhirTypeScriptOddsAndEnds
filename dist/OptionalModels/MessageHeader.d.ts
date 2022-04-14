import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export declare class MessageHeaderDestination extends fhirModels.BackboneElement implements fhirInterfaces.IMessageHeaderDestination {
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint?: string | undefined;
    _endpoint?: fhirModels.Element | undefined;
    /**
     * Human-readable name for the target system.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhirModels.Reference | undefined;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhirModels.Reference | undefined;
    /**
     * Default constructor for MessageHeaderDestination from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMessageHeaderDestination>);
    /**
     * Factory function to create a MessageHeaderDestination from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMessageHeaderDestination): MessageHeaderDestination;
    /**
     * Check if the current MessageHeaderDestination contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The source application from which this message originated.
 */
export declare class MessageHeaderSource extends fhirModels.BackboneElement implements fhirInterfaces.IMessageHeaderSource {
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhirModels.ContactPoint | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint?: string | undefined;
    _endpoint?: fhirModels.Element | undefined;
    /**
     * Human-readable name for the source system.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: string | undefined;
    _software?: fhirModels.Element | undefined;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for MessageHeaderSource from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMessageHeaderSource>);
    /**
     * Factory function to create a MessageHeaderSource from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMessageHeaderSource): MessageHeaderSource;
    /**
     * Check if the current MessageHeaderSource contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export declare class MessageHeaderResponse extends fhirModels.BackboneElement implements fhirInterfaces.IMessageHeaderResponse {
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code?: MessageHeaderResponseCodeEnum | undefined;
    _code?: fhirModels.Element | undefined;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
     */
    details?: fhirModels.Reference | undefined;
    /**
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier?: string | undefined;
    _identifier?: fhirModels.Element | undefined;
    /**
     * Default constructor for MessageHeaderResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMessageHeaderResponse>);
    /**
     * Factory function to create a MessageHeaderResponse from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMessageHeaderResponse): MessageHeaderResponse;
    /**
     * Check if the current MessageHeaderResponse contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class MessageHeader extends fhirModels.DomainResource implements fhirInterfaces.IMessageHeader {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MessageHeader";
    /**
     * Usually only for the request but can be used in a response.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: string | undefined;
    _definition?: fhirModels.Element | undefined;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination?: fhirModels.MessageHeaderDestination[] | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    enterer?: fhirModels.Reference | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventCoding?: fhirModels.Coding | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventUri?: string | undefined;
    _eventUri?: fhirModels.Element | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus?: fhirModels.Reference[] | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhirModels.CodeableConcept | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhirModels.MessageHeaderResponse | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    responsible?: fhirModels.Reference | undefined;
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhirModels.Reference | undefined;
    /**
     * The source application from which this message originated.
     */
    source?: fhirModels.MessageHeaderSource | undefined;
    /**
     * Default constructor for MessageHeader from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMessageHeader>);
    /**
     * Factory function to create a MessageHeader from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMessageHeader): MessageHeader;
    /**
     * Check if the current MessageHeader contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=MessageHeader.d.ts.map
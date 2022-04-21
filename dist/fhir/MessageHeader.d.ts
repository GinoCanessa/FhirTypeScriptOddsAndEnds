import * as fhir from '../fhir.js';
import { ResponseCodeValueSetType, ResponseCodeValueSetEnum } from '../fhirValueSets/ResponseCodeValueSet.js';
import { MessageReasonEncounterValueSetType } from '../fhirValueSets/MessageReasonEncounterValueSet.js';
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export declare type IMessageHeaderDestination = fhir.IBackboneElement & {
    /**
     * Human-readable name for the target system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhir.IReference | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.destination.endpoint
     */
    _endpoint?: fhir.IFhirElement | undefined;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhir.IReference | undefined;
};
/**
 * The source application from which this message originated.
 */
export declare type IMessageHeaderSource = fhir.IBackboneElement & {
    /**
     * Human-readable name for the source system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.software
     */
    _software?: fhir.IFhirElement | undefined;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhir.IContactPoint | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.source.endpoint
     */
    _endpoint?: fhir.IFhirElement | undefined;
};
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export declare type IMessageHeaderResponse = fhir.IBackboneElement & {
    /**
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.identifier
     */
    _identifier?: fhir.IFhirElement | undefined;
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code: ResponseCodeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
     */
    details?: fhir.IReference | undefined;
};
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export declare type IMessageHeader = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MessageHeader";
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventCoding?: fhir.ICoding | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventUri?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.event[x]
     */
    _eventUri?: fhir.IFhirElement | undefined;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination?: fhir.IMessageHeaderDestination[] | undefined;
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhir.IReference | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    author?: fhir.IReference | undefined;
    /**
     * The source application from which this message originated.
     */
    source: fhir.IMessageHeaderSource | null;
    /**
     * Usually only for the request but can be used in a response.
     */
    responsible?: fhir.IReference | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhir.ICodeableConcept | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.IMessageHeaderResponse | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus?: fhir.IReference[] | undefined;
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.definition
     */
    _definition?: fhir.IFhirElement | undefined;
};
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export declare class MessageHeaderDestination extends fhir.BackboneElement implements IMessageHeaderDestination {
    /**
     * Human-readable name for the target system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhir.Reference | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.destination.endpoint
     */
    _endpoint?: fhir.FhirElement | undefined;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhir.Reference | undefined;
    /**
     * Default constructor for MessageHeaderDestination - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMessageHeaderDestination>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The source application from which this message originated.
 */
export declare class MessageHeaderSource extends fhir.BackboneElement implements IMessageHeaderSource {
    /**
     * Human-readable name for the source system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.software
     */
    _software?: fhir.FhirElement | undefined;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhir.ContactPoint | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.source.endpoint
     */
    _endpoint?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MessageHeaderSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMessageHeaderSource>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export declare class MessageHeaderResponse extends fhir.BackboneElement implements IMessageHeaderResponse {
    /**
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.identifier
     */
    _identifier?: fhir.FhirElement | undefined;
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code: ResponseCodeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
     */
    details?: fhir.Reference | undefined;
    /**
     * Default constructor for MessageHeaderResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMessageHeaderResponse>);
    /**
     * Required-bound Value Set for code
     */
    codeRequiredValueSet(): ResponseCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export declare class MessageHeader extends fhir.DomainResource implements IMessageHeader {
    /**
     * Resource Type Name
     */
    resourceType: "MessageHeader";
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventCoding?: fhir.Coding | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventUri?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.event[x]
     */
    _eventUri?: fhir.FhirElement | undefined;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination?: fhir.MessageHeaderDestination[] | undefined;
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    author?: fhir.Reference | undefined;
    /**
     * The source application from which this message originated.
     */
    source: fhir.MessageHeaderSource | null;
    /**
     * Usually only for the request but can be used in a response.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponse | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus?: fhir.Reference[] | undefined;
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.definition
     */
    _definition?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMessageHeader>);
    /**
     * Example-bound Value Set for reason
     */
    reasonExampleValueSet(): MessageReasonEncounterValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MessageHeader.d.ts.map
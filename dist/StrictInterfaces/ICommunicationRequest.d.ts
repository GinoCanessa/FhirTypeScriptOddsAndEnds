import * as fhirInterfaces from '../strictinterfaces';
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export interface ICommunicationRequestPayload extends fhirInterfaces.IBackboneElement {
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    _contentString?: fhirInterfaces.IElement | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhirInterfaces.IReference | undefined;
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export interface ICommunicationRequest extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "CommunicationRequest";
    /**
     * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
     */
    about?: fhirInterfaces.IReference[] | undefined;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirInterfaces.IElement | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The attributes provided with the request qualify what is not to be done.
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhirInterfaces.IElement | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: fhirInterfaces.ICommunicationRequestPayload[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: CommunicationRequestPriorityEnum | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: fhirInterfaces.IReference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhirInterfaces.IReference[] | undefined;
    /**
     * The device, individual, or organization who initiated the request and has responsibility for its activation.
     */
    requester?: fhirInterfaces.IReference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhirInterfaces.IReference | undefined;
    /**
     * The status of the proposal or order.
     */
    status: CommunicationRequestStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhirInterfaces.IReference | undefined;
}
/**
 * Code Values for the CommunicationRequest.priority field
 */
export declare enum CommunicationRequestPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the CommunicationRequest.status field
 */
export declare enum CommunicationRequestStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    REVOKED = "revoked",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ICommunicationRequest.d.ts.map
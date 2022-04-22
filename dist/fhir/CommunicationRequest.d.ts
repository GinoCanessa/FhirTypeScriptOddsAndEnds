import * as fhir from '../fhir.js';
import { RequestStatusValueSetType, RequestStatusValueSetEnum } from '../fhirValueSets/RequestStatusValueSet.js';
import { CommunicationCategoryValueSetType } from '../fhirValueSets/CommunicationCategoryValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { V3ParticipationModeValueSetType } from '../fhirValueSets/V3ParticipationModeValueSet.js';
import { V3ActReasonValueSetType } from '../fhirValueSets/V3ActReasonValueSet.js';
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export declare type ICommunicationRequestPayload = fhir.IBackboneElement & {
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.payload.content[x]
     */
    _contentString?: fhir.IFhirElement | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.IAttachment | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.IReference | undefined;
};
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export declare type ICommunicationRequest = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.IReference[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IIdentifier | undefined;
    /**
     * The status of the proposal or order.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CommunicationRequest.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * The attributes provided with the request qualify what is not to be done.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.doNotPerform
     */
    _doNotPerform?: fhir.IFhirElement | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.ICodeableConcept[] | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
     */
    about?: fhir.IReference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: fhir.ICommunicationRequestPayload[] | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.authoredOn
     */
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * The device, individual, or organization who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.IReference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: fhir.IReference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.IReference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export declare class CommunicationRequestPayload extends fhir.BackboneElement implements ICommunicationRequestPayload {
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.payload.content[x]
     */
    _contentString?: fhir.FhirElement | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.Reference | undefined;
    /**
     * Default constructor for CommunicationRequestPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICommunicationRequestPayload>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export declare class CommunicationRequest extends fhir.DomainResource implements ICommunicationRequest {
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.Reference[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The status of the proposal or order.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CommunicationRequest.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * The attributes provided with the request qualify what is not to be done.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.doNotPerform
     */
    _doNotPerform?: fhir.FhirElement | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConcept[] | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
     */
    about?: fhir.Reference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: fhir.CommunicationRequestPayload[] | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * The device, individual, or organization who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: fhir.Reference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for CommunicationRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICommunicationRequest>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): RequestStatusValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): CommunicationCategoryValueSetType;
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Example-bound Value Set for medium
     */
    static mediumExampleValueSet(): V3ParticipationModeValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): V3ActReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=CommunicationRequest.d.ts.map
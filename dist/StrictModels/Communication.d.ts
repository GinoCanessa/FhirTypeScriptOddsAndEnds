import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export declare class CommunicationPayload extends fhirModels.BackboneElement implements fhirInterfaces.ICommunicationPayload {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    _contentString?: fhirModels.Element | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhirModels.Attachment | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for CommunicationPayload from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICommunicationPayload);
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export declare class Communication extends fhirModels.DomainResource implements fhirInterfaces.ICommunication {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Communication";
    /**
     * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
     */
    about?: fhirModels.Reference[] | undefined;
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Prior communication that this communication is in response to.
     */
    inResponseTo?: fhirModels.Reference[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirModels.Element[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirModels.Element[] | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Part of this action.
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: fhirModels.CommunicationPayload[] | undefined;
    /**
     * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
     */
    priority?: CommunicationPriorityEnum | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: string | undefined;
    _received?: fhirModels.Element | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: fhirModels.Reference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhirModels.Reference | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: string | undefined;
    _sent?: fhirModels.Element | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: CommunicationStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhirModels.CodeableConcept | undefined;
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Communication.topic.text can be used without any codings.
     */
    topic?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Communication from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICommunication);
}
/**
 * Code Values for the Communication.priority field
 */
export declare enum CommunicationPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the Communication.status field
 */
export declare enum CommunicationStatusEnum {
    PREPARATION = "preparation",
    IN_PROGRESS = "in-progress",
    NOT_DONE = "not-done",
    ON_HOLD = "on-hold",
    STOPPED = "stopped",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Communication.d.ts.map
import * as fhir from '../fhirJson.js';
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export interface CommunicationPayload extends fhir.BackboneElement {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.payload.content[x]
     */
    _contentString?: fhir.FhirElement;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.Reference | undefined;
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export interface Communication extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Communication";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: Communication.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElement | null)[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: Communication.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElement | null)[];
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Part of this action.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * Prior communication that this communication is in response to.
     */
    inResponseTo?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: 'completed' | 'entered-in-error' | 'in-progress' | 'not-done' | 'on-hold' | 'preparation' | 'stopped' | 'unknown' | null;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConcept[] | undefined;
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Communication.topic.text can be used without any codings.
     */
    topic?: fhir.CodeableConcept | undefined;
    /**
     * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
     */
    about?: fhir.Reference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.sent
     */
    _sent?: fhir.FhirElement;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.received
     */
    _received?: fhir.FhirElement;
    /**
     * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: fhir.Reference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: fhir.CommunicationPayload[] | undefined;
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note?: fhir.Annotation[] | undefined;
}
//# sourceMappingURL=Communication.d.ts.map
import * as fhir from '../fhir.js';
import { EventStatusValueSetType, EventStatusValueSetEnum } from '../fhirValueSets/EventStatusValueSet.js';
import { CommunicationNotDoneReasonValueSetType } from '../fhirValueSets/CommunicationNotDoneReasonValueSet.js';
import { CommunicationCategoryValueSetType } from '../fhirValueSets/CommunicationCategoryValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { V3ParticipationModeValueSetType } from '../fhirValueSets/V3ParticipationModeValueSet.js';
import { CommunicationTopicValueSetType } from '../fhirValueSets/CommunicationTopicValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export declare type ICommunicationPayload = fhir.IBackboneElement & {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.payload.content[x]
     */
    _contentString?: fhir.IFhirElement | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.IAttachment | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.IReference | undefined;
};
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export declare type ICommunication = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Communication";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: Communication.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: Communication.instantiatesUri
     */
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Part of this action.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * Prior communication that this communication is in response to.
     */
    inResponseTo?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: EventStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Communication.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Communication.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.ICodeableConcept[] | undefined;
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Communication.topic.text can be used without any codings.
     */
    topic?: fhir.ICodeableConcept | undefined;
    /**
     * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
     */
    about?: fhir.IReference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.sent
     */
    _sent?: fhir.IFhirElement | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.received
     */
    _received?: fhir.IFhirElement | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: fhir.IReference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.IReference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: fhir.ICommunicationPayload[] | undefined;
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export declare class CommunicationPayload extends fhir.BackboneElement implements ICommunicationPayload {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.payload.content[x]
     */
    _contentString?: fhir.FhirElement | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.Reference | undefined;
    /**
     * Default constructor for CommunicationPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICommunicationPayload>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export declare class Communication extends fhir.DomainResource implements ICommunication {
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
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: Communication.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement[] | undefined;
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
    status: EventStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Communication.status
     */
    _status?: fhir.FhirElement | undefined;
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
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Communication.priority
     */
    _priority?: fhir.FhirElement | undefined;
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
    _sent?: fhir.FhirElement | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.received
     */
    _received?: fhir.FhirElement | undefined;
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
    /**
     * Default constructor for Communication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICommunication>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): EventStatusValueSetType;
    /**
     * Example-bound Value Set for statusReason
     */
    statusReasonExampleValueSet(): CommunicationNotDoneReasonValueSetType;
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): CommunicationCategoryValueSetType;
    /**
     * Required-bound Value Set for priority
     */
    priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Example-bound Value Set for medium
     */
    mediumExampleValueSet(): V3ParticipationModeValueSetType;
    /**
     * Example-bound Value Set for topic
     */
    topicExampleValueSet(): CommunicationTopicValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Communication.d.ts.map
import * as fhir from '../fhir.js';
import { EventStatusValueSetType } from '../fhirValueSets/EventStatusValueSet.js';
import { EventStatusValueSetEnum } from '../valueSetEnums.js';
import { CommunicationNotDoneReasonValueSetType } from '../fhirValueSets/CommunicationNotDoneReasonValueSet.js';
import { CommunicationCategoryValueSetType } from '../fhirValueSets/CommunicationCategoryValueSet.js';
import { RequestPriorityValueSetType } from '../fhirValueSets/RequestPriorityValueSet.js';
import { RequestPriorityValueSetEnum } from '../valueSetEnums.js';
import { V3ParticipationModeValueSetType } from '../fhirValueSets/V3ParticipationModeValueSet.js';
import { CommunicationTopicValueSetType } from '../fhirValueSets/CommunicationTopicValueSet.js';
import { ClinicalFindingsValueSetType } from '../fhirValueSets/ClinicalFindingsValueSet.js';
/**
 * Valid arguments for the CommunicationPayload type.
 */
export interface CommunicationPayloadArgs extends fhir.BackboneElementArgs {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    content?: fhir.FhirString | fhir.Attachment | fhir.Reference | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: fhir.FhirString | string | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export declare class CommunicationPayload extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    content: (fhir.FhirString | fhir.Attachment | fhir.Reference) | null;
    readonly __contentIsChoice: true;
    /**
     * Default constructor for CommunicationPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationPayloadArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the Communication type.
 */
export interface CommunicationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Communication" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * Part of this action.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * Prior communication that this communication is in response to.
     */
    inResponseTo?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: EventStatusValueSetEnum | null;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Communication.topic.text can be used without any codings.
     */
    topic?: fhir.CodeableConceptArgs | undefined;
    /**
     * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
     */
    about?: fhir.ReferenceArgs[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: fhir.FhirDateTime | string | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: fhir.FhirDateTime | string | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.ReferenceArgs | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: fhir.CommunicationPayloadArgs[] | undefined;
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export declare class Communication extends fhir.DomainResource {
    readonly __dataType: string;
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
    instantiatesCanonical?: fhir.FhirCanonical[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | undefined;
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
    sent?: fhir.FhirDateTime | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<CommunicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): EventStatusValueSetType;
    /**
     * Example-bound Value Set for statusReason
     */
    static statusReasonExampleValueSet(): CommunicationNotDoneReasonValueSetType;
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
     * Example-bound Value Set for topic
     */
    static topicExampleValueSet(): CommunicationTopicValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ClinicalFindingsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Communication.d.ts.map
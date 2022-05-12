import * as fhir from '../fhir.js';
import { NetworkTypeValueSetType } from '../fhirValueSets/NetworkTypeValueSet.js';
import { ParticipationRoleTypeValueSetType } from '../fhirValueSets/ParticipationRoleTypeValueSet.js';
import { SecurityRoleTypeValueSetType } from '../fhirValueSets/SecurityRoleTypeValueSet.js';
import { Dicm405MediatypeValueSetType } from '../fhirValueSets/Dicm405MediatypeValueSet.js';
import { V3PurposeOfUseValueSetType } from '../fhirValueSets/V3PurposeOfUseValueSet.js';
import { AuditSourceTypeValueSetType } from '../fhirValueSets/AuditSourceTypeValueSet.js';
import { AuditEntityTypeValueSetType } from '../fhirValueSets/AuditEntityTypeValueSet.js';
import { ObjectRoleValueSetType } from '../fhirValueSets/ObjectRoleValueSet.js';
import { SecurityLabelsValueSetType } from '../fhirValueSets/SecurityLabelsValueSet.js';
import { AuditEventTypeValueSetType } from '../fhirValueSets/AuditEventTypeValueSet.js';
import { AuditEventSubTypeValueSetType } from '../fhirValueSets/AuditEventSubTypeValueSet.js';
import { AuditEventActionValueSetType } from '../fhirValueSets/AuditEventActionValueSet.js';
import { AuditEventOutcomeValueSetType } from '../fhirValueSets/AuditEventOutcomeValueSet.js';
/**
 * Valid arguments for the AuditEventAgentNetwork type.
 */
export interface AuditEventAgentNetworkArgs extends fhir.BackboneElementArgs {
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: fhir.FhirString | string | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: fhir.FhirCode | string | undefined;
}
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export declare class AuditEventAgentNetwork extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: fhir.FhirString | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Default constructor for AuditEventAgentNetwork - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventAgentNetworkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): NetworkTypeValueSetType;
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
 * Valid arguments for the AuditEventAgent type.
 */
export interface AuditEventAgentArgs extends fhir.BackboneElementArgs {
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Where a User ID is available it will go into who.identifier.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: fhir.FhirString | string | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: fhir.FhirBoolean | boolean | undefined;
    /**
     * Where the event occurred.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: fhir.FhirUri[] | string[] | undefined;
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhir.CodingArgs | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventAgentNetworkArgs | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export declare class AuditEventAgent extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role?: fhir.CodeableConcept[] | undefined;
    /**
     * Where a User ID is available it will go into who.identifier.
     */
    who?: fhir.Reference | undefined;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: fhir.FhirString | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: fhir.FhirString | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: fhir.FhirBoolean | null;
    /**
     * Where the event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: fhir.FhirUri[] | undefined;
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhir.Coding | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventAgentNetwork | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for AuditEventAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): ParticipationRoleTypeValueSetType;
    /**
     * Example-bound Value Set for role
     */
    static roleExampleValueSet(): SecurityRoleTypeValueSetType;
    /**
     * Extensible-bound Value Set for media
     */
    static mediaExtensibleValueSet(): Dicm405MediatypeValueSetType;
    /**
     * Extensible-bound Value Set for purposeOfUse
     */
    static purposeOfUseExtensibleValueSet(): V3PurposeOfUseValueSetType;
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
 * Valid arguments for the AuditEventSource type.
 */
export interface AuditEventSourceArgs extends fhir.BackboneElementArgs {
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: fhir.FhirString | string | undefined;
    /**
     * Identifier of the source where the event was detected.
     */
    observer: fhir.ReferenceArgs | null;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: fhir.CodingArgs[] | undefined;
}
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export declare class AuditEventSource extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: fhir.FhirString | undefined;
    /**
     * Identifier of the source where the event was detected.
     */
    observer: fhir.Reference | null;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: fhir.Coding[] | undefined;
    /**
     * Default constructor for AuditEventSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventSourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): AuditSourceTypeValueSetType;
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
 * Valid arguments for the AuditEventEntityDetail type.
 */
export interface AuditEventEntityDetailArgs extends fhir.BackboneElementArgs {
    /**
     * The type of extra detail provided in the value.
     */
    type: fhir.FhirString | string | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    value?: fhir.FhirString | fhir.FhirBase64Binary | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
}
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export declare class AuditEventEntityDetail extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The type of extra detail provided in the value.
     */
    type: fhir.FhirString | null;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    value: (fhir.FhirString | fhir.FhirBase64Binary) | null;
    readonly __valueIsChoice: true;
    /**
     * Default constructor for AuditEventEntityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventEntityDetailArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the AuditEventEntity type.
 */
export interface AuditEventEntityArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: fhir.ReferenceArgs | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhir.CodingArgs | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhir.CodingArgs | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Text that describes the entity in more detail.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: fhir.AuditEventEntityDetailArgs[] | undefined;
}
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export declare class AuditEventEntity extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: fhir.Reference | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhir.Coding | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhir.Coding | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhir.Coding | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel?: fhir.Coding[] | undefined;
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Text that describes the entity in more detail.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: fhir.FhirBase64Binary | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: fhir.AuditEventEntityDetail[] | undefined;
    /**
     * Default constructor for AuditEventEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventEntityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): AuditEntityTypeValueSetType;
    /**
     * Extensible-bound Value Set for role
     */
    static roleExtensibleValueSet(): ObjectRoleValueSetType;
    /**
     * Extensible-bound Value Set for securityLabel
     */
    static securityLabelExtensibleValueSet(): SecurityLabelsValueSetType;
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
 * Valid arguments for the AuditEvent type.
 */
export interface AuditEventArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent" | undefined;
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhir.CodingArgs | null;
    /**
     * Identifier for the category of event.
     */
    subtype?: fhir.CodingArgs[] | undefined;
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: fhir.FhirCode | string | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: fhir.FhirInstant | string | undefined;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: fhir.FhirCode | string | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: fhir.FhirString | string | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: fhir.AuditEventAgentArgs[] | null;
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhir.AuditEventSourceArgs | null;
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity?: fhir.AuditEventEntityArgs[] | undefined;
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export declare class AuditEvent extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent";
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhir.Coding | null;
    /**
     * Identifier for the category of event.
     */
    subtype?: fhir.Coding[] | undefined;
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: fhir.FhirCode | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.Period | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: fhir.FhirInstant | null;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: fhir.FhirCode | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: fhir.FhirString | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent?: fhir.CodeableConcept[] | undefined;
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: fhir.AuditEventAgent[] | null;
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhir.AuditEventSource | null;
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity?: fhir.AuditEventEntity[] | undefined;
    /**
     * Default constructor for AuditEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): AuditEventTypeValueSetType;
    /**
     * Extensible-bound Value Set for subtype
     */
    static subtypeExtensibleValueSet(): AuditEventSubTypeValueSetType;
    /**
     * Required-bound Value Set for action
     */
    static actionRequiredValueSet(): AuditEventActionValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    static outcomeRequiredValueSet(): AuditEventOutcomeValueSetType;
    /**
     * Extensible-bound Value Set for purposeOfEvent
     */
    static purposeOfEventExtensibleValueSet(): V3PurposeOfUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=AuditEvent.d.ts.map
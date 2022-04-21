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
 * Logical network location for application activity, if the activity has a network location.
 */
export declare type IAuditEventAgentNetwork = fhir.IBackboneElement & {
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.network.address
     */
    _address?: fhir.IFhirElement | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.network.type
     */
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export declare type IAuditEventAgent = fhir.IBackboneElement & {
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role?: fhir.ICodeableConcept[] | undefined;
    /**
     * Where a User ID is available it will go into who.identifier.
     */
    who?: fhir.IReference | undefined;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.altId
     */
    _altId?: fhir.IFhirElement | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: boolean | null;
    /**
     * Extended properties for primitive element: AuditEvent.agent.requestor
     */
    _requestor?: fhir.IFhirElement | undefined;
    /**
     * Where the event occurred.
     */
    location?: fhir.IReference | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: string[] | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.policy
     */
    _policy?: fhir.IFhirElement[] | undefined;
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhir.ICoding | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.IAuditEventAgentNetwork | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export declare type IAuditEventSource = fhir.IBackboneElement & {
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.source.site
     */
    _site?: fhir.IFhirElement | undefined;
    /**
     * Identifier of the source where the event was detected.
     */
    observer: fhir.IReference | null;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: fhir.ICoding[] | undefined;
};
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export declare type IAuditEventEntityDetail = fhir.IBackboneElement & {
    /**
     * The type of extra detail provided in the value.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.value[x]
     */
    _valueBase64Binary?: fhir.IFhirElement | undefined;
};
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export declare type IAuditEventEntity = fhir.IBackboneElement & {
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: fhir.IReference | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhir.ICoding | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhir.ICoding | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhir.ICoding | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel?: fhir.ICoding[] | undefined;
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Text that describes the entity in more detail.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.query
     */
    _query?: fhir.IFhirElement | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: fhir.IAuditEventEntityDetail[] | undefined;
};
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export declare type IAuditEvent = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent";
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhir.ICoding | null;
    /**
     * Identifier for the category of event.
     */
    subtype?: fhir.ICoding[] | undefined;
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.action
     */
    _action?: fhir.IFhirElement | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.recorded
     */
    _recorded?: fhir.IFhirElement | undefined;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.outcome
     */
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.outcomeDesc
     */
    _outcomeDesc?: fhir.IFhirElement | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent?: fhir.ICodeableConcept[] | undefined;
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: fhir.IAuditEventAgent[] | null;
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhir.IAuditEventSource | null;
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity?: fhir.IAuditEventEntity[] | undefined;
};
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export declare class AuditEventAgentNetwork extends fhir.BackboneElement implements IAuditEventAgentNetwork {
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.network.address
     */
    _address?: fhir.FhirElement | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.network.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for AuditEventAgentNetwork - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAuditEventAgentNetwork>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): NetworkTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export declare class AuditEventAgent extends fhir.BackboneElement implements IAuditEventAgent {
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
    altId?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.altId
     */
    _altId?: fhir.FhirElement | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: boolean | null;
    /**
     * Extended properties for primitive element: AuditEvent.agent.requestor
     */
    _requestor?: fhir.FhirElement | undefined;
    /**
     * Where the event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: string[] | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.policy
     */
    _policy?: fhir.FhirElement[] | undefined;
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
    constructor(source?: Partial<IAuditEventAgent>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): ParticipationRoleTypeValueSetType;
    /**
     * Example-bound Value Set for role
     */
    roleExampleValueSet(): SecurityRoleTypeValueSetType;
    /**
     * Extensible-bound Value Set for media
     */
    mediaExtensibleValueSet(): Dicm405MediatypeValueSetType;
    /**
     * Extensible-bound Value Set for purposeOfUse
     */
    purposeOfUseExtensibleValueSet(): V3PurposeOfUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export declare class AuditEventSource extends fhir.BackboneElement implements IAuditEventSource {
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.source.site
     */
    _site?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IAuditEventSource>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): AuditSourceTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export declare class AuditEventEntityDetail extends fhir.BackboneElement implements IAuditEventEntityDetail {
    /**
     * The type of extra detail provided in the value.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Default constructor for AuditEventEntityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAuditEventEntityDetail>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export declare class AuditEventEntity extends fhir.BackboneElement implements IAuditEventEntity {
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
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Text that describes the entity in more detail.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.query
     */
    _query?: fhir.FhirElement | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: fhir.AuditEventEntityDetail[] | undefined;
    /**
     * Default constructor for AuditEventEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAuditEventEntity>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): AuditEntityTypeValueSetType;
    /**
     * Extensible-bound Value Set for role
     */
    roleExtensibleValueSet(): ObjectRoleValueSetType;
    /**
     * Extensible-bound Value Set for securityLabel
     */
    securityLabelExtensibleValueSet(): SecurityLabelsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export declare class AuditEvent extends fhir.DomainResource implements IAuditEvent {
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
    action?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.action
     */
    _action?: fhir.FhirElement | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.Period | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.recorded
     */
    _recorded?: fhir.FhirElement | undefined;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.outcome
     */
    _outcome?: fhir.FhirElement | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.outcomeDesc
     */
    _outcomeDesc?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IAuditEvent>);
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): AuditEventTypeValueSetType;
    /**
     * Extensible-bound Value Set for subtype
     */
    subtypeExtensibleValueSet(): AuditEventSubTypeValueSetType;
    /**
     * Required-bound Value Set for action
     */
    actionRequiredValueSet(): AuditEventActionValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    outcomeRequiredValueSet(): AuditEventOutcomeValueSetType;
    /**
     * Extensible-bound Value Set for purposeOfEvent
     */
    purposeOfEventExtensibleValueSet(): V3PurposeOfUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=AuditEvent.d.ts.map
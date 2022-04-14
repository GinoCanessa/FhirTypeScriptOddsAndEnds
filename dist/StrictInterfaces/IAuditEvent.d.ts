import * as fhirInterfaces from '../strictinterfaces';
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export interface IAuditEventAgentNetwork extends fhirInterfaces.IBackboneElement {
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: string | undefined;
    _address?: fhirInterfaces.IElement | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: string | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export interface IAuditEventAgent extends fhirInterfaces.IBackboneElement {
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: string | undefined;
    _altId?: fhirInterfaces.IElement | undefined;
    /**
     * Where the event occurred.
     */
    location?: fhirInterfaces.IReference | undefined;
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhirInterfaces.ICoding | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhirInterfaces.IAuditEventAgentNetwork | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: string[] | undefined;
    _policy?: fhirInterfaces.IElement[] | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: boolean;
    _requestor?: fhirInterfaces.IElement | undefined;
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Where a User ID is available it will go into who.identifier.
     */
    who?: fhirInterfaces.IReference | undefined;
}
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export interface IAuditEventSource extends fhirInterfaces.IBackboneElement {
    /**
     * Identifier of the source where the event was detected.
     */
    observer: fhirInterfaces.IReference;
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: string | undefined;
    _site?: fhirInterfaces.IElement | undefined;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: fhirInterfaces.ICoding[] | undefined;
}
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export interface IAuditEventEntityDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The type of extra detail provided in the value.
     */
    type: string;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirInterfaces.IElement | undefined;
}
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export interface IAuditEventEntity extends fhirInterfaces.IBackboneElement {
    /**
     * Text that describes the entity in more detail.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: fhirInterfaces.IAuditEventEntityDetail[] | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhirInterfaces.ICoding | undefined;
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: string | undefined;
    _query?: fhirInterfaces.IElement | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhirInterfaces.ICoding | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel?: fhirInterfaces.ICoding[] | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhirInterfaces.ICoding | undefined;
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: fhirInterfaces.IReference | undefined;
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export interface IAuditEvent extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "AuditEvent";
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: string | undefined;
    _action?: fhirInterfaces.IElement | undefined;
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: fhirInterfaces.IAuditEventAgent[];
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity?: fhirInterfaces.IAuditEventEntity[] | undefined;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: string | undefined;
    _outcome?: fhirInterfaces.IElement | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: string | undefined;
    _outcomeDesc?: fhirInterfaces.IElement | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: string;
    _recorded?: fhirInterfaces.IElement | undefined;
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhirInterfaces.IAuditEventSource;
    /**
     * Identifier for the category of event.
     */
    subtype?: fhirInterfaces.ICoding[] | undefined;
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhirInterfaces.ICoding;
}
//# sourceMappingURL=IAuditEvent.d.ts.map
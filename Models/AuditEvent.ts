// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export class AuditEventAgentNetwork extends fhirModels.BackboneElement implements fhirInterfaces.IAuditEventAgentNetwork {
  /**
   * This could be a device id, IP address or some other identifier associated with a device.
   */
  address?: string|undefined;
  _address?: fhirModels.Element|undefined;
  /**
   * An identifier for the type of network access point that originated the audit event.
   */
  type?: string|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for AuditEventAgentNetwork from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAuditEventAgentNetwork>) {
    super(source);
    if (source["address"] !== undefined) { this.address = source.address; }
    if (source["_address"] !== undefined) { this._address = new fhirModels.Element(source._address); }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = new fhirModels.Element(source._type); }
  }
  /**
   * Check if the current AuditEventAgentNetwork contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AuditEventAgentNetwork from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAuditEventAgentNetwork):AuditEventAgentNetwork {
    var dest:AuditEventAgentNetwork = new AuditEventAgentNetwork(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AuditEventAgentNetwork is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export class AuditEventAgent extends fhirModels.BackboneElement implements fhirInterfaces.IAuditEventAgent {
  /**
   * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
   */
  altId?: string|undefined;
  _altId?: fhirModels.Element|undefined;
  /**
   * Where the event occurred.
   */
  location?: fhirModels.Reference|undefined;
  /**
   * Type of media involved. Used when the event is about exporting/importing onto media.
   */
  media?: fhirModels.Coding|undefined;
  /**
   * Human-meaningful name for the agent.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * Logical network location for application activity, if the activity has a network location.
   */
  network?: fhirModels.AuditEventAgentNetwork|undefined;
  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   */
  policy?: string[]|undefined;
  _policy?: fhirModels.Element[]|undefined;
  /**
   * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   */
  purposeOfUse?: fhirModels.CodeableConcept[]|undefined;
  /**
   * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
   */
  requestor: boolean|undefined;
  _requestor?: fhirModels.Element|undefined;
  /**
   * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
   */
  role?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Specification of the participation type the user plays when performing the event.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Where a User ID is available it will go into who.identifier.
   */
  who?: fhirModels.Reference|undefined;
  /**
   * Default constructor for AuditEventAgent from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAuditEventAgent>) {
    super(source);
    if (source["altId"] !== undefined) { this.altId = source.altId; }
    if (source["_altId"] !== undefined) { this._altId = new fhirModels.Element(source._altId); }
    if (source["location"] !== undefined) { this.location = new fhirModels.Reference(source.location); }
    if (source["media"] !== undefined) { this.media = new fhirModels.Coding(source.media); }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["network"] !== undefined) { this.network = new fhirModels.AuditEventAgentNetwork(source.network); }
    if (source["policy"] !== undefined) { this.policy = source.policy.map((x) => (x)); }
    if (source["_policy"] !== undefined) { this._policy = source._policy.map((x) => new fhirModels.Element(x)); }
    if (source["purposeOfUse"] !== undefined) { this.purposeOfUse = source.purposeOfUse.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["requestor"] !== undefined) { this.requestor = source.requestor; }
    if (source["_requestor"] !== undefined) { this._requestor = new fhirModels.Element(source._requestor); }
    if (source["role"] !== undefined) { this.role = source.role.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
    if (source["who"] !== undefined) { this.who = new fhirModels.Reference(source.who); }
  }
  /**
   * Check if the current AuditEventAgent contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["requestor"] === undefined) { missingElements.push("requestor"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AuditEventAgent from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAuditEventAgent):AuditEventAgent {
    var dest:AuditEventAgent = new AuditEventAgent(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AuditEventAgent is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export class AuditEventSource extends fhirModels.BackboneElement implements fhirInterfaces.IAuditEventSource {
  /**
   * Identifier of the source where the event was detected.
   */
  observer: fhirModels.Reference|undefined;
  /**
   * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
   */
  site?: string|undefined;
  _site?: fhirModels.Element|undefined;
  /**
   * Code specifying the type of source where event originated.
   */
  type?: fhirModels.Coding[]|undefined;
  /**
   * Default constructor for AuditEventSource from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAuditEventSource>) {
    super(source);
    if (source["observer"] !== undefined) { this.observer = new fhirModels.Reference(source.observer); }
    if (source["site"] !== undefined) { this.site = source.site; }
    if (source["_site"] !== undefined) { this._site = new fhirModels.Element(source._site); }
    if (source["type"] !== undefined) { this.type = source.type.map((x) => new fhirModels.Coding(x)); }
  }
  /**
   * Check if the current AuditEventSource contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["observer"] === undefined) { missingElements.push("observer"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AuditEventSource from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAuditEventSource):AuditEventSource {
    var dest:AuditEventSource = new AuditEventSource(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AuditEventSource is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export class AuditEventEntityDetail extends fhirModels.BackboneElement implements fhirInterfaces.IAuditEventEntityDetail {
  /**
   * The type of extra detail provided in the value.
   */
  type: string|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   */
  valueString?: string|undefined;
  _valueString?: fhirModels.Element|undefined;
  /**
   * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   */
  valueBase64Binary?: string|undefined;
  _valueBase64Binary?: fhirModels.Element|undefined;
  /**
   * Default constructor for AuditEventEntityDetail from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAuditEventEntityDetail>) {
    super(source);
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = new fhirModels.Element(source._type); }
    if (source["valueString"] !== undefined) { this.valueString = source.valueString; }
    if (source["_valueString"] !== undefined) { this._valueString = new fhirModels.Element(source._valueString); }
    if (source["valueBase64Binary"] !== undefined) { this.valueBase64Binary = source.valueBase64Binary; }
    if (source["_valueBase64Binary"] !== undefined) { this._valueBase64Binary = new fhirModels.Element(source._valueBase64Binary); }
  }
  /**
   * Check if the current AuditEventEntityDetail contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AuditEventEntityDetail from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAuditEventEntityDetail):AuditEventEntityDetail {
    var dest:AuditEventEntityDetail = new AuditEventEntityDetail(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AuditEventEntityDetail is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export class AuditEventEntity extends fhirModels.BackboneElement implements fhirInterfaces.IAuditEventEntity {
  /**
   * Text that describes the entity in more detail.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Tagged value pairs for conveying additional information about the entity.
   */
  detail?: fhirModels.AuditEventEntityDetail[]|undefined;
  /**
   * This can be used to provide an audit trail for data, over time, as it passes through the system.
   */
  lifecycle?: fhirModels.Coding|undefined;
  /**
   * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   */
  query?: string|undefined;
  _query?: fhirModels.Element|undefined;
  /**
   * Code representing the role the entity played in the event being audited.
   */
  role?: fhirModels.Coding|undefined;
  /**
   * Copied from entity meta security tags.
   */
  securityLabel?: fhirModels.Coding[]|undefined;
  /**
   * This value is distinct from the user's role or any user relationship to the entity.
   */
  type?: fhirModels.Coding|undefined;
  /**
   * Identifies a specific instance of the entity. The reference should be version specific.
   */
  what?: fhirModels.Reference|undefined;
  /**
   * Default constructor for AuditEventEntity from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAuditEventEntity>) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["detail"] !== undefined) { this.detail = source.detail.map((x) => new fhirModels.AuditEventEntityDetail(x)); }
    if (source["lifecycle"] !== undefined) { this.lifecycle = new fhirModels.Coding(source.lifecycle); }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["query"] !== undefined) { this.query = source.query; }
    if (source["_query"] !== undefined) { this._query = new fhirModels.Element(source._query); }
    if (source["role"] !== undefined) { this.role = new fhirModels.Coding(source.role); }
    if (source["securityLabel"] !== undefined) { this.securityLabel = source.securityLabel.map((x) => new fhirModels.Coding(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.Coding(source.type); }
    if (source["what"] !== undefined) { this.what = new fhirModels.Reference(source.what); }
  }
  /**
   * Check if the current AuditEventEntity contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AuditEventEntity from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAuditEventEntity):AuditEventEntity {
    var dest:AuditEventEntity = new AuditEventEntity(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AuditEventEntity is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export class AuditEvent extends fhirModels.DomainResource implements fhirInterfaces.IAuditEvent {
  /**
   * Resource Type Name
   */
  readonly resourceType = "AuditEvent";
  /**
   * Indicator for type of action performed during the event that generated the audit.
   */
  action?: string|undefined;
  _action?: fhirModels.Element|undefined;
  /**
   * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
   * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
   */
  agent: fhirModels.AuditEventAgent[]|undefined;
  /**
   * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
   */
  entity?: fhirModels.AuditEventEntity[]|undefined;
  /**
   * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
   */
  outcome?: string|undefined;
  _outcome?: fhirModels.Element|undefined;
  /**
   * A free text description of the outcome of the event.
   */
  outcomeDesc?: string|undefined;
  _outcomeDesc?: fhirModels.Element|undefined;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  period?: fhirModels.Period|undefined;
  /**
   * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
   */
  purposeOfEvent?: fhirModels.CodeableConcept[]|undefined;
  /**
   * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
   */
  recorded: string|undefined;
  _recorded?: fhirModels.Element|undefined;
  /**
   * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
   */
  source: fhirModels.AuditEventSource|undefined;
  /**
   * Identifier for the category of event.
   */
  subtype?: fhirModels.Coding[]|undefined;
  /**
   * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
   */
  type: fhirModels.Coding|undefined;
  /**
   * Default constructor for AuditEvent from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAuditEvent>) {
    super(source);
    if ((source['resourceType'] !== "AuditEvent") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a AuditEvent'; }
    if (source["action"] !== undefined) { this.action = source.action; }
    if (source["_action"] !== undefined) { this._action = new fhirModels.Element(source._action); }
    if (source["agent"] !== undefined) { this.agent = source.agent.map((x) => new fhirModels.AuditEventAgent(x)); }
    if (source["entity"] !== undefined) { this.entity = source.entity.map((x) => new fhirModels.AuditEventEntity(x)); }
    if (source["outcome"] !== undefined) { this.outcome = source.outcome; }
    if (source["_outcome"] !== undefined) { this._outcome = new fhirModels.Element(source._outcome); }
    if (source["outcomeDesc"] !== undefined) { this.outcomeDesc = source.outcomeDesc; }
    if (source["_outcomeDesc"] !== undefined) { this._outcomeDesc = new fhirModels.Element(source._outcomeDesc); }
    if (source["period"] !== undefined) { this.period = new fhirModels.Period(source.period); }
    if (source["purposeOfEvent"] !== undefined) { this.purposeOfEvent = source.purposeOfEvent.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["recorded"] !== undefined) { this.recorded = source.recorded; }
    if (source["_recorded"] !== undefined) { this._recorded = new fhirModels.Element(source._recorded); }
    if (source["source"] !== undefined) { this.source = new fhirModels.AuditEventSource(source.source); }
    if (source["subtype"] !== undefined) { this.subtype = source.subtype.map((x) => new fhirModels.Coding(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.Coding(source.type); }
  }
  /**
   * Check if the current AuditEvent contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((this["agent"] === undefined) || (this["agent"].length === 0)) { missingElements.push("agent"); }
    if (this["recorded"] === undefined) { missingElements.push("recorded"); }
    if (this["source"] === undefined) { missingElements.push("source"); }
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a AuditEvent from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAuditEvent):AuditEvent {
    var dest:AuditEvent = new AuditEvent(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AuditEvent is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}

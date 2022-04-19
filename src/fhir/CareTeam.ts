// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export type ICareTeamParticipant = fhir.IBackboneElement & {
  /**
   * Patient only needs to be listed if they have a role other than "subject of care".
   * Member is optional because some participants may be known only by their role, particularly in draft plans.
   */
  member?: fhir.IReference|undefined;
  /**
   * The organization of the practitioner.
   */
  onBehalfOf?: fhir.IReference|undefined;
  /**
   * Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
   */
  role?: fhir.ICodeableConcept[]|undefined;
}
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export type ICareTeam = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "CareTeam";
  /**
   * There may be multiple axis of categorization and one team may serve multiple purposes.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The organization responsible for the care team.
   */
  managingOrganization?: fhir.IReference[]|undefined;
  /**
   * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
   */
  name?: string|undefined;
  _name?: fhir.IFhirElement|undefined;
  /**
   * Comments made about the CareTeam.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care team.
   */
  participant?: fhir.ICareTeamParticipant[]|undefined;
  /**
   * Indicates when the team did (or is intended to) come into effect and end.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Describes why the care team exists.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * Condition(s) that this care team addresses.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
   */
  status?: CareTeamStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Identifies the patient or group whose intended care is handled by the team.
   */
  subject?: fhir.IReference|undefined;
  /**
   * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
   */
  telecom?: fhir.IContactPoint[]|undefined;
}
/**
 * Identifies all people and organizations who are expected to be involved in the care team.
 */
export class CareTeamParticipant extends fhir.BackboneElement implements fhir.ICareTeamParticipant {
  /**
   * Patient only needs to be listed if they have a role other than "subject of care".
   * Member is optional because some participants may be known only by their role, particularly in draft plans.
   */
  public member?: fhir.Reference|undefined;
  /**
   * The organization of the practitioner.
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  public period?: fhir.Period|undefined;
  /**
   * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of the care team.  General relationships should be handled as properties of the Patient resource directly.
   */
  public role?: fhir.CodeableConcept[]|undefined;
  /**
   * Default constructor for CareTeamParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICareTeamParticipant> = {}) {
    super(source);
    if (source["member"]) { this.member = new fhir.Reference(source.member!); }
    if (source["onBehalfOf"]) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf!); }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (source["role"]) { this.role = source.role.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
  }
  /**
   * Check if the current CareTeamParticipant contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CareTeamParticipant from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICareTeamParticipant):CareTeamParticipant {
    var dest:CareTeamParticipant = new CareTeamParticipant(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CareTeamParticipant is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
export class CareTeam extends fhir.DomainResource implements fhir.ICareTeam {
  /**
   * Resource Type Name
   */
  public override resourceType: "CareTeam";
  /**
   * There may be multiple axis of categorization and one team may serve multiple purposes.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The organization responsible for the care team.
   */
  public managingOrganization?: fhir.Reference[]|undefined;
  /**
   * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e.g. "Red trauma team"), but its primary purpose is to distinguish between identical teams in a human-friendly way.  ("Team 18735" isn't as friendly.).
   */
  public name?: string|undefined;
  public _name?: fhir.FhirElement|undefined;
  /**
   * Comments made about the CareTeam.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care team.
   */
  public participant?: fhir.CareTeamParticipant[]|undefined;
  /**
   * Indicates when the team did (or is intended to) come into effect and end.
   */
  public period?: fhir.Period|undefined;
  /**
   * Describes why the care team exists.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * Condition(s) that this care team addresses.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as not currently valid.
   */
  public status?: CareTeamStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Identifies the patient or group whose intended care is handled by the team.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual care team members.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Default constructor for CareTeam - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICareTeam> = {}) {
    super(source);
    this.resourceType = 'CareTeam';
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["managingOrganization"]) { this.managingOrganization = source.managingOrganization.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["name"]) { this.name = source.name; }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["participant"]) { this.participant = source.participant.map((x:Partial<fhir.ICareTeamParticipant>) => new fhir.CareTeamParticipant(x)); }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (source["telecom"]) { this.telecom = source.telecom.map((x:Partial<fhir.IContactPoint>) => new fhir.ContactPoint(x)); }
  }
  /**
   * Check if the current CareTeam contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CareTeam from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICareTeam):CareTeam {
    var dest:CareTeam = new CareTeam(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CareTeam is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the CareTeam.status field
 */
export enum CareTeamStatusEnum {
  PROPOSED = "proposed",
  ACTIVE = "active",
  SUSPENDED = "suspended",
  INACTIVE = "inactive",
  ENTERED_IN_ERROR = "entered-in-error",
}

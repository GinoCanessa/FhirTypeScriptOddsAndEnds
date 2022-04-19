// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export type IOrganizationAffiliation = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "OrganizationAffiliation";
  /**
   * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
   */
  active?: boolean|undefined;
  _active?: fhir.IFhirElement|undefined;
  /**
   * Definition of the role the participatingOrganization plays in the association.
   */
  code?: fhir.ICodeableConcept[]|undefined;
  /**
   * Technical endpoints providing access to services operated for this role.
   */
  endpoint?: fhir.IReference[]|undefined;
  /**
   * Healthcare services provided through the role.
   */
  healthcareService?: fhir.IReference[]|undefined;
  /**
   * Business identifiers that are specific to this role.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The location(s) at which the role occurs.
   */
  location?: fhir.IReference[]|undefined;
  /**
   * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
   */
  network?: fhir.IReference[]|undefined;
  /**
   * Organization where the role is available (primary organization/has members).
   */
  organization?: fhir.IReference|undefined;
  /**
   * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
   */
  participatingOrganization?: fhir.IReference|undefined;
  /**
   * The period during which the participatingOrganization is affiliated with the primary organization.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Specific specialty of the participatingOrganization in the context of the role.
   */
  specialty?: fhir.ICodeableConcept[]|undefined;
  /**
   * Contact details at the participatingOrganization relevant to this Affiliation.
   */
  telecom?: fhir.IContactPoint[]|undefined;
}
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export class OrganizationAffiliation extends fhir.DomainResource implements fhir.IOrganizationAffiliation {
  /**
   * Resource Type Name
   */
  public override resourceType: "OrganizationAffiliation";
  /**
   * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
   */
  public active?: boolean|undefined;
  public _active?: fhir.FhirElement|undefined;
  /**
   * Definition of the role the participatingOrganization plays in the association.
   */
  public code?: fhir.CodeableConcept[]|undefined;
  /**
   * Technical endpoints providing access to services operated for this role.
   */
  public endpoint?: fhir.Reference[]|undefined;
  /**
   * Healthcare services provided through the role.
   */
  public healthcareService?: fhir.Reference[]|undefined;
  /**
   * Business identifiers that are specific to this role.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The location(s) at which the role occurs.
   */
  public location?: fhir.Reference[]|undefined;
  /**
   * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
   */
  public network?: fhir.Reference[]|undefined;
  /**
   * Organization where the role is available (primary organization/has members).
   */
  public organization?: fhir.Reference|undefined;
  /**
   * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
   */
  public participatingOrganization?: fhir.Reference|undefined;
  /**
   * The period during which the participatingOrganization is affiliated with the primary organization.
   */
  public period?: fhir.Period|undefined;
  /**
   * Specific specialty of the participatingOrganization in the context of the role.
   */
  public specialty?: fhir.CodeableConcept[]|undefined;
  /**
   * Contact details at the participatingOrganization relevant to this Affiliation.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IOrganizationAffiliation> = {}) {
    super(source);
    this.resourceType = 'OrganizationAffiliation';
    if (source["active"]) { this.active = source.active; }
    if (source["_active"]) { this._active = new fhir.FhirElement(source._active!); }
    if (source["code"]) { this.code = source.code.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["endpoint"]) { this.endpoint = source.endpoint.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["healthcareService"]) { this.healthcareService = source.healthcareService.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["location"]) { this.location = source.location.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["network"]) { this.network = source.network.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["organization"]) { this.organization = new fhir.Reference(source.organization!); }
    if (source["participatingOrganization"]) { this.participatingOrganization = new fhir.Reference(source.participatingOrganization!); }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (source["specialty"]) { this.specialty = source.specialty.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["telecom"]) { this.telecom = source.telecom.map((x:Partial<fhir.IContactPoint>) => new fhir.ContactPoint(x)); }
  }
  /**
   * Check if the current OrganizationAffiliation contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a OrganizationAffiliation from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IOrganizationAffiliation):OrganizationAffiliation {
    var dest:OrganizationAffiliation = new OrganizationAffiliation(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `OrganizationAffiliation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}

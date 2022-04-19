// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export type IOrganizationContact = fhir.IBackboneElement & {
  /**
   * Visiting or postal addresses for the contact.
   */
  address?: fhir.IAddress|undefined;
  /**
   * A name associated with the contact.
   */
  name?: fhir.IHumanName|undefined;
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: fhir.ICodeableConcept|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: fhir.IContactPoint[]|undefined;
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export type IOrganization = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "Organization";
  /**
   * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean|undefined;
  _active?: fhir.IFhirElement|undefined;
  /**
   * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
   */
  address?: fhir.IAddress[]|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   */
  alias?: string[]|undefined;
  _alias?: fhir.IFhirElement[]|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: fhir.IOrganizationContact[]|undefined;
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: fhir.IReference[]|undefined;
  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string|undefined;
  _name?: fhir.IFhirElement|undefined;
  /**
   * The organization of which this organization forms a part.
   */
  partOf?: fhir.IReference|undefined;
  /**
   * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
   */
  telecom?: fhir.IContactPoint[]|undefined;
  /**
   * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
   * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
   * We expect that some jurisdictions will profile this optionality to be a single cardinality.
   */
  type?: fhir.ICodeableConcept[]|undefined;
}
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class OrganizationContact extends fhir.BackboneElement implements fhir.IOrganizationContact {
  /**
   * Visiting or postal addresses for the contact.
   */
  public address?: fhir.Address|undefined;
  /**
   * A name associated with the contact.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  public purpose?: fhir.CodeableConcept|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Default constructor for OrganizationContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IOrganizationContact> = {}) {
    super(source);
    if (source["address"]) { this.address = new fhir.Address(source.address!); }
    if (source["name"]) { this.name = new fhir.HumanName(source.name!); }
    if (source["purpose"]) { this.purpose = new fhir.CodeableConcept(source.purpose!); }
    if (source["telecom"]) { this.telecom = source.telecom.map((x:Partial<fhir.IContactPoint>) => new fhir.ContactPoint(x)); }
  }
  /**
   * Check if the current OrganizationContact contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a OrganizationContact from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IOrganizationContact):OrganizationContact {
    var dest:OrganizationContact = new OrganizationContact(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `OrganizationContact is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export class Organization extends fhir.DomainResource implements fhir.IOrganization {
  /**
   * Resource Type Name
   */
  public override resourceType: "Organization";
  /**
   * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: boolean|undefined;
  public _active?: fhir.FhirElement|undefined;
  /**
   * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
   */
  public address?: fhir.Address[]|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   */
  public alias?: string[]|undefined;
  public _alias?: fhir.FhirElement[]|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  public contact?: fhir.OrganizationContact[]|undefined;
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  public endpoint?: fhir.Reference[]|undefined;
  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  public name?: string|undefined;
  public _name?: fhir.FhirElement|undefined;
  /**
   * The organization of which this organization forms a part.
   */
  public partOf?: fhir.Reference|undefined;
  /**
   * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
   * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
   * We expect that some jurisdictions will profile this optionality to be a single cardinality.
   */
  public type?: fhir.CodeableConcept[]|undefined;
  /**
   * Default constructor for Organization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IOrganization> = {}) {
    super(source);
    this.resourceType = 'Organization';
    if (source["active"]) { this.active = source.active; }
    if (source["_active"]) { this._active = new fhir.FhirElement(source._active!); }
    if (source["address"]) { this.address = source.address.map((x:Partial<fhir.IAddress>) => new fhir.Address(x)); }
    if (source["alias"]) { this.alias = source.alias.map((x) => (x)); }
    if (source["_alias"]) { this._alias = source._alias.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["contact"]) { this.contact = source.contact.map((x:Partial<fhir.IOrganizationContact>) => new fhir.OrganizationContact(x)); }
    if (source["endpoint"]) { this.endpoint = source.endpoint.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["name"]) { this.name = source.name; }
    if (source["_name"]) { this._name = new fhir.FhirElement(source._name!); }
    if (source["partOf"]) { this.partOf = new fhir.Reference(source.partOf!); }
    if (source["telecom"]) { this.telecom = source.telecom.map((x:Partial<fhir.IContactPoint>) => new fhir.ContactPoint(x)); }
    if (source["type"]) { this.type = source.type.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
  }
  /**
   * Check if the current Organization contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Organization from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IOrganization):Organization {
    var dest:Organization = new Organization(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Organization is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}

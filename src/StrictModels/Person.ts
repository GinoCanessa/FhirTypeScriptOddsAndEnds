// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Link to a resource that concerns the same actual person.
 */
export class PersonLink extends fhirModels.BackboneElement implements fhirInterfaces.IPersonLink {
  /**
   * Level of assurance that this link is associated with the target resource.
   */
  assurance?: PersonLinkAssuranceEnum|undefined;
  _assurance?: fhirModels.Element|undefined;
  /**
   * The resource to which this actual person is associated.
   */
  target: fhirModels.Reference;
  /**
   * Default constructor for PersonLink from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPersonLink) {
    super(source);
    if (source["assurance"] !== undefined) {
      this.assurance = source.assurance;
    }
    if (source["_assurance"] !== undefined) {
      this._assurance = new fhirModels.Element(source._assurance);
    }
    {
      this.target = new fhirModels.Reference(source.target);
    }
  }
}
/**
 * Code Values for the Person.link.assurance field
 */
export enum PersonLinkAssuranceEnum {
  LEVEL1 = "level1",
  LEVEL2 = "level2",
  LEVEL3 = "level3",
  LEVEL4 = "level4",
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export class Person extends fhirModels.DomainResource implements fhirInterfaces.IPerson {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Person";
  /**
   * Whether this person's record is in active use.
   */
  active?: boolean|undefined;
  _active?: fhirModels.Element|undefined;
  /**
   * Person may have multiple addresses with different uses or applicable periods.
   */
  address?: fhirModels.Address[]|undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown.
   */
  birthDate?: string|undefined;
  _birthDate?: fhirModels.Element|undefined;
  /**
   * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
   */
  gender?: PersonGenderEnum|undefined;
  _gender?: fhirModels.Element|undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Link to a resource that concerns the same actual person.
   */
  link?: fhirModels.PersonLink[]|undefined;
  /**
   * The organization that is the custodian of the person record.
   */
  managingOrganization?: fhirModels.Reference|undefined;
  /**
   * Person may have multiple names with different uses or applicable periods.
   */
  name?: fhirModels.HumanName[]|undefined;
  /**
   * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
   */
  photo?: fhirModels.Attachment|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for Person from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPerson) {
    super(source);
    if ((source['resourceType'] !== "Person") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Person'; }
    if (source["active"] !== undefined) {
      this.active = source.active;
    }
    if (source["_active"] !== undefined) {
      this._active = new fhirModels.Element(source._active);
    }
    if (source["address"] !== undefined) {
      this.address = source.address.map((x) => new fhirModels.Address(x));
    }
    if (source["birthDate"] !== undefined) {
      this.birthDate = source.birthDate;
    }
    if (source["_birthDate"] !== undefined) {
      this._birthDate = new fhirModels.Element(source._birthDate);
    }
    if (source["gender"] !== undefined) {
      this.gender = source.gender;
    }
    if (source["_gender"] !== undefined) {
      this._gender = new fhirModels.Element(source._gender);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["link"] !== undefined) {
      this.link = source.link.map((x) => new fhirModels.PersonLink(x));
    }
    if (source["managingOrganization"] !== undefined) {
      this.managingOrganization = new fhirModels.Reference(source.managingOrganization);
    }
    if (source["name"] !== undefined) {
      this.name = source.name.map((x) => new fhirModels.HumanName(x));
    }
    if (source["photo"] !== undefined) {
      this.photo = new fhirModels.Attachment(source.photo);
    }
    if (source["telecom"] !== undefined) {
      this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
    }
  }
}
/**
 * Code Values for the Person.gender field
 */
export enum PersonGenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  UNKNOWN = "unknown",
}

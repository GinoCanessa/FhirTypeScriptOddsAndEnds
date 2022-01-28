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
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export class PractitionerQualification extends fhirModels.BackboneElement implements fhirInterfaces.IPractitionerQualification {
  /**
   * Coded representation of the qualification.
   */
  code: fhirModels.CodeableConcept|undefined;
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: fhirModels.Reference|undefined;
  /**
   * Period during which the qualification is valid.
   */
  period?: fhirModels.Period|undefined;
  /**
   * Default constructor for PractitionerQualification from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IPractitionerQualification>) {
    super(source);
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["issuer"] !== undefined) { this.issuer = new fhirModels.Reference(source.issuer); }
    if (source["period"] !== undefined) { this.period = new fhirModels.Period(source.period); }
  }
  /**
   * Check if the current PractitionerQualification contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a PractitionerQualification from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IPractitionerQualification):PractitionerQualification {
    var dest:PractitionerQualification = new PractitionerQualification(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `PractitionerQualification is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export class Practitioner extends fhirModels.DomainResource implements fhirInterfaces.IPractitioner {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Practitioner";
  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  active?: boolean|undefined;
  _active?: fhirModels.Element|undefined;
  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   */
  address?: fhirModels.Address[]|undefined;
  /**
   * The date of birth for the practitioner.
   */
  birthDate?: string|undefined;
  _birthDate?: fhirModels.Element|undefined;
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  communication?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: PractitionerGenderEnum|undefined;
  _gender?: fhirModels.Element|undefined;
  /**
   * An identifier that applies to this person in this role.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.  
   * In general, select the value to be used in the ResourceReference.display based on this:
   * 1. There is more than 1 name
   * 2. Use = usual
   * 3. Period is current to the date of the usage
   * 4. Use = official
   * 5. Other order as decided by internal business rules.
   */
  name?: fhirModels.HumanName[]|undefined;
  /**
   * Image of the person.
   */
  photo?: fhirModels.Attachment[]|undefined;
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  qualification?: fhirModels.PractitionerQualification[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for Practitioner from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IPractitioner>) {
    super(source);
    if ((source['resourceType'] !== "Practitioner") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Practitioner'; }
    if (source["active"] !== undefined) { this.active = source.active; }
    if (source["_active"] !== undefined) { this._active = new fhirModels.Element(source._active); }
    if (source["address"] !== undefined) { this.address = source.address.map((x) => new fhirModels.Address(x)); }
    if (source["birthDate"] !== undefined) { this.birthDate = source.birthDate; }
    if (source["_birthDate"] !== undefined) { this._birthDate = new fhirModels.Element(source._birthDate); }
    if (source["communication"] !== undefined) { this.communication = source.communication.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["gender"] !== undefined) { this.gender = source.gender; }
    if (source["_gender"] !== undefined) { this._gender = new fhirModels.Element(source._gender); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["name"] !== undefined) { this.name = source.name.map((x) => new fhirModels.HumanName(x)); }
    if (source["photo"] !== undefined) { this.photo = source.photo.map((x) => new fhirModels.Attachment(x)); }
    if (source["qualification"] !== undefined) { this.qualification = source.qualification.map((x) => new fhirModels.PractitionerQualification(x)); }
    if (source["telecom"] !== undefined) { this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x)); }
  }
  /**
   * Check if the current Practitioner contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Practitioner from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IPractitioner):Practitioner {
    var dest:Practitioner = new Practitioner(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Practitioner is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the Practitioner.gender field
 */
export enum PractitionerGenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  UNKNOWN = "unknown",
}

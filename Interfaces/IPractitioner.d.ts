// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../interfaces'
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface IPractitionerQualification extends fhirInterfaces.IBackboneElement {
  /**
   * Coded representation of the qualification.
   */
  code: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: fhirInterfaces.IReference|undefined;
  /**
   * Period during which the qualification is valid.
   */
  period?: fhirInterfaces.IPeriod|undefined;
}
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export interface IPractitioner extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "Practitioner";
  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  active?: boolean|undefined;
  _active?: fhirInterfaces.IElement|undefined;
  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   */
  address?: fhirInterfaces.IAddress[]|undefined;
  /**
   * The date of birth for the practitioner.
   */
  birthDate?: string|undefined;
  _birthDate?: fhirInterfaces.IElement|undefined;
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  communication?: fhirInterfaces.ICodeableConcept[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: PractitionerGenderEnum|undefined;
  _gender?: fhirInterfaces.IElement|undefined;
  /**
   * An identifier that applies to this person in this role.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.  
   * In general, select the value to be used in the ResourceReference.display based on this:
   * 1. There is more than 1 name
   * 2. Use = usual
   * 3. Period is current to the date of the usage
   * 4. Use = official
   * 5. Other order as decided by internal business rules.
   */
  name?: fhirInterfaces.IHumanName[]|undefined;
  /**
   * Image of the person.
   */
  photo?: fhirInterfaces.IAttachment[]|undefined;
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  qualification?: fhirInterfaces.IPractitionerQualification[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   */
  telecom?: fhirInterfaces.IContactPoint[]|undefined;
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

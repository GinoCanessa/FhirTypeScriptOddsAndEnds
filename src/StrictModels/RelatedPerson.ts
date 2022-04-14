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
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class RelatedPersonCommunication extends fhirModels.BackboneElement implements fhirInterfaces.IRelatedPersonCommunication {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  language: fhirModels.CodeableConcept;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  preferred?: boolean|undefined;
  _preferred?: fhirModels.Element|undefined;
  /**
   * Default constructor for RelatedPersonCommunication from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IRelatedPersonCommunication) {
    super(source);
    {
      this.language = new fhirModels.CodeableConcept(source.language);
    }
    if (source["preferred"] !== undefined) {
      this.preferred = source.preferred;
    }
    if (source["_preferred"] !== undefined) {
      this._preferred = new fhirModels.Element(source._preferred);
    }
  }
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export class RelatedPerson extends fhirModels.DomainResource implements fhirInterfaces.IRelatedPerson {
  /**
   * Resource Type Name
   */
  readonly resourceType = "RelatedPerson";
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean|undefined;
  _active?: fhirModels.Element|undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  address?: fhirModels.Address[]|undefined;
  /**
   * The date on which the related person was born.
   */
  birthDate?: string|undefined;
  _birthDate?: fhirModels.Element|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhirModels.RelatedPersonCommunication[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: RelatedPersonGenderEnum|undefined;
  _gender?: fhirModels.Element|undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * A name associated with the person.
   */
  name?: fhirModels.HumanName[]|undefined;
  /**
   * The patient this person is related to.
   */
  patient: fhirModels.Reference;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: fhirModels.Period|undefined;
  /**
   * Image of the person.
   */
  photo?: fhirModels.Attachment[]|undefined;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  relationship?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for RelatedPerson from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IRelatedPerson) {
    super(source);
    if ((source['resourceType'] !== "RelatedPerson") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a RelatedPerson'; }
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
    if (source["communication"] !== undefined) {
      this.communication = source.communication.map((x) => new fhirModels.RelatedPersonCommunication(x));
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
    if (source["name"] !== undefined) {
      this.name = source.name.map((x) => new fhirModels.HumanName(x));
    }
    {
      this.patient = new fhirModels.Reference(source.patient);
    }
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
    if (source["photo"] !== undefined) {
      this.photo = source.photo.map((x) => new fhirModels.Attachment(x));
    }
    if (source["relationship"] !== undefined) {
      this.relationship = source.relationship.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["telecom"] !== undefined) {
      this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
    }
  }
}
/**
 * Code Values for the RelatedPerson.gender field
 */
export enum RelatedPersonGenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  UNKNOWN = "unknown",
}

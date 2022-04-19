// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export type IRelatedPersonCommunication = fhir.IBackboneElement & {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  language: fhir.ICodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  preferred?: boolean|undefined;
  _preferred?: fhir.IFhirElement|undefined;
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export type IRelatedPerson = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "RelatedPerson";
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean|undefined;
  _active?: fhir.IFhirElement|undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  address?: fhir.IAddress[]|undefined;
  /**
   * The date on which the related person was born.
   */
  birthDate?: string|undefined;
  _birthDate?: fhir.IFhirElement|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhir.IRelatedPersonCommunication[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: RelatedPersonGenderEnum|undefined;
  _gender?: fhir.IFhirElement|undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * A name associated with the person.
   */
  name?: fhir.IHumanName[]|undefined;
  /**
   * The patient this person is related to.
   */
  patient: fhir.IReference|null;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Image of the person.
   */
  photo?: fhir.IAttachment[]|undefined;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  relationship?: fhir.ICodeableConcept[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhir.IContactPoint[]|undefined;
}
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class RelatedPersonCommunication extends fhir.BackboneElement implements fhir.IRelatedPersonCommunication {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  public preferred?: boolean|undefined;
  public _preferred?: fhir.FhirElement|undefined;
  /**
   * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IRelatedPersonCommunication> = {}) {
    super(source);
    this.language = null;
    if (source["language"]) { this.language = new fhir.CodeableConcept(source.language!); }
    if (this.language === undefined) { this.language = null }
    if (source["preferred"]) { this.preferred = source.preferred; }
    if (source["_preferred"]) { this._preferred = new fhir.FhirElement(source._preferred!); }
  }
  /**
   * Check if the current RelatedPersonCommunication contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["language"] === undefined) { missingElements.push("language"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a RelatedPersonCommunication from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IRelatedPersonCommunication):RelatedPersonCommunication {
    var dest:RelatedPersonCommunication = new RelatedPersonCommunication(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `RelatedPersonCommunication is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export class RelatedPerson extends fhir.DomainResource implements fhir.IRelatedPerson {
  /**
   * Resource Type Name
   */
  public override resourceType: "RelatedPerson";
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: boolean|undefined;
  public _active?: fhir.FhirElement|undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  public address?: fhir.Address[]|undefined;
  /**
   * The date on which the related person was born.
   */
  public birthDate?: string|undefined;
  public _birthDate?: fhir.FhirElement|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  public communication?: fhir.RelatedPersonCommunication[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  public gender?: RelatedPersonGenderEnum|undefined;
  public _gender?: fhir.FhirElement|undefined;
  /**
   * Identifier for a person within a particular scope.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * A name associated with the person.
   */
  public name?: fhir.HumanName[]|undefined;
  /**
   * The patient this person is related to.
   */
  public patient: fhir.Reference|null;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  public period?: fhir.Period|undefined;
  /**
   * Image of the person.
   */
  public photo?: fhir.Attachment[]|undefined;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  public relationship?: fhir.CodeableConcept[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IRelatedPerson> = {}) {
    super(source);
    this.resourceType = 'RelatedPerson';
    if (source["active"]) { this.active = source.active; }
    if (source["_active"]) { this._active = new fhir.FhirElement(source._active!); }
    if (source["address"]) { this.address = source.address.map((x:Partial<fhir.IAddress>) => new fhir.Address(x)); }
    if (source["birthDate"]) { this.birthDate = source.birthDate; }
    if (source["_birthDate"]) { this._birthDate = new fhir.FhirElement(source._birthDate!); }
    if (source["communication"]) { this.communication = source.communication.map((x:Partial<fhir.IRelatedPersonCommunication>) => new fhir.RelatedPersonCommunication(x)); }
    if (source["gender"]) { this.gender = source.gender; }
    if (source["_gender"]) { this._gender = new fhir.FhirElement(source._gender!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["name"]) { this.name = source.name.map((x:Partial<fhir.IHumanName>) => new fhir.HumanName(x)); }
    this.patient = null;
    if (source["patient"]) { this.patient = new fhir.Reference(source.patient!); }
    if (this.patient === undefined) { this.patient = null }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (source["photo"]) { this.photo = source.photo.map((x:Partial<fhir.IAttachment>) => new fhir.Attachment(x)); }
    if (source["relationship"]) { this.relationship = source.relationship.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["telecom"]) { this.telecom = source.telecom.map((x:Partial<fhir.IContactPoint>) => new fhir.ContactPoint(x)); }
  }
  /**
   * Check if the current RelatedPerson contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["patient"] === undefined) { missingElements.push("patient"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a RelatedPerson from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IRelatedPerson):RelatedPerson {
    var dest:RelatedPerson = new RelatedPerson(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `RelatedPerson is missing elements: ${missingElements.join(", ")}` }
    return dest;
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
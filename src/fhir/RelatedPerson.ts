// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: RelatedPerson

import * as fhir from '../fhir.js'

import { LanguagesValueSet, LanguagesValueSetType, LanguagesValueSetEnum } from '../fhirValueSets/LanguagesValueSet.js'
import { RelatedpersonRelationshiptypeValueSet, RelatedpersonRelationshiptypeValueSetType, RelatedpersonRelationshiptypeValueSetEnum } from '../fhirValueSets/RelatedpersonRelationshiptypeValueSet.js'
import { AdministrativeGenderValueSet, AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js'

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
  /**
   * Extended properties for primitive element: RelatedPerson.communication.preferred
   */
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
   * Identifier for a person within a particular scope.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.active
   */
  _active?: fhir.IFhirElement|undefined;
  /**
   * The patient this person is related to.
   */
  patient: fhir.IReference|null;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  relationship?: fhir.ICodeableConcept[]|undefined;
  /**
   * A name associated with the person.
   */
  name?: fhir.IHumanName[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhir.IContactPoint[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.gender
   */
  _gender?: fhir.IFhirElement|undefined;
  /**
   * The date on which the related person was born.
   */
  birthDate?: string|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.birthDate
   */
  _birthDate?: fhir.IFhirElement|undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  address?: fhir.IAddress[]|undefined;
  /**
   * Image of the person.
   */
  photo?: fhir.IAttachment[]|undefined;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhir.IRelatedPersonCommunication[]|undefined;
}

/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class RelatedPersonCommunication extends fhir.BackboneElement implements IRelatedPersonCommunication {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  public preferred?: boolean|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.communication.preferred
   */
  public _preferred?: fhir.FhirElement|undefined;
  /**
   * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IRelatedPersonCommunication> = { }) {
    super(source);
    if (source['language']) { this.language = new fhir.CodeableConcept(source.language!); }
    else { this.language = null; }
    if (source['preferred']) { this.preferred = source.preferred; }
    if (source['_preferred']) { this._preferred = new fhir.FhirElement(source._preferred!); }
  }
  /**
   * Preferred-bound Value Set for language
   */
  public static languagePreferredValueSet():LanguagesValueSetType {
    return LanguagesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["language"]) { results.push(["language",'Missing required element: RelatedPerson.communication.language']); }
    if (this["language"]) { results.push(...this.language.doModelValidation()); }
    if (this["_preferred"]) { results.push(...this._preferred.doModelValidation()); }
    return results;
  }
}

/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export class RelatedPerson extends fhir.DomainResource implements IRelatedPerson {
  /**
   * Resource Type Name
   */
  public resourceType: "RelatedPerson";
  /**
   * Identifier for a person within a particular scope.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  public active?: boolean|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.active
   */
  public _active?: fhir.FhirElement|undefined;
  /**
   * The patient this person is related to.
   */
  public patient: fhir.Reference|null;
  /**
   * The nature of the relationship between a patient and the related person.
   */
  public relationship?: fhir.CodeableConcept[]|undefined;
  /**
   * A name associated with the person.
   */
  public name?: fhir.HumanName[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  public gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.gender
   */
  public _gender?: fhir.FhirElement|undefined;
  /**
   * The date on which the related person was born.
   */
  public birthDate?: string|undefined;
  /**
   * Extended properties for primitive element: RelatedPerson.birthDate
   */
  public _birthDate?: fhir.FhirElement|undefined;
  /**
   * Address where the related person can be contacted or visited.
   */
  public address?: fhir.Address[]|undefined;
  /**
   * Image of the person.
   */
  public photo?: fhir.Attachment[]|undefined;
  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
   */
  public period?: fhir.Period|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  public communication?: fhir.RelatedPersonCommunication[]|undefined;
  /**
   * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IRelatedPerson> = { }) {
    super(source);
    this.resourceType = 'RelatedPerson';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['active']) { this.active = source.active; }
    if (source['_active']) { this._active = new fhir.FhirElement(source._active!); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient!); }
    else { this.patient = null; }
    if (source['relationship']) { this.relationship = source.relationship.map((x) => new fhir.CodeableConcept(x)); }
    if (source['name']) { this.name = source.name.map((x) => new fhir.HumanName(x)); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    if (source['gender']) { this.gender = source.gender; }
    if (source['_gender']) { this._gender = new fhir.FhirElement(source._gender!); }
    if (source['birthDate']) { this.birthDate = source.birthDate; }
    if (source['_birthDate']) { this._birthDate = new fhir.FhirElement(source._birthDate!); }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['communication']) { this.communication = source.communication.map((x) => new fhir.RelatedPersonCommunication(x)); }
  }
  /**
   * Preferred-bound Value Set for relationship
   */
  public static relationshipPreferredValueSet():RelatedpersonRelationshiptypeValueSetType {
    return RelatedpersonRelationshiptypeValueSet;
  }
  /**
   * Required-bound Value Set for gender
   */
  public static genderRequiredValueSet():AdministrativeGenderValueSetType {
    return AdministrativeGenderValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: RelatedPerson.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_active"]) { results.push(...this._active.doModelValidation()); }
    if (!this["patient"]) { results.push(["patient",'Missing required element: RelatedPerson.patient']); }
    if (this["patient"]) { results.push(...this.patient.doModelValidation()); }
    if (this["relationship"]) { this.relationship.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["name"]) { this.name.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["telecom"]) { this.telecom.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_gender"]) { results.push(...this._gender.doModelValidation()); }
    if (this["_birthDate"]) { results.push(...this._birthDate.doModelValidation()); }
    if (this["address"]) { this.address.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["photo"]) { this.photo.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (this["communication"]) { this.communication.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

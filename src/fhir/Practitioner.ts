// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Practitioner

import * as fhir from '../fhir.js'

import { V2270360ValueSet, V2270360ValueSetType, V2270360ValueSetEnum } from '../fhirValueSets/V2270360ValueSet.js'
import { AdministrativeGenderValueSet, AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js'
import { LanguagesValueSet, LanguagesValueSetType, LanguagesValueSetEnum } from '../fhirValueSets/LanguagesValueSet.js'

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export type IPractitionerQualification = fhir.IBackboneElement & { 
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Coded representation of the qualification.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * Period during which the qualification is valid.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: fhir.IReference|undefined;
}

/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export type IPractitioner = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Practitioner";
  /**
   * An identifier that applies to this person in this role.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  active?: boolean|undefined;
  /**
   * Extended properties for primitive element: Practitioner.active
   */
  _active?: fhir.IFhirElement|undefined;
  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.  
   * In general, select the value to be used in the ResourceReference.display based on this:
   * 1. There is more than 1 name
   * 2. Use = usual
   * 3. Period is current to the date of the usage
   * 4. Use = official
   * 5. Other order as decided by internal business rules.
   */
  name?: fhir.IHumanName[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   */
  telecom?: fhir.IContactPoint[]|undefined;
  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   */
  address?: fhir.IAddress[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Practitioner.gender
   */
  _gender?: fhir.IFhirElement|undefined;
  /**
   * The date of birth for the practitioner.
   */
  birthDate?: string|undefined;
  /**
   * Extended properties for primitive element: Practitioner.birthDate
   */
  _birthDate?: fhir.IFhirElement|undefined;
  /**
   * Image of the person.
   */
  photo?: fhir.IAttachment[]|undefined;
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  qualification?: fhir.IPractitionerQualification[]|undefined;
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  communication?: fhir.ICodeableConcept[]|undefined;
}

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export class PractitionerQualification extends fhir.BackboneElement implements IPractitionerQualification {
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Coded representation of the qualification.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Period during which the qualification is valid.
   */
  public period?: fhir.Period|undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  public issuer?: fhir.Reference|undefined;
  /**
   * Default constructor for PractitionerQualification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPractitionerQualification> = { }) {
    super(source);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
    else { this.code = null; }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['issuer']) { this.issuer = new fhir.Reference(source.issuer!); }
  }
  /**
   * Example-bound Value Set for code
   */
  public codeExampleValueSet():V2270360ValueSetType {
    return V2270360ValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["code"]) { results.push(["code",'Missing required element: Practitioner.qualification.code']); }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (this["issuer"]) { results.push(...this.issuer.doModelValidation()); }
    return results;
  }
}

/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export class Practitioner extends fhir.DomainResource implements IPractitioner {
  /**
   * Resource Type Name
   */
  public resourceType: "Practitioner";
  /**
   * An identifier that applies to this person in this role.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
   */
  public active?: boolean|undefined;
  /**
   * Extended properties for primitive element: Practitioner.active
   */
  public _active?: fhir.FhirElement|undefined;
  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.  
   * In general, select the value to be used in the ResourceReference.display based on this:
   * 1. There is more than 1 name
   * 2. Use = usual
   * 3. Period is current to the date of the usage
   * 4. Use = official
   * 5. Other order as decided by internal business rules.
   */
  public name?: fhir.HumanName[]|undefined;
  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
   */
  public address?: fhir.Address[]|undefined;
  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
   */
  public gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Practitioner.gender
   */
  public _gender?: fhir.FhirElement|undefined;
  /**
   * The date of birth for the practitioner.
   */
  public birthDate?: string|undefined;
  /**
   * Extended properties for primitive element: Practitioner.birthDate
   */
  public _birthDate?: fhir.FhirElement|undefined;
  /**
   * Image of the person.
   */
  public photo?: fhir.Attachment[]|undefined;
  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
   */
  public qualification?: fhir.PractitionerQualification[]|undefined;
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public communication?: fhir.CodeableConcept[]|undefined;
  /**
   * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPractitioner> = { }) {
    super(source);
    this.resourceType = 'Practitioner';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['active']) { this.active = source.active; }
    if (source['_active']) { this._active = new fhir.FhirElement(source._active!); }
    if (source['name']) { this.name = source.name.map((x) => new fhir.HumanName(x)); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    if (source['gender']) { this.gender = source.gender; }
    if (source['_gender']) { this._gender = new fhir.FhirElement(source._gender!); }
    if (source['birthDate']) { this.birthDate = source.birthDate; }
    if (source['_birthDate']) { this._birthDate = new fhir.FhirElement(source._birthDate!); }
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    if (source['qualification']) { this.qualification = source.qualification.map((x) => new fhir.PractitionerQualification(x)); }
    if (source['communication']) { this.communication = source.communication.map((x) => new fhir.CodeableConcept(x)); }
  }
  /**
   * Required-bound Value Set for gender
   */
  public genderRequiredValueSet():AdministrativeGenderValueSetType {
    return AdministrativeGenderValueSet;
  }
  /**
   * Preferred-bound Value Set for communication
   */
  public communicationPreferredValueSet():LanguagesValueSetType {
    return LanguagesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Practitioner.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_active"]) { results.push(...this._active.doModelValidation()); }
    if (this["name"]) { this.name.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["telecom"]) { this.telecom.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["address"]) { this.address.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_gender"]) { results.push(...this._gender.doModelValidation()); }
    if (this["_birthDate"]) { results.push(...this._birthDate.doModelValidation()); }
    if (this["photo"]) { this.photo.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["qualification"]) { this.qualification.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["communication"]) { this.communication.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

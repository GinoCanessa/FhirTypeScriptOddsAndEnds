// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Patient

import * as fhir from '../fhir.js'

import { PatientContactrelationshipValueSet, PatientContactrelationshipValueSetType, PatientContactrelationshipValueSetEnum } from '../fhirValueSets/PatientContactrelationshipValueSet.js'
import { AdministrativeGenderValueSet, AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js'
import { LanguagesValueSet, LanguagesValueSetType, LanguagesValueSetEnum } from '../fhirValueSets/LanguagesValueSet.js'
import { LinkTypeValueSet, LinkTypeValueSetType, LinkTypeValueSetEnum } from '../fhirValueSets/LinkTypeValueSet.js'
import { MaritalStatusValueSet, MaritalStatusValueSetType, MaritalStatusValueSetEnum } from '../fhirValueSets/MaritalStatusValueSet.js'

/**
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export type IPatientContact = fhir.IBackboneElement & { 
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  relationship?: fhir.ICodeableConcept[]|undefined;
  /**
   * A name associated with the contact person.
   */
  name?: fhir.IHumanName|undefined;
  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhir.IContactPoint[]|undefined;
  /**
   * Address for the contact person.
   */
  address?: fhir.IAddress|undefined;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Patient.contact.gender
   */
  _gender?: fhir.IFhirElement|undefined;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  organization?: fhir.IReference|undefined;
  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  period?: fhir.IPeriod|undefined;
}

/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export type IPatientCommunication = fhir.IBackboneElement & { 
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  language: fhir.ICodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  preferred?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.communication.preferred
   */
  _preferred?: fhir.IFhirElement|undefined;
}

/**
 * There is no assumption that linked patient records have mutual links.
 */
export type IPatientLink = fhir.IBackboneElement & { 
  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
   */
  other: fhir.IReference|null;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  type: LinkTypeValueSetEnum|null;
  /**
   * Extended properties for primitive element: Patient.link.type
   */
  _type?: fhir.IFhirElement|undefined;
}

/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export type IPatient = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Patient";
  /**
   * An identifier for this patient.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient.
   */
  active?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.active
   */
  _active?: fhir.IFhirElement|undefined;
  /**
   * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
   */
  name?: fhir.IHumanName[]|undefined;
  /**
   * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address might not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
   */
  telecom?: fhir.IContactPoint[]|undefined;
  /**
   * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
   */
  gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Patient.gender
   */
  _gender?: fhir.IFhirElement|undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
   */
  birthDate?: string|undefined;
  /**
   * Extended properties for primitive element: Patient.birthDate
   */
  _birthDate?: fhir.IFhirElement|undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  deceasedBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.deceased[x]
   */
  _deceasedBoolean?: fhir.IFhirElement|undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  deceasedDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Patient.deceased[x]
   */
  _deceasedDateTime?: fhir.IFhirElement|undefined;
  /**
   * Patient may have multiple addresses with different uses or applicable periods.
   */
  address?: fhir.IAddress[]|undefined;
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: fhir.ICodeableConcept|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  multipleBirthBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.multipleBirth[x]
   */
  _multipleBirthBoolean?: fhir.IFhirElement|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  multipleBirthInteger?: number|undefined;
  /**
   * Extended properties for primitive element: Patient.multipleBirth[x]
   */
  _multipleBirthInteger?: fhir.IFhirElement|undefined;
  /**
   * Guidelines:
   * * Use id photos, not clinical photos.
   * * Limit dimensions to thumbnail.
   * * Keep byte count low to ease resource updates.
   */
  photo?: fhir.IAttachment[]|undefined;
  /**
   * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
   */
  contact?: fhir.IPatientContact[]|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhir.IPatientCommunication[]|undefined;
  /**
   * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
   * Multiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a "fly-in/fly-out" worker that has the onsite GP also included with his home GP to remain aware of medical issues.
   * Jurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.
   */
  generalPractitioner?: fhir.IReference[]|undefined;
  /**
   * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
   */
  managingOrganization?: fhir.IReference|undefined;
  /**
   * There is no assumption that linked patient records have mutual links.
   */
  link?: fhir.IPatientLink[]|undefined;
}

/**
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export class PatientContact extends fhir.BackboneElement implements IPatientContact {
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  public relationship?: fhir.CodeableConcept[]|undefined;
  /**
   * A name associated with the contact person.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * Address for the contact person.
   */
  public address?: fhir.Address|undefined;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  public gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Patient.contact.gender
   */
  public _gender?: fhir.FhirElement|undefined;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  public organization?: fhir.Reference|undefined;
  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for PatientContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPatientContact> = { }) {
    super(source);
    if (source['relationship']) { this.relationship = source.relationship.map((x) => new fhir.CodeableConcept(x)); }
    if (source['name']) { this.name = new fhir.HumanName(source.name!); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    if (source['address']) { this.address = new fhir.Address(source.address!); }
    if (source['gender']) { this.gender = source.gender; }
    if (source['_gender']) { this._gender = new fhir.FhirElement(source._gender!); }
    if (source['organization']) { this.organization = new fhir.Reference(source.organization!); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
  }
  /**
   * Extensible-bound Value Set for relationship
   */
  public static relationshipExtensibleValueSet():PatientContactrelationshipValueSetType {
    return PatientContactrelationshipValueSet;
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
    if (this["relationship"]) { this.relationship.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["name"]) { results.push(...this.name.doModelValidation()); }
    if (this["telecom"]) { this.telecom.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["address"]) { results.push(...this.address.doModelValidation()); }
    if (this["_gender"]) { results.push(...this._gender.doModelValidation()); }
    if (this["organization"]) { results.push(...this.organization.doModelValidation()); }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    return results;
  }
}

/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class PatientCommunication extends fhir.BackboneElement implements IPatientCommunication {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  public language: fhir.CodeableConcept|null;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  public preferred?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.communication.preferred
   */
  public _preferred?: fhir.FhirElement|undefined;
  /**
   * Default constructor for PatientCommunication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPatientCommunication> = { }) {
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
    if (!this["language"]) { results.push(["language",'Missing required element: Patient.communication.language']); }
    if (this["language"]) { results.push(...this.language.doModelValidation()); }
    if (this["_preferred"]) { results.push(...this._preferred.doModelValidation()); }
    return results;
  }
}

/**
 * There is no assumption that linked patient records have mutual links.
 */
export class PatientLink extends fhir.BackboneElement implements IPatientLink {
  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
   */
  public other: fhir.Reference|null;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  public type: LinkTypeValueSetEnum|null;
  /**
   * Extended properties for primitive element: Patient.link.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for PatientLink - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPatientLink> = { }) {
    super(source);
    if (source['other']) { this.other = new fhir.Reference(source.other!); }
    else { this.other = null; }
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():LinkTypeValueSetType {
    return LinkTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["other"]) { results.push(["other",'Missing required element: Patient.link.other']); }
    if (this["other"]) { results.push(...this.other.doModelValidation()); }
    if (!this["type"]) { results.push(["type",'Missing required element: Patient.link.type']); }
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    return results;
  }
}

/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export class Patient extends fhir.DomainResource implements IPatient {
  /**
   * Resource Type Name
   */
  public resourceType: "Patient";
  /**
   * An identifier for this patient.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient.
   */
  public active?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.active
   */
  public _active?: fhir.FhirElement|undefined;
  /**
   * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
   */
  public name?: fhir.HumanName[]|undefined;
  /**
   * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address might not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
   */
  public telecom?: fhir.ContactPoint[]|undefined;
  /**
   * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
   */
  public gender?: AdministrativeGenderValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Patient.gender
   */
  public _gender?: fhir.FhirElement|undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
   */
  public birthDate?: string|undefined;
  /**
   * Extended properties for primitive element: Patient.birthDate
   */
  public _birthDate?: fhir.FhirElement|undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  public deceasedBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.deceased[x]
   */
  public _deceasedBoolean?: fhir.FhirElement|undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  public deceasedDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Patient.deceased[x]
   */
  public _deceasedDateTime?: fhir.FhirElement|undefined;
  /**
   * Patient may have multiple addresses with different uses or applicable periods.
   */
  public address?: fhir.Address[]|undefined;
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  public maritalStatus?: fhir.CodeableConcept|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  public multipleBirthBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Patient.multipleBirth[x]
   */
  public _multipleBirthBoolean?: fhir.FhirElement|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  public multipleBirthInteger?: number|undefined;
  /**
   * Extended properties for primitive element: Patient.multipleBirth[x]
   */
  public _multipleBirthInteger?: fhir.FhirElement|undefined;
  /**
   * Guidelines:
   * * Use id photos, not clinical photos.
   * * Limit dimensions to thumbnail.
   * * Keep byte count low to ease resource updates.
   */
  public photo?: fhir.Attachment[]|undefined;
  /**
   * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
   */
  public contact?: fhir.PatientContact[]|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  public communication?: fhir.PatientCommunication[]|undefined;
  /**
   * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
   * Multiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a "fly-in/fly-out" worker that has the onsite GP also included with his home GP to remain aware of medical issues.
   * Jurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.
   */
  public generalPractitioner?: fhir.Reference[]|undefined;
  /**
   * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * There is no assumption that linked patient records have mutual links.
   */
  public link?: fhir.PatientLink[]|undefined;
  /**
   * Default constructor for Patient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IPatient> = { }) {
    super(source);
    this.resourceType = 'Patient';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['active']) { this.active = source.active; }
    if (source['_active']) { this._active = new fhir.FhirElement(source._active!); }
    if (source['name']) { this.name = source.name.map((x) => new fhir.HumanName(x)); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    if (source['gender']) { this.gender = source.gender; }
    if (source['_gender']) { this._gender = new fhir.FhirElement(source._gender!); }
    if (source['birthDate']) { this.birthDate = source.birthDate; }
    if (source['_birthDate']) { this._birthDate = new fhir.FhirElement(source._birthDate!); }
    if (source['deceasedBoolean']) { this.deceasedBoolean = source.deceasedBoolean; }
    if (source['_deceasedBoolean']) { this._deceasedBoolean = new fhir.FhirElement(source._deceasedBoolean!); }
    if (source['deceasedDateTime']) { this.deceasedDateTime = source.deceasedDateTime; }
    if (source['_deceasedDateTime']) { this._deceasedDateTime = new fhir.FhirElement(source._deceasedDateTime!); }
    if (source['address']) { this.address = source.address.map((x) => new fhir.Address(x)); }
    if (source['maritalStatus']) { this.maritalStatus = new fhir.CodeableConcept(source.maritalStatus!); }
    if (source['multipleBirthBoolean']) { this.multipleBirthBoolean = source.multipleBirthBoolean; }
    if (source['_multipleBirthBoolean']) { this._multipleBirthBoolean = new fhir.FhirElement(source._multipleBirthBoolean!); }
    if (source['multipleBirthInteger']) { this.multipleBirthInteger = source.multipleBirthInteger; }
    if (source['_multipleBirthInteger']) { this._multipleBirthInteger = new fhir.FhirElement(source._multipleBirthInteger!); }
    if (source['photo']) { this.photo = source.photo.map((x) => new fhir.Attachment(x)); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.PatientContact(x)); }
    if (source['communication']) { this.communication = source.communication.map((x) => new fhir.PatientCommunication(x)); }
    if (source['generalPractitioner']) { this.generalPractitioner = source.generalPractitioner.map((x) => new fhir.Reference(x)); }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization!); }
    if (source['link']) { this.link = source.link.map((x) => new fhir.PatientLink(x)); }
  }
  /**
   * Required-bound Value Set for gender
   */
  public static genderRequiredValueSet():AdministrativeGenderValueSetType {
    return AdministrativeGenderValueSet;
  }
  /**
   * Extensible-bound Value Set for maritalStatus
   */
  public static maritalStatusExtensibleValueSet():MaritalStatusValueSetType {
    return MaritalStatusValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Patient.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_active"]) { results.push(...this._active.doModelValidation()); }
    if (this["name"]) { this.name.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["telecom"]) { this.telecom.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_gender"]) { results.push(...this._gender.doModelValidation()); }
    if (this["_birthDate"]) { results.push(...this._birthDate.doModelValidation()); }
    if (this["_deceasedBoolean"]) { results.push(...this._deceasedBoolean.doModelValidation()); }
    if (this["_deceasedDateTime"]) { results.push(...this._deceasedDateTime.doModelValidation()); }
    if (this["address"]) { this.address.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["maritalStatus"]) { results.push(...this.maritalStatus.doModelValidation()); }
    if (this["_multipleBirthBoolean"]) { results.push(...this._multipleBirthBoolean.doModelValidation()); }
    if (this["_multipleBirthInteger"]) { results.push(...this._multipleBirthInteger.doModelValidation()); }
    if (this["photo"]) { this.photo.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["communication"]) { this.communication.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["generalPractitioner"]) { this.generalPractitioner.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["managingOrganization"]) { results.push(...this.managingOrganization.doModelValidation()); }
    if (this["link"]) { this.link.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

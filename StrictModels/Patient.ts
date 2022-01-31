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
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export class PatientContact extends fhirModels.BackboneElement implements fhirInterfaces.IPatientContact {
  /**
   * Address for the contact person.
   */
  address?: fhirModels.Address|undefined;
  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
   */
  gender?: PatientContactGenderEnum|undefined;
  _gender?: fhirModels.Element|undefined;
  /**
   * A name associated with the contact person.
   */
  name?: fhirModels.HumanName|undefined;
  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  organization?: fhirModels.Reference|undefined;
  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  period?: fhirModels.Period|undefined;
  /**
   * The nature of the relationship between the patient and the contact person.
   */
  relationship?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for PatientContact from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPatientContact) {
    super(source);
    if (source["address"] !== undefined) {
      this.address = new fhirModels.Address(source.address);
    }
    if (source["gender"] !== undefined) {
      this.gender = source.gender;
    }
    if (source["_gender"] !== undefined) {
      this._gender = new fhirModels.Element(source._gender);
    }
    if (source["name"] !== undefined) {
      this.name = new fhirModels.HumanName(source.name);
    }
    if (source["organization"] !== undefined) {
      this.organization = new fhirModels.Reference(source.organization);
    }
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
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
 * Code Values for the Patient.contact.gender field
 */
export enum PatientContactGenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  UNKNOWN = "unknown",
}
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export class PatientCommunication extends fhirModels.BackboneElement implements fhirInterfaces.IPatientCommunication {
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
   * Default constructor for PatientCommunication from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPatientCommunication) {
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
 * There is no assumption that linked patient records have mutual links.
 */
export class PatientLink extends fhirModels.BackboneElement implements fhirInterfaces.IPatientLink {
  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
   */
  other: fhirModels.Reference;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  type: PatientLinkTypeEnum;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for PatientLink from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPatientLink) {
    super(source);
    {
      this.other = new fhirModels.Reference(source.other);
    }
    {
      this.type = source.type;
    }
    if (source["_type"] !== undefined) {
      this._type = new fhirModels.Element(source._type);
    }
  }
}
/**
 * Code Values for the Patient.link.type field
 */
export enum PatientLinkTypeEnum {
  REPLACED_BY = "replaced-by",
  REPLACES = "replaces",
  REFER = "refer",
  SEEALSO = "seealso",
}
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export class Patient extends fhirModels.DomainResource implements fhirInterfaces.IPatient {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Patient";
  /**
   * If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient.
   */
  active?: boolean|undefined;
  _active?: fhirModels.Element|undefined;
  /**
   * Patient may have multiple addresses with different uses or applicable periods.
   */
  address?: fhirModels.Address[]|undefined;
  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
   */
  birthDate?: string|undefined;
  _birthDate?: fhirModels.Element|undefined;
  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
   */
  communication?: fhirModels.PatientCommunication[]|undefined;
  /**
   * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
   */
  contact?: fhirModels.PatientContact[]|undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  deceasedBoolean?: boolean|undefined;
  _deceasedBoolean?: fhirModels.Element|undefined;
  /**
   * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
   */
  deceasedDateTime?: string|undefined;
  _deceasedDateTime?: fhirModels.Element|undefined;
  /**
   * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
   */
  gender?: PatientGenderEnum|undefined;
  _gender?: fhirModels.Element|undefined;
  /**
   * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
   * Multiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a "fly-in/fly-out" worker that has the onsite GP also included with his home GP to remain aware of medical issues.
   * Jurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.
   */
  generalPractitioner?: fhirModels.Reference[]|undefined;
  /**
   * An identifier for this patient.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * There is no assumption that linked patient records have mutual links.
   */
  link?: fhirModels.PatientLink[]|undefined;
  /**
   * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
   */
  managingOrganization?: fhirModels.Reference|undefined;
  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  multipleBirthBoolean?: boolean|undefined;
  _multipleBirthBoolean?: fhirModels.Element|undefined;
  /**
   * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
   */
  multipleBirthInteger?: number|undefined;
  _multipleBirthInteger?: fhirModels.Element|undefined;
  /**
   * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
   */
  name?: fhirModels.HumanName[]|undefined;
  /**
   * Guidelines:
   * * Use id photos, not clinical photos.
   * * Limit dimensions to thumbnail.
   * * Keep byte count low to ease resource updates.
   */
  photo?: fhirModels.Attachment[]|undefined;
  /**
   * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address might not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
   */
  telecom?: fhirModels.ContactPoint[]|undefined;
  /**
   * Default constructor for Patient from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IPatient) {
    super(source);
    if ((source['resourceType'] !== "Patient") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Patient'; }
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
      this.communication = source.communication.map((x) => new fhirModels.PatientCommunication(x));
    }
    if (source["contact"] !== undefined) {
      this.contact = source.contact.map((x) => new fhirModels.PatientContact(x));
    }
    if (source["deceasedBoolean"] !== undefined) {
      this.deceasedBoolean = source.deceasedBoolean;
    }
    if (source["_deceasedBoolean"] !== undefined) {
      this._deceasedBoolean = new fhirModels.Element(source._deceasedBoolean);
    }
    if (source["deceasedDateTime"] !== undefined) {
      this.deceasedDateTime = source.deceasedDateTime;
    }
    if (source["_deceasedDateTime"] !== undefined) {
      this._deceasedDateTime = new fhirModels.Element(source._deceasedDateTime);
    }
    if (source["gender"] !== undefined) {
      this.gender = source.gender;
    }
    if (source["_gender"] !== undefined) {
      this._gender = new fhirModels.Element(source._gender);
    }
    if (source["generalPractitioner"] !== undefined) {
      this.generalPractitioner = source.generalPractitioner.map((x) => new fhirModels.Reference(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["link"] !== undefined) {
      this.link = source.link.map((x) => new fhirModels.PatientLink(x));
    }
    if (source["managingOrganization"] !== undefined) {
      this.managingOrganization = new fhirModels.Reference(source.managingOrganization);
    }
    if (source["maritalStatus"] !== undefined) {
      this.maritalStatus = new fhirModels.CodeableConcept(source.maritalStatus);
    }
    if (source["multipleBirthBoolean"] !== undefined) {
      this.multipleBirthBoolean = source.multipleBirthBoolean;
    }
    if (source["_multipleBirthBoolean"] !== undefined) {
      this._multipleBirthBoolean = new fhirModels.Element(source._multipleBirthBoolean);
    }
    if (source["multipleBirthInteger"] !== undefined) {
      this.multipleBirthInteger = source.multipleBirthInteger;
    }
    if (source["_multipleBirthInteger"] !== undefined) {
      this._multipleBirthInteger = new fhirModels.Element(source._multipleBirthInteger);
    }
    if (source["name"] !== undefined) {
      this.name = source.name.map((x) => new fhirModels.HumanName(x));
    }
    if (source["photo"] !== undefined) {
      this.photo = source.photo.map((x) => new fhirModels.Attachment(x));
    }
    if (source["telecom"] !== undefined) {
      this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
    }
  }
}
/**
 * Code Values for the Patient.gender field
 */
export enum PatientGenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  UNKNOWN = "unknown",
}
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export interface IPatientContact extends fhirInterfaces.IBackboneElement {
    /**
     * Address for the contact person.
     */
    address?: fhirInterfaces.IAddress | undefined;
    /**
     * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
     */
    gender?: PatientContactGenderEnum | undefined;
    _gender?: fhirInterfaces.IElement | undefined;
    /**
     * A name associated with the contact person.
     */
    name?: fhirInterfaces.IHumanName | undefined;
    /**
     * Organization on behalf of which the contact is acting or for which the contact is working.
     */
    organization?: fhirInterfaces.IReference | undefined;
    /**
     * The period during which this contact person or organization is valid to be contacted relating to this patient.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * The nature of the relationship between the patient and the contact person.
     */
    relationship?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
/**
 * Code Values for the Patient.contact.gender field
 */
export declare enum PatientContactGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export interface IPatientCommunication extends fhirInterfaces.IBackboneElement {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhirInterfaces.ICodeableConcept;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirInterfaces.IElement | undefined;
}
/**
 * There is no assumption that linked patient records have mutual links.
 */
export interface IPatientLink extends fhirInterfaces.IBackboneElement {
    /**
     * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
     */
    other: fhirInterfaces.IReference;
    /**
     * The type of link between this patient resource and another patient resource.
     */
    type: PatientLinkTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Patient.link.type field
 */
export declare enum PatientLinkTypeEnum {
    REPLACED_BY = "replaced-by",
    REPLACES = "replaces",
    REFER = "refer",
    SEEALSO = "seealso"
}
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
export interface IPatient extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Patient";
    /**
     * If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * Patient may have multiple addresses with different uses or applicable periods.
     */
    address?: fhirInterfaces.IAddress[] | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
     */
    birthDate?: string | undefined;
    _birthDate?: fhirInterfaces.IElement | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhirInterfaces.IPatientCommunication[] | undefined;
    /**
     * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
     */
    contact?: fhirInterfaces.IPatientContact[] | undefined;
    /**
     * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
     */
    deceasedBoolean?: boolean | undefined;
    _deceasedBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
     */
    deceasedDateTime?: string | undefined;
    _deceasedDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
     */
    gender?: PatientGenderEnum | undefined;
    _gender?: fhirInterfaces.IElement | undefined;
    /**
     * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
     * Multiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a "fly-in/fly-out" worker that has the onsite GP also included with his home GP to remain aware of medical issues.
     * Jurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.
     */
    generalPractitioner?: fhirInterfaces.IReference[] | undefined;
    /**
     * An identifier for this patient.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * There is no assumption that linked patient records have mutual links.
     */
    link?: fhirInterfaces.IPatientLink[] | undefined;
    /**
     * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
     */
    managingOrganization?: fhirInterfaces.IReference | undefined;
    /**
     * This field contains a patient's most recent marital (civil) status.
     */
    maritalStatus?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
     */
    multipleBirthBoolean?: boolean | undefined;
    _multipleBirthBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
     */
    multipleBirthInteger?: number | undefined;
    _multipleBirthInteger?: fhirInterfaces.IElement | undefined;
    /**
     * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
     */
    name?: fhirInterfaces.IHumanName[] | undefined;
    /**
     * Guidelines:
     * * Use id photos, not clinical photos.
     * * Limit dimensions to thumbnail.
     * * Keep byte count low to ease resource updates.
     */
    photo?: fhirInterfaces.IAttachment[] | undefined;
    /**
     * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address might not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
/**
 * Code Values for the Patient.gender field
 */
export declare enum PatientGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IPatient.d.ts.map
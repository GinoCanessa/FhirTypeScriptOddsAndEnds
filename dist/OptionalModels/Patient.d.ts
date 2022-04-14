import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
export declare class PatientContact extends fhirModels.BackboneElement implements fhirInterfaces.IPatientContact {
    /**
     * Address for the contact person.
     */
    address?: fhirModels.Address | undefined;
    /**
     * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
     */
    gender?: PatientContactGenderEnum | undefined;
    _gender?: fhirModels.Element | undefined;
    /**
     * A name associated with the contact person.
     */
    name?: fhirModels.HumanName | undefined;
    /**
     * Organization on behalf of which the contact is acting or for which the contact is working.
     */
    organization?: fhirModels.Reference | undefined;
    /**
     * The period during which this contact person or organization is valid to be contacted relating to this patient.
     */
    period?: fhirModels.Period | undefined;
    /**
     * The nature of the relationship between the patient and the contact person.
     */
    relationship?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for PatientContact from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPatientContact>);
    /**
     * Factory function to create a PatientContact from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPatientContact): PatientContact;
    /**
     * Check if the current PatientContact contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class PatientCommunication extends fhirModels.BackboneElement implements fhirInterfaces.IPatientCommunication {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language?: fhirModels.CodeableConcept | undefined;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirModels.Element | undefined;
    /**
     * Default constructor for PatientCommunication from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPatientCommunication>);
    /**
     * Factory function to create a PatientCommunication from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPatientCommunication): PatientCommunication;
    /**
     * Check if the current PatientCommunication contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * There is no assumption that linked patient records have mutual links.
 */
export declare class PatientLink extends fhirModels.BackboneElement implements fhirInterfaces.IPatientLink {
    /**
     * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
     */
    other?: fhirModels.Reference | undefined;
    /**
     * The type of link between this patient resource and another patient resource.
     */
    type?: PatientLinkTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for PatientLink from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPatientLink>);
    /**
     * Factory function to create a PatientLink from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPatientLink): PatientLink;
    /**
     * Check if the current PatientLink contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class Patient extends fhirModels.DomainResource implements fhirInterfaces.IPatient {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Patient";
    /**
     * If a record is inactive, and linked to an active record, then future patient/record updates should occur on the other patient.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Patient may have multiple addresses with different uses or applicable periods.
     */
    address?: fhirModels.Address[] | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown  There is a standard extension "patient-birthTime" available that should be used where Time is required (such as in maternity/infant care systems).
     */
    birthDate?: string | undefined;
    _birthDate?: fhirModels.Element | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhirModels.PatientCommunication[] | undefined;
    /**
     * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
     */
    contact?: fhirModels.PatientContact[] | undefined;
    /**
     * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
     */
    deceasedBoolean?: boolean | undefined;
    _deceasedBoolean?: fhirModels.Element | undefined;
    /**
     * If there's no value in the instance, it means there is no statement on whether or not the individual is deceased. Most systems will interpret the absence of a value as a sign of the person being alive.
     */
    deceasedDateTime?: string | undefined;
    _deceasedDateTime?: fhirModels.Element | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than male and female, though the vast majority of systems and contexts only support male and female.  Systems providing decision support or enforcing business rules should ideally do this on the basis of Observations dealing with the specific sex or gender aspect of interest (anatomical, chromosomal, social, etc.)  However, because these observations are infrequently recorded, defaulting to the administrative gender is common practice.  Where such defaulting occurs, rule enforcement should allow for the variation between administrative and biological, chromosomal and other gender aspects.  For example, an alert about a hysterectomy on a male should be handled as a warning or overridable error, not a "hard" error.  See the Patient Gender and Sex section for additional information about communicating patient gender and sex.
     */
    gender?: PatientGenderEnum | undefined;
    _gender?: fhirModels.Element | undefined;
    /**
     * This may be the primary care provider (in a GP context), or it may be a patient nominated care manager in a community/disability setting, or even organization that will provide people to perform the care provider roles.  It is not to be used to record Care Teams, these should be in a CareTeam resource that may be linked to the CarePlan or EpisodeOfCare resources.
     * Multiple GPs may be recorded against the patient for various reasons, such as a student that has his home GP listed along with the GP at university during the school semesters, or a "fly-in/fly-out" worker that has the onsite GP also included with his home GP to remain aware of medical issues.
     * Jurisdictions may decide that they can profile this down to 1 if desired, or 1 per type.
     */
    generalPractitioner?: fhirModels.Reference[] | undefined;
    /**
     * An identifier for this patient.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * There is no assumption that linked patient records have mutual links.
     */
    link?: fhirModels.PatientLink[] | undefined;
    /**
     * There is only one managing organization for a specific patient record. Other organizations will have their own Patient record, and may use the Link property to join the records together (or a Person resource which can include confidence ratings for the association).
     */
    managingOrganization?: fhirModels.Reference | undefined;
    /**
     * This field contains a patient's most recent marital (civil) status.
     */
    maritalStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
     */
    multipleBirthBoolean?: boolean | undefined;
    _multipleBirthBoolean?: fhirModels.Element | undefined;
    /**
     * Where the valueInteger is provided, the number is the birth number in the sequence. E.g. The middle birth in triplets would be valueInteger=2 and the third born would have valueInteger=3 If a boolean value was provided for this triplets example, then all 3 patient records would have valueBoolean=true (the ordering is not indicated).
     */
    multipleBirthInteger?: number | undefined;
    _multipleBirthInteger?: fhirModels.Element | undefined;
    /**
     * A patient may have multiple names with different uses or applicable periods. For animals, the name is a "HumanName" in the sense that is assigned and used by humans and has the same patterns.
     */
    name?: fhirModels.HumanName[] | undefined;
    /**
     * Guidelines:
     * * Use id photos, not clinical photos.
     * * Limit dimensions to thumbnail.
     * * Keep byte count low to ease resource updates.
     */
    photo?: fhirModels.Attachment[] | undefined;
    /**
     * A Patient may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification. The address might not go directly to the individual, but may reach another party that is able to proxy for the patient (i.e. home phone, or pet owner's phone).
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for Patient from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPatient>);
    /**
     * Factory function to create a Patient from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPatient): Patient;
    /**
     * Check if the current Patient contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=Patient.d.ts.map
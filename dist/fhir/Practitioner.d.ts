import * as fhir from '../fhir';
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export declare type IPractitionerQualification = fhir.IBackboneElement & {
    /**
     * Coded representation of the qualification.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.IReference | undefined;
    /**
     * Period during which the qualification is valid.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export declare type IPractitioner = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Practitioner";
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: fhir.IAddress[] | undefined;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: string | undefined;
    _birthDate?: fhir.IFhirElement | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication?: fhir.ICodeableConcept[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: PractitionerGenderEnum | undefined;
    _gender?: fhir.IFhirElement | undefined;
    /**
     * An identifier that applies to this person in this role.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.
     * In general, select the value to be used in the ResourceReference.display based on this:
     * 1. There is more than 1 name
     * 2. Use = usual
     * 3. Period is current to the date of the usage
     * 4. Use = official
     * 5. Other order as decided by internal business rules.
     */
    name?: fhir.IHumanName[] | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.IAttachment[] | undefined;
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: fhir.IPractitionerQualification[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export declare class PractitionerQualification extends fhir.BackboneElement implements fhir.IPractitionerQualification {
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConcept | null;
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.Reference | undefined;
    /**
     * Period during which the qualification is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for PractitionerQualification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPractitionerQualification>);
    /**
     * Check if the current PractitionerQualification contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a PractitionerQualification from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPractitionerQualification): PractitionerQualification;
}
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export declare class Practitioner extends fhir.DomainResource implements fhir.IPractitioner {
    /**
     * Resource Type Name
     */
    resourceType: "Practitioner";
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: fhir.Address[] | undefined;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: string | undefined;
    _birthDate?: fhir.FhirElement | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication?: fhir.CodeableConcept[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: PractitionerGenderEnum | undefined;
    _gender?: fhir.FhirElement | undefined;
    /**
     * An identifier that applies to this person in this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname (alias), old, or other values as appropriate.
     * In general, select the value to be used in the ResourceReference.display based on this:
     * 1. There is more than 1 name
     * 2. Use = usual
     * 3. Period is current to the date of the usage
     * 4. Use = official
     * 5. Other order as decided by internal business rules.
     */
    name?: fhir.HumanName[] | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.Attachment[] | undefined;
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: fhir.PractitionerQualification[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPractitioner>);
    /**
     * Check if the current Practitioner contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Practitioner from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPractitioner): Practitioner;
}
/**
 * Code Values for the Practitioner.gender field
 */
export declare enum PractitionerGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Practitioner.d.ts.map
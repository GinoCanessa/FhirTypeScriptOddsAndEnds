import * as fhir from '../fhir.js';
import { V2270360ValueSetType } from '../fhirValueSets/V2270360ValueSet.js';
import { AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export declare type IPractitionerQualification = fhir.IBackboneElement & {
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Coded representation of the qualification.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Period during which the qualification is valid.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.IReference | undefined;
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
     * An identifier that applies to this person in this role.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Practitioner.active
     */
    _active?: fhir.IFhirElement | undefined;
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
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: fhir.IAddress[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Practitioner.gender
     */
    _gender?: fhir.IFhirElement | undefined;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Practitioner.birthDate
     */
    _birthDate?: fhir.IFhirElement | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.IAttachment[] | undefined;
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: fhir.IPractitionerQualification[] | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication?: fhir.ICodeableConcept[] | undefined;
};
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export declare class PractitionerQualification extends fhir.BackboneElement implements IPractitionerQualification {
    /**
     * An identifier that applies to this person's qualification in this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Coded representation of the qualification.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Period during which the qualification is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization that regulates and issues the qualification.
     */
    issuer?: fhir.Reference | undefined;
    /**
     * Default constructor for PractitionerQualification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPractitionerQualification>);
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): V2270360ValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
export declare class Practitioner extends fhir.DomainResource implements IPractitioner {
    /**
     * Resource Type Name
     */
    resourceType: "Practitioner";
    /**
     * An identifier that applies to this person in this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end date (even if they are active) as they may be active in another role.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Practitioner.active
     */
    _active?: fhir.FhirElement | undefined;
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
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and to help with identification.  These typically will have home numbers, or mobile numbers that are not role specific.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this purpose (which has an address).
     */
    address?: fhir.Address[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Practitioner.gender
     */
    _gender?: fhir.FhirElement | undefined;
    /**
     * The date of birth for the practitioner.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Practitioner.birthDate
     */
    _birthDate?: fhir.FhirElement | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.Attachment[] | undefined;
    /**
     * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
     */
    qualification?: fhir.PractitionerQualification[] | undefined;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    communication?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for Practitioner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPractitioner>);
    /**
     * Required-bound Value Set for gender
     */
    genderRequiredValueSet(): AdministrativeGenderValueSetType;
    /**
     * Preferred-bound Value Set for communication
     */
    communicationPreferredValueSet(): LanguagesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Practitioner.d.ts.map
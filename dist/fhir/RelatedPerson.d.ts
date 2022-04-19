import * as fhir from '../fhir';
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export declare type IRelatedPersonCommunication = fhir.IBackboneElement & {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.ICodeableConcept | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    _preferred?: fhir.IFhirElement | undefined;
};
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export declare type IRelatedPerson = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.IAddress[] | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    _birthDate?: fhir.IFhirElement | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhir.IRelatedPersonCommunication[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: RelatedPersonGenderEnum | undefined;
    _gender?: fhir.IFhirElement | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhir.IHumanName[] | undefined;
    /**
     * The patient this person is related to.
     */
    patient: fhir.IReference | null;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.IAttachment[] | undefined;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.ICodeableConcept[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export declare class RelatedPersonCommunication extends fhir.BackboneElement implements fhir.IRelatedPersonCommunication {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.CodeableConcept | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    _preferred?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRelatedPersonCommunication>);
    /**
     * Check if the current RelatedPersonCommunication contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RelatedPersonCommunication from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRelatedPersonCommunication): RelatedPersonCommunication;
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export declare class RelatedPerson extends fhir.DomainResource implements fhir.IRelatedPerson {
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.Address[] | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    _birthDate?: fhir.FhirElement | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhir.RelatedPersonCommunication[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: RelatedPersonGenderEnum | undefined;
    _gender?: fhir.FhirElement | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhir.HumanName[] | undefined;
    /**
     * The patient this person is related to.
     */
    patient: fhir.Reference | null;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.Period | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.Attachment[] | undefined;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConcept[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRelatedPerson>);
    /**
     * Check if the current RelatedPerson contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RelatedPerson from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRelatedPerson): RelatedPerson;
}
/**
 * Code Values for the RelatedPerson.gender field
 */
export declare enum RelatedPersonGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=RelatedPerson.d.ts.map
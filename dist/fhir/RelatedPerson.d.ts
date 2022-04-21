import * as fhir from '../fhir.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
import { RelatedpersonRelationshiptypeValueSetType } from '../fhirValueSets/RelatedpersonRelationshiptypeValueSet.js';
import { AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js';
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
    /**
     * Extended properties for primitive element: RelatedPerson.communication.preferred
     */
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
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * The patient this person is related to.
     */
    patient: fhir.IReference | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.ICodeableConcept[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhir.IHumanName[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.gender
     */
    _gender?: fhir.IFhirElement | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.birthDate
     */
    _birthDate?: fhir.IFhirElement | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.IAddress[] | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.IAttachment[] | undefined;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhir.IRelatedPersonCommunication[] | undefined;
};
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export declare class RelatedPersonCommunication extends fhir.BackboneElement implements IRelatedPersonCommunication {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.CodeableConcept | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.communication.preferred
     */
    _preferred?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRelatedPersonCommunication>);
    /**
     * Preferred-bound Value Set for language
     */
    languagePreferredValueSet(): LanguagesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export declare class RelatedPerson extends fhir.DomainResource implements IRelatedPerson {
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson";
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * The patient this person is related to.
     */
    patient: fhir.Reference | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConcept[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhir.HumanName[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.gender
     */
    _gender?: fhir.FhirElement | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedPerson.birthDate
     */
    _birthDate?: fhir.FhirElement | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.Address[] | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.Attachment[] | undefined;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.Period | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhir.RelatedPersonCommunication[] | undefined;
    /**
     * Default constructor for RelatedPerson - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRelatedPerson>);
    /**
     * Preferred-bound Value Set for relationship
     */
    relationshipPreferredValueSet(): RelatedpersonRelationshiptypeValueSetType;
    /**
     * Required-bound Value Set for gender
     */
    genderRequiredValueSet(): AdministrativeGenderValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=RelatedPerson.d.ts.map
import * as fhir from '../fhir.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
import { RelatedpersonRelationshiptypeValueSetType } from '../fhirValueSets/RelatedpersonRelationshiptypeValueSet.js';
import { AdministrativeGenderValueSetType } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { AdministrativeGenderValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the RelatedPersonCommunication type.
 */
export interface RelatedPersonCommunicationArgs extends fhir.BackboneElementArgs {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.CodeableConceptArgs | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export declare class RelatedPersonCommunication extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language: fhir.CodeableConcept | null;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for RelatedPersonCommunication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RelatedPersonCommunicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for language
     */
    static languagePreferredValueSet(): LanguagesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the RelatedPerson type.
 */
export interface RelatedPersonArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RelatedPerson" | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The patient this person is related to.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Image of the person.
     */
    photo?: fhir.AttachmentArgs[] | undefined;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhir.RelatedPersonCommunicationArgs[] | undefined;
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export declare class RelatedPerson extends fhir.DomainResource {
    readonly __dataType: string;
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
    active?: fhir.FhirBoolean | undefined;
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
     * The date on which the related person was born.
     */
    birthDate?: fhir.FhirDate | undefined;
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
    constructor(source?: Partial<RelatedPersonArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for relationship
     */
    static relationshipPreferredValueSet(): RelatedpersonRelationshiptypeValueSetType;
    /**
     * Required-bound Value Set for gender
     */
    static genderRequiredValueSet(): AdministrativeGenderValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=RelatedPerson.d.ts.map
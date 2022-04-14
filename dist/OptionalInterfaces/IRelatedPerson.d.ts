import * as fhirInterfaces from '../optionalinterfaces';
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export interface IRelatedPersonCommunication extends fhirInterfaces.IBackboneElement {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirInterfaces.IElement | undefined;
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export interface IRelatedPerson extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "RelatedPerson";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhirInterfaces.IAddress[] | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    _birthDate?: fhirInterfaces.IElement | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhirInterfaces.IRelatedPersonCommunication[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: RelatedPersonGenderEnum | undefined;
    _gender?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhirInterfaces.IHumanName[] | undefined;
    /**
     * The patient this person is related to.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Image of the person.
     */
    photo?: fhirInterfaces.IAttachment[] | undefined;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
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
//# sourceMappingURL=IRelatedPerson.d.ts.map